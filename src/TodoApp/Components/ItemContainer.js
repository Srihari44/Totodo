import React from "react";
import Item from "./Item";

const ItemContainer = (props) => {
  const items = props.data.map((item) => {
    return (
      <Item
        key={item.id}
        title={item.title}
        description={item.description}
        date={item.date}
        time={item.time}
        deleter={() => props.deleted(item.id)}
      />
    );
  });
  return <div className="container flex flex-col justify-center p-4">
    <h3 className="font-semilight text-2xl text-center">Your List</h3>
    {props.data.length!==0 ? items : <p className="text-center m-4">Oops... Nothing here</p>}
  </div>;
};

export default ItemContainer;
