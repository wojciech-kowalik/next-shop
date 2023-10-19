import "./globals.css";
import { Merriweather_Sans } from "next/font/google";
import Navigation from "@/ui/organisms/Navigation";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";
import ActionItems from "@/ui/organisms/ActionItems";

const inter = Merriweather_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header>
					<Navigation />
					<ActionItems />
				</Header>
				<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-4 py-12 lg:max-w-7xl">
					{children}
				</section>
				<Footer />
				{modal}
			</body>
		</html>
	);
}
