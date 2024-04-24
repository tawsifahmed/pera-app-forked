// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    app: {
        head: {
            title: 'Pera App',
            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/aura-light-green/theme.css'
                }
            ]
        }
    },
    modules: ['@pinia/nuxt', 'nuxt-primevue'],
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    script: [
        {
            strategy: 'lazyOnload',
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-93461466-1'
        },
        {
            id: 'ga-analytics',
            strategy: 'lazyOnload',
            children: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-93461466-1');
            `
        }
    ],
    css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss']
});
