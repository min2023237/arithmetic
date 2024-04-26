let currentQuestion;
//let isCorrect = true;

function generateQuestion() {
    // if (!isCorrect) {
    //     return; // 정답을 맞출 때까지 새 문제 생성 방지
    // }
    const a = Math.floor(Math.random() * 9999)+1;
    const b = Math.floor(Math.random() * (a+1));
    currentQuestion = { a, b, answer: a - b};
    document.getElementById('question').innerText = `${a} - ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');
    if (userAnswer === currentQuestion.answer) {
        resultElement.innerText = '정답!';
        //isCorrect = true; // 정답 플래그 설정
        setTimeout(generateQuestion, 1000); // 1초 후 새로운 문제 생성
    } else {
        resultElement.innerText = '틀렸습니다! 다시 시도해보세요.';
    }
}

// Enter 키 이벤트 처리를 위한 함수
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
}

//키패드
function appendToAnswer(num) {
    document.getElementById('answer').value += num;
}


window.onload = function() {
    generateQuestion();
    document.getElementById('answer').addEventListener('keypress', handleKeyPress);
};



