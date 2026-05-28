const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold">Resume Analysis</h2>
          <p className="mt-2 text-slate-300">
            Analyze resume and ATS score
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold">Skill Gap</h2>
          <p className="mt-2 text-slate-300">
            Identify missing skills
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold">Interview Prep</h2>
          <p className="mt-2 text-slate-300">
            Practice AI interviews
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage