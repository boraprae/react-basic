const Item = ({title,price}) => {
    return (
      <li>
        {title} <span>{price}</span>
      </li>
    );
  };
//   const Item = (props) => {
//     const {title,price} = props
//     return (
//       <li>
//         {title} <span>{price}</span>
//       </li>
//     );
//   };

  export default Item