# Little Lemon — Reservation App

This is a small React app for Little Lemon restaurant that demonstrates a booking flow, basic navigation, and accessibility-friendly form validation.

## Quick start

1. Install dependencies:

```bash
cd littlelemon
npm install
```

2. Run the app in development:

```bash
npm start
```

Open http://localhost:3000 in your browser.

3. Run tests:

```bash
npm test -- --watchAll=false
```

## Project details

- Routes implemented: `/`, `/booking`, `/confirmed`, `/about`, `/menu`, `/reservations`, `/login` (placeholder pages)
- Booking form validation: date (not past), time selected from available slots, guests 1–10, occasion required
- Accessibility: `aria-live` notifications, `role="alert"` for field errors, `skip-link`, focus move on confirmation

## Notes for reviewers

- The app uses a small public `api.js` in `public/` to mock available times and submission. In a production app this would be replaced by real API calls.
- The `build/` folder is generated and should not be included when submitting source. If present, remove it before final packaging.

## License

This repository is provided as-is for demonstration and learning purposes.
