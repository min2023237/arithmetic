let currentQuestion;
let questionType = 'addition'; // 초기 연산 유형 설정
let questionsAttempted = 0; // 문제를 푼 횟수

const multiplicationQuestions = {
    "십*십": "백",
    "백*십": "천",
    "천*십": "만",
    "만*만": "억",
    "십*백": "천",
    "백*백": "만",
    "천*백": "십만",
    "만*억": "조",
    "십*천": "만",
    "백*천": "십만",
    "천*천": "백만",
    "억*억": "경"
};



function generateQuestion() {
    switch (questionType) {
        case 'addition':
            generateAdditionQuestion();
            break;
        case 'singleAddition':
            generateSingleDigitAdditionQuestion();
            break;
        case 'complement':
            generateSpecialAdditionQuestion();
            break;
        case 'subtraction':
            generateSubtractionQuestion();
            break;
        case 'addition-comparison':
            generateAdditionComparisonQuestion();
            break;
        case 'subtractionComparison':
            generateSubtractionComparisonQuestion();
            break;
        case 'tensPlaceMultiplication':
            generateTensPlaceMultiplicationQuestion();
            break;
        case 'unitsPlaceMultiplication':
            generateUnitsPlaceMultiplicationQuestion();
            break;
        case 'tenMultiple':
            generateNineteenTimesTableQuestion();
            break;
        case 'multiplication':
            generateMultiplicationQuestion();
            break;
        case 'multipleChoice':
            generateMultipleChoiceQuestion();
            break;
        case 'division':
            generateDivisionQuestion();
            break;
        case 'fractionToPercentage':
            generateFractionToPercentageQuestion();
            break;
        case 'koreanMultiplication':
            generateMultiplicationQuestionKorean();
            break;
        case 'percentageQuestion':
            generatePercentageQuestion();
        case 'primeQuestion':
            generatePrimeQuestion();
        break;
    }
    // 업데이트된 정답을 hidden-answer 요소에 설정
    document.getElementById('hidden-answer').innerText = `정답: ${currentQuestion.answer}`;
}

function generateAdditionQuestion() {
    const maxSum = 999; // 최대 합 설정
    let a = Math.floor(Math.random() * (maxSum + 1)); // 0부터 maxSum까지의 수
    let b = Math.floor(Math.random() * (maxSum - a + 1)); // 0부터 (maxSum - a)까지의 수
    currentQuestion = { a, b, answer: a + b};
    document.getElementById('question').innerText = `${a} + ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
    
}

function generateSingleDigitAdditionQuestion() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    currentQuestion = { a, b, answer: a + b};
    document.getElementById('question').innerText = `${a} + ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
    
}

function generateSubtractionQuestion() {
    const a = Math.floor(Math.random() * 9999)+1;
    const b = Math.floor(Math.random() * (a+1));
    currentQuestion = { a, b, answer: a - b};
    document.getElementById('question').innerText = `${a} - ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
}

function generateMultiplicationQuestion() {
    const a = Math.floor(Math.random() * 99)+1;
    const b = Math.floor(Math.random() * (a+1));
    currentQuestion = { a, b, answer: a * b};
    document.getElementById('question').innerText = `${a} * ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
}

function generateMultipleChoiceQuestion() {
    // 세 자리 이상의 랜덤 숫자 생성
    const number = Math.floor(Math.random() * 900000) + 1000;

    let multipleType;
    const sumOfDigits = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    const lastTwoDigits = number % 100;
    const lastThreeDigits = number % 1000;

    // 9의 배수 조건
    if (sumOfDigits % 9 === 0) {
        multipleType = 9;
    }
    // 8의 배수 조건
    else if (lastThreeDigits === 0 || lastThreeDigits % 8 === 0) {
        multipleType = 8;
    }
    // 6의 배수 조건
    else if (number % 2 === 0 && sumOfDigits % 3 === 0) {
        multipleType = 6;
    }
    // 5의 배수 조건
    else if (number % 10 === 0 || number % 10 === 5) {
        multipleType = 5;
    }
    // 4의 배수 조건
    else if (lastTwoDigits % 4 === 0) {
        multipleType = 4;
    }
    // 3의 배수 조건
    else if (sumOfDigits % 3 === 0) {
        multipleType = 3;
    }
    // 2의 배수 조건
    else if (number % 2 === 0) {
        multipleType = 2;
    }
    else {
        multipleType = 0;
    }

    currentQuestion = {
        question: `다음 숫자는 어떤 배수일까요? ${number}`,
        answer: multipleType
    };

    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}


