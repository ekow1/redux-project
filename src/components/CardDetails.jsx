import React, { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function CardDetails({ note }) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div>
      {showModal ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            index={note.id}
          >
            <div className="relative lg:w-5/12 md:5/12 w-80 my-6 mx-auto  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center   bg-yellow-400 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 bg-emerald-600 border-b border-solid border-yellow-400 ">
                  <h3 className="text-3xl font-semibold text-yellow-400">
                    {note.title}
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-emerald-600  "
                    onClick={() => setShowModal(false)}
                  >
                    <i className="bx bxs-x-circle text-2xl text-yellow-400 bx-tada-hover"></i>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto h-72 text-emerald-600">
                  {note.content}
                </div>
                {/*footer*/}
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <Card note={note} modal={handleModal} />
    </div>
  );
}

export default CardDetails;
