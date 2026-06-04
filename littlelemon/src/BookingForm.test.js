import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

describe('BookingForm validation', () => {
  const futureDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  };

  test('renders form fields with correct HTML5 validation attributes', () => {
    render(
      <BookingForm
        date=""
        time=""
        guests={0}
        occasion="Birthday"
        availableTimes={['17:00']}
        onDateChange={() => {}}
        onTimeChange={() => {}}
        onGuestsChange={() => {}}
        onOccasionChange={() => {}}
      />
    );

    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');

    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute('required');

    const defaultTimeOption = timeSelect.querySelector('option[value=""]');
    expect(defaultTimeOption).toBeInTheDocument();
    expect(defaultTimeOption).toBeDisabled();

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('shows validation errors and prevents submission when invalid', () => {
    const onSubmit = jest.fn();
    render(
      <BookingForm
        date=""
        time=""
        guests={0}
        occasion="Birthday"
        availableTimes={['17:00']}
        onDateChange={() => {}}
        onTimeChange={() => {}}
        onGuestsChange={() => {}}
        onOccasionChange={() => {}}
        onSubmit={onSubmit}
      />
    );

    const submitButton = screen.getByText(/submit reservation/i);
    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.blur(dateInput);
    fireEvent.blur(timeSelect);
    fireEvent.blur(guestsInput);

    expect(screen.queryByTestId('form-error-summary')).not.toBeInTheDocument();
    expect(screen.getByText(/please choose a reservation date/i)).toBeInTheDocument();
    expect(screen.getByText(/please choose a reservation time/i)).toBeInTheDocument();
    expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('submits form when valid', async () => {
    const onSubmit = jest.fn();
    const validDate = futureDate();

    render(
      <BookingForm
        date={validDate}
        time="17:00"
        guests={4}
        occasion="Birthday"
        availableTimes={['17:00']}
        onDateChange={() => {}}
        onTimeChange={() => {}}
        onGuestsChange={() => {}}
        onOccasionChange={() => {}}
        onSubmit={onSubmit}
      />
    );

    const submitButton = screen.getByText(/submit reservation/i);
    expect(submitButton).toBeEnabled();

    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      date: validDate,
      time: '17:00',
      guests: 4,
      occasion: 'Birthday',
    });
  });
});
