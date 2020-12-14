import { cleanup, render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavbarComponent } from 'components/navbar';

jest.mock('hooks/useLoginAnon', () => ({
  useLoginAnon: jest.fn(),
}));

let componentBody: RenderResult;

describe('Join', () => {
  beforeEach(() => {
    componentBody = render(
      <MemoryRouter>
        <NavbarComponent />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it(`should match the snapshot`, () => {
    const { baseElement } = componentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
