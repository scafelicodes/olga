import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Front() {
  return (<>

<section className="front">
    <div className="container">
      <Head>
        <title>OLGA Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="/olga.gif"
        alt="OLGA Music"
        width={400}
        height={400}
      />

      <Link href="/home">
        <a>Enter</a>
      </Link>
      
    </div>
</section>
    
  </>)
}
