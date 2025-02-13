import { SignOutButton } from "@clerk/tanstack-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-out")({
	component: SignOut,
});

function SignOut() {
	return <SignOutButton />;
}
