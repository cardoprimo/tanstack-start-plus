/// <reference types="vite/client" />

import { Outlet, createRootRoute } from "@tanstack/react-router";
import { createServerFn, Meta, Scripts } from "@tanstack/start";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { ReactNode } from "react";
import { NotFound } from "@/components/base/NotFound";
import { ClerkProvider } from "@clerk/tanstack-start";
import { getAuth } from "@clerk/tanstack-start/server";
import { getWebRequest } from "@tanstack/start/server";

import appCss from "@/styles/globals.css?url";
import { DefaultCatchBoundary } from "@/components/base/DefaultCatchBoundary";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
	const { userId } = await getAuth(getWebRequest()!);
	console.log(userId);
	return {
		userId,
	};
});

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
		],
	}),
	beforeLoad: async () => {
		const { userId } = await fetchClerkAuth();
		return {
			userId,
		};
	},
	component: RootComponent,
	notFoundComponent: () => <NotFound />,
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
});

function RootComponent() {
	return (
		<ClerkProvider>
			<RootDocument>
				<Outlet />
			</RootDocument>
		</ClerkProvider>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<Meta />
			</head>
			<body>
				{children}
				<Scripts />
				<TanStackRouterDevtools />
			</body>
		</html>
	);
}
