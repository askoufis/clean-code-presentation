import { defineUnoSetup } from "@slidev/types";

export default defineUnoSetup(() => ({
  rules: [
    [
      /^code-(\d+)$/,
      ([, d]) => ({
        "--slidev-code-font-size": `calc(${d}em/4)`,
        "--slidev-code-padding": "calc(2em/3)",
        "--slidev-code-line-height": "calc(4em/3)",
      }),
    ],
  ],
  safelist: [
    // Constructed dynamically in `center-code` layout
    ...Array.from({ length: 10 }, (_, i) => `code-${i + 1}`),
  ],
}));
