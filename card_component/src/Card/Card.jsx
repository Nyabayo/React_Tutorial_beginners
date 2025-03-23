
// import mine from './assets/Mine.jpeg'
import "./Card.css";

function  Card({name, job, image}){

    // const title = "Card Components"
    //
    // return(
    //     <div className="card">
    //         <img className="card-image" src={profilepic} alt="profile picture"/>
    //         <h2 className="card-title">{title.toUpperCase()}</h2>
    //         <p className="card-par">I make competitive and responsive apps using react and django</p>
    //     </div>
    // );
    return(
        <div>
            <img className="card-image" src={image} alt={name} />
            <h2 className="card-name">{name}</h2>
            <p className="card-job">{job}</p>
        </div>
    );
}
export default Card