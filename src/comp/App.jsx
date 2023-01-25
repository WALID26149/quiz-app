import React ,{ useState } from 'react';

  export default function App() {
    // the array questions
     const questions = [
       {
         questionText: 'What does CSS stand for?',
         answerOptions: [
           { answerText: 'Computer Style Sheets', isCorrect: false },
           { answerText: 'Creative Style Sheets', isCorrect: false },
           { answerText: 'Cascading Style Sheets', isCorrect: true },
           { answerText: 'Colorful Style Sheets', isCorrect: false },
         ],
       },
       {
         questionText: 'Where in an HTML document is the correct place to refer to an external style sheet?',
         answerOptions: [
           { answerText: 'In the <body> section', isCorrect: false },
           { answerText: 'At the end of the document', isCorrect: false },
           { answerText: "You can't refer to an external style sheet", isCorrect: false },
           { answerText: 'In the <head> section', isCorrect: true },
         ],
       },
       {
         questionText: 'Which HTML tag is used to define an internal style sheet?',
         answerOptions: [
           { answerText: '<script>', isCorrect: false },
           { answerText: '<style>', isCorrect: true },
           { answerText: '<headStyle>', isCorrect: false },
           { answerText: '<css>', isCorrect: false },
         ],
       },
       {
         questionText: 'Which HTML attribute is used to define inline styles?',
         answerOptions: [
           { answerText: 'class', isCorrect: false },
           { answerText: 'font', isCorrect: false },
           { answerText: 'style', isCorrect: true },
           { answerText: 'styles', isCorrect: false },
         ],
       },
       {
        questionText: 'Which is the correct CSS syntax?',
        answerOptions: [
          { answerText: '{body:color=black;}', isCorrect: false },
          { answerText: '{body;color:black;}', isCorrect: false },
          { answerText: 'body:color=black;', isCorrect: false },
          { answerText: 'body {color: black;}', isCorrect: true },
        ],
      },
      {
        questionText: 'How do you insert a comment in a CSS file?',
        answerOptions: [
          { answerText: 'this is a comment', isCorrect: false },
          { answerText: '/* this is a comment */', isCorrect: true },
          { answerText: '// this is a comment', isCorrect: false },
          { answerText: '// this is a comment //', isCorrect: false },
        ],
      },
      {
        questionText: 'Which property is used to change the background color?',
        answerOptions: [
          { answerText: 'color', isCorrect: false },
          { answerText: 'bgcolor', isCorrect: false },
          { answerText: 'background-color', isCorrect: true },
          { answerText: 'bgColor', isCorrect: false },
        ],
      },
      {
        questionText: 'How do you add a background color for all <h1> elements?',
        answerOptions: [
          { answerText: 'h1 {background-color:#FFFFFF;}', isCorrect: true },
          { answerText: 'all.h1 {background-color:#FFFFFF;}', isCorrect: false },
          { answerText: 'h1.setAll {background-color:#FFFFFF;}', isCorrect: false },
          { answerText: 'h1.all {background-color:#FFFFFF;}', isCorrect: false },
        ],
      },
     ];
     
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

    //  display in web 
     return (
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/14/14554.png" alt="img" />
      </div>,
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
     );
   }
