import React from "react";
import DisplayTotals from "./DisplayTotals";




function PresidentVotes(props) {
    
    const votes = [
        { name: "Abe Lincoln", count: 139033},
        { name: "Stephen Douglas", count: 115509},
    ]

    return(
        <>
        <h1>Presidents!</h1>
        {votes.map((president, i) => {
            return(
                <DisplayTotals  key={i} name={president.name} count={president.count} />

            )
        })}
        </>
    )

}


export default PresidentVotes;