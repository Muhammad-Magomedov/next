import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";
import {useState, useEffect} from "react";
import Link from 'next/link';

export default function Posts({posts:serverPosts}) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const res = await fetch('http://localhost:4200/posts');
            const json = await res.json();
            setPosts(json)
        }
        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }
    return (
        <MainLayout>
            <Head>
                <title>Posts Page | Next Course</title>
                <meta name={'description'} content={'this is youtube tutorial for next'}/>
                <meta name={'keywords'} content={'next, javascript, nextjs, react'}/>
                <meta charSet={'utf-8'}/>
            </Head>
            <h1>Posts page</h1>
            <ul>
                {posts.map((item) => (
                    <li key={item.id}>
                        <Link href={`/post/${item.id}`} as={`/post/${item.id}`}><a>{item.title}</a></Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null}
    }
    const res = await fetch('http://localhost:4200/posts');
    const posts = await res.json();
    return {
        posts
    }
}