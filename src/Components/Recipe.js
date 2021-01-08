import React, { useState } from "react";

export default function Modal({
  title,
  img,
  ingredients,
  setShowModal,
  showModal,
}) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}

      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center p-5 border-b border-solid border-gray-300 rounded-t">
              <img src="https://www.edamam.com/web-img/3c5/3c558709195198381a8d5c535d72a265.jpg" />
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-gray-600 text-sm leading-relaxed">
                Ingredients:<br></br>
                <ol>
                  {ingredients.map((ingredient, i) => {
                    <li className="text-xs">{ingredient}</li>;
                  })}
                </ol>
              </p>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
