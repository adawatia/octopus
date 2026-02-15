// https://nuxt.com/docs/api/configuration/nuxt-config
const basePath = process.env.NODE_ENV === 'production' ? '/octopus/' : '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  
  image: {
    domains: ['cdn.brandfetch.io', 'github.com'],
    formats: ['webp', 'avif'],
  },
  
  srcDir: 'app',
  css: ['~/assets/css/main.css'],
  
  colorMode: {
    preference: 'light'
  },
  
  // GitHub Pages configuration
  app: {
    baseURL: basePath,
    buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Devansh Sharma (adawatia) - AI Backend Engineer & Cloud Architect',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Devansh Sharma (adawatia) - AI Backend Engineer specializing in FastAPI, Django, AWS, and scalable cloud architecture. Portfolio showcasing production-grade AI pipelines and backend solutions.' 
        },
        { 
          name: 'keywords', 
          content: 'adawatia, Devansh Sharma, AI Engineer, Backend Developer, FastAPI, Django, AWS, GCP, Python Developer, Cloud Architect, Machine Learning Engineer, Full Stack Developer, Chandigarh University, IIT Guwahati, Zryth Solutions' 
        },
        { name: 'author', content: 'Devansh Sharma (adawatia)' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://adawatia.github.io/octopus/' },
        { property: 'og:title', content: 'Devansh Sharma (adawatia) - AI Backend Engineer & Cloud Architect' },
        { property: 'og:description', content: 'AI Backend Engineer specializing in FastAPI, Django, AWS, and scalable cloud architecture. Building production-grade AI pipelines and robust backend solutions.' },
        { property: 'og:site_name', content: 'Devansh Sharma Portfolio' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: 'https://adawatia.github.io/octopus/android-chrome-512x512.png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:image:alt', content: 'Devansh Sharma Portfolio Logo' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://adawatia.github.io/octopus/' },
        { name: 'twitter:title', content: 'Devansh Sharma (adawatia) - AI Backend Engineer' },
        { name: 'twitter:description', content: 'AI Backend Engineer specializing in FastAPI, Django, AWS, and scalable cloud architecture.' },
        { name: 'twitter:image', content: 'https://adawatia.github.io/octopus/android-chrome-512x512.png' },
        
        // Additional SEO
        { name: 'theme-color', content: '#FFD93D' },
        { name: 'msapplication-TileColor', content: '#FFD93D' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        
        // Verification tags (add your own when you get them)
        // { name: 'google-site-verification', content: 'YOUR_VERIFICATION_CODE' },
      ],
      link: [
        // Resource hints for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://cdn.brandfetch.io' },
        
        // Font stylesheet (loaded after preconnect for optimal performance)
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Bricolage+Grotesque:wght@400;700;800&display=swap'
        },
        
        // SEO and favicons
        { rel: 'canonical', href: 'https://adawatia.github.io/octopus/' },
        { rel: 'icon', type: 'image/x-icon', href: `${basePath}favicon.ico` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${basePath}apple-touch-icon.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${basePath}favicon-32x32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${basePath}favicon-16x16.png` },
        { rel: 'manifest', href: `${basePath}site.webmanifest` }
      ]
    }
  },
  
  // Vite Build Optimizations
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor chunks for better caching
            'vendor-icons': [
              '@iconify-json/fluent-emoji',
              '@iconify-json/heroicons', 
              '@iconify-json/logos',
              '@iconify-json/lucide',
            ],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['canvas-confetti'], // Pre-bundle for faster dev
    },
  },
  
  // Nitro Optimizations
  nitro: {
    compressPublicAssets: true, // Enable gzip/brotli
    minify: true,
    prerender: {
      routes: ['/']
    }
  },
  
  // Experimental Features
  experimental: {
    payloadExtraction: true, // Extract payload to separate files
  },
  
  // Enable static site generation
  ssr: false,
  
  // Prerender the home page for better SEO
  nitro: {
    compressPublicAssets: true, // Enable gzip/brotli
    minify: true,
    prerender: {
      routes: ['/']
    }
  },
})
