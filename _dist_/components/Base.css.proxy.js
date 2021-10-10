// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-1fzm8wn{\n  background:#ECF0F1;\n  height:100%;\n  width:calc(100%-2*0.2%);\n  display:flex;\n  flex-direction:column;\n  border-radius:4px;\n  border-color:#F9AA33;\n  border-width:2px;\n  border-style:solid;\n  margin:0.2%\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}