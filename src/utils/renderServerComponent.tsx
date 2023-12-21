import { act, render } from "@testing-library/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsyncFunction(value: any): boolean {
	return Object.prototype.toString.call(value) === "[object AsyncFunction]";
}

async function getNearestClientComponent(node: JSX.Element) {
	if (!isAsyncFunction(node.type)) {
		return node;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const nodeReturnValue = await node.type({ ...node.props });
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	return getNearestClientComponent(nodeReturnValue);
}

// Follow <https://github.com/testing-library/react-testing-library/issues/1209>
// for the latest updates on React Testing Library support for React Server
// Components (RSC)
export async function renderServerComponent(node: JSX.Element) {
	await act(async () => {
		render(await getNearestClientComponent(node));
	});
}
