import React from 'react';
import Link from "next/link";
import MainLayout from "../components/MainLayout";

const Posts = ({posts}) => {
    return (
        <MainLayout>
            <h1>Posts page</h1>
            <div>
                <ul>
                    {posts.map((item) => {
                        return (
                            <li key={item.id}><Link href={`/posts/${item.id}`}><a>{item.title}</a></Link></li>
                        )
                    })}
                </ul>
            </div>
        </MainLayout>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default Posts;
