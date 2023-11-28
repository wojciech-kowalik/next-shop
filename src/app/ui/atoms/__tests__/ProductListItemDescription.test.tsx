import { render, screen } from "@testing-library/react";
import { type ProductItemType } from "@types";
import ProductListItemDescription from "@/ui/atoms/ProductListItemDescription";

jest.mock("@smastrom/react-rating", () => ({
	Rating: jest
		.fn()
		.mockReturnValue(<input data-testid="product-rating" defaultValue={4.5} />),
}));

const product = {
	name: "Test Product",
	price: 10000,
	category: "Test Category",
	avgRating: 4.5,
} as ProductItemType;

describe("ProductListItemDescription", () => {
	it("renders the product name, price, and category correctly", () => {
		render(<ProductListItemDescription product={product} />);

		expect(screen.getByText("Test Product")).toBeInTheDocument();
		expect(screen.getByTestId("product-price")).toHaveTextContent("$100.00");
		expect(screen.getByText("Test Category")).toBeInTheDocument();
	});

	it("renders the average rating correctly", () => {
		render(<ProductListItemDescription product={product} />);

		expect(screen.getByTestId("product-rating")).toHaveValue("4.5");
		expect(screen.getByText("4.5 / 5")).toBeInTheDocument();
	});
});
