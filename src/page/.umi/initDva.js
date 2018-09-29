import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'api', ...(require('/Users/xiaos/MaybeAI/src/model/api.js').default) });
app.model({ namespace: 'demo', ...(require('/Users/xiaos/MaybeAI/src/model/demo.js').default) });
app.model({ namespace: 'params', ...(require('/Users/xiaos/MaybeAI/src/model/params.js').default) });
