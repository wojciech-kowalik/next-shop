import { notFound } from "next/navigation";
import { type ComponentType } from "react";
import SectionHeader from "@/ui/molecules/SectionHeader";

export default async function StaticPage({
	params,
}: {
	params: { filename: string };
}) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	const name =
		params.filename.charAt(0).toUpperCase() + params.filename.slice(1);

	return (
		<>
			<SectionHeader name={name} />

			<article className="prose prose-sm mt-4 w-full max-w-none">
				<Content />
			</article>
		</>
	);
}
