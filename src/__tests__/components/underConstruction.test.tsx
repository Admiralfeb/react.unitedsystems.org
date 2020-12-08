import { cleanup, render, RenderResult } from '@testing-library/react';
import { UnderConstruction } from '../../app/components';

let componentBody: RenderResult;

describe('Join', () => {
  beforeEach(() => {
    componentBody = render(<UnderConstruction />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`should match the snapshot`, () => {
    const { baseElement } = componentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
