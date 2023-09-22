import { type CollectionItemType } from "@/types";
import CollectionListItem from "@/ui/molecules/CollectionListItem";

type CollectionListProps = {
	collections: (CollectionItemType | null)[];
};

const CollectionList = async ({ collections }: CollectionListProps) => {
	if (!collections) return null;
	return (
		<div
			data-testid="collections-list"
			className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
		>
			{collections.map(
				(collection) =>
					collection && (
						<CollectionListItem key={collection.name} collection={collection} />
					),
			)}
		</div>
	);
};

export { CollectionList };
