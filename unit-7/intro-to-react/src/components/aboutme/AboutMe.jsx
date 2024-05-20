/*
Create a new folder called aboutme within the components folder.
Create a new file inside the folder called AboutMe.jsx.
Create a <p> tag that notes where you grew up. 
Use variables for city and state.
Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
Export the component.
Import the component into App.jsx and mount it between the Header and Footer components.
*/

function AboutMe(){
    const city = 'Baltimore, ';
    const state = 'MD';

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'green',
            fontSize: '20px'
        },
        p: {
            fontSize: '25px'
        }
    }
    
    return(
        <div>
            <p style={styles.p}>My name's Sam, and i'm from {city + state}</p>
            <ul style={styles.ul}>
                <li>Orlando,FL</li>
                <li>Catonsville, MD</li>
                <li>Portland, ME</li>
            </ul>
        </div>
    )
    
}

export default AboutMe;