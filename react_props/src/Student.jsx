

import PropTypes from "prop-types";

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
//PropTypes = a mechanism that ensures that the passed value is of the correct datatype. age: PropTypes.number
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

    // defaultProps = default values for props in case they are not passed from the parent component
    Student.defaultProps = {
        name: "Guest",
        age: 20,
        isStudent: true,
    };

export default Student