// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-1800axz{\n  background:#344955 ;\n  width:auto;\n  height:60px;\n  border-radius:2px;\n  border-color:#F9AA33;\n  border-width:2px;\n  position:-webkit-sticky;\n  position:sticky;\n  bottom:0\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}