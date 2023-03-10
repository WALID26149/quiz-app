import React ,{ useState } from 'react';
import questions from './questions';

  export default function App() {
     
    //  use state hooks
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);
   
     const handleAnswerOptionClick = (isCorrect) => {
       if (isCorrect) {
         setScore(score + 1);
       }
   
       const nextQuestion = currentQuestion + 1;
       if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion);
       } else {
         setShowScore(true);
       }
     };

    //  get the date
    const date = new Date().getFullYear();

    //  display in web 
     return (
    <div>
      <nav className='logo-img'>
        <img src="https://cdn-icons-png.flaticon.com/512/984/984196.png" alt="img" />
      </nav>
       <div className='app'>
         {showScore ? (
           <div className='score-section'>
             You scored {score} out of {questions.length}
           </div>
         ) : (
           <>
             <div className='question-section'>
               <div className='question-count'>
                 <span>Question {currentQuestion + 1}</span>/{questions.length}
               </div>
               <div className='question-text'>{questions[currentQuestion].questionText}</div>
             </div>
             <div className='answer-section'>
               {questions[currentQuestion].answerOptions.map((answerOption) => (
                 <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
               ))}
             </div>
           </>
         )}
       </div>
       <footer className='copy-right'>
         <p>Walid Allan CopyRight © {date}</p>
       </footer>
      </div>
     );
   }
