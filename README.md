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

---

# File Structure 




├── 404.html
├── README.md
├── assets
│   ├── css
│   │   └── style.css
│   ├── images
│   │   ├── children.jpg
│   │   ├── left.jpg
│   │   ├── no-entry.jpeg
│   │   ├── one-way.jpg
│   │   ├── parking.jpg
│   │   ├── speed-bump.jpeg
│   │   ├── speed.jpg
│   │   ├── stop-sign.jpg
│   │   └── warning.jpeg
│   ├── js
│   │   ├── app.js
│   │   ├── quiz.js
│   │   └── topics.js
│   └── videos
│       ├── hazard-1.mp4
│       ├── hazard-2.mp4
│       └── hazard-3.mp4
├── index.html
├── quiz.html
├── test.html
└── topics.html

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


##  Bug Tracking & Resolution Log

| Bug ID | Bug Description | Issue Identified | Fix Implemented | Resolved (Yes/No) | Manual Testing Performed | Screenshot Evidence |
|------|-----------------|------------------|-----------------|-------------------|--------------------------|---------------------|
| B01 | Quiz function contained no logic | Function executed but produced no output or behaviour | Added comparison logic to evaluate answers | Yes | Called function in console and observed output | [Link here] |
| B02 | Hardcoded answer value | Function always returned correct regardless of user input | Introduced function parameter for user input | Yes | Passed different values into function via console | [Link here] |
| B03 | Function parameter unused | User input parameter was ignored | Updated comparison to include passed parameter | Yes | Logged parameter value and verified comparison | [Link here] |
| B04 | Incorrect variable comparison | Variable compared to itself, always returning true | Corrected conditional to compare user input to correct answer | Yes | Tested with incorrect input to confirm failure case | [Link here] |
| B05 | Case sensitivity issue | Valid answers failed due to uppercase/lowercase mismatch | Normalised input using `toLowerCase()` | Yes | Tested with mixed-case user inputs | [Link here] |
| B06 | Whitespace handling error | Leading/trailing spaces caused valid answers to fail | Applied `trim()` to user input | Yes | Entered answers with spaces before/after text | [Link here] |
| B07 | Function not connected to UI | Quiz logic existed but was never triggered | Added event listener to button | Yes | Clicked button and observed console output | [Link here] |
| B08 | Hardcoded value passed from button | User selection ignored | Read input value dynamically from form field | Yes | Changed input value and confirmed output updated | [Link here] |
| B09 | Incorrect DOM value reference | Passed DOM element instead of its value | Used `.value` property of input field | Yes | Logged value to console before comparison | [Link here] |
| B10 | Final validation edge cases | Inconsistent behaviour with empty input | Added input validation and normalisation | Yes | Tested empty, invalid, and valid inputs manually | [Link here] |


|


---

## Manual Testing



### Button and Link Functionality



### Forms Testing


---


# Lighthouse Testing






---

# HTML and CSS Validation




### HTML Validation Results



### CSS Validation Results

|

---

# Attributions


# Sources & References



---

## Image Sources


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

---

# Additional Notes







---

# Author

Mohammed Sadek Hussain  
NCC  
Level 5 Web Development  
Milestone 2
 





