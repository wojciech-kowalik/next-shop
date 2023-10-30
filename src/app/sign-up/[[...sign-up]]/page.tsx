import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return (
		<div className="my-auto flex h-screen flex-col items-center">
			<SignUp />
		</div>
	);
}
