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
			<div className="bg-gray-100">
				<div className="mx-auto max-w-7xl px-8">
					<div className="mx-auto py-8">
						<div className="flex flex-row items-center justify-between">
							<h2>All products</h2>

							<select className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
								<option selected>Choose a country</option>
								<option value="US">United States</option>
								<option value="CA">Canada</option>
								<option value="FR">France</option>
								<option value="DE">Germany</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<ProductList products={products} />
			<Pagination
				numberOfItems={count}
				currentPage={+currentPage}
				pageSize={pageSize}
			/>
		</>
	);
}
