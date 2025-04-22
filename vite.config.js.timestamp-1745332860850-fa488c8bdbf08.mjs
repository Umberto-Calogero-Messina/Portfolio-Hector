// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///D:/GitHub/Trazos_Javascript/Portfolio-Hector/node_modules/vite/dist/node/index.js";
import { ViteImageOptimizer } from "file:///D:/GitHub/Trazos_Javascript/Portfolio-Hector/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import { ViteMinifyPlugin } from "file:///D:/GitHub/Trazos_Javascript/Portfolio-Hector/node_modules/vite-plugin-minify/dist/index.js";
import copy from "file:///D:/GitHub/Trazos_Javascript/Portfolio-Hector/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
var __vite_injected_original_dirname = "D:\\GitHub\\Trazos_Javascript\\Portfolio-Hector";
var vite_config_default = defineConfig({
  plugins: [
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      include: ["**/*.png", "**/*.jpg", "**/*.jpeg"]
    }),
    copy({
      targets: [{ src: "src/assets/images/*.svg", dest: "docs/assets" }],
      hook: "writeBundle"
      // Aseguramos que los archivos se copien después de que el bundle se haya generado
    })
  ],
  base: "",
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "src/index.html"),
        about: resolve(__vite_injected_original_dirname, "src/html/about.html"),
        vodafone: resolve(__vite_injected_original_dirname, "src/html/vodafone.html"),
        endesa: resolve(__vite_injected_original_dirname, "src/html/endesa.html"),
        iberdrola: resolve(__vite_injected_original_dirname, "src/html/iberdrola.html")
        // Añade aquí el resto de páginas que quieras.(nombre único: resolve(__dirname, 'src/html/archivo.html'))
      }
    },
    outDir: "../docs"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcVHJhem9zX0phdmFzY3JpcHRcXFxcUG9ydGZvbGlvLUhlY3RvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXFRyYXpvc19KYXZhc2NyaXB0XFxcXFBvcnRmb2xpby1IZWN0b3JcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdEh1Yi9UcmF6b3NfSmF2YXNjcmlwdC9Qb3J0Zm9saW8tSGVjdG9yL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuaW1wb3J0IHsgVml0ZU1pbmlmeVBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1pbmlmeSc7XHJcbmltcG9ydCBjb3B5IGZyb20gJ3JvbGx1cC1wbHVnaW4tY29weSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZpdGVNaW5pZnlQbHVnaW4oe30pLFxyXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgICAgaW5jbHVkZTogWycqKi8qLnBuZycsICcqKi8qLmpwZycsICcqKi8qLmpwZWcnXVxyXG4gICAgfSksXHJcbiAgICBjb3B5KHtcclxuICAgICAgdGFyZ2V0czogW3sgc3JjOiAnc3JjL2Fzc2V0cy9pbWFnZXMvKi5zdmcnLCBkZXN0OiAnZG9jcy9hc3NldHMnIH1dLFxyXG4gICAgICBob29rOiAnd3JpdGVCdW5kbGUnIC8vIEFzZWd1cmFtb3MgcXVlIGxvcyBhcmNoaXZvcyBzZSBjb3BpZW4gZGVzcHVcdTAwRTlzIGRlIHF1ZSBlbCBidW5kbGUgc2UgaGF5YSBnZW5lcmFkb1xyXG4gICAgfSlcclxuICBdLFxyXG4gIGJhc2U6ICcnLFxyXG4gIHJvb3Q6ICdzcmMnLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGFib3V0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9odG1sL2Fib3V0Lmh0bWwnKSxcclxuICAgICAgICB2b2RhZm9uZTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaHRtbC92b2RhZm9uZS5odG1sJyksXHJcbiAgICAgICAgZW5kZXNhOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9odG1sL2VuZGVzYS5odG1sJyksXHJcbiAgICAgICAgaWJlcmRyb2xhOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9odG1sL2liZXJkcm9sYS5odG1sJylcclxuICAgICAgICAvLyBBXHUwMEYxYWRlIGFxdVx1MDBFRCBlbCByZXN0byBkZSBwXHUwMEUxZ2luYXMgcXVlIHF1aWVyYXMuKG5vbWJyZSBcdTAwRkFuaWNvOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9odG1sL2FyY2hpdm8uaHRtbCcpKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnLi4vZG9jcydcclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsZUFBZTtBQUN0VixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHdCQUF3QjtBQUNqQyxPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsaUJBQWlCLENBQUMsQ0FBQztBQUFBLElBQ25CLG1CQUFtQjtBQUFBLE1BQ2pCLFNBQVMsQ0FBQyxZQUFZLFlBQVksV0FBVztBQUFBLElBQy9DLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxNQUNILFNBQVMsQ0FBQyxFQUFFLEtBQUssMkJBQTJCLE1BQU0sY0FBYyxDQUFDO0FBQUEsTUFDakUsTUFBTTtBQUFBO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLFFBQ3pDLE9BQU8sUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxRQUMvQyxVQUFVLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsUUFDckQsUUFBUSxRQUFRLGtDQUFXLHNCQUFzQjtBQUFBLFFBQ2pELFdBQVcsUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQTtBQUFBLE1BRXpEO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
