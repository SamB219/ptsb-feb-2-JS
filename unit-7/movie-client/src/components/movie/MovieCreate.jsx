import React, { useRef } from 'react'
import { Button, FormGroup, Label, Form, Input } from 'reactstrap';
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environment';

function MovieCreate(props) {

    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const lengthRef = useRef();
    const realeasedRef = useRef();

    const ratings = [null, 'G', 'PG', 'PG-13', "NC-17", 'R'];

    const yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1888; i--) years.push(i);

        return(
            <>
                <Input type='select' innerRef={realeasedRef}>
                    {years.map((year, index) => {
                        return <option key={index} value={year}>{year}</option>
                    })}
                </Input>
            </>

        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const genre = genreRef.current.value;
        const rating = ratingRef.current.value;
        const length = lengthRef.current.value;
        const realeaseYear = realeasedRef.current.value;

        let url = `${baseURL}/movies`; //connects to the base URL in environment folder

        let body = JSON.stringify({
            title,genre,rating,length,realeaseYear
        });

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json'); // setting content to be passed
        myHeaders.append('Authorization', props.token); //token to evaluate

        const options = {
            headers: myHeaders,
            body,
            method: 'POST'
        }// packaging up all our options in an object

        try {
            
            const res = await fetch(url, options);
            // const data = await res.json();

            props.fetchMovies();

        } catch (err) {
            console.error(err.message)
        }
    }



    return (

        <>
            <h1>Add Movie</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        name='movieTitle'
                        innerRef={titleRef}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Genre</Label>
                    <Input 
                        type='select'
                        innerRef={genreRef}
                        required
                    >
                        <option value={''}></option>
                        <option value={'Comedy'}>Comedy</option>
                        <option value={'Drama'}>Drama</option>
                        <option value={'Action'}>Action</option>
                        <option value={'Horror'}>Horror</option>
                        <option value={'Thriller'}>Thriller</option>
                        <option value={'Family'}>Family</option>
                        <option value={'Documentary'}>Documentary</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Rating</Label>
                    <Input
                        type='select'
                        innerRef={ratingRef}
                    >
                        {ratings.map((r,i) => <option key={i} value={r}>{r}</option>)}
                    
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Length (in minutes)</Label>
                    <Input 
                        type='number'
                        innerRef={lengthRef}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Year Realeased</Label>
                        {yearRange()}
                </FormGroup>

                <FullButton>
                    <Button color='success'>Add Movie</Button>
                </FullButton>
            </Form>
        </>
)
}

export default MovieCreate