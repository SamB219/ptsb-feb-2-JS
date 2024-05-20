import React from 'react';
import PresidentVotes from './PresidentVotes';




function DisplayTotals(props) {

    return(
        <>
            <p>{props.name} had a total vote count of {props.count}</p>
        </>
    )


}


export default DisplayTotals;