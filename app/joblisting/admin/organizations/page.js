import React from 'react'
import CreateOrganization from '../../../components/organizations/CreateOrganization'
import GetOrganization from '../../../components/organizations/GetOrganization'
import UpdateOrganization from '../../../components/organizations/UpdateOrganization'
import DeleteOrganization from '../../../components/organizations/DeleteOrganization'
import OrganizationsList from '../../../components/organizations/OrganizationsList'
import AdminNavbar from '../../../components/AdminNavbar'

const Organizations = () => {
  return (
    <main className="flex flex-row w-full h-full gap-4">
      <AdminNavbar />
      <section className="flex flex-col gap-4 pr-4">
        <div className="flex flex-row gap-4 bg-slate-100 rounded-lg p-4">
          <CreateOrganization />
          <UpdateOrganization />
          <div className="flex flex-col gap-4"> 
            <GetOrganization />
            <DeleteOrganization />
          </div>  
        </div>
        <div className="flex justify-center items-center bg-slate-100 rounded-lg pb-4">
          <OrganizationsList />
        </div>
      </section>
    </main>
  )
}

export default Organizations