import { ProductList } from "@/ui/organisms/ProductList";
import { searchProducts } from "@api/products";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const products = await searchProducts({ query: searchParams.query });

	return (
		<>
			<div className="bg-gray-100">
				<div className="mx-auto max-w-7xl px-8">
					<div className="mx-auto py-8">
						Found <b>{products.length}</b> items for phrase {'"'}
						<i>{searchParams.query}</i>
						{'"'}
						{products.length > 0 ? (
							<ProductList products={products} />
						) : (
							<p className="text-center">No products found</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
