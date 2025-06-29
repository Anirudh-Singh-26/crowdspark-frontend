export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="absolute inset-0 -z-10 blur-2xl opacity-60 bg-gradient-to-br from-green-100 via-white to-green-200" />

      <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-xl border border-green-100 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-extrabold text-center text-green-800 mb-8 drop-shadow">
          🔐 Login to CrowdSpark
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white/80 text-black placeholder-black/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-800 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white/80 text-black placeholder-black/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>


          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-md hover:from-green-600 hover:to-green-700 transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          New to CrowdSpark?{" "}
          <a href="/register" className="text-green-600 font-semibold hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}