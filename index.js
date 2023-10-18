const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map((item) => {
//   return titleCased
// });

//function titleCased() {
//  const titles = tutorials.map((t) => t.split(" ")) // first step turn each sentence into an array of words
  // console.log(titles, "titles") // I'm trying to figure out the difference between titles and what I'm doing with words
 // const words = titles.map((words) => { // if we get disconnected I'll work on some notes and just send them to you later in a replit or something
   // words.map((w) => {

     //  console.log(w.charAt(0).toUpperCase() + w.slice(1))

  //   }
 //   )
 // })

 
//  }
//i'm still working right now and won't get a chance to look at this until later tonight

function titleCased() {
const titles = tutorials.map((tutorials) => tutorials.split(" "))


  const capitalizeTitles = titles.map(tutorial => tutorial.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) )
 

 const joinedCapitalizeTitles = capitalizeTitles.map((tutorials) => tutorials.join(" "))
 return joinedCapitalizeTitles
} 