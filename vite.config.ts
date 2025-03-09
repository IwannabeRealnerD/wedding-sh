import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3000
	},
	test: {
		environment: "jsdom",
		globals: true,
		include: ["test/**/*.{test,spec}.{js,ts}"]
	}
});
