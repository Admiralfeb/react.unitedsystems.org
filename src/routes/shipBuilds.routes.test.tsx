import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ShipBuildSystemRoutes } from 'routes/shipBuilds.routes';
import * as hooks from 'hooks/shipBuilds/useShipBuilds';
import { SnackbarProvider } from 'notistack';

describe('ShipBuildSystem Routes', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders when not loading', (cb) => {
    const spy = jest.spyOn(hooks, 'useShipBuilds');
    spy.mockReturnValue({
      loading: false,
      error: undefined,
      shipBuilds: [],
      addBuild: jest.fn(),
      addRelated: jest.fn(),
      addVariant: jest.fn(),
      replaceBuild: jest.fn(),
    });
    render(
      <SnackbarProvider>
        <MemoryRouter>
          <ShipBuildSystemRoutes />
        </MemoryRouter>
      </SnackbarProvider>
    );
    cb();
  });

  it('renders when loading', (cb) => {
    const spy = jest.spyOn(hooks, 'useShipBuilds');
    spy.mockReturnValue({
      loading: true,
      error: undefined,
      shipBuilds: [],
      addBuild: jest.fn(),
      addRelated: jest.fn(),
      addVariant: jest.fn(),
      replaceBuild: jest.fn(),
    });
    render(
      <MemoryRouter>
        <ShipBuildSystemRoutes />
      </MemoryRouter>
    );
    cb();
  });
});
