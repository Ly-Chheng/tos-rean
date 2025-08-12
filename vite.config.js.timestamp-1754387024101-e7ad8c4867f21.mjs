// vite.config.js
import { defineConfig } from "file:///D:/biu/tos-rean/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/biu/tos-rean/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///D:/biu/tos-rean/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      refresh: true
    }),
    react()
  ],
  build: {
    assetsInclude: ["resources/js/assets/**/*"]
  },
  server: {
    host: true,
    // or set to '0.0.0.0' to listen on all interfaces
    port: 5173,
    cors: {
      origin: "http://172.16.5.191:81",
      credentials: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxiaXVcXFxcdG9zLXJlYW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGJpdVxcXFx0b3MtcmVhblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYml1L3Rvcy1yZWFuL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiAncmVzb3VyY2VzL2pzL2FwcC5qc3gnLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHJlYWN0KClcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGFzc2V0c0luY2x1ZGU6IFsncmVzb3VyY2VzL2pzL2Fzc2V0cy8qKi8qJ10sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG9zdDogdHJ1ZSwgLy8gb3Igc2V0IHRvICcwLjAuMC4wJyB0byBsaXN0ZW4gb24gYWxsIGludGVyZmFjZXNcbiAgICAgICAgcG9ydDogNTE3MyxcbiAgICAgICAgY29yczoge1xuICAgICAgICBvcmlnaW46ICdodHRwOi8vMTcyLjE2LjUuMTkxOjgxJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxTyxTQUFTLG9CQUFvQjtBQUNsUSxPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxlQUFlLENBQUMsMEJBQTBCO0FBQUEsRUFDOUM7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLElBQ2I7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
