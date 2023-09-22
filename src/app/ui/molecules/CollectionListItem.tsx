import { type CollectionItemType } from "@/types";
import CollectionCoverImage from "@/ui/atoms/CollectionCoverImage";

export default function CollectionListItem({
	collection: { image, name, slug },
}: {
	collection: CollectionItemType;
}) {
	return (
		<div className="group relative">
			<CollectionCoverImage src={image.url} alt={name} />
			<h3 className="mt-2 font-bold text-slate-700">
				<a href={`/collections/${slug}`}>
					<span className="absolute inset-0"></span>
					{name}
				</a>
			</h3>
		</div>
	);
}
