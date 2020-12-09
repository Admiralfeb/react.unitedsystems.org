import { cleanup, render, RenderResult } from '@testing-library/react';
import { AboutAllies } from '../../../app/information/components/about/about-allies';

let componentBody: RenderResult;

describe('About Allies', () => {
  beforeEach(() => {
    componentBody = render(<AboutAllies />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`should match the snapshot`, () => {
    const { baseElement } = componentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
