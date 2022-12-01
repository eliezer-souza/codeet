import EventCard from '../event-card';
import { render, screen } from '../../../lib/test/rtl';
import { EVENT } from '../../../__mocks__/fixtures/event';

describe('Event Card', () => {
  it('should render', async () => {
    render(<EventCard {...EVENT} />);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(EVENT.date);

    expect(screen.getByText(EVENT.name)).toBeInTheDocument();
    expect(
      screen.getByText(EVENT.name.charAt(0).toUpperCase())
    ).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
    expect(screen.getByText(EVENT.venue.street)).toBeInTheDocument();
    expect(screen.getByText(/more details/i).closest('a')).toHaveAttribute(
      'href',
      `events/${EVENT.id}`
    );
  });
});
