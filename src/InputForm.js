import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function InputForm() {





    return (
        <div className='centre'>
            <div>
                <p>I am thinking of a number between 1 and 100. Guess the Lucky Number!</p>
                <p>You have made {0} guesses</p>

            </div>

            <div>
                <Form >
                    <hr />
                    <input type="text" name="inputguess">

                    </input>
                    <hr />
                    <br></br>
                    <Button type="submit">Guess</Button>
                    <br></br>
                    <Button type="reset">Reset</Button>
                </Form>
            </div>
            <div>
                <p>Guess {''}</p>
            </div>



        </div>



    )


}

export default InputForm