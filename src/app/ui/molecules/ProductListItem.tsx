import { type ProductItemType } from "@types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type Props = {
	product: ProductItemType;
};

const ProductListItem = ({ product }: Props) => {
	return (
		<li>
			<article>
				<ProductCoverImage
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};

export { ProductListItem };
