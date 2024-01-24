import React from 'react'

const Admin = () => {
  return (
    <main className="flex flex-row flex-wrap justify-center items-center gap-10 w-screen h-screen">
      <a href="/joblisting/admin/organizations"><div className="flex justify-center items-center w-52 h-52 border text-lg text-black border-green-500 rounded-2xl hover:bg-green-500 hover:text-white hover:w-60 hover:h-60">Organizations</div></a>
      <a href="/joblisting/admin/departments"><div className="flex justify-center items-center w-52 h-52 border text-lg text-black border-green-500 rounded-2xl hover:bg-green-500 hover:text-white hover:w-60 hover:h-60">Departments</div></a>
      <a href="/joblisting/admin/jobs"><div className="flex justify-center items-center w-52 h-52 border text-lg text-black border-green-500 rounded-2xl hover:bg-green-500 hover:text-white hover:w-60 hover:h-60">Jobs</div></a>     
    </main>
  )
}

export default Admin