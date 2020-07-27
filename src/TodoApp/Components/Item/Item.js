import React from "react";

const Item = (props) => {
  return (
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {props.title}
            </div>
            <p className="text-gray-700 text-base">{props.description}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-600">{props.time}</p>
              <p className="text-gray-600">{props.date}</p>
            </div>
          </div>
          <button onClick={props.deleter}>Remove</button>
        </div>
      </div>
  );
};

export default Item;
