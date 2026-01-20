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
    {q:"Road sign: triangular sign with children – what does it mean?", options:["School ahead","Playground","Hospital"], answer:"School ahead", img:"assets/images/children.jpg"},
  {q:"What is the purpose of anti-lock braking system (ABS)?", options:["Prevent skidding","Increase speed","Stop engine"], answer:"Prevent skidding"},
  {q:"What does a red octagon sign indicate?", options:["Stop","Yield","Do Not Enter"], answer:"Stop", img:"assets/images/stop-sign.jpg"},
  {q:"How close should you park to a junction?", options:["5m","10m","15m"], answer:"10m"},
  {q:"At what blood alcohol limit is it illegal to drive in the UK?", options:["0.05%","0.08%","0.02%"], answer:"0.08%"},
  {q:"Road sign: circular sign with red line through horn – what does it mean?", options:["No honking","No entry","Yield"], answer:"No honking", img:"assets/images/no-entry.jpeg"},
  {q:"When can you overtake on the left?", options:["Never","When traffic is slow","When on motorway"], answer:"When traffic is slow"},
  {q:"What is the national speed limit on motorways?", options:["60 mph","70 mph","80 mph"], answer:"70 mph"},
  {q:"Road sign: triangular sign with bump image – what does it mean?", options:["Speed bump ahead","Hospital","School zone"], answer:"Speed bump ahead", img:"assets/images/speed-bump.jpeg"},
  {q:"What is the correct hand signal for turning left?", options:["Arm straight out","Arm up","Arm down"], answer:"Arm straight out"},
  {q:"Safe minimum following distance in good conditions?", options:["1 second","2 seconds","5 seconds"], answer:"2 seconds"},
  {q:"Which gear should you use when starting on a hill?", options:["Reverse","First gear","Second gear"], answer:"First gear"},
  {q:"What does a green traffic light mean?", options:["Stop","Go if safe","Caution"], answer:"Go if safe"},
  {q:"What does a blue circle with arrow indicate?", options:["Mandatory direction","Warning","Prohibition"], answer:"Mandatory direction", img:"assets/images/one-way.jpg"},
  {q:"What does a circular sign with red border and number indicate?", options:["Maximum speed","Minimum speed","Lane number"], answer:"Maximum speed", img:"assets/images/speed.jpg"},
  {q:"When entering a roundabout, you must?", options:["Give way to traffic from right","Speed up","Stop"], answer:"Give way to traffic from right"},
  {q:"Road sign: white rectangle with black arrow pointing left – meaning?", options:["One-way left","No left turn","Turn left permitted"], answer:"One-way left", img:"assets/images/left.jpg"},
  {q:"What is a dual carriageway?", options:["Two lanes each way","One lane each way","Motorway only"], answer:"Two lanes each way"},
  {q:"When is it legal to use a mobile phone while driving?", options:["Never","When stopped at lights","Hands-free only"], answer:"Hands-free only"},
  {q:"What must you do at a zebra crossing if pedestrians are waiting?", options:["Stop","Speed up","Honk"], answer:"Stop"},
  {q:"What does a red triangle with exclamation mark mean?", options:["General warning","Stop","Yield"], answer:"General warning", img:"assets/images/warning.jpeg"},
  {q:"What does a solid white line at the side indicate?", options:["Lane boundary","Edge of carriageway","No stopping"], answer:"Edge of carriageway"},
  {q:"How often should you check tyre pressure?", options:["Monthly","Weekly","Before each journey"], answer:"Monthly"},
  {q:"When should you use dipped headlights?", options:["At night","In fog","During the day"], answer:"At night"},
  {q:"What is the purpose of a solid yellow box junction?", options:["Keep clear","Stop","Yield"], answer:"Keep clear"},
  {q:"Road sign: circular sign with red line through horn – what does it mean?", options:["No honking","No entry","Yield"], answer:"No honking", img:"assets/images/no-entry.jpeg"},
  {q:"Road sign: triangular sign with children – what does it mean?", options:["School ahead","Playground","Hospital"], answer:"School ahead", img:"assets/images/children.jpg"}
];

    
  ]; 
  

/





//  Button always sends same value

document.getElementById("answerBtn").addEventListener("click", function () {
    checkAnswer("Stop"); // Always sends Stop
  });
  
  function checkAnswer(userAnswer) {
    const correctAnswer = "Stop";
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }
  
  
  
  
  

  
  
  
  