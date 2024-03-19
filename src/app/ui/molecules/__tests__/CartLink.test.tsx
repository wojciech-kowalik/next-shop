import { screen } from "@testing-library/react";
import CartLink from "@/ui/molecules/CartLink";
import { renderServerComponent } from "@utils/renderServerComponent";

jest.mock("../../../../api/cart", () => ({
	getCartByIdFromCookies: () => ({
		orderItems: [{ quantity: 1 }, { quantity: 2 }, { quantity: 3 }],
	}),
}));

describe("CartLink", () => {
	it("renders the cart link with the correct quantity", async () => {
		await renderServerComponent(<CartLink />);

		expect(screen.getByRole("link")).toHaveAttribute("href", "/cart");
		expect(screen.getByText("6")).toBeInTheDocument();
	});
});
