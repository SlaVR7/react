import {Provider} from "react-redux";
import {setupStore} from "../src/redux/store/store";
import '../src/index.css';

function MyApp({ Component, pageProps }) {
  const store = setupStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
