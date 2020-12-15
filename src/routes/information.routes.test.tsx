import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { InformationRoutes } from 'routes/information.routes';

describe('Information Routes', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders', () => {
    render(
      <MemoryRouter>
        <InformationRoutes />
      </MemoryRouter>
    );
  });
});
