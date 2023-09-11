export default function StaticLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen flex-col">
			<main className="flex-grow">{children}</main>
		</div>
	);
}
