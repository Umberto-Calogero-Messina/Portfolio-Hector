import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import copy from 'rollup-plugin-copy';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg']
    }),
    copy({
      targets: [{ src: 'src/assets/images/*.svg', dest: 'docs/assets' }],
      hook: 'writeBundle' // Aseguramos que los archivos se copien después de que el bundle se haya generado
    })
  ],

  base: isProduction ? '/Portfolio_Hector/' : '',

  root: 'src',

  plugins: [
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg']
    }),
    copy({
      targets: [{ src: 'src/assets/images/*', dest: 'docs/assets' }],
      hook: 'writeBundle'
    })
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/html/about.html'),
        vodafone: resolve(__dirname, 'src/html/vodafone.html'),
        endesa: resolve(__dirname, 'src/html/endesa.html'),
        iberdrola: resolve(__dirname, 'src/html/iberdrola.html')
      }
    },
    outDir: '../docs'
  }
});
