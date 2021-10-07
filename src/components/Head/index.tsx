import Head from 'next/head';

export default function Header({ page }: any) {
    return (
        <Head >
            <title>MOC | {page}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/static/big-logo.png" />
        </Head>
    )
}
