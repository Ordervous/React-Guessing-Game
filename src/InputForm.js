import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function InputForm() {

    // const getLuckyNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    const [guessNo, keepScore] = useState(null)
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState("Start Guessing")
    const [random, setRandom] = useState(null)


    useEffect(() => {

        if (random === null) {
            setRandom(
                JSON.parse(localStorage.getItem("randomNumber")) || getRandom()
            )
        }

        if (guessNo === null) {
            keepScore(
                JSON.parse(localStorage.getItem("numGuess")) || 0
            )
        }

    }, [])

    // gets random number and set's it to local storage
    function getRandom() {
        const getLuckyNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)

        localStorage.setItem("randomNumber", JSON.stringify(getLuckyNumber))

        return getLuckyNumber;
    }

    function handleSubmit(e) {
        e.preventDefault();
        let parsedNum = parseInt(guess)
        if (parsedNum === random) {
            setMessage("You got it! You must be prophetic!")
        } else if (random > parsedNum) {
            setMessage("Number is too low ")
        } else if (random < parsedNum) {
            setMessage("Number is too high")
        }

        keepScore(guessNo + 1);
        localStorage.setItem("numGuess", JSON.stringify(guessNo + 1))
    }

    function handleChange(event) {
        setGuess(event.target.value)
        // Result(guess, getLuckyNumber)
        // sessionStorage.setItem("inputguess", guess)
    }

    // function guessnow(event) {
    //     keepScore(() => guessNo + 1)
    //     Result(guess, getLuckyNumber)
    //     // event.Result(guess, getLuckyNumber)
    //     // setGuess(event.target.value)
    // }

    function submitGuess(event) {
        event.preventDefault();
        // event.handleChange(Result())
        // Result()
        // guessnow(guess)
    }

    // function getLuckyNumber(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return (
    //         Math.floor(Math.random() * (max - min + 1) + min)
    //     )
    // }

    function guessReset() {
        keepScore(0)
        setRandom(null);
        setMessage("Start Guessing")
        localStorage.removeItem("numGuess")
        localStorage.removeItem("randomNumber")

    }

    return (
        <div>
            <div className='text-center lead'>
                <p>I am thinking of a number between 1 and 100. Guess the Lucky Number!</p>
                <p>You have made {guessNo} guesses</p>
            </div>

            <div className='text-center'>
                <Form onSubmit={handleSubmit} className='form'>
                    <hr />
                    <input className='' type="text" onChange={handleChange} name="inputguess"></input>
                    <hr />
                    <div>{message}</div>
                    <Button className='button1 p-2 my-1 btn btn-success' type="submit">Guess</Button>
                    <br>
                    </br>
                    <Button className='button2 p-2 my-1 btn btn-danger' type="reset" onClick={guessReset}>Reset</Button>
                </Form>
            </div>
            <div className='footer'>
                <p>Guess {guessNo}</p>
            </div>

        </div>

    )

}

export default InputForm