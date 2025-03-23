
import Card from "./Card/Card.jsx";
import mine from './assets/Mine.jpeg'
import john from './assets/john.jpg'
import jane from './assets/jane.jpg'

function App() {


  return (
    <>
        <Card name="Ernest Osindo" job={"Software Developer"} image={mine}></Card>
        <Card name="John Doe" job="Graphic Designer" image={john}></Card>
        <Card name="Jane Smith" job="Maths Teacher" image={jane}></Card>
    </>
  );
}

export default App
