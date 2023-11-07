import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
const TableRow = () => {
  return (
    <>
      <tr className="text-center border-2 border-white">
        <td className="p-2">1</td>
        <td className="p-2">Rohan</td>
        <td className="p-2">Pune</td>
        <td className="p-2">6.5</td>
        <td className="p-2 flex items-center gap-2">
          <button className="bg-green-300 p-1">
            <XMarkIcon className="h-5 w-5 text-black" />
          </button>
          <button className="bg-red-500 p-1">
            <PencilIcon className="h-5 w-5 text-black" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
