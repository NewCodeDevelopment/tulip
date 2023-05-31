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
          cmdk: "cmdk",
          react: "React",
          "react-dom": "ReactDOM",
          "tailwind-merge": "tailwindMerge",
          "react-day-picker": "reactDayPicker",
          "@radix-ui/react-accordion": "AccordionPrimitive",
          "@radix-ui/react-alert-dialog": "AlertDialogPrimitive",
          "@radix-ui/react-slot": "reactSlot",
          "@radix-ui/react-aspect-ratio": "AspectRatioPrimitiv",
          "@radix-ui/react-avatar": "AvatarPrimitive",
          "@radix-ui/react-checkbox": "CheckboxPrimitive",
          "@radix-ui/react-collapsible": "CollapsiblePrimitive",
          "@radix-ui/react-dialog": "SheetPrimitive",
          "@radix-ui/react-context-menu": "ContextMenuPrimitive",
          "@radix-ui/react-dropdown-menu": "DropdownMenuPrimitive",
          "@radix-ui/react-hover-card": "HoverCardPrimitive",
          "@radix-ui/react-label": "LabelPrimitive",
          "@radix-ui/react-menubar": "MenubarPrimitive",
          "@radix-ui/react-navigation-menu": "NavigationMenuPrimitive",
          "@radix-ui/react-popover": "PopoverPrimitive",
          "@radix-ui/react-progress": "ProgressPrimitive",
          "@radix-ui/react-radio-group": "RadioGroupPrimitive",
          "@radix-ui/react-scroll-area": "ScrollAreaPrimitive",
          "@radix-ui/react-select": "SelectPrimitive",
          "@radix-ui/react-separator": "SeparatorPrimitive",
          "@radix-ui/react-slider": "SliderPrimitive",
          "@radix-ui/react-switch": "SwitchPrimitives",
          "@radix-ui/react-tabs": "TabsPrimitive",
          "@radix-ui/react-toast": "ToastPrimitives",
          "@radix-ui/react-toggle": "TogglePrimitive",
          "@radix-ui/react-tooltip": "TooltipPrimitive",
        },
      },
    },
  },
});

// "@radix-ui/react-accordion": "AccordionPrimitive",
// "@radix-ui/react-alert-dialog": "AlertDialogPrimitive",
// "@radix-ui/react-slot": "reactSlot",
// "@radix-ui/react-aspect-ratio": "AspectRatioPrimitive",
// "@radix-ui/react-avatar": "AvatarPrimitive",
// "@radix-ui/react-checkbox": "reactCheckbox",
// "@radix-ui/react-collapsible": "CollapsiblePrimitive",
// "@radix-ui/react-dialog": "SheetPrimitive",
// "@radix-ui/react-dropdown": "DropdownMenuPrimitive",
// "@radix-ui/react-hover": "HoverCardPrimitive",
// "@radix-ui/react-label": "LabelPrimitive",
// "@radix-ui/react-menubar": "MenubarPrimitive",
// "@radix-ui/react-navigation": "NavigationMenuPrimitive",
// "@radix-ui/react-popover": "PopoverPrimitive",
// "@radix-ui/react-progress": "ProgressPrimitive",
// "@radix-ui/react-radio": "RadioGroupPrimitive",
// "@radix-ui/react-scroll": "ScrollAreaPrimitive",
// "@radix-ui/react-select": "SelectPrimitive",
// "@radix-ui/react-separator": "SeparatorPrimitive",
// "@radix-ui/react-slider": "SliderPrimitive",
// "@radix-ui/react-switch": "SwitchPrimitives",
// "@radix-ui/react-tabs": "TabsPrimitive",
// "@radix-ui/react-toast": "ToastPrimitives",
// "@radix-ui/react-toggle": "TogglePrimitive",
// "@radix-ui/react-tooltip": "TooltipPrimitive",
// "@radix-ui/react-context-menu": "ContextMenuPrimitive",
// "@radix-ui/react-dropdown-menu": "DropdownMenuPrimitive",
// "@radix-ui/react-hover-card": "HoverCardPrimitive",
// "@radix-ui/react-navigation-menu": "NavigationMenuPrimitive",
// "@radix-ui/react-radio-group": "RadioGroupPrimitive",
// "@radix-ui/react-scroll-area": "ScrollAreaPrimitive",
