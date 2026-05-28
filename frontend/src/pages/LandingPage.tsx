import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-5xl font-bold">CareerPilot AI</h1>

      <p className="mt-4 text-xl text-slate-300">
        AI-Powered Placement Preparation Platform
      </p>

      <div className="mt-8 flex gap-4">
        <Link to="/login">
          <button className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-black">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage