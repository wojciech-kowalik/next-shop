import { getProducts } from "@api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SimilarProduct() {
	const products = await getProducts({
		take: 4,
		offset: 1,
	});

	return (
		<aside className="mt-4 bg-white p-4" data-testid="related-products">
			<h2 className="py-8 text-xl font-semibold leading-7">Similar Products</h2>
			<ProductList products={products} />
		</aside>
	);
}