function generateDivisionQuestion() {
    const b = Math.floor(Math.random() * 99) + 1;
    const multiplier = Math.floor(Math.random() * 10) + 1; // 1과 10 사이의 정수
    const a = b * multiplier;
    currentQuestion = { a, b, answer: a / b };
    document.getElementById('question').innerText = `${a} / ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
}

function generateSpecialAdditionQuestion() {
    const a = Math.floor(Math.random() * 100);
    const b = 100 - a;
    currentQuestion = { a, b, answer: b };
    document.getElementById('question').innerText = `${a} + (   ) = 100`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false; // 새 문제 생성 후 정답 플래그 초기화
    
}

function generateNineteenTimesTableQuestion() {
    const a = Math.floor(Math.random() * 9) + 11; // 11부터 19까지의 수
    const b = Math.floor(Math.random() * 9) + 11; // 11부터 19까지의 수
    currentQuestion = { a, b, answer: a * b };
    document.getElementById('question').innerText = `${a} * ${b} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

//덧셈 비교
function generateAdditionComparisonQuestion() {
    let a1,b1,a2,b2,sum1,sum2;
    do{
        a1 = Math.floor(Math.random() * 1000);
        b1 = Math.floor(Math.random() * 1000);
        a2 = Math.floor(Math.random() * 1000);
        b2 = Math.floor(Math.random() * 1000);

        sum1 = a1 + b1;
        sum2 = a2 + b2;

    } while(Math.abs(sum1 - sum2) > 10); // 합의 차이가 50을 넘지 않도록 반복

    let answer;
    if (sum1 > sum2) {
        answer = '>';
    } else if (sum1 < sum2) {
        answer = '<';
    } else {
        answer = '=';
    }

    currentQuestion = { 
        question: `${a1} + ${b1} [   ]  ${a2} + ${b2}`,
        answer: answer
    };

    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
    
}

//뺄셈비교
function generateSubtractionComparisonQuestion() {
    let a1,b1,a2,b2,result1,result2
    do{
        a1 = Math.floor(Math.random() * 1000) + 500; // 500부터 1499까지의 수
        b1 = Math.floor(Math.random() * 500); // 0부터 499까지의 수
        a2 = Math.floor(Math.random() * 1000) + 500; // 500부터 1499까지의 수
        b2 = Math.floor(Math.random() * 500); // 0부터 499까지의 수

        result1 = a1 - b1;
        result2 = a2 - b2;

    } while(Math.abs(result1 - result2) > 10); // 합의 차이가 50을 넘지 않도록 반복
    let answer;
    if (result1 > result2) {
        answer = '>';
    } else if (result1 < result2) {
        answer = '<';
    } else {
        answer = '=';
    }

    currentQuestion = { 
        question: `${a1} - ${b1} [   ]  ${a2} - ${b2}`,
        answer: answer
    };

    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';

    isCorrect = false;
}


    



function generateTensPlaceMultiplicationQuestion() {
    const tensPlace = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 수
    const unitPlace1 =Math.floor(Math.random() * 9) + 1;
    //const unitPlace1 = Math.floor(Math.random() * 10); // 0부터 9까지의 수
    const unitPlace2 = 10 - unitPlace1; // 일의 자리를 더했을 때 10이 되는 수

    const num1 = tensPlace * 10 + unitPlace1;
    const num2 = tensPlace * 10 + unitPlace2;

    currentQuestion = { num1, num2, answer: num1 * num2 };
    document.getElementById('question').innerText = `${num1} * ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function generateUnitsPlaceMultiplicationQuestion() {
    //const unitsPlace =Math.floor(Math.random() * 9) + 1;
    //const tensPlace1 =Math.floor(Math.random() * 9) + 1;
    const unitsPlace = Math.floor(Math.random() * 10); // 0부터 9까지의 수
    const tensPlace1 = Math.floor(Math.random() * 10); // 0부터 9까지의 수
    const tensPlace2 = 10 - tensPlace1; // 십의 자리를 더했을 때 10이 되는 수

    // 두 수가 10을 넘지 않도록 조정
    if (tensPlace2 === 10) {
        tensPlace2 = 0;
    }

    const num1 = tensPlace1 * 10 + unitsPlace;
    const num2 = tensPlace2 * 10 + unitsPlace;

    currentQuestion = { num1, num2, answer: num1 * num2 };
    document.getElementById('question').innerText = `${num1} * ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function generateFractionToPercentageQuestion() {
    const denominator = Math.floor(Math.random() * 20) + 1; // 1부터 20까지의 수
    const numerator = Math.floor(Math.random() * denominator) + 1; // 1부터 20까지의 수, 분자와 독립적으로 설정
    const answer = (numerator / denominator * 100).toFixed(2); // 소수점 두 자리까지의 퍼센트로 변환

    currentQuestion = { numerator, denominator, answer };
    document.getElementById('question').innerText = `${numerator} / ${denominator} = ? %`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

function generateMultiplicationQuestionKorean() {
    const keys = Object.keys(multiplicationQuestions);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    currentQuestion = { question: randomKey, answer: multiplicationQuestions[randomKey] };

    document.getElementById('question').innerText = `${randomKey} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

const valuesA = [20, 40, 60, 80, 100, 120, 140, 160, 180];
const percentagesB = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];

function generatePercentageQuestion() {
    const A = valuesA[Math.floor(Math.random() * valuesA.length)];
    const B = percentagesB[Math.floor(Math.random() * percentagesB.length)];
    const answer = A * (B / 100); // 계산 결과

    currentQuestion = { question: `A의 B는? (A=${A}, B=${B}%)`, answer: answer.toFixed(2) };

    document.getElementById('question').innerText = `${A}의 ${B}%는?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function generatePrimeQuestion() {
    const num = Math.floor(Math.random() * 100) + 2; // 2부터 101까지의 수
    const isNumPrime = isPrime(num) ? "o" : "x";
    currentQuestion = { question: `${num}은(는) 소수?`, answer: isNumPrime };

    document.getElementById('question').innerText = `${num}은(는) 소수? o 또는 x`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

// 문제 표시 함수
// function displayQuestion(a, b, operator) {
//     // ... 기존 displayQuestion 함수 내용 ...
// }

function changeQuestionType(newType) {
    if (questionType !== newType) {
        questionType = newType;
        questionsAttempted = 0; // 문제 유형이 변경될 때 푼 횟수 초기화
        updateQuestionsAttemptedDisplay(); // 푼 횟수 화면 업데이트
    }
    generateQuestion();
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase(); // 공백 제거
    const resultElement = document.getElementById('result');
    let isCorrect = false; // 정답 여부 초기화

    switch(questionType) {
        case 'fractionToPercentage':
            isCorrect = (parseFloat(userAnswer).toFixed(2) === currentQuestion.answer);
            break;
        case 'addition-comparison':
        case 'subtractionComparison':
        case 'koreanMultiplication':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'percentageQuestion':
            isCorrect = (parseFloat(userAnswer).toFixed(2) === currentQuestion.answer);
            break;
        case 'primeQuestion':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        default:
            isCorrect = (parseInt(userAnswer, 10) === currentQuestion.answer);
    }

    if (isCorrect) {
        resultElement.innerText = '정답!';
        questionsAttempted++; // 정답일 경우에만 문제 푼 횟수 증가
        updateQuestionsAttemptedDisplay(); // 푼 횟수 화면 업데이트
        setTimeout(generateQuestion, 1000); // 1초 후 새로운 문제 생성
    } else {
        resultElement.innerText = '틀렸습니다! 다시 시도해보세요.';
    }
}



function updateQuestionsAttemptedDisplay() {
    document.getElementById('questions-attempted').innerText = `문제 푼 횟수: ${questionsAttempted}`;
}

// Enter 키 이벤트 처리를 위한 함수
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
}

//키패드
function appendToAnswer(value) {
    document.getElementById('answer').value += value;
}

// clear
function clearAnswer() {
    document.getElementById('answer').value = '';
}



function removeLastDigit() {
    const answerField = document.getElementById('answer');
    answerField.value = answerField.value.slice(0, -1);
}


// 스크롤 버튼
var buttonIds = ['addition-button','single-addition-button', 
'complement-button', 'subtraction-button', 'addition-comparison-button',
 'subtraction-comparison-button', 'tensPlaceMultiplication-button','unitsPlaceMultiplication-button',
  'tenMultiple-button','multipleChoice-button', 'multiplication-button', 'division-button',
  'fraction-to-percentage-button','korean-multiplication-button',
'percentage-question-button'];

function scrollButtons(direction) {
    if (direction === 'right') {
        buttonIds.push(buttonIds.shift()); // 배열의 첫 번째 요소를 끝으로 이동
    } else {
        buttonIds.unshift(buttonIds.pop()); // 배열의 마지막 요소를 처음으로 이동
    }
    updateButtonVisibility();
}

function updateButtonVisibility() {
    // 모든 버튼을 숨깁니다.
    document.querySelectorAll('.button-style').forEach(function(button) {
        button.style.display = 'none';
    });

    // 배열의 처음 3개 버튼만 표시합니다.
    for (var i = 0; i < 3; i++) {
        var buttonId = buttonIds[i];
        if (buttonId) {
            document.getElementById(buttonId).style.display = 'inline-block';
        }
    }
}

//다음 문제로 이동
function nextQuestion() {
    generateQuestion(); // 새로운 문제 생성
    document.getElementById('answer').value = ''; // 답 입력 필드 초기화
    document.getElementById('result').innerText = ''; // 결과 텍스트 초기화
}


// 페이지 로드 시 초기 버튼 상태 설정
window.onload = function() {
    generateQuestion();
    document.getElementById('answer').addEventListener('keypress', handleKeyPress);
    updateButtonVisibility();
    updateQuestionsAttemptedDisplay(); // 초기 문제 푼 횟수 화면에 표시
};
