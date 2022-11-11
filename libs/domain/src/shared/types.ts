import { z } from 'zod';

export type CommandResult<Response> = {
  success: boolean;
  data?: Response;
  errors?: string[];
};

export type Handle<Schema extends z.ZodTypeAny, Result> = (
  input: z.infer<Schema>
) => Result;
