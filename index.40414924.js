document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("thumbs"),t=document.getElementById("largeImg");e.addEventListener("click",function(e){var a,n=e.target;n&&("IMG"===n.tagName||"A"===n.tagName)&&(e.preventDefault(),"A"===n.tagName?a=n.href:"IMG"===n.tagName&&(a=n.parentElement.href),t.src=a,t.alt=n.alt||"")})});
//# sourceMappingURL=index.40414924.js.map
