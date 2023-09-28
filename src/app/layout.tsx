import "./globals.css";
import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import Navigation from "@/ui/organisms/Navigation";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";
import Actions from "@/ui/organisms/Actions";

const inter = Merriweather_Sans({ subsets: ["latin"] });

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
					<Actions />
				</Header>
				<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-4 py-12 lg:max-w-7xl">
					{children}
				</section>
				<Footer />
			</body>
		</html>
	);
}
