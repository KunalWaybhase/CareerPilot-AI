const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-8">
        <h1 className="mb-6 text-3xl font-bold">Sign Up</h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg p-3 text-black"
          />

          <input
            type="email"
            placeholder="Email"
            className="rounded-lg p-3 text-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="rounded-lg p-3 text-black"
          />

          <button className="rounded-lg bg-green-600 p-3 hover:bg-green-700">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage