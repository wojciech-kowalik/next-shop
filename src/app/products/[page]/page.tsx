import { type ProductOrderByInput } from "@gql/graphql";
import SortFilter from "@/ui/atoms/SortFilter";
import Pagination from "@/ui/molecules/Pagination";
import SectionHeader from "@/ui/molecules/SectionHeader";
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
			<SectionHeader name="All products" isFlexLayout>
				<SortFilter page={currentPage} />
			</SectionHeader>

			<ProductList products={products} />
			<Pagination
				numberOfItems={totalCount}
				currentPage={+currentPage}
				pageSize={pageSize}
			/>
		</>
	);
}
