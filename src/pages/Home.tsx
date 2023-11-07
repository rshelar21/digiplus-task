import React, { useState, useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import TableRow from "../components/TableRow";
import AddTodo from "../components/Modals/AddTodo";
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import db from "../config/firebase";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [postData, setPostsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const queryRef = query(
        collection(db, "posts")
      );
      const docRef = await onSnapshot(queryRef, (querySnapshot) => {
        setPostsData(
          // @ts-ignore
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(postData, "postData");

  const handleDeleteTodo = async(id : string) => {
    await deleteDoc(doc(db, "posts", id))
  };

  return (
    <>
      {openModal && <AddTodo setOpenModal={setOpenModal} />}
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
                {
                    postData.map((item, index) =>(
                        <TableRow handleDeleteTodo={handleDeleteTodo} todo={item} setOpenModal={setOpenModal}/>
                    ))
                }
             
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
