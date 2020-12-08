import { NavbarComponent } from '../app/navbar';
import { cleanup, render, RenderResult } from '@testing-library/react';

let componentBody: RenderResult;

xdescribe('Navbar', () => {
  beforeEach(() => {
    componentBody = render(<NavbarComponent />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot', () => {
    expect(componentBody).toThrowError(
      'You must call useRealmApp() inside of a <RealmAppProvider />'
    );
  });
});
