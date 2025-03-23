
//Example 1
// function List(){
//
//     const fruits = ["Apple", "Banana", "Orange", "Mango"];
//
//     const listItems = fruits.map(fruit => <li>{fruit}</li>);
//
//     return(<ol>{listItems}</ol>);
//
// }
// export default List

//Example 2
// List.jsx
function List(props) {
    return (
        <div className="list-container">
            <h2 className="list-title">{props.category}</h2>
            <ol className="list-items">
                {props.items.map((item) => (
                    <li key={item.id} className="list-item">
                        {item.name} - {item.calories} kcal
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default List;

