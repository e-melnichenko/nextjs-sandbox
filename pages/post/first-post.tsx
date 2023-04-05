import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>first-post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`)
        }}
      />
      <div>
        <h1>First Post</h1>
        <h2>
          <Link href="/">home</Link>
        </h2>
      </div>
    </Layout>
  )
}
