import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [question, setquestion] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const input = useRef([]);

  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then((res) => {
        console.log(res.data)
        setquestion(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  // next question

  const nextQuestion = () => {
    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);

    
    
    if (currentIndex < question.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      console.log("maalik question khtm hogaye")
    }
  }

  // shuffle array
  function shuffleArray(arr) {
    const emptyArr = []
    const shuffleArr = []
    for (let i = 0; i < arr.length; i++) {
      const randomNumber = Math.floor(Math.random() * arr.length)
      if (emptyArr.includes(randomNumber)) {
        // console.log("number already mujood ha");
        i--
      } else {
        emptyArr.push(randomNumber)
        // console.log(randomNumber);
        shuffleArr[randomNumber] = arr[i]
      }

    }
    return shuffleArr

  }
  return (
    <>
      <h1>Quiz App result 10/100</h1>
      {question ?
        <div>
          <h1>Q{currentIndex + 1}: {question[currentIndex].question.text}</h1>
          {shuffleArray([...question[currentIndex].incorrectAnswers , question[currentIndex].correctAnswer]).map((item, index) => {
            return <div key={`option${index}`}>
              <input type="radio" name='question' value={item} id={index} ref={el => input.current[index] = el} />
              <label htmlFor={index}>{item}</label>
            </div>
          })}
          <button onClick={nextQuestion}>Next</button>
        </div>
        : <h1>Loading...</h1>}
    </>
  )
}

export default App