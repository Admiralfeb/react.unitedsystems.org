import { App } from 'app';
import { cleanup, render } from '@testing-library/react';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    render(<App />);
  });
});
