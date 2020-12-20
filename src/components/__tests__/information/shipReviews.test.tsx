import { render } from '@testing-library/react';
import { ShipReviews } from 'components/information';

describe('Ship Reviews', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(<ShipReviews />);
    expect(baseElement).toMatchSnapshot();
  });
});
