import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // `npm run dev:api` runs the Worker (send_email binding) on :8787; forward form posts to it.
  server: { proxy: { "/api": "http://localhost:8787" } },
});
