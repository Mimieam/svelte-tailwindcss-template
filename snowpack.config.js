module.exports = {
  mount: {
    public: {url: "/", static: false},
    src: "/_dist_"
  },
  plugins: [
    "@snowpack/plugin-webpack",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-dotenv",
    ["@snowpack/plugin-build-script", {cmd: "postcss", input: [".css"], output: [".css"]}],
    "@snowpack/plugin-svelte",
    "tailwindcss"
  ],
  devOptions: {},
  buildOptions: {},
  alias: {}
};
