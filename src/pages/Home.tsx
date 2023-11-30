import React, { useState, useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import TableRow from "../components/TableRow";
import AddTodo from "../components/Modals/AddTodo";
import TableHeading from "../components/TableHeading";
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import db from "../config/firebase";
interface i {
  [key: string]: any; //boolean
}

interface IData extends i {
  id: string;
  name: string;
  location: string;
  cgpa: string;
  type: string;
  index: number;
}

const tableColumnTitles = ["Name", "Location", "CGPA"];

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [postData, setPostsData] = useState<IData[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const queryRef = query(collection(db, "posts"));
      const docRef = onSnapshot(queryRef, (querySnapshot) => {
        setPostsData(
          // @ts-ignore
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
  };

  const handleSortItem = (type: string, orderBy: string) => {
    if (orderBy === "AES") {
      const sortedData = postData.sort((a, b) => {
        return a[type] < b[type] ? 1 : -1;
      });

      setPostsData([...sortedData]);
    } else if (orderBy === "DESC") {
      const sortedData = postData.sort((a, b) => {
        return a[type] < b[type] ? -1 : 1;
      });

      setPostsData([...sortedData]);
    } else {
      const sortedData = postData.reverse();
      setPostsData([...sortedData]);
    }
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
                    <ArrowSmallUpIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => handleSortItem("rownum", "")}
                    />

                    <ArrowSmallDownIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => handleSortItem("rownum", "")}
                    />
                  </div>
                </th>
                {tableColumnTitles.map((item, index) => (
                  <TableHeading
                    handleSortItem={handleSortItem}
                    title={item}
                    key={index}
                  />
                ))}

                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-blue-200">
              {postData.map((item, index) => (
                <TableRow
                  handleDeleteTodo={handleDeleteTodo}
                  todo={item}
                  setOpenModal={setOpenModal}
                  index={index}
                  key={item.id}
                />
              ))}
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
