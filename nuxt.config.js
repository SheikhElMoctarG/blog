export default {
  targer: 'static',
  router: {
    base: '/blog/'
  },
  head: {
    title: "تدوينات",
    titleTemplate: '%s - تدوينات',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#10AC84' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'تدوينات' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'google-site-verification', content: "ZeiClcfAeb4Ssc-QGjzpPhylmKe2U6-Baks6Fj6AU2A"},
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "https://j.top4top.io/p_22408ulg51.png"
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: "https://j.top4top.io/p_22408ulg51.png"
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'تدوينات'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: "https://j.top4top.io/p_22408ulg51.png"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],

  // analytics
  googleAnalytics: {
    id: 'UA-220878945-1'
  },

  pwa: {
    manifest: {
      name: 'تدوينات'
    },
    meta: {
      name: 'تدوينات',
      description: 'مدونة تقنية عربية تقدم مقالات ذات جودة عالية وتسعى لتبسيط التقنيات على الشاب العربي',
      theme_color: '#10AC84',
      lang: 'ar',
      nativeUI: true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/axios",
    "@nuxtjs/feed",
    "@nuxtjs/sitemap",
    "@nuxtjs/moment",
    "@nuxtjs/robots",
  ],

  robots: {
    UserAgent: '*',
    Allow: '/'
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-duotone-sea.css'
      }
    }
  },

  sitemap: {
    hostname: "https://sheikhelmoctarg.github.io/blog",
    routes: async () =>{
      const { $content } = require("@nuxt/content")
      const articles = await $content('articles').only(['path']).fetch()
      return articles.map((article)=> article.path)
    }
  },
  moment: {
    locales: ["ar"],
    timeZone: true
  },
  feed () {
    const baseUrlArticles = 'https://sheikhelmoctarg.github.io/blog'
    const baseLinkFeedArticles = '/'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'تدويناتي',
        description: 'مدونة تقنية عربية تقدم مقالات ذات جودة عالية وتسعى لتبسيط التقنيات على الشاب العربي',
        link: baseUrlArticles,
      }
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: article.published,
          description: article.summary,
          content: article.summary,
          author: article.authors,
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type: type,
      create: createFeedArticles,
    }))
  },

  axios: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}



