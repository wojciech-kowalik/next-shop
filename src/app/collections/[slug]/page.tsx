import { type Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCollectionSlug } from "@api/products";
import SectionHeader from "@/ui/molecules/SectionHeader";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const data = await getProductsByCollectionSlug({ slug: params.slug });
	if (!data) return {};
	return {
		title: data.collection.name,
		description: data.collection.description,
		openGraph: {
			title: data.collection.name,
			description: data.collection.description || "",
		},
	};
};

export default async function CollectionPage({
	params,
}: {
	params: { slug: string; page: number };
}) {
	const data = await getProductsByCollectionSlug({ slug: params.slug });

	return (
		<>
			<SectionHeader name={data.collection.name}>
				<p className="mt-4 max-w-2xl text-base text-slate-700">
					{data.collection.description}
				</p>
			</SectionHeader>
			<ProductList products={data.products} />
		</>
	);
}
