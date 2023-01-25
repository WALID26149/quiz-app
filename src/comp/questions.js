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
   {
    questionText: 'Inside which HTML element do we put the JavaScript?',
    answerOptions: [
      { answerText: '<javascript>', isCorrect: false },
      { answerText: '<script>', isCorrect: true },
      { answerText: '<js>', isCorrect: false },
      { answerText: '<scripting>', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the correct JavaScript syntax to change the content of the <p id="demo">This is a demonstration.</p>',
    answerOptions: [
      { answerText: 'document.getElementById("demo").innerHTML="Hello World"', isCorrect: false },
      { answerText: '#demo.innerHTML="Hello World"', isCorrect: false },
      { answerText: 'document.getElement("p").innerHTML="Hello World"', isCorrect: true },
      { answerText: 'document.getElementByName("p").innerHTML="Hello World"', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answerOptions: [
      { answerText: '<script href="xxx.js">', isCorrect: false },
      { answerText: '<script name="xxx.js">', isCorrect: false },
      { answerText: '<script url="xxx.js">', isCorrect: false },
      { answerText: '<script src="xxx.js">', isCorrect: true },
    ],
  },
  {
    questionText: 'How to write an IF statement in JavaScript?',
    answerOptions: [
      { answerText: 'if i = 5 then', isCorrect: false },
      { answerText: 'if (i == 5)', isCorrect: true },
      { answerText: 'if i = 5', isCorrect: false },
      { answerText: 'if i == 5 then', isCorrect: false },
    ],
  },
  {
    questionText: 'What is Git?',
    answerOptions: [
      { answerText: 'A version control system.', isCorrect: true },
      { answerText: 'A programming language.', isCorrect: false },
      { answerText: 'A remote repository platform.', isCorrect: false },
      { answerText: 'A nickname for GitHub.', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the command to add all files and changes of the current folder to the staging environment of the Git repository?',
    answerOptions: [
      { answerText: 'git add --files', isCorrect: false },
      { answerText: 'git add', isCorrect: false },
      { answerText: ' git add --all', isCorrect: true },
      { answerText: ' git add .', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the command to get the current status of the Git repository?',
    answerOptions: [
      { answerText: 'git config --status', isCorrect: false },
      { answerText: 'git status', isCorrect: true },
      { answerText: 'git getStatus', isCorrect: false },
      { answerText: '--status', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the command to initialize Git on the current repository?',
    answerOptions: [
      { answerText: 'git init', isCorrect: true },
      { answerText: 'initialize git', isCorrect: false },
      { answerText: 'git start', isCorrect: false },
      { answerText: 'start git', isCorrect: false },
    ],
  },
  {
    questionText: 'What command is used to start the React local development server?',
    answerOptions: [
      { answerText: 'npm serve', isCorrect: false },
      { answerText: 'npm start', isCorrect: true },
      { answerText: 'npm build', isCorrect: false },
      { answerText: 'npm run dev', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the children prop?',
    answerOptions: [
      { answerText: 'A property that lets you pass data to child components', isCorrect: false },
      { answerText: 'A property that lets you nest components in other components', isCorrect: true },
      { answerText: 'A property that lets you set an object as a property', isCorrect: false },
      { answerText: 'A property that adds child values to state', isCorrect: false },
    ],
  },
  {
    questionText: 'what is a full-stack developer?',
    answerOptions: [
      { answerText: 'c ++ developer', isCorrect: false },
      { answerText: 'front-end developer', isCorrect: false },
      { answerText: 'front-end & back-end developer', isCorrect: true },
      { answerText: 'back-end developer', isCorrect: false },
    ],
  },
  {
    questionText: "what's API stands for",
    answerOptions: [
      { answerText: 'application programming interface', isCorrect: true },
      { answerText: 'application protocol interface', isCorrect: false },
      { answerText: 'add port interface', isCorrect: false },
      { answerText: 'application programming IT', isCorrect: false },
    ],
  },
  ];

  export default questions;