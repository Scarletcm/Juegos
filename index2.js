// Access the HTML elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

// Generate a random number
function generateQuestion() {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Number between 1 and 100
  questionElement.textContent = `¿Es el número ${randomNumber} par o impar?`;

  // Create answer buttons
  const buttons = ["Par", "Impar"];
  optionsElement.innerHTML = ""; // Clear previous options
  buttons.forEach((buttonText) => {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", checkAnswer);
    optionsElement.appendChild(button);
  });
}

// Check the user's answer
function checkAnswer() {
  const chosenAnswer = this.textContent; // Get the text of the clicked button
  const randomNumber = parseInt(questionElement.textContent.split(" ")[4]); // Extract the number from the question
  const isCorrect = (randomNumber % 2 === 0) === (chosenAnswer === "Par"); // Check if answer is correct

  // Provide feedback to the user
  alert(isCorrect ? "¡Correcto!" : "¡Incorrecto!");
  generateQuestion(); // Generate a new question
}

// Start the game
generateQuestion();
