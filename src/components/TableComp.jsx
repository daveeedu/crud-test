import React, { useState } from "react";
import WrappedButton from "./Button";

export default function Table({ data, handleDelete, handleEdit }) {
  const [editedData, setEditedData] = useState({});

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const editedRow = { ...editedData[index], [name]: value };
    setEditedData((prevState) => ({ ...prevState, [index]: editedRow }));
  };

  const handleSaveClick = (index) => {
    handleEdit(index, editedData[index]);
    setEditedData((prevState) => ({ ...prevState, [index]: null }));
  };

  const handleCancelClick = (index) => {
    setEditedData((prevState) => ({ ...prevState, [index]: null }));
  };

  return (
    <div className="table-container lg:ml-24 md:ml-10 mx-1 mt-14 xl:w-[40%] lg:w-[80%] md:w-[90%] w-[97%]">
      <div className="overflow-auto md:overflow-visible rounded-lg">
        <table className="w-full  w-[100%]">
          <thead className="border-[var(--c-dark-1)] border-2 bg-[var(--cc-grey-1)] text-sm">
            <tr className=" ">
              {Object.keys(data[0]).map(
                (name, i) =>
                  !name.startsWith("_") && (
                    <th key={i} className={"text-center capitalize px-3 "}>
                      {name}
                    </th>
                  )
              )}
              <th className="text-left p-3 capitalize text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                className={`bg-white border-[var(--c-dark-1)] border-2 `}
                key={index}
              >
                {Object.keys(row).map((key, i) =>
                  editedData[index] && editedData[index][key] !== undefined ? (
                    <td
                      key={key + "_" + i}
                      className={`capitalize  border-[var(--c-dark-1)] border-2 text-center md:text-lg text-sm`}
                    >
                      <input
                        type="text"
                        name={key}
                        value={editedData[index][key]}
                        onChange={(event) => handleInputChange(event, index)}
                        className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-[var(--c-blue-1)]"
                      />
                    </td>
                  ) : (
                    <td
                      key={key + "_" + i}
                      className={`capitalize  border-[var(--c-dark-1)] border-2 text-center md:text-lg text-sm`}
                    >
                      {row[key]}
                    </td>
                  )
                )}
                <td className="items-center flex justify-center ">
                  {editedData[index] && (
                    <>
                      <WrappedButton
                        value="Save"
                        onClick={() => handleSaveClick(index)}
                        wrapperClass="bg-black py-1 text-[var(--c-white-2)] rounded-md px-2 text-center my-1 md:mb-0 mr-2 text-[15px]"
                      />
                      <WrappedButton
                        value="Cancel"
                        onClick={() => handleCancelClick(index)}
                        wrapperClass="bg-var(--c-white-2) py-1 px-2 text-black rounded-md border-2 border-black text-center text-[13px]"
                      />
                    </>
                  )}
                  {!editedData[index] && (
                    <>
                      <WrappedButton
                        value="Edit"
                        onClick={() =>
                          setEditedData((prevState) => ({
                            ...prevState,
                            [index]: { ...row },
                          }))
                        }
                        wrapperClass="bg-black py-1 text-[var(--c-white-2)] rounded-md px-2 text-center my-1  mr-2 text-[15px]"
                      />
                      <WrappedButton
                        value="Delete"
                        onClick={() => handleDelete(index)}
                        wrapperClass="bg-red-600 py-1 px-2 text-[var(--c-white-2)] rounded-md text-center my-1 text-[15px]"
                      />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
