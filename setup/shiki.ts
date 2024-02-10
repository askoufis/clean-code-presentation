import { defineShikiSetup } from "@slidev/types";

// @ts-expect-error Unsure what the migration path is here, PR for v1 shiki support didn't change much https://github.com/slidevjs/slidev/pull/1265/files#diff-161a0ec838dce86fefebc4fcce6592b7fd6614853d94d52b7dbf000a38825b4dR3
export default defineShikiSetup(() => {
  return {
    theme: {
      dark: "github-dark",
      light: "github-light",
    },
  };
});
