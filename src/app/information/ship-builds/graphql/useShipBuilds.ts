import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const useShipBuilds = () => {
    const { shipBuilds, loading } = useAllShipBuilds();
    return {
        loading, shipBuilds
    }
}

const useAllShipBuilds = () => {
    const { data, loading, error } = useQuery(gql`
        query AllShipbuilds {
            shipbuilds {
                author
                beginner
                buildLink
                description
                engLevel
                guardian
                moreInfo
                powerplay
                ship
                specializations
            }
        }`
    );
    if (error) {
        throw new Error(`Failed to fetch ship builds: ${error.message}`);
    }

    const shipBuilds = data?.shipbuilds ?? [];
    return { shipBuilds, loading };
}
