function CalculateScore() {
    var attendance = parseInt(document.getElementById('attendance').value);
    var quiz = parseFloat(document.getElementById('quiz').value);
    var exam = parseFloat(document.getElementById('exam').value);

    if (isNaN(attendance) || isNaN(quiz) || isNaN(exam) || attendance < 0 || attendance > 100 || quiz < 0 || quiz > 100 || exam < 0 || exam > 100){
        document.getElementById('result').innerHTML = 'Please enter valid scores between 0 and 100.';
        document.getElementById('result').style.color = 'red';
        return;
    }

    var weightedScore = (attendance * 0.25) + (quiz * 0.25) + (exam * 0.50);

    let resultMessage;
    if (weightedScore >= 50) {
        resultMessage = 'YOU PASSED';
        document.getElementById('result');
        
    } else {
        resultMessage = 'You failed.';
        document.getElementById('result');
        
    }

    document.getElementById('result').innerHTML = `YOU DID GREAT  ${weightedScore.toFixed(2)}<br>${resultMessage}`;
}