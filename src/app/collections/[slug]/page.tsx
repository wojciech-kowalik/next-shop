import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCollectionSlug } from "@api/products";

export default async function CollectionPage({
	params,
}: {
	params: { slug: string; page: number };
}) {
	const data = await getProductsByCollectionSlug({ slug: params.slug });

	return (
		<>
			<div className="bg-slate-50">
				<div className="mx-auto max-w-7xl px-8 py-12">
					<h1 className="text-3xl font-bold tracking-tight text-slate-900">
						{data.collection.name}
					</h1>
					<p className="mt-4 max-w-2xl text-base text-slate-700">
						{data.collection.description}
					</p>
				</div>
			</div>
			<ProductList products={data.products} />
		</>
	);
}
