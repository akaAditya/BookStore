/** @format */

import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();

  const handleDeleteBook = () => {
    setLoader(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoader(false);
        enqueueSnackbar('Book Deleted Successfully', {variant: 'success'})
        navigate("/");
      })
      .catch((err) => {
        setLoader(false);
        enqueueSnackbar('Error',{variant : 'error'})
        alert("An error occured, Please check");
        console.log(err);
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loader ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are you sure You want to delete this book?
        </h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>Yes, Delete</button>
      </div>
    </div>
  );
};

export default DeleteBook;
