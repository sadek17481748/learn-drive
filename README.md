# learn-drive 


### Table of Contents
- [Overview](#overview)
- [Features](#features)
- [User Experience UX](#user-experience-ux)
- [Wireframes](#wireframes)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
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

# User Experience UX

## Project Goals



## User Stories

### First Time Users


### Returning Users
* 

### Frequent Users


---

## Responsive Design Preview






---

# Design

## Colour Scheme



## Typography



## Imagery


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
 





