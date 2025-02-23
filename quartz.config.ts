import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "HOW TO LIVE",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "li015.github.io/howto_live/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fcfbf9",           // 更柔和的米白色背景
          lightgray: "#eae7e4",       // 溫暖的淺灰
          gray: "#a8a4a1",           // 沉穩的中灰
          darkgray: "#565352",       // 深沉的暖灰
          dark: "#2d2b2a",           // 近黑色
          secondary: "#435d6f",      // 沉穩的藍灰色
          tertiary: "#739389",       // 柔和的灰綠色
          highlight: "rgba(143, 159, 169, 0.12)",  // 較淡的強調色
          textHighlight: "#e6c87788", // 溫暖的黃色高亮
        },
        darkMode: {
            light: "#18191c",          // 更柔和的深色背景
            lightgray: "#2f3033",      // 帶有藍調的深灰
            gray: "#686b72",          // 中性灰色
            darkgray: "#dcdfe6",      // 帶有藍調的淺灰
            dark: "#eff1f5",          // 冷調白
            secondary: "#8ba3b4",     // 柔和的藍灰色
            tertiary: "#92b0a7",      // 淡雅的灰綠色
            highlight: "rgba(143, 159, 169, 0.12)", // 統一的強調色透明度
            textHighlight: "#c4b84288", // 柔和的金色高亮
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
