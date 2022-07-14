
import Item from "./Item";
import './Transaction.css'

const Transection = () => {
    const data = [
        {title: "ค่ารักษาพยาบาล", price: "2990"},
        {title: "ค่าอัลบั้ม", price: "1990"},
        {title: "ค่าตั๋วเครื่องบิน", price: "990"},
    ]
    return (
      <ul className="item-list">
      {data.map((element)=>{
       // return <Item title={data[element].title} price={data[element].price}/>
        return <Item title={...element}/>
      })}
      </ul>
    );
  };

  export default Transection