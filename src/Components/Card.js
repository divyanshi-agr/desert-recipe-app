import React, { useState } from "react";
import Recipe from "./Recipe";

function Card({ title, img, ingredients }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-16">
      <div
        className="relative cursor-pointer bg-black shadow-lg rounded-lg group h-72 w-64 flex justify-center items-center"
        onClick={() => setShowModal(true)}
      >
        <div
          className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(
              ${img}
            )`,
          }}
        ></div>
        <p className="font-bold text-center text-lg text-white absolute z-20 pointer-events-none">
          {title}
        </p>
      </div>

      {showModal && (
        <Recipe
          title={title}
          img={img}
          ingredients={ingredients}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default Card;
