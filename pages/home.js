import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import "../styles/global.scss"

export default function Home() {
    return (<>


<div className="container">

<div
                className="video"
                style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
                }}
            >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/OghAGMhJXs4`}
          frameBorder="0"
        />
      </div>

    
        <div className="">

        <Image
        src="/olga-bio.jpeg"
        alt="OLGA Music"
        width={533}
        height={800}
      />

        </div>

        <div className="">

            <div className="">
            <p>Olga is a Brazilian born and raised, London based singer/songwriter/producer who appeared in the music scene after the release of her first single "Lips On Her, Eyes On Me". The upbeat song tells the story of two people who belong together but have fun provoking each other.</p>

            <p>The artist caught the eye of notorious Latin American production company "Head Media", whom after hearing her song arranged a meeting with the singer, and days later, signed on as co-producers of the debut track.</p>

            <p>Expectations are running high amongst new fans for future releases from the independent artist, whose charismatic personality and straight forward lyrics give listeners the feeling of close connection to her music.</p>
            </div>
        </div>


        <div className="">
            <p>"In her brand new single, Olga tells the story of a complicated relationship between two people who belong together but enjoy provoking each other. The lyrics are straight forward, sassy, and give the listeners a clear image of what it looks like to have a messy, unconventional, tumultuous relationship with someone from your past. The singer/songwriter/producer puts her own twist to the record, mixing pop, dance, and a pinch of sadness".</p>

            <Image
        src="/billboard.png"
        alt="OLGA Music"
        width={250}
        height={31}
      />
        </div>


        

</div>

<footer>
            <div className="container">
                <p>THIS SITE USES COOKIES. BY CONTINUING TO BROWSE THE SITE YOU ARE AGREEING TO OUR USE OF COOKIES.</p>

                <p>Made with  by Scafeli</p>
            </div>
        </footer>


</>)
}
