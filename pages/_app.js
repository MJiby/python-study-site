import GlobalStyle from '../styles/GlobalStyle'
import PropTypes from 'prop-types'
import Head from 'next/head';
import wrapper from '../store/configureStore'

import 'antd/dist/antd.css';

function App({ Component, pageProps }) {
    return (
        <>
            {/* <GlobalStyle /> */}
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                {/* <meta httpEquiv="X-UA-Compatible" content="ie=edge" /> */}
                <title>Enoch Python Study</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any.isRequired,
  };

export default wrapper.withRedux(App) 
