export default function Label({ children }: { children: React.ReactNode }) {
	return (
		<label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
			{children}
		</label>
	);
}
