import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {useAppDispatch, useAppSelector} from "../store/hooks"
import {setTodo} from "../features/todoSlice"

interface IData {
  id: string;
  name: string;
  location: string;
  cgpa: string;
}
interface IProps {
  handleDeleteTodo: (id: string) => void;
  todo: IData;
  setOpenModal : React.Dispatch<React.SetStateAction<boolean>>;
  index : number;
}
const TableRow = ({ handleDeleteTodo, todo, setOpenModal,index }: IProps) => {
    const dispatch = useAppDispatch();
    const handleEditTodo = () => {
        setOpenModal(true);
        dispatch(
            setTodo({
                id: todo?.id,
                name: todo?.name,
                location: todo?.location,
                cgpa: todo?.cgpa,
                type : 'update'
            })
        )
    }
  return (
    <>
      <tr className="text-center border-2 border-white">
        <td className="p-2">{index + 1}</td>
        <td className="p-2">{todo?.name}</td>
        <td className="p-2">{todo?.location}</td>
        <td className="p-2">{todo?.cgpa}</td>
        <td className="p-2 flex items-center gap-2">
          <button
            className="bg-red-500 p-1"
            onClick={() => handleDeleteTodo(todo?.id)}
          >
            <XMarkIcon className="h-5 w-5 text-black" />
          </button>
          <button className="bg-green-500 p-1" onClick={handleEditTodo}>
            <PencilIcon className="h-5 w-5 text-black" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
