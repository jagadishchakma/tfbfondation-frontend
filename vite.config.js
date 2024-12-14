// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      manifest: {
        name: 'TFB',
        short_name: 'TFB',
        description: 'Trisharan Foundation of Bangladesh',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo192.png', // Place this in your public folder
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo512.png', // Place this in your public folder
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
