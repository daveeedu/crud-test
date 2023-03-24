import React from "react";
import WrappedButton from "./Button";


export default function Table({ index, data, handleDelete, handleEdit }) {

  
  return (
    <div className="table-container lg:ml-24 md:ml-10 mx-1 mt-14 xl:w-[40%] lg:w-[80%] md:w-[90%] w-[97%]">
      <div className="overflow-auto md:overflow-visible rounded-lg">
        <table className="w-full  w-[100%]">
          <thead className="border-[var(--c-dark-1)] border-2 bg-[var(--cc-grey-1)] text-sm">
            <tr className=" ">
              {Object.keys(data[0]).map((name, i) => (
                !name.startsWith("_") && (
                  <th key={i} className={"text-center capitalize px-3 "}>
                    {name}
                  </th>
                )
              ))}
              <th className="text-left p-3 capitalize text-center">Action</th>
            </tr>
          </thead>
          <tbody >
            {data.map((row, index) => (
              <tr className={`bg-white border-[var(--c-dark-1)] border-2 `} key={index}>
                {Object.keys(row).map((key, i) => (
                  <td key={key + "_" + i} className={`capitalize  border-[var(--c-dark-1)] border-2 text-center md:text-lg text-sm`}>
                    {row[key]}
                  </td>
                ))}
                <td className="items-center flex justify-center  ">
                  <div className="md:flex md:gap-4 md:ml-0 my-3 mx-2">
                    <WrappedButton
                      value="Edit"
                      onClick={handleEdit}
                      wrapperClass="bg-black py-2 text-[var(--c-white-2)] rounded-md px-4 text-center mb-5 md:mb-0"
                    />
                    <WrappedButton
                      value="Delete"
                      onClick={handleDelete}
                      wrapperClass="bg-var(--c-white-2) py-2 px-4 text-black rounded-md border-2 border-black text-center"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
