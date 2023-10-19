import { Rating } from "@smastrom/react-rating";
import { getReviewByProductId } from "@api/review";

export default async function ReviewList({ productId }: { productId: string }) {
	const reviews = await getReviewByProductId(productId);

	return (
		<div className="flow-root">
			<div className="-my-12">
				{reviews.map((review, key) => (
					<div key={`${review.name}${key}`}>
						<div className="divide-y divide-gray-300 py-6">
							<div className="flex items-center">
								<div>
									<h4 className="text-sm font-bold text-gray-900">
										{review.name} / {review.email}
									</h4>
									<div className="mt-1 flex flex-row items-center gap-2">
										<Rating
											style={{ maxWidth: 100 }}
											value={review.rating}
											readOnly
										/>
									</div>
									<p className="small-caps text-sm">
										{review.rating} out of 5 stars
									</p>
								</div>
							</div>
							<div>
								<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">
									{review.headline}
								</p>
								<p className="mt-2 text-sm italic text-gray-600">
									{review.content}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
