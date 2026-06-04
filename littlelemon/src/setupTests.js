import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
	Link: ({ children }) => children,
	Routes: ({ children }) => children,
	Route: ({ children }) => children,
	useNavigate: () => jest.fn(),
	useLocation: () => ({ pathname: '/' }),
}));

global.fetchAPI = jest.fn(() => ['17:00']);
