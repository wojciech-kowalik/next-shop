type PaginationProps = {
	numberOfItems: number;
	pageSize?: number;
	currentPage: number;
};

export default function Pagination({
	numberOfItems,
	pageSize = 4,
	currentPage,
}: PaginationProps) {
	const pagesCount = numberOfItems / pageSize;
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	return (
		<nav aria-label="pagination" className="mx-auto">
			<ul className="list-style-none flex items-center">
				{pages.map((page) => (
					<li
						key={page}
						className={
							page === currentPage
								? "page-item bg-black text-white"
								: "page-item"
						}
					>
						<a
							role="link"
							className="relative block bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 hover:bg-neutral-200 hover:text-black dark:text-black"
							href={`/products?page=${page}`}
						>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
