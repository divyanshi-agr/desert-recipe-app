import React from "react";

function Card() {
  return (
    <div class="p-8">
      <div class="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
        <div
          class="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(
              "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTU1NTM4NC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0MzU3MDg0Nn0.PR26Qj_K2f4KJs_3gsWHgvuwTtqkS0T5YNAxhrR5Jt0/img.jpg?width=980"
            )`,
          }}
        ></div>
        <p class="font-bold text-lg text-white absolute z-20 pointer-events-none">
          Pink Rose Dessert
        </p>
      </div>
    </div>
  );
}

export default Card;
