import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ShipBuildSystemRoutes } from 'routes/shipBuilds.routes';
import * as hooks from 'hooks/shipBuilds/useShipBuilds';

describe('ShipBuildSystem Routes', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders when not loading', (cb) => {
    const spy = jest.spyOn(hooks, 'useShipBuilds');
    spy.mockReturnValue({
      loading: false,
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

  it('renders when loading', (cb) => {
    const spy = jest.spyOn(hooks, 'useShipBuilds');
    spy.mockReturnValue({
      loading: true,
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
