import React from "react";

const Item = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex text-center">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="text-center text-sm p-2 font-semibold">
          <p className="text-gray-900">{props.time}</p>
          <p className="text-gray-900">{props.date}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-12"
          onClick={props.deleter}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Item;
