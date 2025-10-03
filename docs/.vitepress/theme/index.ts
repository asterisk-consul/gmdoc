import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "lite-youtube-embed/src/lite-yt-embed.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),
  enhanceApp() {
    if (typeof window !== "undefined") {
      import("lite-youtube-embed");
    }
  },
} satisfies Theme;
