import React from "react";
import Item from "../Item/Item";

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
  return <div className="ItemContainer">{items}</div>;
 
};

export default ItemContainer;
