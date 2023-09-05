import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Decentralized Agents Organization</title>
        <meta name="description" content="Decentralized Agents Organization" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-center lg:text-left">
            Decentralized Agents Organization
          </h1>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/a96f3f84-b4f4-49b5-9ad0-184c687ac9be.jpeg"
            alt="labor union hiring hall in the style of Seattle World's Fair, 1962"
            width={512}
            height={512}
            priority
          />
        </div>

        <div className="mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Link href="/gallery">
              <h2 className="mb-3 text-2xl font-semibold">
                Agents{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Go here to hire union agents.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
