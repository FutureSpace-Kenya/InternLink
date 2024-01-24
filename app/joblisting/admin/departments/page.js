import React from 'react'
import CreateDepartment from '../../../components/departments/CreateDepartment'
import GetDepartment from '../../../components/departments/GetDepartment'
import UpdateDepartment from '../../../components/departments/UpdateDepartment'
import DeleteDepartment from '../../../components/departments/DeleteDepartment'
import DepartmentsList from '../../../components/departments/DepartmentsList'
import AdminNavbar from '../../../components/AdminNavbar'

const Departments = () => {
  return (
    <main className="flex flex-row w-full h-full gap-4">
      <AdminNavbar />
      <section className="flex flex-col gap-4 pr-4">
        <div className="flex flex-row gap-4 bg-slate-100 rounded-lg p-4">
          <CreateDepartment />
          <UpdateDepartment />
          <GetDepartment />
          <DeleteDepartment />
        </div>
        <div className="flex justify-center items-center bg-slate-100 rounded-lg pb-4">
          <DepartmentsList />
        </div>
      </section>
    </main>
  )
}

export default Departments