import { getProductById } from "@api/products";

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold">Strona produktu</h1>
			<p className="text-2xl">{product.name}</p>
		</div>
	);
}
