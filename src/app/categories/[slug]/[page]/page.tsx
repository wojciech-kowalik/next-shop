import { type Metadata } from "next";
import Pagination from "@/ui/molecules/Pagination";
import SectionHeader from "@/ui/molecules/SectionHeader";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const data = await getProductsByCategorySlug({
		slug: params.slug,
		offset: 1,
	});
	if (!data) return {};
	return {
		title: data.categoryName,
	};
};

export default async function CategoryPage({
	params,
}: {
	params: { slug: string; page: number };
}) {
	const pageSize = 8;
	const count = 20;
	const currentPage = params.page || 1;
	const products = await getProductsByCategorySlug({
		take: pageSize,
		offset: +currentPage,
		slug: params.slug,
	});

	return (
		<>
			<SectionHeader name={products.categoryName} />
			<ProductList products={products.products} />
			<Pagination
				numberOfItems={count}
				currentPage={+currentPage}
				pageSize={pageSize}
			/>
		</>
	);
}
