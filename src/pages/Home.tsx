import React, { useState } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import TableRow from "../components/TableRow";
import AddTodo from "../components/Modals/AddTodo";

{
  /* <ArrowSmallUpIcon className="h-6 w-6 text-gray-500" /> */
}

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  return (
    <>
    {
        openModal && <AddTodo setOpenModal={setOpenModal}/>
    }
      <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
        <div className="w-full max-w-2xl ">
          <table className="w-full">
            <thead className="bg-blue-500">
              <tr className="text-center">
                <th className="p-2 ">
                  <div className="flex">
                    <span>Row Num</span>
                    <ArrowSmallUpIcon className="h-6 w-6 text-gray-500" />
                    <ArrowSmallDownIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </th>
                <th className="p-2 ">
                  <div className="flex">
                    <span>Name</span>
                    <ArrowSmallUpIcon className="h-6 w-6 text-gray-500" />
                    <ArrowSmallDownIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </th>
                <th className="p-2">
                  <div className="flex">
                    <span>Location</span>
                    <ArrowSmallUpIcon className="h-6 w-6 text-gray-500" />
                    <ArrowSmallDownIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </th>
                <th className="p-2">
                  <div className="flex">
                    <span>CGPA</span>
                    <ArrowSmallUpIcon className="h-6 w-6 text-gray-500" />
                    <ArrowSmallDownIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-blue-200">
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>

        <div className="pt-4">
          <button
            className="bg-gray-300 px-6 py-3 shadow-lg hover:bg-gray-400 rounded-lg"
            onClick={() => setOpenModal(true)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
