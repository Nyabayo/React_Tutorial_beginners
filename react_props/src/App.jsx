// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <component key=value />

//PropTypes = a mechanism that ensures that the passed value is of the correct datatype. age: PropTypes.number

// defaultProps = default values for props in case they are not passed from the parent component


import Student from "./Student.jsx";

function App() {


  return (
    <>
        <Student name="Ernest" age={23} isStudent={true}></Student>
        <Student name="Alice" age={21} isStudent={false} />
      <Student name="Bob" age={22} isStudent={true} />
      <Student name="Charlie" age={20} isStudent={false} />
      <Student name="Diana" age={24} isStudent={true} />
      <Student name="Ethan" age={25} isStudent={false} />
      <Student name="Fiona" age={19} isStudent={true} />
         <Student name="josh"/>  {/* No props passed, will use default values */}
    </>
  )
}

export default App
