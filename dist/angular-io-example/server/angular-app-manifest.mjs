
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1703, hash: '26d8afd5002ce8300f135bea062f98fffca2db1d875a1c1e5bd5e2f8b093258f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '35143a5173022d83b05e5a4ab0688c545ec4a09e268ebb87f04aaf933bf33a9e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ODR7RNJE.css': {size: 322330, hash: 'pYGfXAJPnwo', text: () => import('./assets-chunks/styles-ODR7RNJE_css.mjs').then(m => m.default)}
  },
};
