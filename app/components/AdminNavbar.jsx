import React from 'react'

const AdminNavbar = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-2 px-8 bg-slate-300">
        <a href="/joblisting/admin/organizations"><p className="text-md text-green-700 hover:text-green-500 font-semibold">Organizations</p></a>
        <a href="/joblisting/admin/departments"><p className="text-md text-green-700 hover:text-green-500 font-semibold">Departments</p></a>
        <a href="/joblisting/admin/jobs"><p className="text-md text-green-700 hover:text-green-500 font-semibold">Jobs</p></a>
    </section>
  )
}

export default AdminNavbar