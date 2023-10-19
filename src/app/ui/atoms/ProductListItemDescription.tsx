import { Rating } from "@smastrom/react-rating";
import { type ProductItemType } from "@types";
import { formatMoney } from "@/utils";

type Props = {
	product: ProductItemType;
};

export default function ProductListItemDescription({
	product: { name, category, price, avgRating },
}: Props) {
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				</div>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Price: </span> {formatMoney(price / 100)}
				</p>
			</div>
			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-gray-500">{category}</p>
				{avgRating && (
					<div className="flex flex-row items-center gap-2 text-sm">
						<div>{avgRating} / 5</div>
						<div>
							<Rating style={{ maxWidth: 100 }} value={avgRating} readOnly />
						</div>
					</div>
				)}
			</div>
		</>
	);
}
