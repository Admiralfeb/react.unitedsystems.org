import { cleanup, render, RenderResult } from '@testing-library/react';
import { Loading } from '../../app/components';

let componentBody: RenderResult;

describe('Join', () => {
  beforeEach(() => {
    componentBody = render(<Loading />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`should match the snapshot`, () => {
    const { baseElement } = componentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
