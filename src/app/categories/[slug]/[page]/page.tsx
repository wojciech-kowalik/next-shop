import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@api/products";

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
			<div className="bg-gray-100">
				<div className="mx-auto max-w-7xl px-8">
					<div className="mx-auto py-8">
						<h2 className="text-bold">{products.categoryName}</h2>
					</div>
				</div>
			</div>
			<ProductList products={products.products} />
			<Pagination
				numberOfItems={count}
				currentPage={+currentPage}
				pageSize={pageSize}
			/>
		</>
	);
}
