import { type ProductItemType } from "./types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductItemType[] = [
	{
		id: "681b122b-e69e-4408-8b70-f4452a8a72b3",
		name: "Torba",
		category: "Akcesoria",
		price: 15000,
		coverImage: { src: "/bag.jpeg", alt: "Torba" },
	},
	{
		id: "b24196ff-1190-4377-99ff-3a99da839a5c",
		name: "Perfumy",
		category: "Akcesoria",
		price: 35050,
		coverImage: { src: "/perfume.jpeg", alt: "Perfumy" },
	},
	{
		id: "4ab1b6bb-4d23-4a2b-88f4-55ef027b6c52",
		name: "Buty",
		category: "Ubranie",
		price: 21370,
		coverImage: { src: "/boots.jpeg", alt: "Buty" },
	},
	{
		id: "f25fd537-6f1e-45ef-8ee1-91ba0e96e0c8",
		name: "Kurtka",
		category: "Ubranie",
		price: 10000,
		coverImage: { src: "/jacket.jpeg", alt: "Kurtka" },
	},
];

export default function Home() {
	return <ProductList products={products} />;
}
