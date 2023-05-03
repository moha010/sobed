import '@/styles/globals.css'
import "../styles/all.min.css"
import Head from 'next/head'
import Header from '@/component/Header'
import { Provider } from 'react-redux'
import store from '@/date/store'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
