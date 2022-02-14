import '../main.css'

export default function MyApp({Component, pageProps}) {
    return (
        <>
        <Component {...pageProps}/>
            {/*<style jsx global>*/}
            {/*    {*/}
            {/*        `*/}
            {/*            body {*/}
            {/*            font-family: 'Syne Tactile';*/}
            {/*            }*/}
            {/*        `*/}
            {/*    }*/}
            {/*</style>*/}
        </>
    )
}
