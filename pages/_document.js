import Document, {Html, Head, Main, NextScript} from 'next/document'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html className="has-navbar-fixed-top" lang="fr">
                <Head>
                    <meta name="title" content="Arnold, tu me ramène?"/>
                    <meta name="description" content="Application mobile pour rentrer chez soit en sécurité sur Nantes"/>
                    <meta name="keywords" content="application,sécurité,femme"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7E84CBEZKP"/>
                    <script dangerouslySetInnerHTML={{__html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-S2D0WL7FN3');
                        `}} />

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
