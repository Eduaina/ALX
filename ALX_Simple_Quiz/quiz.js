function checkAnswer() {
    const correctAnswer = "4";
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element to display messages
    const feedback = document.getElementById("feedback");

    // Check if an answer was selected
    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value;
        
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Correct answer feedback
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "blue"; // Incorrect answer feedback
        }
    } else {
        // If no answer is selected, prompt the user to select one
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "red"; // No answer selected feedback
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);