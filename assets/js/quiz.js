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
  

// ===== QUIZ LOGIC =====
// Track user's score and which question they are on
let quizScore = 0, quizIndex = 0;
// ================= RENDER QUESTION =================
// This function displays the current quiz question and its options
function renderQuestion() {

    // If we have reached the end of the questions, show results
    if (quizIndex >= quizQuestions.length) {
      showQuizResult();
      return;
    }
  
    // Get the current question object
    const q = quizQuestions[quizIndex];
  
    // Copy the options array so we can shuffle without modifying original
    const options = [...q.options];
    shuffle(options); // Shuffle options to randomize button order
  
    // Build the HTML for the question card
    let html = `<div class="quiz-card"><h5>${quizIndex + 1}. ${q.q}</h5>`;
  
    // If the question has an image, add it to the card
    if (q.img) html += `<img src="${q.img}" class="quiz-img" alt="Road Sign Placeholder">`;
  
    // Add a button for each option
    options.forEach(opt =>
      html += `<button class="btn btn-outline-dark btn-option" onclick="answerQuiz(this,'${q.answer}')">${opt}</button>`
    );
  
    html += `</div>`;
  
    // Insert the question HTML into the page
    document.getElementById("quizContainer").innerHTML = html;
  
    // Update the progress bar
    updateProgress(); 
  } 
  // ================= HANDLE ANSWER =================
// Called when a user clicks an answer button
function answerQuiz(btn, ans) {

    // Disable all option buttons after selection
    const buttons = document.querySelectorAll(".btn-option");
    buttons.forEach(b => {
      b.disabled = true;
  
      // Highlight the correct answer
      if (b.textContent === ans) b.classList.add("correct");
    });
  
    // Increment score if the selected answer is correct
    if (btn.textContent === ans) quizScore++;
    else btn.classList.add("incorrect"); // Otherwise mark wrong button
  
    // Wait briefly and then render next question
    setTimeout(() => {
      quizIndex++;
      renderQuestion();
    }, 500);
  } 
  // ================= SHOW QUIZ RESULT =================
// Displays the final score and saves it in local storage
function showQuizResult() {
    document.getElementById("quizContainer").innerHTML = ""; // Clear quiz area
    document.getElementById("quizResult").innerHTML =
      `<h4>Quiz Score: ${quizScore}/${quizQuestions.length}</h4>`;
  
    // Complete the progress bar
    document.getElementById("quizProgress").style.width = "100%";
    document.getElementById("quizProgress").textContent = "100%";
  
    // Save the score for later use (optional)
    localStorage.setItem("practiceQuizScore", quizScore);
  }
  // ================= UPDATE PROGRESS BAR =================
// Updates visual progress indicator as user goes through questions
function updateProgress() {
    const perc = (quizIndex / quizQuestions.length) * 100;
    document.getElementById("quizProgress").style.width = perc + "%";
    document.getElementById("quizProgress").textContent = Math.round(perc) + "%";
  }
  // ================= UPDATE PROGRESS BAR =================
// Updates visual progress indicator as user goes through questions
function updateProgress() {
    const perc = (quizIndex / quizQuestions.length) * 100;
    document.getElementById("quizProgress").style.width = perc + "%";
    document.getElementById("quizProgress").textContent = Math.round(perc) + "%";
  } 

  // ================= RESTART QUIZ =================
// Resets the quiz and hazard perception data to allow re-taking
function restartQuiz() {
    // Reset quiz variables
    quizScore = 0;
    quizIndex = 0;
    localStorage.removeItem("practiceQuizScore");
  
    // Reset hazard perception tracking variables
    currentHazardIndex = 0;
    totalScore = 0;
    clicksThisVideo = 0;
    validClickRecorded = false;
  
    // Shuffle questions and render the first one
    shuffle(quizQuestions);
    renderQuestion();
  
    // Reset hazard perception video to first video
    loadHazardVideo(0);
  } 
  // ================= SHUFFLE HELPER =================
// Randomly shuffles an array in place
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // ===== INITIALISE QUIZ =====
// Render the first question immediately on page load
renderQuestion(); 

// ================== HAZARD PERCEPTION VIDEOS ==================
// Define each hazard video and the time window where a hazard occurs
const hazardVideos = [
    { src: "assets/videos/hazard-1.mp4", hazardStart: 5, hazardEnd: 10 },
    { src: "assets/videos/hazard-2.mp4", hazardStart: 4, hazardEnd: 9 },
    { src: "assets/videos/hazard-3.mp4", hazardStart: 6, hazardEnd: 12 }
  ];
  
  
  
  





// //  Button always sends same value

// document.getElementById("answerBtn").addEventListener("click", function () {
//     checkAnswer("Stop"); // Always sends Stop
//   });
  
//   function checkAnswer(userAnswer) {
//     const correctAnswer = "Stop";
  
//     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//       console.log("Correct");
//     } else {
//       console.log("Incorrect");
//     }
//   }
  
  
  
  
  

  
  
  
  