// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock react-router-dom used by components during tests to avoid importing the real package
jest.mock('react-router-dom', () => ({
	Link: ({ children }) => children,
	Routes: ({ children }) => children,
	Route: ({ children }) => children,
	useNavigate: () => jest.fn(),
	useLocation: () => ({ pathname: '/' }),
}));

// Provide a default mock for fetchAPI used by initializeTimes/updateTimes
global.fetchAPI = jest.fn(() => ['17:00']);
