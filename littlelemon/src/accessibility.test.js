import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Main from './Main';

expect.extend(toHaveNoViolations);

test('Main component has no detectable accessibility violations', async () => {
  const { container } = render(<Main />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
