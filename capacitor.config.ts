import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pke.newsapp',
  appName: 'news-app-client',
  webDir: 'dist/news-app-client/browser',
  bundledWebRuntime: false,
  server: {
    url: 'https://news-app-client-black.vercel.app/', // Replace with your Vercel URL
    cleartext: true,
  },
};

export default config;
