import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<div className="my-auto flex h-screen flex-col items-center">
			<SignIn />
		</div>
	);
}
