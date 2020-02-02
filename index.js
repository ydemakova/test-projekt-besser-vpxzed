// source (buggy):
//   https://certy.px-lab.com/html/demo1/index.php
// source better (also buggy):
//   https://certy.px-lab.com/designer/

// Import stylesheets
import './style.css';

setTimeout(async() => {
  const contents = {};
  contents['header.html']       = await import('./header.html');
  contents['footer.html']       = await import('./footer.html');
  contents['main.html']         = await import('./main.html');
  contents['sidebar-cart.html'] = await import('./sidebar-cart.html');
  contents['sidebar-nav.html']  = await import('./sidebar-nav.html');

  document.querySelectorAll('[data-include]').forEach(elInclude => {
    const fileName      = elInclude.getAttribute('data-include');
    elInclude.innerHTML = contents[fileName] && contents[fileName].default;
  });
});
