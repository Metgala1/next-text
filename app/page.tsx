import Link from "next/link";
import QRCode from "react-qr-code";
import Image from "next/image";

export default function Home() {
  const directives = [
    "Scan the QR code with your phone's camera",
    "Tap the link to open NexText",
    "Scan the QR code again to link your account",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#000_50%)]" />
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Navbar */}
        <nav className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/vite.svg"
              width={40}
              height={40}
              alt="NexText"
            />

            <h1 className="text-2xl font-bold tracking-tight">
              NexText
            </h1>
          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md transition hover:bg-white/10">
            Download App
          </button>
        </nav>

        {/* Hero */}
        <section className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              New Messaging Experience
            </span>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Messaging
              <span className="block bg-linear-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Secure messaging, crystal-clear calls, and instant syncing
              between your Mac and mobile devices.
            </p>

            <div className="mt-10">
              <div className="group flex max-w-md cursor-pointer items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500/30 hover:bg-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-green-500 text-2xl">
                  💻
                </div>

                <div>
                  <h4 className="font-semibold">
                    Download NexText for Mac
                  </h4>

                  <p className="mt-1 text-sm text-zinc-400">
                    Faster performance, native notifications and
                    seamless communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[32] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <h3 className="text-center text-3xl font-bold">
                Scan to Log In
              </h3>

              <p className="mt-2 text-center text-zinc-400">
                Link your phone and start chatting instantly.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="rounded-3xl bg-white p-5">
                  <QRCode
                    value="https://youtube.com"
                    size={220}
                  />
                </div>
              </div>

              <ol className="mt-8 space-y-4">
                {directives.map((directive, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-zinc-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-sm font-bold">
                      {index + 1}
                    </span>

                    {directive}
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="https://youtube.com"
                  className="rounded-xl bg-linear-to-r from-blue-500 to-green-500 py-3 text-center font-semibold transition hover:scale-[1.02]"
                >
                  Log in with Phone Number
                </Link>

                <button className="text-sm text-zinc-400 transition hover:text-white">
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
