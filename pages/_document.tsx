import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='ja'>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Roboto:wght@300;700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
