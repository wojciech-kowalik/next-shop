import { getProducts } from "@api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProducts();
	return <ProductList products={products} />;
}
