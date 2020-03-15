import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { ConnectedUser } from "./components/User";
import { ConnectedRepo } from "./components/Repo";
import { refreshProlificUsers, getHotRepos } from "./store/actions";

function App() {
  store.dispatch(getHotRepos());
  store.dispatch(refreshProlificUsers());
  return (
    <Provider store={store}>
      <div>
        <ConnectedRepo />
        <ConnectedUser />
      </div>
    </Provider>
  );
}

export default App;
