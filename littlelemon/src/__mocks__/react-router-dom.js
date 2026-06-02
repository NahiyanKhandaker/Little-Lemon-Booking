const React = require('react');

function Link({ children }) {
  return React.createElement('span', null, children);
}

function Routes({ children }) {
  return children || null;
}

function Route({ children }) {
  return children || null;
}

function useNavigate() {
  return () => {};
}

function useLocation() {
  return { pathname: '/' };
}

module.exports = {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
};
