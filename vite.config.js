import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: '',

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
