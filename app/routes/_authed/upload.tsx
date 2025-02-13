import { createFileRoute } from "@tanstack/react-router";
import { SignOutButton, useAuth } from "@clerk/tanstack-start";

export const Route = createFileRoute("/_authed/upload")({
	beforeLoad: ({ context }) => {
		if (!context.userId) {
			throw new Error("Not authenticated");
		}
	},
	component: UploadComponent,
});

function UploadComponent() {
	const { userId } = useAuth();
	return (
		<>
			<div>Hello "/_authed/upload"! {userId}</div>

			<SignOutButton />
		</>
	);
}
