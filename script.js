import i18n from './translate.js';

const keys = document.querySelectorAll('.kb-key');
const letterKeys = document.querySelectorAll('.key');
const digits = document.querySelectorAll('.digit');
const symbolKeys = document.querySelectorAll('.symbol');

const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
const altLeft = document.querySelector('.AltLeft');
const altRight = document.querySelector('.AltRight');

const textArea = document.querySelector('.textarea');

let isCapsPressed = false;
let isShiftPressed = false;
let language = 'en';

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  // find a pressed key
  const key = document.querySelector(`.${e.code}`);
  // if key not null
  if (key) {
    e.preventDefault();
    key.classList.add('active');
  }

  if (e.repeat) {
    return;
  }
  // shift handler
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    isShiftPressed = true;
    digitsToSymbols();
    shiftSymbols();
    if (!isCapsPressed) {
      lettersToUpper();
    } else {
      lettersToLower();
    }
  }

  // capslock handler
  if (e.code === 'CapsLock') {
    if(isCapsPressed === false) {
      lettersToUpper();
      isCapsPressed = !isCapsPressed;
    } else {
      lettersToLower();
      isCapsPressed = !isCapsPressed;
    }
  }

  // translate handler
  if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && (altLeft.classList.contains('active') || altRight.classList.contains('active'))) {
      if (language === 'en') {
        language = 'ru';
      } else {
        language = 'en';
      }
      localStorage.setItem('language',language);
      translate();
  }
})

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`.${e.code}`);

  if (key) {
    key.classList.remove('active');
  }

  if(e.code === 'CapsLock' && isCapsPressed) {
    key.classList.add('active');
  }

  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
    isShiftPressed = false;
    symbolsToDigits();
    unshiftSymbols();
    if (!isCapsPressed) {
      lettersToLower();
    } else {
      lettersToUpper();
    }
  }

  console.log(e.code);
})

window.onload = () => {
  language = localStorage.getItem('language');
  translate();
}



function lettersToUpper() {
  letterKeys.forEach(key => key.innerHTML = key.innerHTML.toUpperCase());
  symbolKeys.forEach(key => key.innerHTML = key.innerHTML.toUpperCase());
}

function lettersToLower() {
  letterKeys.forEach(key => key.innerHTML = key.innerHTML.toLowerCase());
  symbolKeys.forEach(key => key.innerHTML = key.innerHTML.toLowerCase());
}

function digitsToSymbols() {
  let [one,
       two,
       three,
       four,
       five,
       six,
       seven,
       eight,
       nine,
       zero] = digits;
  one.innerHTML = i18n[language].oneShifted;
  two.innerHTML = i18n[language].twoShifted;
  three.innerHTML = i18n[language].threeShifted;
  four.innerHTML = i18n[language].fourShifted;
  five.innerHTML = i18n[language].fiveShifted;
  six.innerHTML = i18n[language].sixShifted;
  seven.innerHTML = i18n[language].sevenShifted;
  eight.innerHTML = i18n[language].eightShifted;
  nine.innerHTML = i18n[language].nineShifted;
  zero.innerHTML = i18n[language].zeroShifted;
}

function symbolsToDigits() {
  let [one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero] = digits;

  one.innerHTML = '1';
  two.innerHTML = '2';
  three.innerHTML = '3';
  four.innerHTML = '4';
  five.innerHTML = '5';
  six.innerHTML = '6';
  seven.innerHTML = '7';
  eight.innerHTML = '8';
  nine.innerHTML = '9';
  zero.innerHTML = '0';
}

function shiftSymbols() {
  let [backquote,
    minus,
    equal,
    bracketLeft,
    bracketRight,
    backslash,
    semicolon,
    quote,
    comma,
    period,
    slash] = symbolKeys;

    backquote.innerHTML = i18n[language].backquoteShifted;
    minus.innerHTML = i18n[language].minusShifted;
    equal.innerHTML = i18n[language].equalShifted;
    bracketLeft.innerHTML = i18n[language].bracketLeftShifted;
    bracketRight.innerHTML = i18n[language].bracketRightShifted;
    backslash.innerHTML = i18n[language].backslashShifted;
    semicolon.innerHTML = i18n[language].semicolonShifted;
    quote.innerHTML = i18n[language].quoteShifted;
    comma.innerHTML = i18n[language].commaShifted;
    period.innerHTML = i18n[language].periodShifted;
    slash.innerHTML = i18n[language].slashShifted;
}

function unshiftSymbols() {
  let [backquote,
    minus,
    equal,
    bracketLeft,
    bracketRight,
    backslash,
    semicolon,
    quote,
    comma,
    period,
    slash] = symbolKeys;

    backquote.innerHTML = i18n[language].backquote;
    minus.innerHTML = i18n[language].minus;
    equal.innerHTML = i18n[language].equal;
    bracketLeft.innerHTML = i18n[language].bracketLeft;
    bracketRight.innerHTML = i18n[language].bracketRight;
    backslash.innerHTML = i18n[language].backslash;
    semicolon.innerHTML = i18n[language].semicolon;
    quote.innerHTML = i18n[language].quote;
    comma.innerHTML = i18n[language].comma;
    period.innerHTML = i18n[language].period;
    slash.innerHTML = i18n[language].slash;
}

function translate() {
  letterKeys.forEach(key => {
    key.innerHTML = i18n[language][key.classList[2]];
  })

  if(isShiftPressed) {
    shiftSymbols();
    digitsToSymbols();
    lettersToUpper();
  } else {
    unshiftSymbols();
    symbolsToDigits();
    lettersToLower();
  }
}