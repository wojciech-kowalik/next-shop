import ProductListItem from "@/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/types";

type ProductListProps = {
	products: ProductItemType[];
};

const ProductList = async ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

export { ProductList };
