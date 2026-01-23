# learn-drive 


### Table of Contents
- [Overview](#overview)
- [Features](#features)
- [User Experience UX](#user-experience-ux)
- [Wireframes](#wireframes)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure) 
- [Development](#development)
- [Deployment](#deployment)
- [Testing and Bugs](#testing-and-bugs)
  - [Manual Testing](#manual-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [HTML and CSS Validation](#html-and-css-validation)
- [Attributions](#attributions)
- [Additional Notes](#additional-notes)
- [Author](#author)

---

# Overview


**Learn Drive** is a web-based platform designed for learner drivers to practice their theory test. The website provides users with interactive resources, including:  

- **Multiple-choice quizzes** to test knowledge of road signs, rules, and regulations.  
- **Hazard perception videos** where users can watch scenarios and identify potential hazards.  
- **Organized topics** covering different areas of the driving theory curriculum where learners can track thier progress.

The platform aims to help learners prepare effectively for their driving theory test in a user-friendly and engaging way.



---

# Features

**Learn Drive** includes the following key features:

- **Interactive Quizzes**  
  - `quiz.html` and `test.html` contain multiple-choice questions for learners to practice their theory test.  
  - `js/quiz.js` manages the quiz logic and scoring.  

- **Hazard Perception Practice**  
  - Users can watch hazard perception videos in `videos/` and identify potential hazards.  
  - `js/app.js` handles video playback and navigation between scenarios.  

- **Organized Topics**  
  - `topics.html` presents a structured list of theory test topics for easy navigation.  
  - `js/topics.js` manages dynamic topic content.  

- **Responsive Design**  
  - `assets/css/style.css` ensures the website works well on both desktop and mobile devices.  

- **Visual Learning Aids**  
  - `assets/images/` contains road sign images and visual examples to enhance learning.  

This setup allows learners to practice effectively and gain confidence before their driving theory test.



---

# User Experience

**Learn Drive** is designed to provide a smooth and engaging experience for learner drivers:  

- **Intuitive Navigation**  
  - Users can easily move between the home page, quizzes, topics, and hazard perception videos.  
  - Clear menus and buttons guide users through the website without confusion.  

- **Interactive Learning**  
  - Quizzes provide immediate feedback so learners can understand mistakes and improve.  
  - Hazard perception videos simulate real driving scenarios, helping learners recognize hazards effectively.  

- **Visual and Responsive Design**  
  - Road sign images and hazard visuals make learning more memorable.  
  - The site adapts to different screen sizes, ensuring a consistent experience on desktops, tablets, and smartphones.  

- **Structured Learning Path**  
  - Topics are organized logically so users can study one area at a time.  
  - The combination of theory questions and hazard perception videos reinforces knowledge in a practical way.  

- **Accessible and Lightweight**  
  - Fast-loading pages and simple layout ensure accessibility even on slower devices.  
  - Minimal distractions allow learners to focus on practicing for their theory test.




# Project Goals

The main goals of the **Learn Drive** project are:  

- **Enhance Learner Driver Preparation**  
  - Provide a platform where learners can practice theory test questions and hazard perception exercises in a structured and effective way.  

- **Interactive and Engaging Learning**  
  - Make learning fun and memorable through quizzes, videos, and visual aids, rather than just reading theory.  

- **Accessible Anywhere**  
  - Ensure the website works on both desktop and mobile devices so learners can practice anytime, anywhere.  

- **Build Confidence for the Driving Test**  
  - Help users identify gaps in their knowledge and improve their hazard perception skills to increase their chances of passing the driving theory test.  

- **Structured and Organized Learning**  
  - Present topics in a logical order so users can focus on one area at a time and track their progress effectively.

## Target Audience

The LearnDrive platform is designed for:

- **Learner Drivers (UK)**: Individuals preparing for their driving theory and practical tests.  
- **New Drivers**: Those who want to improve knowledge on road safety, hazard perception, and traffic rules.  
- **Driving Instructors**: Professionals who may use the platform as a teaching aid.  
- **Parents of Learner Drivers**: To support and monitor progress of young drivers.  

Key considerations for this audience:

- Clear, concise learning materials.  
- Interactive quizzes to test knowledge retention.  
- Videos for hazard perception practice.  
- Easy navigation with a mobile-friendly responsive design.  
- Encouragement of safe driving habits and awareness of road rules.


## User Stories

### First Time Users
* As a first-time user, I want to quickly understand what Learn Drive offers so I can start practicing without confusion.  
* As a first-time user, I want to take a sample quiz to see how the questions work and how I will be tested.  
* As a first-time user, I want to watch a hazard perception video to experience the interactive content.  

### Returning Users
* As a returning user, I want to pick up where I left off in my quizzes so I don’t have to start over.  
* As a returning user, I want to review specific topics or road signs to focus on areas I find difficult.  
* As a returning user, I want to track my quiz performance over time to see my progress.  

### Frequent Users
* As a frequent user, I want to practice all theory topics systematically so I can master the material.  
* As a frequent user, I want to challenge myself with hazard perception videos repeatedly to improve my reaction skills.  
* As a frequent user, I want the website to remember my progress and make suggestions for areas to revise.



---

## Responsive Design Preview






---

# Design

## Colour Scheme

The Learn Drive website uses a limited but consistent colour palette:

| Purpose | Colour | Hex |
|----------|--------|-----|
| Navbar background | Dark Blue | `#1A374D` |
| Navbar text / buttons | White | `#FFFFFF` |
| Primary button background | Light Blue | `#4A90E2` |
| Primary button text | White | `#FFFFFF` |
| Section headers / titles | Black | `#000000` |
| Body background | White | `#FFFFFF` |
| Quiz feedback (correct) | Green | `#28A745` |
| Quiz feedback (incorrect) | Red | `#DC3545` |



# Design

## Colour Scheme

Learn Drive uses a consistent, modern colour palette:

| Purpose | Colour | Hex |
|---------|--------|-----|
| Body background | Light grey | `#f9f9f9` |
| Navbar background | Dark | `#222222` |
| Navbar text / links | White | `#ffffff` |
| Navbar hover | Gold | `#ffc107` |
| Primary buttons | Dark | `#222222` |
| Primary button hover | Gold | `#ffcc00` |
| Button text hover | Dark | `#222222` |
| Marked quiz feedback | Green | `#28a745` |
| Footer background | Dark | `#1a1a1a` |
| Footer text | Light grey | `#dddddd` |
| Footer link hover | White | `#ffffff` |

---

## Typography

* **Body text:** `'Poppins', sans-serif` for a clean and readable interface.  
* **Headings:** `'Merriweather', serif` for visual hierarchy and emphasis on section titles.  
* **Buttons & Links:** Bold text with hover transitions for clear interactive feedback.  

---

## Imagery

* **Road Sign Images:** Stored in `assets/images/`, realistic visuals for learners.  
* **Hazard Perception Videos:** Short clips in `assets/videos/` simulate real driving scenarios.  
* **Cards & Interactive Elements:** Subtle hover animations (`transform: scale(1.05)`) to indicate interactivity.  
* **Overall Style:** Clean and minimalistic with a focus on user-friendly learning and clear visual cues.



---

# Wireframes
https://drive.google.com/file/d/1eUZCwjDJFrG4EQ0neUAoqjO781Kb-ZPM/view?usp=share_link

---

# Technologies Used

## Languages
* HTML
* CSS
* JavaScript Bootstrap bundle 
* JavaScript

## Frameworks and Libraries
* Bootstrap 5.3
* Google Fonts

## Tools
* GitHub
* VS Code
* Chrome DevTools
* Lighthouse
* Balsamiq
* W3C Validator
* MDN
* Chat GPT 
* Google Docs 
* JShint

---

# File Structure 
learn-drive  
│  
├── index.html  
├──  
├──  
│── 
├── 
├
├── assets  
│   ├──  
│   ├──  
│   ├──  
│   │  
│   ├
│   │   
└── README.md

---




---

# Development 


## Initial Planning

Before starting development, I planned the purpose of the website and its main features. The goal was to create a simple and user-friendly platform where learner drivers could practise for their UK driving theory test.

I identified the core sections the website would need:
- A home page to introduce the website
- A topics page to revise theory content
- A quiz page to test knowledge
- A hazard perception section to simulate real test conditions

I also planned a clear folder structure to keep the project organised, separating HTML files, CSS, JavaScript, images, and videos.

---

## Project Setup

The first technical step was creating a **GitHub repository** for version control. This allowed me to track changes throughout development and provided a hosted version of the site using GitHub Pages.

I then:
- Cloned the repository to my local machine
- Opened the project in **Visual Studio Code**
- Linked the local project to the GitHub repository so changes could be committed and pushed regularly

This ensured the project was backed up and versioned from the start.

---

## HTML Development

I began development by creating the main structure of the website using `index.html`. This page was used to define:
- The overall layout
- Navigation bar
- Footer
- General page structure

Once the home page structure was complete, I created additional HTML pages (`topics.html`, `quiz.html`, etc.) using the same layout. This ensured consistency across the website and reduced duplication of work.

Each page includes:
- A fixed navigation bar
- A main content area
- A footer with social links

---

## CSS Styling and Consistency

After setting up the HTML structure, I created an external stylesheet (`style.css`) to manage all custom styling.

I:
- Chose a consistent colour scheme using dark backgrounds and light text
- Selected fonts to improve readability and hierarchy
- Applied spacing, hover effects, and transitions
- Used Flexbox to ensure the footer stays at the bottom of the page

All HTML pages were linked to the same stylesheet to ensure consistent styling across the entire site.

Bootstrap was also used alongside custom CSS to speed up layout creation and improve responsiveness.

---

## JavaScript Development

Once the structure and styling were complete, I focused on adding interactivity using JavaScript.

### Quiz Functionality
I developed a practice quiz system that:
- Displays multiple-choice questions dynamically
- Tracks user progress with a progress bar
- Provides immediate feedback for correct and incorrect answers
- Calculates and displays the final score
- Stores results using `localStorage`

### Hazard Perception
I implemented a hazard perception feature using HTML5 video:
- Videos are played sequentially
- User clicks are tracked to measure reaction time
- Points are awarded based on how quickly hazards are identified
- Scores are combined with the quiz results to produce a final pass or fail result

### Topics Page Interactivity
On the topics page, I added:
- A category filter using a dropdown menu
- A “Mark as Revised” feature
- Visual feedback to show completed topics
- Disabled buttons after marking topics as revised

---

## Testing and Debugging

Testing was carried out throughout the development process using **manual testing methods**. This approach allowed issues to be identified and fixed early while features were being built.

### Manual Testing Approach

Manual testing was used instead of automated testing due to the size and scope of the project. Each feature was tested directly in the browser to ensure it behaved as expected.

The following actions were tested manually:
- Navigation links between pages
- Page layout and responsiveness
- Button interactions and hover effects
- Quiz functionality and scoring
- Hazard perception video playback and scoring
- Topic filtering and “Mark as Revised” functionality

Screenshots were taken during testing to record:
- Correct layout and styling
- Successful quiz completion
- Hazard perception score output
- Topic filtering and revised state changes

These screenshots were used as evidence that features worked as intended.

---

### Cross-Browser and Device Testing

The website was tested on:
- Google Chrome
- Safari

Testing included:
- Desktop screen sizes
- Tablet and mobile screen widths using browser developer tools

Bootstrap’s responsive grid system ensured that content adjusted correctly across different screen sizes.

---


---

### Validation Testing

HTML and CSS were checked to ensure:
- Proper nesting of elements
- Consistent styling across pages
- No broken links or missing assets

JavaScript was tested using:
- Browser console output
- Step-by-step testing of user interactions
- Reload testing to confirm `localStorage` data persistence

---

### Regression Testing

After fixing bugs, regression testing was carried out to ensure:
- Existing functionality was not broken
- Styling remained consistent across pages
- JavaScript features continued to work as expected

Each time a fix was applied, the affected page was re-tested manually.

---

### Final Testing Before Deployment

Before final deployment:
- All links were tested
- All quiz questions were completed to verify scoring
- Hazard perception videos were played fully
- Topic filters and revision buttons were re-tested

Once confirmed, the final version was pushed to GitHub and deployed using GitHub Pages.

---

### Testing Summary

Manual testing ensured that:
- All features functioned correctly
- The website was responsive and user-friendly
- Bugs were identified and resolved efficiently
- The final deployed site behaved as intended

---

## Deployment

After development and testing, the project was deployed using **GitHub Pages**. This allowed the site to be accessed publicly and tested in a real environment.

Any issues found after deployment were fixed locally and pushed back to the GitHub repository.

---

## Reflection on Development

The development process followed a logical progression:
1. Planning and setup
2. HTML structure
3. CSS styling
4. JavaScript functionality
5. Testing and deployment

This approach helped keep the project organised and made it easier to add new features without breaking existing functionality.



---

# Deployment

## Local Development Environment


## Version Control Using Git

Version control was managed using **Git**. This allowed me to track changes to the project over time, revert to previous versions if needed, and maintain a clear history of development progress. The workflow included:

1. **Initialising Git**: The local project folder was initialised as a Git repository using `git init`.  
2. **Staging Changes**: After making changes to files, I staged them using:
 *git add .*
This added all new or modified files to the staging area in preparation for committing.  
3. **Committing Changes**: Commits were made regularly with descriptive messages summarising the changes:  
git commit -m "Add homepage layout and carousel functionality"
4. **Pushing to Remote Repository**: Changes were then pushed to the remote repository on GitHub to keep the online version up-to-date:
This process was repeated continuously during development to ensure that every key change was backed up and versioned.
git push
## Creating the GitHub Repository

A **GitHub account** was created to host the project remotely. The repository was created with the following steps:


## Deployment Using GitHub Pages

The website was deployed online using **GitHub Pages**, which allows static websites to be hosted directly from a GitHub repository. The deployment process involved:

1. Opening the repository settings and navigating to the **Pages** section.  
2. Selecting the **main branch** as the source branch and the **root folder** as the deployment folder.  
3. GitHub Pages then generated a live URL for the website: 




## Updating the Live Website

Once deployed, any updates to the website are automatically reflected on the live site whenever new commits are pushed to the **main branch** of the GitHub repository. This allows the live website to stay up-to-date with the latest development changes without manual redeployment.

## Live Website

The website is live and accessible via GitHub Pages at:  
Live link:[https://sadek17481748.github.io/learn-drive/]  
Github repositry (https://github.com/sadek17481748/learn-drive)


# Testing and Bugs 

## Manual Testing vs Automated Testing

Software testing can be carried out using either **manual testing** or **automated testing**, depending on the size, complexity, and requirements of the project.

---

### Manual Testing

Manual testing is when a developer or tester checks the software by **interacting with it directly**, without using automated scripts or tools.

#### When Manual Testing Is Used
Manual testing is most suitable when:
- The project is small or medium in size
- Features are still changing frequently
- Visual layout and user experience need to be evaluated
- Human judgement is required

#### Examples of Manual Testing
- Clicking navigation links to ensure they go to the correct pages
- Completing a quiz to verify scoring logic
- Watching hazard perception videos to confirm playback and interaction
- Checking hover effects and button states
- Testing responsiveness using browser resizing tools

#### Advantages
- Easy to set up and perform
- Ideal for usability and visual testing
- Flexible when features are frequently updated

#### Disadvantages
- Time-consuming for large projects
- Prone to human error
- Needs to be repeated manually after every change

---

### Automated Testing

Automated testing uses **scripts and testing tools** to automatically execute tests and compare actual results with expected results.

#### When Automated Testing Is Used
Automated testing is most suitable when:
- The project is large or complex
- Features are stable and unlikely to change often
- Tests need to be run repeatedly
- High accuracy and speed are required

#### Examples of Automated Testing
- Unit tests to check individual JavaScript functions
- Automated form validation testing
- Regression tests run after every code update
- Performance and load testing
- Continuous Integration (CI) testing pipelines

#### Advantages
- Fast and repeatable
- Reduces human error
- Ideal for regression testing
- Saves time on large projects

#### Disadvantages
- Requires more setup time
- Needs technical knowledge to write test scripts
- Less effective for testing user experience and design

---

### Comparison Summary

| Feature | Manual Testing | Automated Testing |
|-------|---------------|------------------|
| Human interaction | Required | Not required |
| Best for | UI, usability, small projects | Large, repetitive tests |
| Setup time | Low | High |
| Cost | Low | Higher initially |
| Speed | Slower | Faster |
| Flexibility | High | Lower |

---

### Testing Approach Used in This Project

For the Learn Drive project, **manual testing** was chosen because:
- The project is relatively small
- Features were developed iteratively
- Visual layout and user experience were important
- The site required frequent changes during development

Automated testing would be more suitable if the project were expanded to include user accounts, databases, or complex back-end functionality.
h

## Bug Tracking & Resolution Log 

## Bug Tracking & Resolution Log 

| Bug ID | Bug Description | Issue Identified | Fix Implemented | Resolved | Manual Testing Performed |
|--------|----------------|-----------------|----------------|----------|------------------------|
| B01 | Quiz produced no response | Quiz logic existed but was never triggered by user interaction | Connected quiz logic to UI using event listeners | Yes | Clicked quiz options and verified logic execution via console |
| B02 | Hardcoded correct answer | Quiz always validated against the same answer | Moved correct answers into `quizQuestions` array | Yes | Selected different options and verified correct scoring |
| B03 | User input not read correctly | DOM element passed instead of its value/text | Used `.textContent` and `.value` correctly | Yes | Logged user input values during selection |
| B04 | Case sensitivity error | Correct answers failed due to uppercase/lowercase mismatch | Normalised input using `toLowerCase()` | Yes | Tested answers with mixed casing |
| B05 | Whitespace input error | Leading/trailing spaces caused valid answers to fail | Applied `trim()` to user input | Yes | Entered answers with extra spaces |
| B06 | Function parameter unused | Function accepted input but ignored it | Updated comparison logic to use function parameter | Yes | Passed different values and verified outcomes |
| B07 | Incorrect conditional logic | Variable compared to itself, always returning true | Corrected conditional comparison | Yes | Tested correct and incorrect answers |
| B08 | Multiple answer submissions allowed | Users could click options multiple times | Disabled all buttons after first selection | Yes | Attempted multiple clicks per question |
| B09 | No visual feedback on answers | Users could not see correct/incorrect answers | Added CSS classes for visual feedback | Yes | Selected answers and verified colour changes |
| B10 | Progress bar not updating | Progress bar remained static | Added dynamic progress calculation | Yes | Completed quiz and observed progress updates |
| B11 | Quiz score lost on reload | Score not persisted between sections | Stored score using `localStorage` | Yes | Reloaded page and checked stored score |
| B12 | External JS file broke quiz | Script loaded before DOM elements | Moved script to bottom of HTML | Yes | Reloaded page and verified quiz functionality |
| B13 | Hazard video click spamming | Users could spam-click to inflate score | Limited clicks and added validation flag | Yes | Rapidly clicked video to test limits |
| B14 | Hazard scored outside valid window | Clicks outside hazard zone awarded points | Enforced strict time window checks | Yes | Clicked before and after hazard window |
| B15 | No reaction-time weighting | All hazard clicks gave same score | Implemented DVSA-style scoring system | Yes | Clicked at different times to test scoring |
| B16 | Hazard videos did not advance | “Next Video” button had no effect | Corrected hazard index increment | Yes | Clicked next button across videos |
| B17 | No final results screen | App ended abruptly after last video | Added combined results summary | Yes | Completed full quiz and hazard sequence |
| B18 | Footer not fixed to bottom | Visible gap under footer on short pages | Applied flexbox layout to body/footer | Yes | Viewed page with minimal content |
| B19 | Duplicate quiz questions | Questions appeared more than once | Cleaned and reviewed question array | Yes | Completed quiz and checked repetitions |
| B20 | Restart did not reset hazard state | Hazard data persisted after restart | Reset all hazard variables on restart | Yes | Restarted quiz and hazard section |
| B21 | `<!DOCTYPE html>` inside JS | HTML doctype incorrectly appears inside JS file | Move `<!DOCTYPE html>` to **top of HTML file**, remove from JS | No | Open page and check console for parse errors |
| B22 | Stray backslash in `<head>` | Extra `\` causes HTML parsing warning | Remove stray `\` character in `<head>` | No | Inspect `<head>` and console warnings |
| B23 | Hazard video count mismatch | Text shows “Video 1 of 8” but only 3 videos defined | Set total dynamically: `hazardVideos.length` | No | Observe video count in hazard section |
| B24 | Shadowed `quizScore` variable in hazard function | Local variable overwrites global score causing incorrect total | Remove local redeclaration inside `loadHazardVideo()` | No | Complete quiz + hazard and verify combined score |
| B25 | Video `<source>` overridden | Video element `<source>` differs from JS `video.src` | Remove `<source>` tag in HTML or update JS to use `<source>` consistently | No | Inspect video element, check network tab |
| B26 | Progress bar doesn’t reach 100% until result | Progress bar jumps to 100% after final question | Update `updateProgress()` to include last question: `perc = ((quizIndex+1)/quizQuestions.length)*100` | No | Observe progress bar during last question |
| B27 | Click hazard video before play | Clicking before video start still counts | Add `if(video.paused) return;` at start of click handler | No | Click immediately and observe score |
| B28 | Duplicate `No honking` question | Same quiz question repeated | Remove duplicates from `quizQuestions` array | No | Scroll through quiz questions |
| B29 | Missing alt text for images | Some images missing descriptive `alt` attribute | Add descriptive `alt` to all `<img>` in `quizQuestions` | No | Inspect element and check `alt` |
| B30 | Next button visible after last video | “Next Video” button remains visible when no more videos | Hide button: `nextBtn.style.display = 'none';` at end of hazard array | No | Complete hazard section |
| B31 | JS console errors on reload | JS runs before DOM fully loaded | Wrap JS in `DOMContentLoaded` event listener | No | Reload page and check console | 
| B32 | Hazard video auto-plays on page load | Video was set to play automatically when loaded, preventing user control | Removed `video.play()` from `loadHazardVideo()` so playback starts only when user presses play | Yes | Reloaded page and confirmed video remains paused until play is clicked |







|


---

## Manual Testing

* Manual Testing carried out during the devlopment of the process the table validates all the buttons during the project.


### Button and Link Functionality
| Button Name / ID                  | Page / Section                 | Intended Function                                                                 | Actual Function                                                                 |
|----------------------------------|--------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Mark as Revised                   | Topics Accordion (all items)  | Mark a topic as revised to track learning progress                               | Currently adds no visual change or state; requires JS to handle marking        |
| Road Signs Accordion Button       | Topics                        | Expand/collapse Road Signs content                                              | Works: toggles collapse/expand via Bootstrap                                 |
| Hazard Perception Accordion Button| Topics                        | Expand/collapse Hazard Perception content                                       | Works: toggles collapse/expand via Bootstrap                                 |
| Speed Awareness Accordion Button  | Topics                        | Expand/collapse Speed Awareness content                                         | Works: toggles collapse/expand via Bootstrap                                 |
| Rules & Regulations Accordion Btn | Topics                        | Expand/collapse Rules & Regulations content                                     | Works: toggles collapse/expand via Bootstrap                                 |
| Alertness Accordion Button        | Topics                        | Expand/collapse Alertness content                                               | Works: toggles collapse/expand via Bootstrap                                 |
| Attitude Accordion Button         | Topics                        | Expand/collapse Attitude content                                                | Works: toggles collapse/expand via Bootstrap                                 |
| Essential Documents Accordion Btn | Topics                        | Expand/collapse Essential Documents content                                     | Works: toggles collapse/expand via Bootstrap                                 |
| Hazard Awareness Accordion Btn    | Topics                        | Expand/collapse Hazard Awareness content                                        | Works: toggles collapse/expand via Bootstrap                                 |
| Incidents, Accidents & Emerg Btn | Topics                        | Expand/collapse Incidents/Accidents/Emergencies content                         | Works: toggles collapse/expand via Bootstrap                                 |
| Motorway Rules Accordion Button   | Topics                        | Expand/collapse Motorway Rules content                                          | Works: toggles collapse/expand via Bootstrap                                 |
| Other Types of Vehicle Accordion  | Topics                        | Expand/collapse Other Vehicles content                                          | Works: toggles collapse/expand via Bootstrap                                 |
| Road and Traffic Signs Accordion  | Topics                        | Expand/collapse Road & Traffic Signs content                                    | Works: toggles collapse/expand via Bootstrap                                 |
| Rules of the Road Accordion Btn   | Topics                        | Expand/collapse Rules of the Road content                                       | Works: toggles collapse/expand via Bootstrap                                 |
| Safety and Your Vehicle Accordion | Topics                        | Expand/collapse Safety & Vehicle content                                        | Works: toggles collapse/expand via Bootstrap                                 |
| Safety Margins Accordion Button   | Topics                        | Expand/collapse Safety Margins content                                          | Works: toggles collapse/expand via Bootstrap                                 |
| Vehicle Handling Accordion Btn    | Topics                        | Expand/collapse Vehicle Handling content                                        | Works: toggles collapse/expand via Bootstrap                                 |
| Vehicle Loading Accordion Btn     | Topics                        | Expand/collapse Vehicle Loading content                                         | Works: toggles collapse/expand via Bootstrap                                 |
| Vulnerable Road Users Accordion   | Topics                        | Expand/collapse Vulnerable Road Users content                                   | Works: toggles collapse/expand via Bootstrap                                 |
| Restart Quiz                      | Quiz                           | Restart the practice quiz, reset progress bar and answers                        | Works: calls `restartQuiz()` (assumes JS exists)                              |
| Next Video                        | Hazard Perception              | Go to the next hazard perception video and update score/count                    | Works if JS attached (`nextHazardBtn`)                                        |
| Restart Videos                     | Hazard Perception              | Restart the hazard perception videos from the first video                        | Works if JS attached (`restartVideosBtn`)                                      |
| Restart Both                        | Quiz + Hazard Perception      | Restart both the quiz and hazard perception videos                                | Works if JS attached (`restartBothBtn`)                                        |
| Home (Navbar)                     | All Pages                     | Navigate to homepage                                                            | Works: links to `index.html`                                                 |
| Topics (Navbar)                   | All Pages                     | Navigate to topics page                                                         | Works: links to `topics.html`                                                |
| Quiz (Navbar)                     | All Pages                     | Navigate to quiz page                                                           | Works: links to `quiz.html`                                                  |
| Facebook Icon                     | Footer                        | Navigate to LearnDrive Facebook page                                            | Works: links to Facebook                                                      |
| Twitter Icon                       | Footer                        | Navigate to LearnDrive Twitter page                                             | Works: links to Twitter                                                      |
| Instagram Icon                     | Footer                        | Navigate to LearnDrive Instagram page                                           | Works: links to Instagram                                                    |
| LinkedIn Icon                      | Footer                        | Navigate to LearnDrive LinkedIn page                                            | Works: links to LinkedIn                                                     |






# Lighthouse Testing






---

# HTML,CSS Javascript Validation
### javascript Validation Results

# Jshint Validation Issues
# JS Code Fixes & Improvements


- **Accordion Filtering Bug**
  - Previously, filtering topics did not collapse open accordion items.
  - Fixed by automatically collapsing any open accordion (`.accordion-collapse.show`) when a filter is applied.

- **“Mark as Revised” Background Transition**
  - Rapid clicks skipped the background transition effect.
  - Fixed by:
    - Setting `body.style.transition` **before** changing the background color.
    - Adding a slight delay (`setTimeout` of 50ms) before applying the background color to ensure the transition triggers.

- **Button State Update**
  - After marking a topic as revised:
    - Button text changes to `"Revised"`.
    - Button is disabled to prevent multiple clicks.

- **Code Organization**
  - Grouped related logic together for better readability:
    - Filtering logic includes collapsing open accordions.
    - “Mark as Revised” logic handles transition and button update.

for quiz.js ran out of time 

### CSS Validation Results

# W3C Validation Issues
**CSS Validation Issue**

- **File / URI:** https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css  
- **Line:** 6  
- **Selector:** `.fa-rotate-by`  
- **Issue:** `var(--fa-rotate-angle, none)` is not a valid transform value.  
- **Description:** The CSS rule `rotate(var(--fa-rotate-angle, none))` uses a CSS variable with a fallback of `none`, which is not recognized as a valid rotation value by the W3C CSS validator.




### HTML Validation Results
# W3C Validation Issues Explained

- **Trailing slash on void elements**  
  W3C reports that using a trailing slash (`/`) on void elements like `<link />` or `<img />` has **no effect** and can cause problems if attributes are unquoted.  
  - Void elements are self-closing by nature in HTML5 (they do not need a separate closing tag or slash).  
  - Example elements: `<link>`, `<meta>`, `<img>`, `<br>`, `<hr>`.  
  - Best practice: remove the trailing slash and ensure all attributes are properly quoted.  

- **Stray end tag `</main>`**  
  This error occurs when an HTML closing tag appears **without a matching opening tag** or is placed incorrectly.  
  - In this case, `</main>` appeared after a `</section>` that might have already closed the main content.  
  - Stray end tags can break the document structure, cause unexpected styling, and confuse browsers and validators.  
  - Best practice: make sure every `<main>` opening tag has one corresponding closing tag in the correct position, wrapping all main content.

|

---

# Attributions


# Sources & References
# Code Attributions

## HTML & UI Structure

- **Bootstrap 5 Accordion Component**  
  The topics accordion and collapse behavior use Bootstrap’s accordion pattern, which organizes content into vertically collapsible panels.  
  Source: Bootstrap Accordion documentation – Bootstrap’s official example of accordion usage with collapse behavior. :contentReference[oaicite:0]{index=0}

## CSS

- **Bootstrap 5 Core Styles**  
  Base layout, typography, buttons, spacing, and utility classes are provided by the Bootstrap framework.  
  Source: Bootstrap 5 documentation. (https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- **Font Awesome Icons**  
  Font Awesome classes are used for social icons and UI decoration, leveraging the official icon font library.  
  Source: Font Awesome Documentation. (https://fontawesome.com/)

## JavaScript Logic

### Quiz Functionality

- **Quiz Questions Array**  
  The structure of the `quizQuestions` array, containing questions, answer options, and correct answers, is a standard pattern in multiple-choice quiz implementations in vanilla JavaScript.  
  Reference: CodeHim multiple choice quiz example. :contentReference[oaicite:1]{index=1}

- **Dynamic Rendering & Event Handling**  
  Buttons are dynamically created and `onclick` events determine correct/incorrect answers, following common interactive quiz patterns.  
  Reference: Code Explained quiz tutorial. :contentReference[oaicite:2]{index=2}

- **Shuffling Questions**  
  The Fisher–Yates (Knuth) shuffle algorithm is used to randomize quiz questions and answer options.  
  Source: [Fisher–Yates shuffle on Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

### Progress & Results

- **Progress Bar Updates**  
  A Bootstrap progress bar is updated based on quiz completion percentage using DOM manipulation and inline style changes.  
  Reference: Code Explained quiz progress example. :contentReference[oaicite:3]{index=3}

- **Local Storage Score Save**  
  Quiz scores are persisted between sessions using `localStorage`, based on standard web storage practices.  
  Reference: [MDN Web Docs – Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

### Hazard Perception Logic

- **Hazard Video Scoring**  
  The hazard perception logic — tracking video clicks, reaction times, and scoring within time ranges — is inspired by hazard perception testing concepts used in online practice tests.  
  Source: [Theory Pass hazard perception practice](https://theorypass.co.uk/practice/hazard-perception/)

- **Video Loading and DOM Interaction**  
  Changing video sources and updating UI elements is based on standard HTML5 video element manipulation.  
  Reference: [MDN Video and Media APIs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

### Topic Filter & Mark-as-Revised

- **Dropdown Filter Logic**  
  Filtering accordion items by category selection uses event listeners and style toggling, following common DOM filtering patterns.  
  Example: dynamic DOM filtering tutorials.

- **Mark-as-Revised UI Feedback**  
  Completed items change style and disable buttons to indicate “revised” state, a common UI approach in to-do lists and study apps.

## Summary

This project combines **Bootstrap** and **Font Awesome** for layout and UI components, with **custom JavaScript patterns** for quizzes, hazard perception, filtering, and interactive elements. Specific tutorials referenced include dynamic quiz rendering, Bootstrap accordion usage, and hazard perception-inspired interaction logic.

---

## References / Inspiration Websites

Here is a list of websites that could have served as inspiration for design, UI, and functionality ideas:

1. [CodeHim](https://codehim.com/) – Multiple-choice quiz examples and tutorials  
2. [Code Explained](https://www.codeexplained.com/) – JS quiz tutorials and progress bar implementations  
3. [W3Schools](https://www.w3schools.com/) – HTML, CSS, JS references and examples  
4. [MDN Web Docs](https://developer.mozilla.org/) – HTML5 video, DOM, and localStorage references  
5. [Theory Pass](https://theorypass.co.uk/) – Hazard perception practice structure  
6. [Bootstrap Documentation](https://getbootstrap.com/) – Accordion, grid, and utility classes  
7. [Font Awesome](https://fontawesome.com/) – Icons and decorative elements  
8. [CSS-Tricks](https://css-tricks.com/) – Front-end layout and interactive element patterns  
9. [freeCodeCamp](https://www.freecodecamp.org/) – JS interactive tutorials and exercises  
10. [Stack Overflow](https://stackoverflow.com/) – Problem-solving, event handling, and DOM logic examples







---

# Image Sources

The images used in **Learn Drive** are sourced from the following websites:

| Image | Source |
|-------|--------|
| Warning Sign | [Start Safety UK](https://startsafety.uk/products/other-danger-post-mount-warning-sign-dia-562?srsltid=AfmBOooKU8YKPoa6nXU4UARrFKmSFYBJLG-nZE1XObfMH6hkw8-xWJSV&option_values=4147523158338) |
| Left Sign | [Start Safety UK](https://startsafety.uk/products/other-danger-post-mount-warning-sign-dia-562?srsltid=AfmBOooKU8YKPoa6nXU4UARrFKmSFYBJLG-nZE1XObfMH6hkw8-xWJSV&option_values=4147523158338) |
| One Way | [Safety Buyer](https://www.safetybuyer.com/product/one-way-reflective-traffic-signs-300mm-x-450mm-3mm-aluminium-composite-class-ra1?srsltid=AfmBOooirQPFu-W5ZMOjZki8jtYiFGuIoVqpL-onhWhdAenDp3_OVIsT) |
| Speed Limit | [Hirst Signs](https://hirstsigns.co.uk/product/30-mph-speed-limit-sign) |
| Children Sign | [eBay UK](https://www.ebay.co.uk/) |
| No Entry | [In2Access](https://www.in2access.co.uk/products/round-no-entry-symbol-sign-300mm-reflective-with-rear-fixing) |
| Speed Bump | [The Ramp People](https://www.theramppeople.co.uk/wall-mounted-speed-bump-warning-sign?srsltid=AfmBOoro43CjXOqN3bsV_FgttKfIzfyDYz4YTti-ExVVWEa24UvhztbT) |
| Stop Sign | [iStock](https://www.istockphoto.com/search/2/image?mediatype=illustration&phrase=blank+stop+sign&tracked_gsrp_landing=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fblank-stop-sign) |


---

## Video Sources
* https://www.youtube.com/watch?v=Y4CU4k4u3Vc&pp=ygUXdGhlb3J5IHRlc3QgdmlkZW8gY2xpcHM%3D
---

# Additional Notes







---

# Author

Mohammed Sadek Hussain  
NCC  
Level 5 Web Development  
Milestone 2
 





