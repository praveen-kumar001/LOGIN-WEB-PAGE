# Login Page Project

This project is a simple login page designed with HTML, CSS, and JavaScript. It collects user details such as Employee Number, Username, and Destination, and submits the data to a Google Apps Script endpoint for processing.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Form Submission](#form-submission)
- [Customization](#customization)

## Features

- Simple login interface with fields for Employee Number, Username, and Destination.
- Form submission handled by a JavaScript fetch request.
- Prevents multiple submissions by disabling the submit button until the process is complete.
- Local storage used to track form submission state.
- Displays messages to the user based on submission status.

## Technologies

- **HTML**: Markup for the structure of the login page.
- **CSS**: Styling for the login page, including responsiveness and design.
- **JavaScript**: Form validation, submission, and interaction logic.
- **Google Apps Script**: Backend script to handle form data submissions.

## File Structure


### Breakdown of Key Files:

1. **`login.html`**: Contains the structure of the login page and input fields for Employee Number, Username, and Destination.
2. **`styles.css`**: Styles the login page with a modern look, including input animations and button effects.
3. **`script.js`**: Handles form submission, disables the submit button during submission, and displays a message to the user.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
fetch('YOUR_GOOGLE_SCRIPT_URL', {
    method: "POST",
    body: data
})

### Explanation of Sections:

1. **Project Overview**: Provides a brief introduction to the project and its purpose.
2. **Table of Contents**: Helps users quickly navigate the document.
3. **Features**: Highlights key aspects of the login page.
4. **Technologies**: Lists the main technologies used in the project.
5. **File Structure**: Describes the organization of the project files.
6. **Setup Instructions**: Explains how to get the project up and running.
7. **Form Submission**: Provides a description of how the form submission works.
8. **Customization**: Offers suggestions for modifying the project to suit individual needs.

You can modify this template as needed to fit your specific project requirements!
