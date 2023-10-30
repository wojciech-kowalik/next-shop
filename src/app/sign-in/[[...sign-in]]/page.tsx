import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<div className="my-auto flex h-screen flex-col items-center">
			<SignIn
				signUpUrl="/sign-up"
				appearance={{
					elements: {
						formButtonPrimary:
							"bg-slate-500 hover:bg-slate-400 text-sm normal-case",
					},
				}}
			/>
		</div>
	);
}
