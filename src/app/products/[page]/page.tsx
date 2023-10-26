import { type ProductOrderByInput } from "@gql/graphql";
import SortFilter from "@/ui/atoms/SortFilter";
import Pagination from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@api/products";

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { page?: number };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const pageSize = 4;
	const currentPage = params.page || 1;
	const { products, totalCount } = await getProducts({
		take: pageSize,
		page: currentPage,
		sort: searchParams?.sort as ProductOrderByInput,
	});

	return (
		<>
			<div className="bg-slate-50">
				<div className="mx-auto max-w-7xl px-8">
					<div className="mx-auto py-8">
						<div className="flex flex-row items-center justify-between">
							<h1 className="text-gray-70 text-2xl font-semibold tracking-tight">
								All products
							</h1>

							<SortFilter page={currentPage} />
						</div>
					</div>
				</div>
			</div>

			<ProductList products={products} />
			<Pagination
				numberOfItems={totalCount}
				currentPage={+currentPage}
				pageSize={pageSize}
			/>
		</>
	);
}
