import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>OLGA Music</title>
      </Head>
      <header>
        <div className="container d-flex justify-content-between">
          <Link href="/">
            <a>
              <img className="logo" src="/logo.png" />
            </a>
          </Link>
          <ul>
            <li>
              <a href="https://www.instagram.com/itsolgamusic/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=iCiLik92FA4">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/artist/0PIiKOtkNNn63Cvf4XQkq6?si=AQrNQt5UTOy9KRD2Lyx0MQ">
                <i class="fab fa-spotify"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fab fa-apple"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="container">
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://www.youtube.com/embed/OghAGMhJXs4?rel=0&amp;autoplay=1&mute=1`}
            frameBorder="0"
          />
        </div>

        <div className="row d-flex align-items-center about">
          <div className="col-md-6">
            <Image
              src="/olga-bio.jpeg"
              alt="OLGA Music"
              width={533}
              height={800}
            />
          </div>
          <div className="col-md-6">
            <p>
              Olga is a Brazilian born and raised, London based
              singer/songwriter/producer who appeared in the music scene after
              the release of her first single "Lips On Her, Eyes On Me". The
              upbeat song tells the story of two people who belong together but
              have fun provoking each other.
            </p>

            <p>
              The artist caught the eye of notorious Latin American production
              company "Head Media", whom after hearing her song arranged a
              meeting with the singer, and days later, signed on as co-producers
              of the debut track.
            </p>

            <p>
              Expectations are running high amongst new fans for future releases
              from the independent artist, whose charismatic personality and
              straight forward lyrics give listeners the feeling of close
              connection to her music.
            </p>
          </div>
        </div>

        <div className="text-center billboard">
          <p>
            "In her brand new single, Olga tells the story of a complicated
            relationship between two people who belong together but enjoy
            provoking each other. The lyrics are straight forward, sassy, and
            give the listeners a clear image of what it looks like to have a
            messy, unconventional, tumultuous relationship with someone from
            your past. The singer/songwriter/producer puts her own twist to the
            record, mixing pop, dance, and a pinch of sadness".
          </p>

          <Image
            src="/billboard.png"
            alt="OLGA Music"
            width={250}
            height={31}
          />
        </div>
      </div>

      <footer>
        <div className="container text-center">
          <p>
            THIS SITE USES COOKIES. BY CONTINUING TO BROWSE THE SITE YOU ARE
            AGREEING TO OUR USE OF COOKIES.
          </p>

          <p>
            Made by{" "}
            <a target="_blank" href="https://scafeli.com.br">
              Gustavo Scafeli
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
