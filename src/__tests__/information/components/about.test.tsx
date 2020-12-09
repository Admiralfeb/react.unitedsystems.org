import { cleanup, render, RenderResult } from '@testing-library/react';
import { About } from '../../../app/components';

let componentBody: RenderResult;

describe('About', () => {
  beforeEach(() => {
    componentBody = render(<About />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`should match the snapshot`, () => {
    const { baseElement } = componentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
