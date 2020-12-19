import { renderHook } from '@testing-library/react-hooks';
import { useMiningMaps } from 'hooks/information/useMiningMaps';

describe('useMiningMap', () => {
  it('should return a value', () => {
    const { result } = renderHook(() => useMiningMaps());

    expect(result.current).toBeDefined();
    expect(result.current.length).toBeGreaterThan(1);
  });
});
