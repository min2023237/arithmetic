let currentQuestion;
let questionType = 'addition'; // 초기 연산 유형 설정
let questionsAttempted = 0; // 문제를 푼 횟수


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
            break;
        case 'primeQuestion':
            generatePrimeQuestion();
            break;
        case 'primeOrMultiple':
            generatePrimeOrMultipleQuestion();
            break;
        case 'mathQuestion':
            generateMathQuestion();
            break;
        case 'multiplicationWithFiveEnd':
            generateMultiplicationWithFiveEndQuestion();
            break;
        case 'twelveToNineteenMultiplication':
            generateTwelveToNineteenMultiplicationQuestion();
            break;
        case 'comparisonQuestion':
            generateComparisonQuestion();
            break;
        case 'percentageFraction':
            generatePercentageFractionQuestion();
            break;
        case 'multiplication':
            generateMultiplicationQuestion();
            break;
        case 'tensAndUnitsPlaceMultiplication':
            generateTensAndUnitsPlaceMultiplicationQuestion();
            break;
        case 'simpleFraction':
            generateSimpleFractionQuestion();
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
    const a = Math.floor(Math.random() * 999)+1;
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

function generateTensAndUnitsPlaceMultiplicationQuestion() {
    // Randomly decide whether to generate a tens place multiplication question or a units place multiplication question
    const questionType = Math.random() < 0.5 ? 'tensPlace' : 'unitsPlace';
    let num1, num2;

    if (questionType === 'tensPlace') {
        const tensPlace = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 수
        const unitPlace1 = Math.floor(Math.random() * 9) + 1;
        const unitPlace2 = 10 - unitPlace1; // 일의 자리를 더했을 때 10이 되는 수

        num1 = tensPlace * 10 + unitPlace1;
        num2 = tensPlace * 10 + unitPlace2;
    } else {
        const unitsPlace = Math.floor(Math.random() * 10); // 0부터 9까지의 수
        const tensPlace1 = Math.floor(Math.random() * 10); // 0부터 9까지의 수
        let tensPlace2 = 10 - tensPlace1; // 십의 자리를 더했을 때 10이 되는 수

        // 두 수가 10을 넘지 않도록 조정
        if (tensPlace2 === 10) {
            tensPlace2 = 0;
        }

        num1 = tensPlace1 * 10 + unitsPlace;
        num2 = tensPlace2 * 10 + unitsPlace;
    }

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

function findLargestMultiple(num) {
    const multiples = [2, 3, 4, 5, 6, 7, 9]; // 검사할 배수들
    let largestMultiple = null;

    for (let i = multiples.length - 1; i >= 0; i--) {
        if (num % multiples[i] === 0) {
            if (multiples[i] === 6) {
                if (num % 2 === 0 || num % 3 === 0) {
                    return 6;
                }
            } else {
                return multiples[i];
            }
        }
    }

    return largestMultiple;
}

function generatePrimeOrMultipleQuestion() {
    const num = Math.floor(Math.random() * 1000) + 2; // 2부터 101까지의 수
    if (isPrime(num)) {
        currentQuestion = { question: `${num}은(는) 소수?`, answer: "o" };
        document.getElementById('question').innerText = `${num}은(는) 소수? 소수가 아니라면 어떤 수의 최대 배수?`;
    } else {
        const largestMultiple = findLargestMultiple(num);
        currentQuestion = { question: `${num}은(는) 어떤 수의 최대 배수?`, answer: largestMultiple.toString() };
        document.getElementById('question').innerText = `${num}은(는) 소수? 소수가 아니라면 어떤 수의 최대 배수?`;
    }
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

const mathQuestions = [
    { question: "11 * 11", answer: "121" },
    { question: "12 * 12", answer: "144" },
    { question: "13 * 13", answer: "169" },
    { question: "14 * 14", answer: "196" },
    { question: "15 * 15", answer: "225" },
    { question: "16 * 16", answer: "256" },
    { question: "17 * 17", answer: "289" },
    { question: "18 * 18", answer: "324" },
    { question: "19 * 19", answer: "361" },
    { question: "20 * 20", answer: "400" },
    { question: "4 * 25", answer: "100" },
    { question: "5 * 20", answer: "100" },
    { question: "2 * 1.5", answer: "3" },
    { question: "25 * 25", answer: "625" },
    { question: "2^10", answer: "1024" },
    { question: "x * 5", answer: " 10x / 2" },
    { question: "(x+a)(x-a)", answer: "x^2 - a^2" },
    { question: "75 * 4", answer: "300" },
    { question: "45 * 3", answer: "135" },
    { question: "65 * 3", answer: "195" },
    { question: "95 * 4", answer: "380" },
    { question: "85 * ? = 170", answer: "2" },
    { question: "75 * ? = 300", answer: "4" }

];

function generateMathQuestion() {
    const randomIndex = Math.floor(Math.random() * mathQuestions.length);
    const selectedQuestion = mathQuestions[randomIndex];

    currentQuestion = selectedQuestion;
    document.getElementById('question').innerText = `${selectedQuestion.question} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

function generateMultiplicationWithFiveEndQuestion() {
    let num1, num2;

    // Randomly decide which number should end with 5
    if (Math.random() > 0.5) {
        // num1 ends with 5
        num1 = (Math.floor(Math.random() * 10) * 10) + 5; // e.g., 5, 15, 25, ..., 95
        num2 = (Math.floor(Math.random() * 50) + 1) * 2; // Generates an even number between 2 and 100
    } else {
        // num2 ends with 5
        num2 = (Math.floor(Math.random() * 10) * 10) + 5; // e.g., 5, 15, 25, ..., 95
        num1 = (Math.floor(Math.random() * 50) + 1) * 2; // Generates an even number between 2 and 100
    }

    const answer = num1 * num2;
    currentQuestion = { question: `${num1} * ${num2}`, answer: answer.toString() };

    document.getElementById('question').innerText = `${num1} * ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}


function generateTwelveToNineteenMultiplicationQuestion() {
    const num1 = Math.floor(Math.random() * 8) + 12; // 12부터 19까지의 수
    const num2 = Math.floor(Math.random() * 10) + 1; // 1부터 10까지의 수

    const answer = num1 * num2;
    currentQuestion = { question: `${num1} * ${num2}`, answer: answer.toString() };

    document.getElementById('question').innerText = `${num1} * ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}



function generateComparisonQuestion() {
    let numbers = [];
    for (let i = 0; i < 6; i++) {
        numbers.push(Math.floor(Math.random() * 9000) + 1000); // 1000에서 9999 사이의 수
    }
    const sum = numbers.reduce((a, b) => a + b, 0); // 합계 계산

    // 합계의 앞 세 자리 추출
    let sumLeadingThreeDigits = Math.floor(sum / Math.pow(10, Math.floor(Math.log10(sum)) - 1));

    // 만자리 단위의 수를 생성하고, 차이가 10,000 이내가 되도록 조정
    let comparisonNumber = Math.round(sum / 1000) * 1000;
    if (Math.abs(sum - comparisonNumber) > 1000) {
        comparisonNumber += (sum > comparisonNumber) ? 1000 : -1000;
    }

    // 정답 문자열 생성
    let correctAnswer = `${sumLeadingThreeDigits} `;
    correctAnswer += (sum < comparisonNumber) ? '<' :
                     (sum > comparisonNumber) ? '>' : '=';

    currentQuestion = {
        question: `${numbers.join(" + ")} vs ${comparisonNumber}`,
        sumLeadingThreeDigits: sumLeadingThreeDigits,
        comparisonNumber: comparisonNumber,
        answer: correctAnswer // 설정된 정답
    };

    document.getElementById('question').innerText = `${numbers.join(" + ")} vs ${comparisonNumber}`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;

    // 업데이트된 정답을 hidden-answer 요소에 설정
    document.getElementById('hidden-answer').innerText = `정답: ${correctAnswer}`;
}

function generatePercentageFractionQuestion() {
    const denominator = 20; // Fixed denominator
    const percentages = [15, 25, 35, 45, 55, 65, 75, 85, 95]; // Array of possible percentages
    const numeratorOptions = percentages.map(p => Math.round(p * 0.01 * denominator)); // Calculate corresponding numerators
    
    // Randomly select an index for the arrays
    const index = Math.floor(Math.random() * percentages.length);
    
    // Select the numerator based on the random index
    const numerator = numeratorOptions[index];
    
    // Since these are direct calculations, the answer will be the selected percentage
    const answer = `${percentages[index]}`;

    // Build the question string
    const question = `${numerator}/${denominator}`;

    // Store the current question and answer
    currentQuestion = { question, answer };

    // Display the question
    document.getElementById('question').innerText = `${question}?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}


const multiplicationProblems = {
    3: ["2x1.5"],
    4: ["2x2"],
    5: ["2x2.5"],
    6: ["2x3"],
    7: ["2x3.5"],
    8: ["2x4"],
    9: ["3x3"],
    10: ["2x5 4x2.5"],
    12: ["2x6 3x4"],
    14: ["2x7"],
    15: ["3x5"],
    16: ["2x8 4x4"],
    18: ["2x9 3x6"],
    20: ["2x10 4x5"],
    21: ["3x7"],
    22: ["2x11"],
    24: ["2x12 3x8 4x6"],
    25: ["5x5"],
    26: ["2x13"],
    27: ["3x9"],
    28: ["2x14 4x7"],
    30: ["3x10 5x6"],
    32: ["2x16 4x8"],
    33: ["3x11"],
    34: ["2x17"],
    35: ["5x7"],
    36: ["2x18 3x12 4x9 6x6"],
    38: ["2x19"],
    39: ["3x13"],
    40: ["2x20 4x10 5x8"],
    42: ["3x14 6x7"],
    44: ["4x11"],
    45: ["3x15 5x9"],
    48: ["4x12 6x8"],
    49: ["7x7"],
    50: ["5x10"],
    51: ["3x17"],
    52: ["4x13"],
    54: ["3x18 6x9"],
    55: ["5x11"],
    56: ["4x14 7x8"],
    57: ["3x19"],
    60: ["3x20 5x12 6x10"],
    63: ["7x9"],
    64: ["4x16 8x8"],
    65: ["5x13"],
    66: ["6x11"],
    68: ["4x17"],
    70: ["5x14 7x10"],
    72: ["4x18 6x12 8x9"],
    75: ["5x15"],
    76: ["4x19"],
    77: ["7x11"],
    80: ["4x20 5x16 8x10"],
    81: ["9x9"],
    84: ["7x12"],
    85: ["5x17"],
    88: ["8x11"],
    90: ["5x18 9x10"],
    95: ["5x19"],
    96: ["6x16 8x12"],
    98: ["7x14"],
    99: ["9x11"],
    100: ["5x20 10x10"]
};

function generateMultiplicationQuestion() {
    const keys = Object.keys(multiplicationProblems);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomExpressions = multiplicationProblems[randomKey];
    
    // Select a random expression if there are multiple options
    const expression = randomExpressions[Math.floor(Math.random() * randomExpressions.length)];

    // Store the current question and answer
    currentQuestion = { question: `${randomKey} = ?`, answer: expression };

    // Display the question
    document.getElementById('question').innerText = `${randomKey}?`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}

function generateSimpleFractionQuestion() {
    const denominator = Math.floor(Math.random() * 20) + 1; 
    const numerator = 1;
    let answer;

    switch(denominator) {
        case 6:
            answer = "16.66";
            break;
        case 7:
            answer = "14.2857";
            break;
        case 11:
            answer = "09.0909";
            break;
        case 13:
            answer = "7.7";
            break;
        case 14:
            answer = "7.142857";
            break;
        case 15:
            answer = "6.66";
            break;
        case 18:
            answer = "5.55";
            break;
        case 19:
            answer = "5.25";
            break;
        default:
            answer = (numerator / denominator * 100).toFixed(2); // Calculate percentage and format to 2 decimal places
            break;
    }
   
    currentQuestion = { question: `${numerator} / ${denominator}`, answer };

    document.getElementById('question').innerText = `${numerator} / ${denominator} = ? %`;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
    isCorrect = false;
}


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
        case 'primeOrMultiple':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'mathQuestion':
            isCorrect = (userAnswer === currentQuestion.answer.replace(/\s+/g, ''));
            break;
        case 'multiplicationWithFiveEnd':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'twelveToNineteenMultiplication':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'comparisonQuestion':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'percentageFraction':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'multiplication':
            isCorrect = (userAnswer === currentQuestion.answer);
            break;
        case 'simpleFraction':
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
'percentage-question-button','prime-question-button',
'prime-or-multiple-question-button','math-question-button',
'multiplication-with-five-end-question-button','twelve-to-nineteen-multiplication-question-button',
'comparison-question-button', 'percentage-fraction-question-button',
'multiplication-question-button','tensAndUnitsPlaceMultiplication-button','simpleFraction-button'];

var currentIndex = 0; // 현재 시작 인덱스

function scrollButtons(direction) {
    if (direction === 'right') {
        currentIndex += 10; // 다음 10개로 이동
        if (currentIndex >= buttonIds.length) currentIndex = 0; // 마지막을 넘으면 처음으로
    } else {
        currentIndex -= 10; // 이전 10개로 이동
        if (currentIndex < 0) currentIndex = Math.max(0, buttonIds.length - 10); // 처음을 넘으면 마지막으로
    }
    updateButtonVisibility();
}

function updateButtonVisibility() {
    document.querySelectorAll('.button-style').forEach(function(button) {
        button.style.display = 'none'; // 모든 버튼을 숨김
    });

    for (var i = currentIndex; i < currentIndex + 10 && i < buttonIds.length; i++) {
        var buttonId = buttonIds[i];
        if (buttonId) {
            document.getElementById(buttonId).style.display = 'inline-block'; // 현재 인덱스부터 10개의 버튼만 표시
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
