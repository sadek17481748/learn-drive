// ================== QUIZ QUESTIONS ARRAY ==================
// 
 
const quizQuestions = [
    // This array stores all the questions for the Practice Quiz.

    {q:"What does a flashing amber traffic light mean?", options:["Stop immediately","Proceed with caution","Go"], answer:"Proceed with caution"},
    {q:"Road sign: blue rectangle with white 'P' – what does it indicate?", options:["Parking area","Hospital","No parking"], answer:"Parking area", img:"assets/images/parking.jpg"},
    {q:"When should you check your mirrors?", options:["Every few minutes","Before and during maneuvers","Only at the start"], answer:"Before and during maneuvers"},
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
  
  
  
  // ===== QUIZ LOGIC =====
// Variables to track user's score and current question index
let quizScore = 0, quizIndex = 0;

// ================== RENDER QUESTION FUNCTION ==================
// Displays the current question and its answer options in the HTML
function renderQuestion() {
  // If all questions have been answered, display the result
  if (quizIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }

  const q = quizQuestions[quizIndex]; // Current question object
  const options = [...q.options];      // Create a copy of options array
  shuffle(options);                    // Randomize order of answer options

  // Start building the quiz card HTML
  let html = `<div class="quiz-card"><h5>${quizIndex + 1}. ${q.q}</h5>`;

  // If the question has an image, include it
  if (q.img) html += `<img src="${q.img}" class="quiz-img" alt="Road Sign Placeholder">`;

  // Create a button for each answer option with an onclick handler
  options.forEach(opt =>
    html += `<button class="btn btn-outline-dark btn-option" onclick="answerQuiz(this,'${q.answer}')">${opt}</button>`
  );

  html += `</div>`;

  // Render the quiz card inside the quiz container element
  document.getElementById("quizContainer").innerHTML = html;

  // Update progress bar based on current question index
  updateProgress();
}

// ================== ANSWER SELECTION FUNCTION ==================
// Handles user's selection, scoring, and visual feedback
function answerQuiz(btn, ans) {
  const buttons = document.querySelectorAll(".btn-option");

  // Disable all buttons after selection and highlight the correct answer
  buttons.forEach(b => {
    b.disabled = true;          // Prevent multiple selections
    if (b.textContent === ans)  // Mark the correct answer
      b.classList.add("correct");
  });

  // Increment score if user chose the correct answer
  if (btn.textContent === ans) quizScore++;
  else btn.classList.add("incorrect"); // Mark incorrect selection visually

  // Wait 500ms before moving to the next question
  setTimeout(() => {
    quizIndex++;
    renderQuestion(); // Show next question
  }, 500);
}

// ================== SHOW QUIZ RESULT FUNCTION ==================
// Displays user's final score and stores it locally
function showQuizResult() {
  document.getElementById("quizContainer").innerHTML = ""; // Clear questions
  document.getElementById("quizResult").innerHTML =
    `<h4>Quiz Score: ${quizScore}/${quizQuestions.length}</h4>`; // Show final score

  // Set progress bar to 100% at the end
  document.getElementById("quizProgress").style.width = "100%";
  document.getElementById("quizProgress").textContent = "100%";

  // Save quiz score in localStorage for later use (e.g., combined score with hazard perception)
  localStorage.setItem("practiceQuizScore", quizScore);
}

// ================== UPDATE PROGRESS BAR FUNCTION ==================
// Updates progress bar width and text based on current question
function updateProgress() {
  const perc = (quizIndex / quizQuestions.length) * 100; // Calculate percentage complete
  document.getElementById("quizProgress").style.width = perc + "%";
  document.getElementById("quizProgress").textContent = Math.round(perc) + "%";
}

// ================== RESTART QUIZ FUNCTION ==================
// Resets all quiz and hazard perception states
function restartQuiz() {
  // Reset quiz score and question index
  quizScore = 0;
  quizIndex = 0;
  localStorage.removeItem("practiceQuizScore"); // Clear saved score

  // Reset hazard perception variables
  currentHazardIndex = 0;
  totalScore = 0;
  clicksThisVideo = 0;
  validClickRecorded = false;

  shuffle(quizQuestions); // Shuffle questions to randomize order
  renderQuestion();       // Start quiz from first question
  loadHazardVideo(0);     // Load first hazard video
}

// ================== SHUFFLE HELPER FUNCTION ==================
// Randomizes the order of items in an array using Fisher-Yates algorithm
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
}

