// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-1fzm8wn{background:#ECF0F1;height:100%;width:calc(100%-2*0.2%);display:flex;flex-direction:column;border-radius:4px;border-color:#F9AA33;border-width:2px;border-style:solid;margin:0.2%}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}