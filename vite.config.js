// Importazioni base da Vite
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  // Configurazione base - MODIFICATO:
  // Impostato base vuoto per GitHub Pages e root alla cartella src
  base: '', // Base vuoto per deploy su GitHub Pages
  root: 'src', // Specifica che i sorgenti sono nella cartella src

  // Plugin - MODIFICATO:
  // Aggiunti plugin per ottimizzazione immagini e copia file
  plugins: [
    // Minifica il codice
    ViteMinifyPlugin({}),

    // Ottimizza le immagini - MODIFICATO:
    // Aggiunti i formati SVG e specificata la cartella di output
    ViteImageOptimizer({
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Aggiunto SVG
      exclude: 'node_modules/**',
      assetsDir: 'assets/images' // Specifica la cartella di output
    }),

    // Copia i file statici - MODIFICATO:
    // Ora copia tutti i tipi di immagini nella giusta struttura
    copy({
      targets: [
        {
          src: 'src/assets/images/**/*', // Prende tutte le immagini
          dest: 'docs/assets/images' // Le copia mantenendo la struttura
        }
      ],
      hook: 'writeBundle', // Esegue dopo il build
      verbose: true // Mostra log dettagliato
    })
  ],

  // Configurazione build - MODIFICATO:
  // Aggiunta gestione assets e configurazione Rollup specifica
  build: {
    outDir: '../docs', // Cartella di output
    emptyOutDir: true, // Svuota la cartella prima del build

    // Configurazione Rollup - MODIFICATO:
    // Aggiunta gestione ottimizzata degli assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/html/about.html'),
        vodafone: resolve(__dirname, 'src/html/vodafone.html'),
        endesa: resolve(__dirname, 'src/html/endesa.html'),
        iberdrola: resolve(__dirname, 'src/html/iberdrola.html')
      },
      output: {
        // Organizza gli assets in sottocartelle - NUOVO:
        assetFileNames: assetInfo => {
          const extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|webp|avif|tiff|bmp/i.test(extType)) {
            return `assets/images/[name].[hash][extname]`; // Immagini in /assets/images/
          }
          return `assets/[name].[hash][extname]`; // Altri asset in /assets/
        }
      }
    },

    // Ottimizzazione assets - NUOVO:
    assetsInlineLimit: 0, // Forza tutte le immagini come file esterni
    chunkSizeWarningLimit: 1500 // Aumenta il limite per warning di dimensione
  },

  // Risoluzione dei path - MODIFICATO:
  // Aggiunto alias per percorsi più semplici
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets') // Alias per gli assets
    }
  },

  // Configurazione server di sviluppo - NUOVO:
  server: {
    fs: {
      strict: false // Permette l'accesso a file fuori dalla root
    },
    open: true // Apre il browser automaticamente
  }
});
