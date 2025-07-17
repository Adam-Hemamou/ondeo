// vite.config.ts
import { defineConfig } from "file:///C:/Users/h-mam/OneDrive/Bureau/Projet-full-stack/Robin/ondeo/node_modules/vite/dist/node/index.js";
import analog from "file:///C:/Users/h-mam/OneDrive/Bureau/Projet-full-stack/Robin/ondeo/node_modules/@analogjs/platform/src/index.js";
var vite_config_default = defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"]
  },
  resolve: {
    mainFields: ["module"]
  },
  plugins: [
    analog({
      vite: {
        inlineStylesExtension: "scss"
      },
      ssr: false,
      static: true,
      prerender: {
        routes: []
      }
    })
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoLW1hbVxcXFxPbmVEcml2ZVxcXFxCdXJlYXVcXFxcUHJvamV0LWZ1bGwtc3RhY2tcXFxcUm9iaW5cXFxcb25kZW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGgtbWFtXFxcXE9uZURyaXZlXFxcXEJ1cmVhdVxcXFxQcm9qZXQtZnVsbC1zdGFja1xcXFxSb2JpblxcXFxvbmRlb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaC1tYW0vT25lRHJpdmUvQnVyZWF1L1Byb2pldC1mdWxsLXN0YWNrL1JvYmluL29uZGVvL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBhbmFsb2cgZnJvbSAnQGFuYWxvZ2pzL3BsYXRmb3JtJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogWydlczIwMjAnXSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIG1haW5GaWVsZHM6IFsnbW9kdWxlJ10sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBhbmFsb2coe1xyXG4gICAgICB2aXRlOiB7XHJcbiAgICAgICAgaW5saW5lU3R5bGVzRXh0ZW5zaW9uOiAnc2NzcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNzcjogZmFsc2UsXHJcbiAgICAgIHN0YXRpYzogdHJ1ZSxcclxuICAgICAgcHJlcmVuZGVyOiB7XHJcbiAgICAgICAgcm91dGVzOiBbXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE9BQU87QUFBQSxJQUNMLFFBQVEsQ0FBQyxRQUFRO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFlBQVksQ0FBQyxRQUFRO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsUUFDVCxRQUFRLENBQUM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
