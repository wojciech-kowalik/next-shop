import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@api/products";

export default async function ProductsPage({
	params,
}: {
	params: { page?: number };
}) {
	const pageSize = 8;
	const currentPage = params.page || 1;
	const products = await getProducts({ take: pageSize, offset: +currentPage });
	const count = 20;

	return (
		<>
			<ProductList products={products} />
			<Pagination
				numberOfItems={count}
				currentPage={+currentPage}
				pageSize={pageSize}
			/>
		</>
	);
}
