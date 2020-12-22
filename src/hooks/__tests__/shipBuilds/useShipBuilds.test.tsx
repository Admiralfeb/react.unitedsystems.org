import { useAllShipBuilds } from 'hooks/shipBuilds/useShipBuilds';

import { loader } from 'graphql.macro';
import { MockedProvider } from '@apollo/client/testing';
import { cleanup, renderHook } from '@testing-library/react-hooks';
import shipBuilds from 'data/shipBuilds/builds.json';

const shipBuildsQuery = loader('../../../graphql/allShipBuildsv2s.gql');

describe('useShipBuilds', () => {
  afterEach(cleanup);

  it('should throw error if it fails the query in useAllShipBuilds', async () => {
    const errorMock = {
      request: {
        query: shipBuildsQuery,
      },
      error: new Error('an error occurred'),
    };

    const wrapper = (props: { children: JSX.Element }) => (
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        {props.children}
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useAllShipBuilds(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.error).toBeDefined();
  });

  it('should return data in useAllShipBuilds', async () => {
    const dataMock = {
      request: {
        query: shipBuildsQuery,
      },
      result: { data: { shipBuildsv2s: shipBuilds } },
    };

    const wrapper = (props: { children: JSX.Element }) => (
      <MockedProvider mocks={[dataMock]} addTypename={false}>
        {props.children}
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useAllShipBuilds(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.shipBuilds.length).toBeGreaterThan(5);
  });
});
