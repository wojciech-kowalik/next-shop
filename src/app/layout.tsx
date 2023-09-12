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
					<Navigation>
						<li className="first:pl-4 last:pr-4 lg:px-0">
							<ActiveLink
								activeClassName={`border-blue-500 text-slate-700`}
								className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
								href="/"
								exact={true}
							>
								Home
							</ActiveLink>
						</li>
						<li className="first:pl-4 last:pr-4 lg:px-0">
							<ActiveLink
								activeClassName={`border-blue-500 text-slate-700`}
								className={`flex h-full w-full min-w-[3rem] items-center justify-center border-b-2  px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300`}
								href="/products"
							>
								All
							</ActiveLink>
						</li>
					</Navigation>
				</Header>
				<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
					{children}
				</section>
				<Footer />
			</body>
		</html>
	);
}
