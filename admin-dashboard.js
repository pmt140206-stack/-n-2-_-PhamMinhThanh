document.addEventListener('DOMContentLoaded',()=>{const el=PTG.$('#statProducts');if(el)el.textContent=PTG.products().length.toString().padStart(2,'0')});
