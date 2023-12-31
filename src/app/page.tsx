import Image from "next/image";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { getCollections } from "@api/collections";
import { getProducts } from "@api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const collections = await getCollections();
	const { products } = await getProducts({
		take: 4,
		page: 1,
		sort: "price_DESC",
	});

	return (
		<>
			<div className="mt-2 flex justify-center">
				<Image
					priority
					src="/images/logo.svg"
					height={220}
					width={220}
					alt=""
				/>
			</div>
			<div className="text-center">
				<CollectionList collections={collections} />
			</div>
			<div className="mt-8">
				<ProductList products={products} />
			</div>
		</>
	);
}
