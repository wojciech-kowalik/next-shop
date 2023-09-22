type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	coverImage: { alt: string; src: string };
	description: string;
};

type CollectionItemType = {
	name: string;
	slug: string;
	image: { url: string };
};

type ProductResponseType = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export type { ProductItemType, ProductResponseType, CollectionItemType };
