import { render, screen } from "@testing-library/react";
import ProductCoverImage from "@/ui/atoms/ProductCoverImage";

describe("ProductCoverImage", () => {
	it("renders the image correctly", () => {
		render(<ProductCoverImage alt="Test Alt" src="/test.jpg" />);

		const image = screen.getByAltText("Test Alt");
		expect(image).toBeInTheDocument();
	});
});
