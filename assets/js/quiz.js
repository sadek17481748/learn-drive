// ============================
// Quiz Questions Array
// ============================

// The following array stores all quiz questions for the Practice Quiz section.
// Each item in the array is an object representing a single question.
const quizQuestions = [
    {
      // The question text
      q: "What does a flashing amber traffic light mean?",
      
      // An array of options for the user to select from
      options: ["Stop immediately", "Proceed with caution", "Go"],
      
      // The correct answer for this question
      answer: "Proceed with caution"
    },
    {
      q: "When should you check your mirrors?",
      options: ["Every few minutes", "Before and during maneuvers", "Only at the start"],
      answer: "Before and during maneuvers"
    },
    {
      q: "What is the purpose of anti-lock braking system (ABS)?",
      options: ["Prevent skidding", "Increase speed", "Stop engine"],
      answer: "Prevent skidding"
    }
  ]; 
  

/




// Function works but is never triggered
//not connected to USER iNTERFACE
function checkAnswer(userAnswer) {
    const correctAnswer = "Stop";
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }
  
  // No event listener attached
  
  
  
  

  
  
  
  