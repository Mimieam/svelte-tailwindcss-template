/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url: "/", static: true},
    src: '/_dist_',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
    // '@snowpack/plugin-webpack',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-dotenv',
    'tailwindcss'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
    sourcemap: 'inline',
    splitting: true,
    treeshake: true,
  },
  packageOptions: {
    // remote enables something called streaming imports. Streaming imports enable Snowpack to bypass npm installation by converting bare imports (e.g., import React from 'react';) into CDN imports from Skypack.
    // "source": "remote",
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
