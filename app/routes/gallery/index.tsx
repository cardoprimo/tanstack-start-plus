import { Gallery } from "@/components/gallery";
import { createFileRoute } from "@tanstack/react-router";
import {photosQueryOptions} from '@/db/queries'

export const Route = createFileRoute("/gallery/")({
	component: GalleryRoute,
	  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(photosQueryOptions())
  },
});

function GalleryRoute() {
	return <Gallery />;
}
