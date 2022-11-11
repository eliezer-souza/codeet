import { TypeOf, z } from 'zod';
import { CommandResult, Handle } from './types';

export function command<Schema extends z.ZodTypeAny>(schema: Schema) {
  const wrap = function <Response>(fn: Handle<Schema, Response>) {
    return async function (
      ...args: TypeOf<Schema>
    ): Promise<CommandResult<Response>> {
      const validationSchema = await schema.safeParseAsync(
        args[0] as TypeOf<Schema>
      );

      if (!validationSchema.success) {
        return {
          success: false,
          errors: validationSchema.error.issues.map(
            ({ code, message }) => `code: ${code} - message: ${message}`
          ),
        };
      }

      try {
        return {
          success: true,
          data: await fn.apply(fn, args),
        };
      } catch (ex) {
        return {
          success: false,
          errors: [String(ex)],
        };
      }
    };
  };

  return {
    handler: <Response>(handle: Handle<Schema, Response>) =>
      wrap<Response>(handle) as unknown as Handle<
        Schema,
        Promise<CommandResult<Awaited<Response>>>
      >,
  };
}
