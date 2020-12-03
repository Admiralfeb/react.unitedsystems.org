import { gql, useMutation } from "@apollo/client"
import { IBuildInfoInsert } from "../models/buildInfoInsert";

const AddBuildMutation = gql`
    mutation AddBuild($build: ShipBuildInsertInput!) {
        addedBuild: insertOneShipBuild(data: $build) {
            _id
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
            id
        }
}`;

const ShipBuildFieldsFragment = gql`
    fragment ShipBuildFields on shipBuilds {
        _id
    }`;

export const useAddBuild = () => {
    const [addBuildMutation, { data }] = useMutation<IBuildInfoInsert>(AddBuildMutation, {
        update: (cache, { data }) => {
            cache.modify({
                fields: {
                    shipBuilds: (existingShipBuilds = []) => [
                        ...existingShipBuilds,
                        cache.writeFragment({
                            data,
                            fragment: ShipBuildFieldsFragment,
                        })
                    ]
                }
            })
        }
    });

    const addShipBuild = async (build: IBuildInfoInsert) => {
        const addedBuild = await addBuildMutation({
            variables: {
                build: {
                    ...build
                }
            }
        });
        return addedBuild;
    }

    return addShipBuild;
}
