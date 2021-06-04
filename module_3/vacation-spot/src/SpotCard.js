
import React from "react"

//const colorBg = (props) => {
//    const colorVacation = props.vacationData.timeToGo;
//    switch (colorVacation) {
//        case 'Spring':
//            return '"{{backgroundcolor:green}}';
//        case 'Winter':
//            return '"{{backgroundColor:blue}}';
//        case 'Fall':
//            return '"{{backgroundColor:brown}}';
//        case 'Summer':
//            return '"{{backgroundColor:red}}';
//        default:
//            return ''
        
//    };
//}

function SpotCard (props) {
    console.log(props);


    return (
        <div className="contact-card" >
                <h1>{props.vacationData.place}</h1>
                <h2>{props.vacationData.emoji}</h2>
                <h3>{props.vacationData.price}</h3>
                <p >{props.vacationData.timeToGo}</p>
        </div>
    )
}

export default SpotCard