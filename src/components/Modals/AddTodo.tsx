import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface IFormState {
  name: string;
  location: string;
  cgpa: string;
}

const initialFormState: IFormState = {
  name: "",
  location: "",
  cgpa: "",
};

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTodo = ({ setOpenModal }: IProps) => {
  const [formState, setFormState] = useState<IFormState>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <div className="bg-gray-200 bg-opacity-50 fixed inset-0 w-full  h-screen flex items-center justify-center">
        <div className="w-full max-w-lg p-6 rounded-lg bg-white shadow-xl">
          <div>
            <button
              className="border border-gray-200 p-2 rounded-lg"
              onClick={() => setOpenModal(false)}
            >
              <XMarkIcon className="h-5 w-5 text-black" />
            </button>
          </div>
          <h3 className="text-center py-2 text-blue-950 font-medium text-base">
            Add ToDo Item
          </h3>
          <div className="">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="inputField"
                onChange={handleInputChange}
                value={formState.name}
                name="name"
              />
              <input
                type="text"
                placeholder="Your Location"
                className="inputField"
                onChange={handleInputChange}
                value={formState.location}
                name="location"
              />
              <input
                type="text"
                placeholder="Your CGPA"
                className="inputField"
                onChange={handleInputChange}
                value={formState.cgpa}
                name="cgpa"
              />

              <button
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 w-full 
              text-white font-medium shadow-lg shadow-blue-300 rounded-md "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
