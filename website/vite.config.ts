import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { ViteFaviconsPlugin } from "vite-plugin-favicon";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(),
    //   ViteFaviconsPlugin({
    //   logo: './public/favicon.svg', // svg works too!
    //   favicons: {
    //     appName: 'booksta.rs',
    //     appDescription: 'Booksta.rs',
    //     developerName: 'Booksta.rs',
    //     developerURL: null, // prevent retrieving from the nearest package.json
    //     background: '#ddd',
    //     theme_color: '#333',
    //     icons: {
    //       coast: false,
    //       yandex: false
    //     }
    //   }
    // 
    // })
  ],
});
