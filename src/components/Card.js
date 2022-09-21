import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../redux/noteActions";
import { deleteNote } from "../redux/noteActions";
import { motion } from "framer-motion";

function Card({ modal, note }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleModal = (e) => {
    e.preventDefault();
    let editNote = { id: note.id, title, content, lastModified: Date.now() };

    if (note.title !== title || note.content !== content) {
      dispatch(updateNote(editNote));
    }

    setShowModal(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteNote(note.id));
    setShowModal(false);
  };

  return (
    <div className="">
      <div
        className=" relative bg-yellow-300 xl:w-72    md:w-72 sm:w-40  shadow-lg  md:h-48 h-fit rounded-md px-5 py-4 mb-4     hover:bg-white transition duration-500   "
        
      >
        <h3 className="border-b border-slate-700 text-emerald-600 w-20 min-w-fit  px-2 font-semibold mb-4 ">
          {note.title}
        </h3>
        <p className="text-slate-800 font-normal  md:h-10 mb-10">
          {note.content && note.content.substr(0, 50) + "..."}

          <span
            className="text-sm text-emerald-600  cursor-pointer"
            onClick={modal}
          >
            more
          </span>
        </p>
        <div className="relative flex items-center justify-between mt-12 gap-1 cursor-pointer  text-emerald-600  ">
          <div className="">
            <i
              className="bx bxs-edit  bx-tada-hover"
              onClick={() => setShowModal(true)}
            />
            <i
              className="bx bxs-trash-alt bx-tada-hover text-red-500"
              onClick={handleDelete}
            />
          </div>
          <small className="text-slate-900 text-xs">
            Last-Modified:{" "}
            {new Date(note.lastModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>
        {showModal ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  transition
            ease-in-out"
            >
              <div className="relative lg:w-5/12 my-6 mx-auto  w-fit">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center md:w-full  h-fit md:h-full  bg-yellow-400 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 bg-emerald-600 rounded-t">
                    <h3 className="text-3xl font-semibold text-yellow-400">
                      edit note
                    </h3>
                    <button
                      className="p-1 ml-auto  border-0 text-black  "
                      onClick={() => setShowModal(false)}
                    >
                      <i className="bx bxs-x-circle text-2xl text-yellow-400 bx-burst-hover "></i>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto text-center">
                    <input
                      type="text"
                      id="simple-email"
                      className=" flex-1 appearance-none border-b border-emerald-600  focus:outline-none focus:ring-0   py-2 px-4  text-emerald-600 placeholder-emerald-600 bg-transparent md:w-80 w-fit mb-4"
                      placeholder="title here ..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal 
                    text-emerald-600
                    bg-transparent bg-clip-padding
                    
                    placeholder-emerald-600
                    transition
                    ease-in-out
                    m-0
                    focus:text-emerald-600  focus:outline-none focus:ring-0
                "
                      id="exampleFormControlTextarea1"
                      rows="6"
                      placeholder="Notes here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                  </div>
                  {/*footer*/}
                  <button
                    type="submit"
                    className="flex items-center justify-end p-6  rounded-b md:h-fit h-20 "
                    onClick={handleModal}
                  >
                    <i className="bx bxs-save font-bold md:text-3xl text-2xl bx-tada-hover text-emerald-600"></i>
                  </button>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
