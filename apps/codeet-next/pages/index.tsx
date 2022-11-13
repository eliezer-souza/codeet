import {
  button,
  icon,
  input,
} from '@codeet/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */

  return (
    <div>
      <button disabled className={button({ full: true, type: 'solid' })}>
        <i className={icon('ri-admin-line')} />
        Sign in
      </button>
      <label className={input.label({ error: true })}>Password</label>
      <div className={input.wrapper()}>
        <input className={input.style} placeholder="Password" />
      </div>
    </div>
  );
}

export default Index;
