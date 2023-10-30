import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return (
		<div className="my-auto flex h-screen flex-col items-center">
			<SignUp
				signInUrl="/sign-in"
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
