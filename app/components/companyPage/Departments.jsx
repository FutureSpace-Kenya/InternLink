const Departments = ({ company, setCurrentDepartment, valid_to_display }) => {
    return (
        <div className="w-full p-5">
            <div className="collapse collapse-open border border-base-300 bg-base-200">
                <div className="flex items-center justify-between w-full p-4 rounded-md bg-white collapse-title text-2xl font-bold">
                    Departments
                    {valid_to_display && (
                        <i
                            className="text-lg fa-solid fa-plus cursor-pointer"
                            onClick={() =>
                                document
                                    .getElementById("department-add-form")
                                    .showModal()
                            }
                        ></i>
                    )}
                </div>
                <div className="collapse-content mt-4">
                    {company.departments.map((department, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-slate-100 hover:bg-slate-200 mb-1 rounded-md p-4"
                        >
                            <div>
                                <p className="text-base font-bold">
                                    {department.name}
                                </p>
                                <p>{department.description}</p>
                            </div>
                            {valid_to_display && (
                                <button
                                    className="btn bg-green-500 text-white btn-sm"
                                    onClick={() => {
                                        setCurrentDepartment(department);
                                        document
                                            .getElementById("department-form")
                                            .showModal();
                                    }}
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;
