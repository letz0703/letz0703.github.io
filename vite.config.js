import react from "@vitejs/plugin-react-swc"
import {defineConfig} from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // ex: /my_project/
  //base: "/letz0703.github.io/", // ex: /my_project/
  plugins: [react()]
})
