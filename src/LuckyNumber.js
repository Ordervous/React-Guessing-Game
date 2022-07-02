import React, {useState} from 'react'



function LuckyNumber() {

    const [] = useState(getLuckyNumber(1,100))
    
    function getLuckyNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    console.log(getLuckyNumber(1, 100))

}


export default LuckyNumber