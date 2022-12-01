import userEvent from '@testing-library/user-event';

import AttendEvent from '../attend-event';
import { axe, render, screen } from '../../../lib/test/rtl';
import { EVENT_ID } from '../../../__mocks__/fixtures/event';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Attend Event', () => {
  it('should render', async () => {
    const { container } = render(<AttendEvent eventId={EVENT_ID} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();

    await userEvent.click(
      screen.getByRole('button', {
        name: /attend the event/i,
      })
    );

    expect(
      await screen.findByRole('button', {
        name: /attend the event/i,
      })
    ).toBeDisabled();
  });
});
