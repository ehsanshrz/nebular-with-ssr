
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 445, hash: 'bd269985d7fdb559a6a6b1ccce7c3f4c2618da9e000d842f623772026412cfe3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: 'e033dfc4d5e768c6939371194dfbc6a435f7bce94ba6834ed5e4c68d47617136', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
