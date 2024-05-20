
import React from 'react';

function EmployeeInfo(props) {

    // console.log(props.name);

    return(
        <>
            <h1>{props.name}</h1>
            <ul style={{listStyleType: 'none', textAlign: 'left'}}>
                <li>From: {props.city} {props.state}</li>
                <li>Position: {props.posistion}</li>
                <li>Favorite Food: {props.food}</li>
            </ul>
        </> // works the same if you have <> and </>... make this a <div> if you want to style it... can't style fragments
    )

}


export default EmployeeInfo;