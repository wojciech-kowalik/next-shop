import { CollectionList } from "@/ui/organisms/CollectionList";
import { getCollections } from "@api/collections";

export default async function HomePage() {
	const collections = await getCollections();

	return (
		<div className="text-center">
			<CollectionList collections={collections} />
		</div>
	);
}
