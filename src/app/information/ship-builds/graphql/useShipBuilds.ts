import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { getShipInfo } from '../functions/getShipInfo';
import { sortItems } from '../functions/sort';
import { IBuildInfo } from '../models';

export const useShipBuilds = () => {
    const { shipBuilds, loading } = useAllShipBuilds();
    return {
        loading, shipBuilds
    }
}

const useAllShipBuilds = () => {
    const { data, loading, error } = useQuery<{ shipbuilds: IBuildInfo[] }>(gql`
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

    let shipBuilds = data?.shipbuilds ?? [];
    if (!loading) {
        console.log(data);
        shipBuilds = shipBuilds.map((v) => {
            const shipInfo = getShipInfo(v.ship)!;
            const size = shipInfo?.size;
            const newBuild: IBuildInfo = { ...v, size };
            return newBuild;
        });
        shipBuilds = sortItems(shipBuilds, 'ship');
    }
    return { shipBuilds, loading };
}
