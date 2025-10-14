function checkAnswer(selectedIndex) {
  const optionsEls = document.querySelectorAll('.option');
  const correctIndex = questions[currentQuestionIndex].correctIndex;

  // მონიშნე პასუხები
  if (selectedIndex === correctIndex) {
    optionsEls[selectedIndex].classList.add('correct');
    
    // დაამატე 10 მონეტა სწორი პასუხისთვის
    coins += 10;
    updateCoinDisplay();
  } else {
    optionsEls[selectedIndex].classList.add('incorrect');
    optionsEls[correctIndex].classList.add('correct');
  }

  // დაელოდოს და შემდეგ გადახტეს შემდეგ კითხვაზე
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      alert("ქვიზი დასრულებულია! გილოცავთ!");
      currentQuestionIndex = 0;
      coins = 15;
      updateCoinDisplay();
    }
    loadQuestion();
  }, 1500);
}
