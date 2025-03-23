import List from "./List.jsx";

function App() {
    const fruits =
        [
        { id: 1, name: "Apple", calories: 52 },
        { id: 2, name: "Banana", calories: 96 },
        { id: 3, name: "Orange", calories: 43 },
        { id: 4, name: "Mango", calories: 60 }
    ];

    const vegetables =
        [
        { id: 5, name: "Carrot", calories: 41 },
        { id: 6, name: "Broccoli", calories: 55 },
        { id: 7, name: "Spinach", calories: 23 },
        { id: 8, name: "Potato", calories: 77 }
    ];

    return (
        <>
            <List items={fruits} category="Fruits" />
            <List items={vegetables} category="Vegetables" />
        </>
    );
}

export default App;
