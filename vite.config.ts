import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { dependencies, name, peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      skipDiagnostics: false,
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      name,
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "umd"],
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "tailwind-merge": "tailwindMerge",
          "react-day-picker": "reactDayPicker",
          "@radix-ui/react-accordion": "AccordionPrimitive",
          "@radix-ui/react-alert-dialog": "AlertDialogPrimitive",
          "@radix-ui/react-slot": "reactSlot",
          "@radix-ui/react-aspect-ratio": "AspectRatioPrimitive",
          "@radix-ui/react-avatar": "AvatarPrimitive",
          "@radix-ui/react-checkbox": "reactCheckbox",
        },
      },
    },
  },
});
