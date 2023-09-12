import Link from "next/link";
import { type ProductItemType } from "@types";
import ProductCoverImage from "@/ui/atoms/ProductCoverImage";
import ProductListItemDescription from "@/ui/atoms/ProductListItemDescription";

type Props = {
	product: ProductItemType;
};

export default function ProductListItem({ product }: Props) {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage
						src={product.coverImage.src}
						alt={product.coverImage.alt}
					/>
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
}
