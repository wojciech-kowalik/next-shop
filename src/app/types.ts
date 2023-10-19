import type { Path, UseFormRegister, FieldErrors } from "react-hook-form";

type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	coverImage: { alt: string; src: string };
	description: string;
	avgRating?: number;
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

type FormValues = {
	headline: string;
	content: string;
	name: string;
	email: string;
	rating: number;
};

type InputType = {
	name: Path<FormValues>;
	label: string;
	register: UseFormRegister<FormValues>;
	required: boolean;
	errors: FieldErrors<FormValues>;
	isEmail?: boolean;
};

export type {
	ProductItemType,
	ProductResponseType,
	CollectionItemType,
	InputType,
	FormValues,
};
