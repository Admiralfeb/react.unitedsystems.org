import { cleanup, render, RenderResult } from '@testing-library/react';
import { AboutRules } from '../../../app/information/components/about/about-rules';

let componentBody: RenderResult;

describe('About Rules', () => {
  beforeEach(() => {
    componentBody = render(<AboutRules />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`should match the snapshot`, () => {
    const { baseElement } = componentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
