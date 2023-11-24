import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import '../src/index.css';
import { createWrapper } from 'next-redux-wrapper';
import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';

interface MyAppProps extends AppProps {
  Component: React.ComponentType<AppProps['pageProps']>;
}

export function MyApp({ Component, pageProps }: MyAppProps): ReactNode {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
