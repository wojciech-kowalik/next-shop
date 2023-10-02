import { graphqlFetch } from "@api/fetch";
import { CollectionsGetListDocument } from "@gql/graphql";

export const getCollections = async () => {
	const response = await graphqlFetch({ query: CollectionsGetListDocument });
	return response.collections;
};
