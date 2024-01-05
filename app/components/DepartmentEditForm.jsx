import React, { useState, useEffect } from "react";

const DepartmentEditForm = ({ department }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        setName(department.name);
        setDescription(department.description);
    }, [department]);

    useEffect(() => {
        setIsModified(
            name !== department.name || description !== department.description
        );
    }, [name, description, department]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <>
            <dialog id="department-form" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                        <div className="flex flex-col gap-y-4 p-4">
                            <input
                                type="text"
                                placeholder="Department Name"
                                className="input input-bordered w-full"
                                value={name}
                                onChange={handleNameChange}
                            />
                            {/* <input
                                type="text"
                                placeholder="Department Description"
                                className="input input-bordered w-full"
                            /> */}
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="Department Description"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                            <input
                                type="submit"
                                value={"Submit"}
                                className=" input-bordered w-full cursor-pointer btn bg-green-300"
                                // Implement disabling when data is changed
                                disabled={!isModified}
                            />
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default DepartmentEditForm;
