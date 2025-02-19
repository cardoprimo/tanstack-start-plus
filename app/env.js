import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		// R2_ACCOUNT_ID: z.string(),
		// R2_BUCKET_NAME: z.string(),
		// R2_ACCESS_KEY_ID: z.string(),
		// R2_SECRET_ACCESS_KEY: z.string(),
		// TURSO_DATABASE_URL: z.string(),
		// TURSO_AUTH_TOKEN: z.string(),
		DB_FILE_NAME: z.string(),
		VITE_CLERK_PUBLISHABLE_KEY: z.string().startsWith("pk_"),
		CLERK_SECRET_KEY: z.string().startsWith("sk_"),
		IMAGEKIT_PRIVATE_KEY: z.string(),
		IMAGEKIT_PUBLIC_KEY: z.string(),
	},
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
		R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
		R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
		R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
		TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
		TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
		// DB_FILE_NAME: process.env.DB_FILE_NAME,
		VITE_CLERK_PUBLISHABLE_KEY: process.env.VITE_CLERK_PUBLISHABLE_KEY,
		CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
		IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
		IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
	},
});

//
