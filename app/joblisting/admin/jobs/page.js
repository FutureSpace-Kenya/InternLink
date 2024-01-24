import React from 'react'
import CreateJob from '../../../components/jobs/CreateJob'
import GetJob from '../../../components/jobs/GetJob'
import UpdateJob from '../../../components/jobs/UpdateJob'
import DeleteJob from '../../../components/jobs/DeleteJob'
import JobsList from '../../../components/jobs/JobsList'
import AdminNavbar from '../../../components/AdminNavbar'

const Jobs = () => {
  return (
    <main className="flex flex-row w-full h-full gap-4">
      <AdminNavbar />
      <section className="flex flex-col gap-4 pr-4">
        <div className="flex flex-row gap-4 bg-slate-100 rounded-lg p-4">
          <CreateJob />
          <UpdateJob />
          <GetJob />
          <DeleteJob />
        </div>
        <div className="flex justify-center items-center bg-slate-100 rounded-lg pb-4">
          <JobsList />
        </div>
      </section>
    </main>
  )
}

export default Jobs