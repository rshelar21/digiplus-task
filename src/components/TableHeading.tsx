import React from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";

interface IProps {
    handleSortItem : (name : string, type : string) => void,
    title : string
}

const TableHeading = ({handleSortItem, title} : IProps) => {
  return (
    <>
      <th className="p-2 ">
        <div className="flex">
          <span>{title}</span>
          <ArrowSmallUpIcon
            className="h-6 w-6 text-gray-500"
            onClick={() => handleSortItem("name", "AES")}
          />

          <ArrowSmallDownIcon
            className="h-6 w-6 text-gray-500"
            onClick={() => handleSortItem("name", "DESC")}
          />
        </div>
      </th>
    </>
  );
};

export default TableHeading;
