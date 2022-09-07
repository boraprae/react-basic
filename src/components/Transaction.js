import * as React from "react";
import Item from "./Item";
import "./Transaction.css";

const Transection = () => {
  const data = [
    { id: 1, title: "ค่ารักษาพยาบาล", price: "2990" },
    { id: 2, title: "ค่าอัลบั้ม", price: "1990" },
    { id: 3, title: "ค่าตั๋วเครื่องบิน", price: "990" },
  ];
  return (
    <>
      <ul className="item-list">
        {data.map((element) => {
          // return <Item title={data[element].title} price={data[element].price}/>
          return <Item {...element} key={element.id} />;
        })}
      </ul>
    </>
  );
};

export default Transection;
