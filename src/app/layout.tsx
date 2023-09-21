import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./ui/organisms/Navigation";
import Footer from "./ui/organisms/Footer";
import ActiveLink from "@/ui/atoms/ActiveLink";
import Header from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header>
					<Navigation />
				</Header>
				<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
					{children}
				</section>
				<Footer />
			</body>
		</html>
	);
}
