import SEO from './configs/seo.json'
import { isEnvProduction } from './plugins/utils.js'

const target = 'static'

const loading = false

const publicRuntimeConfig = {}

const privateRuntimeConfig = {}

const port = isEnvProduction() ? 4001 : 8082
const server = { port }

const head = {
  title: SEO.title,
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    },
    {
      name: 'author',
      content: SEO.author
    },
    {
      hid: 'description',
      name: 'description',
      content: SEO.description
    },
    {
      name: 'keywords',
      content: SEO.keywords
    },
    {
      name: 'theme-color',
      content: '#030308'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    },
    {
      name: 'apple-mobile-web-app-title',
      content: SEO.name
    },
    {
      name: 'og:title',
      content: SEO.title
    },
    {
      name: 'og:description',
      content: SEO.description
    },
    {
      name: 'og:locale',
      content: SEO.locale
    },
    {
      name: 'og:site_name',
      content: SEO.name
    },
    {
      name: 'og:url',
      content: SEO.url
    },
    {
      name: 'og:image',
      content: SEO.ogImage
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'favicon.ico'
    }
  ]
}

const css = [
  '@fortawesome/fontawesome-svg-core/styles.css',
  '~assets/css/main.css'
]

const plugins = [
  '~/plugins/components.js',
  '~/plugins/fontawesome.js'
]

const modules = [
  '@nuxtjs/markdownit',
  '@nuxtjs/axios',
  '@nuxtjs/dotenv',
  '@nuxtjs/sitemap',
  'vue-scrollto/nuxt'
]

const buildModules = [
  '@nuxtjs/tailwindcss'
]

const tailwindcss = {
  cssPath: '~/assets/css/tailwind.css',
  configPath: 'tailwind.config.js',
  exposeConfig: false,
  config: {}
}

const markdownit = {
  preset: 'default',
  linkify: false,
  injected: true,
  breaks: true,
  use: [
    'markdown-it-div',
    'markdown-it-attrs'
  ]
}

const router = {
  prefetchPayloads: false
}

const sitemap = {
  hostname: SEO.url,
  path: '/sitemaps/sitemap.xml',
  cacheTime: (1000 * 60 * 15),
  gzip: true
}

const axios = {
  retry: true,
  https: true,
  debug: false
}

const purgeCSS = {}

const build = {}

const generate = {}

export default {
  components: false,
  target,
  server,
  loading,
  publicRuntimeConfig,
  privateRuntimeConfig,
  head,
  css,
  tailwindcss,
  plugins,
  buildModules,
  modules,
  axios,
  build,
  purgeCSS,
  markdownit,
  router,
  sitemap,
  generate
}
