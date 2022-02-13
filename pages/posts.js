import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";

export default function Posts() {
    return (
        <MainLayout>
            <Head>
                <title>Posts Page | Next Course</title>
                <meta name={'description'} content={'this is youtube tutorial for next'}/>
                <meta name={'keywords'} content={'next, javascript, nextjs, react'}/>
                <meta charSet={'utf-8'}/>
            </Head>
            <h1>Posts page</h1>
        </MainLayout>
    )
}