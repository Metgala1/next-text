import Link from "next/link";

export default function SignUpPage() {

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-green-500 text-2xl font-bold">
              N
            </div>

            <h1 className="mt-4 text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="mt-2 text-zinc-400">
              Join NexText and start chatting instantly
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a secure password"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-green-500"
              />

              <p className="mt-2 text-xs text-zinc-500">
                Use at least 8 characters with letters and numbers.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-blue-500 to-green-500 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20"
            >
              Create Account
            </button>
          </form>

          {/* Terms */}
          <p className="mt-5 text-center text-xs text-zinc-500">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-sm text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* QR Signup */}
          <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-zinc-300 transition hover:bg-white/10">
            Create Account with QR Code
          </button>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href={"/auth/sign-in"} className="font-medium text-blue-400 hover:text-blue-300">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}