// ===== INITIALIZE QUIZ =====
// Start by rendering the first question
renderQuestion();

// ================== HAZARD PERCEPTION ==================
// Array of hazard videos with start and end times for scoring
const hazardVideos = [
  { src: "assets/videos/hazard-1.mp4", hazardStart: 5, hazardEnd: 10 },
  { src: "assets/videos/hazard-2.mp4", hazardStart: 4, hazardEnd: 9 },
  { src: "assets/videos/hazard-3.mp4", hazardStart: 6, hazardEnd: 12 }
];

// Variables to track hazard video progress and scoring
let currentHazardIndex = 0;
let totalScore = 0; // DVSA-style hazard points
let clicksThisVideo = 0; // Number of clicks per video
let validClickRecorded = false; // Prevent multiple scoring clicks

// DOM references for hazard perception elements
const video = document.getElementById("hazardVideo");
const nextBtn = document.getElementById("nextHazardBtn");
const scoreDisplay = document.getElementById("hazardScoreDisplay");
const videoCount = document.getElementById("hazardVideoCount");

// ================== LOAD HAZARD VIDEO FUNCTION ==================
// Loads a hazard video and resets click tracking
function loadHazardVideo(index) {
  if (index >= hazardVideos.length) {
    // All videos complete: hide video and next button
    video.style.display = "none";
    nextBtn.style.display = "none";
    videoCount.textContent = "";

    // Calculate combined score with quiz
    const quizScore = parseInt(localStorage.getItem("practiceQuizScore")) || 0;
    const quizMax = quizQuestions.length;
    const hazardMax = hazardVideos.length * 5; // Max 5 points per hazard
    const totalMax = quizMax + hazardMax;
    const combined = quizScore + totalScore;
    const percentage = Math.round((combined / totalMax) * 100);

    const passed = percentage >= 80; // Pass threshold 80%

    // Display final results
    scoreDisplay.innerHTML = `
      <h4>Final Result</h4>
      <p>Quiz: ${quizScore} / ${quizMax}</p>
      <p>Hazard: ${totalScore} / ${hazardMax}</p>
      <h5>Overall: ${percentage}%</h5>
      <h5 style="color:${passed ? "green" : "red"}">
        ${passed ? "PASS" : "FAIL (80% required)"}
      </h5>
    `;
    return;
  }

  // Load video source
  const v = hazardVideos[index];
  video.src = v.src;
  video.currentTime = 0;
  video.play();

  // Reset click tracking for the new video
  clicksThisVideo = 0;
  validClickRecorded = false;

  // Update video counter display
  videoCount.textContent = `Video ${index + 1} of ${hazardVideos.length}`;
}

// ================== VIDEO CLICK EVENT ==================
// Handles user clicks and scores based on reaction time
video.addEventListener("click", () => {
  // Ignore extra clicks beyond 8 or if already scored
  if (clicksThisVideo >= 8 || validClickRecorded) return;

  clicksThisVideo++;

  const time = video.currentTime; // Current video time
  const hazard = hazardVideos[currentHazardIndex]; // Current hazard video

  // Check if click is within hazard window
  if (time >= hazard.hazardStart && time <= hazard.hazardEnd) {
    const window = hazard.hazardEnd - hazard.hazardStart;
    const reaction = time - hazard.hazardStart;

    // Assign points based on how fast the user reacted
    let points = 1;
    if (reaction <= window * 0.2) points = 5;
    else if (reaction <= window * 0.4) points = 4;
    else if (reaction <= window * 0.6) points = 3;
    else if (reaction <= window * 0.8) points = 2;

    totalScore += points;
    validClickRecorded = true; // Ensure only one valid click per hazard
  }
});

// ================== NEXT VIDEO BUTTON ==================
// Move to the next hazard video when button is clicked
nextBtn.addEventListener("click", () => {
  currentHazardIndex++;
  loadHazardVideo(currentHazardIndex);
});

// ===== INITIALIZE HAZARD PERCEPTION =====
// Load the first hazard video on page load
loadHazardVideo(currentHazardIndex);


  
  
  
  
  

  
  
  
  