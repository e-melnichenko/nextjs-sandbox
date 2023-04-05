import { useState } from 'react';
import Link from "next/link";
import Head from "next/head";

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>index</title>
      </Head>
      <div>
        <h1>index</h1>
        <p>post link: <Link href="post/first-post">post</Link></p>
      </div>
    </>

  );
}
