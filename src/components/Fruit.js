const Fruit = ({fruit, index, deleteFruit, beforeEdit}) => {
    return (
        <div key={fruit.id} className="fruit-item">
            <img src={`img/${fruit.image}`} alt={fruit.name} />
            <h4>{fruit.name}</h4>
            <button
                className="btnEdit"
                onClick={() => beforeEdit(index, fruit.name)}
            >
                Edit
            </button>
            <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
        </div>
    );
}

export default Fruit;