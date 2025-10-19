import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/v2022-06-30": {
        target: "https://geort75z.api.sanity.io",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
    },
  },
})
