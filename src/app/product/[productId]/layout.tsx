export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-grow flex-col">
			<section className="mx-auto grid max-w-7xl p-4">
				<article>{children}</article>
			</section>
		</div>
	);
}
