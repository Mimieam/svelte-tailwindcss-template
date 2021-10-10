// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".wrapper.svelte-xh0kwa{\n  display:grid;\n  grid-template-rows:repeat(4, 1fr);\n  grid-template-columns:repeat(4, 1fr);\n  height:100vh\n}\n\n.app.svelte-xh0kwa{\n  grid-area:1 / 1 / 5 / 5;\n  background:#ECF0F1;\n  border:2px solid #F9AA33;\n  border-radius:4px;\n  margin:0.3%\n}\n\n.bar.svelte-xh0kwa{\n  height:60px;\n  background:#344955 ;\n  grid-area:4/1/5/5;\n  border-radius:5px 5px 0 0;\n  margin-top:auto;\n  justify-items:center;\n  align-items:center\n}\n\n.button.svelte-xh0kwa{\n  width:8rem;;position:relative;\n  top:4px\n}\n\n.button.svelte-xh0kwa:focus{\n  outline:none\n}\n\n.pushed-down.svelte-xh0kwa,.button.svelte-xh0kwa:active{\n  top:8px;\n}\n\n.pushed-down.svelte-xh0kwa, .button.svelte-xh0kwa:active{\n  border-bottom-width:0\n}\n\n@-webkit-keyframes svelte-xh0kwa-pulsate-fwd{\n  0%{\n    transform:scale(1)\n  }\n\n  50%{\n    transform:scale(1.01);\n    filter:brightness(120%)\n  }\n\n  100%{\n    transform:scale(1)\n  }\n}\n\n@keyframes svelte-xh0kwa-pulsate-fwd{\n  0%{\n    transform:scale(1)\n  }\n\n  50%{\n    transform:scale(1.01);\n    filter:brightness(120%)\n  }\n\n  100%{\n    transform:scale(1)\n  }\n}\n\n.pulsate-fwd.svelte-xh0kwa{\n  display:inline-block;;-webkit-animation:svelte-xh0kwa-pulsate-fwd 1s ease-in-out infinite both;;animation:svelte-xh0kwa-pulsate-fwd 1s ease-in-out infinite both\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}