import { button, icon,  } from '@codeet/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */

  return (
    <button disabled className={button({ full: true, type: 'solid' })}>
      <i className={icon('ri-admin-line')} />
      Sign in
    </button>
  );
}

export default Index;
