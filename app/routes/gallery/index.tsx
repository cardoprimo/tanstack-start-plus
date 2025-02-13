import { Gallery } from "@/components/gallery";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery/")({
	component: GalleryRoute,
});

function GalleryRoute() {
	return <Gallery />;
}
