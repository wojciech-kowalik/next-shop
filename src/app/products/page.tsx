import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCountProducts, getProducts } from "@api/products";

export default async function ProductsPage({
	searchParams,
}: {
	params: { page: number };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const currentPage = searchParams?.page || 1;
	const products = await getProducts({ offset: +currentPage });
	const count = await getCountProducts();

	return (
		<>
			<ProductList products={products} />
			<Pagination numberOfItems={count} currentPage={+currentPage} />
		</>
	);
}
