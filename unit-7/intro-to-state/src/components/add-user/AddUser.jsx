import {React, useState} from 'react'


function AddUser({names, setNames}) {

    const [ text, setText ] = useState('');

    const handleChange = e => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(names, setNames);

        let addUser = [...names]
        addUser.push(text); // using our state var and pushing our text

        setNames(addUser); // replacing our old array w/ a new array

        setText(''); // resetting our text state
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" 
                value={text}
                onChange={e => handleChange(e)}
            />
            <br />
            <input type="submit" value="Add" />
        </form>
)
}

export default AddUser