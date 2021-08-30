// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;


const excitedWelcomeMessage = welcomeMessage.toUpperCase(); //Capitalizes welcomemessage


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`; // grabs first letter of CurrentUser










/* 
index.js
currentUser
  1) is defined
welcomeMessage
  2) contains "Welcome to Flatbook, "
  3) contains the value of the 'currentUser' variable
  4) ends with an exclamation point!
excitedWelcomeMessage
  5) contains "WELCOME TO FLATBOOK, "
  6) contains the value of the 'currentUser' variable
  7) ends with an exclamation point
shortGreeting
  8) contains "Welcome, "
  9) contains the first initial of the name stored in the 'currentUser' variable
  10) ends with an exclamation point
  */