import React from "react";

const DepartmentAddForm = () => {
  return (
    <>
      <dialog id="department-add-form" className="modal">
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
              />
              {/* <input
                                type="text"
                                placeholder="Department Description"
                                className="input input-bordered w-full"
                            /> */}
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Department Description"
              ></textarea>
              <input
                type="submit"
                value={"Add"}
                className=" input-bordered w-full cursor-pointer btn bg-green-300"
                // Implement disabling when data is changed
                // disabled
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DepartmentAddForm;
