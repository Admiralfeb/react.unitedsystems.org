import { renderHook } from '@testing-library/react-hooks';
import { useShipReviews } from 'hooks/information/useShipReviews';

describe('useShipReviews', () => {
  it('should return a value', () => {
    const { result } = renderHook(() => useShipReviews());

    expect(result.current).toBeDefined();
    expect(result.current.length).toBeGreaterThan(1);
  });
});
