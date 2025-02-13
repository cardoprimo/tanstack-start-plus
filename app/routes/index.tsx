import { createFileRoute } from "@tanstack/react-router";
import { Home, getCount } from "@/components/home";

export const Route = createFileRoute("/")({
	component: HomeRoute,
	loader: async () => await getCount(),
});

function HomeRoute() {
	return <Home />;
}
