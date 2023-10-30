import { ClerkProvider } from "@clerk/nextjs";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import Navigation from "@/ui/organisms/Navigation";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";
import ActionItems from "@/ui/organisms/ActionItems";

const inter = Merriweather_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex min-h-screen flex-col`}>
				<Header>
					<Navigation />
					<ActionItems />
				</Header>
				<ClerkProvider>
					<div className="flex flex-grow flex-col">
						<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-8 sm:px-6 lg:max-w-7xl">
							{children}
						</section>
					</div>
				</ClerkProvider>
				<Footer />
			</body>
		</html>
	);
}
