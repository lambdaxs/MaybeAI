import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'api', ...(require('/Users/xiaos/WebstormProjects/MaybeAI/src/model/api.js').default) });
app.model({ namespace: 'demo', ...(require('/Users/xiaos/WebstormProjects/MaybeAI/src/model/demo.js').default) });
app.model({ namespace: 'params', ...(require('/Users/xiaos/WebstormProjects/MaybeAI/src/model/params.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
