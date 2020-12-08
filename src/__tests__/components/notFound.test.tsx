import { cleanup, render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from '../../app/components';

let componentBody: RenderResult;

describe('Join', () => {
  beforeEach(() => {
    componentBody = render(
      <MemoryRouter>
        <NotFound />
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
