import i18n from './translate.js';

const keys = document.querySelectorAll('.kb-key');
const letterKeys = document.querySelectorAll('.key');
const digits = document.querySelectorAll('.digit');
const symbolKeys = document.querySelectorAll('.symbol');

const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
const altLeft = document.querySelector('.AltLeft');
const altRight = document.querySelector('.AltRight');
const ctrlLeft = document.querySelector('.ControlLeft');
const ctrlRight = document.querySelector('.ControlRight');

const textArea = document.querySelector('.textarea');

let isCapsPressed = false;
let isShiftPressed = false;
let isCtrlPressed = false;
let isKeyDown = false;

let language = 'en';

let textAreaString = '';
let copiedText = '';
let cursorPos = 0;

function getSelection() {
  return {
    start: textArea.selectionStart,
    end: textArea.selectionEnd,
  };
}

function lettersToUpper() {
  letterKeys.forEach((key) => {
    const text = key;
    text.innerHTML = text.innerHTML.toUpperCase();
  });
  symbolKeys.forEach((key) => {
    const text = key;
    text.innerHTML = text.innerHTML.toUpperCase();
  });
}

function deleteFromString(del) {
  if (del) {
    textAreaString = textAreaString
      .substring(0, getSelection().start) + textAreaString.substring(getSelection().end + 1);
    return;
  }
  const diff = getSelection().end - getSelection().start;
  if (diff === 0) {
    textAreaString = textAreaString
      .substring(0, getSelection().start - 1) + textAreaString.substring(getSelection().end);
    cursorPos -= 1;
  } else {
    textAreaString = textAreaString
      .substring(0, getSelection().start) + textAreaString.substring(getSelection().end);
    cursorPos = cursorPos - (getSelection().end - getSelection().start) + diff;
  }
}

function lettersToLower() {
  letterKeys.forEach((key) => {
    const text = key;
    text.innerHTML = text.innerHTML.toLowerCase();
  });
  symbolKeys.forEach((key) => {
    const text = key;
    text.innerHTML = text.innerHTML.toLowerCase();
  });
}

function digitsToSymbols() {
  const [one,
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
  const [one,
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
  const [backquote,
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
  const [backquote,
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
  letterKeys.forEach((key) => {
    const text = key;
    text.innerHTML = i18n[language][key.classList[2]];
  });

  if ((isShiftPressed && !isCapsPressed) || (!isShiftPressed && isCapsPressed)) {
    shiftSymbols();
    digitsToSymbols();
    lettersToUpper();
  } else {
    unshiftSymbols();
    symbolsToDigits();
    lettersToLower();
  }
}

function updateTextArea() {
  if (cursorPos < 0) {
    cursorPos = 0;
  }

  if (cursorPos > textAreaString.length) {
    cursorPos = textAreaString.length;
  }

  textArea.textContent = textAreaString;
  textArea.selectionStart = cursorPos;

  textArea.focus();
}

function addToString(text) {
  const diff = getSelection().end - getSelection().start;
  if (diff !== 0) {
    deleteFromString();
  }
  textAreaString = textAreaString
    .substring(0, cursorPos) + text + textAreaString.substring(cursorPos);
  cursorPos += text.length;
}

function selectAll() {
  textArea.selectionStart = 0;
  textArea.selectionEnd = textAreaString.length;
}

function copyString() {
  copiedText = textAreaString.substring(getSelection().start, getSelection().end);
}

function onKeyDown(e) {
  isKeyDown = true;

  // find a pressed key
  const key = document.querySelector(`.${e.code}`);

  // if key not null
  if (key) {
    e.preventDefault();
    key.classList.add('active');
  }
  // ctrl handler
  if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
    if (e.repeat) {
      return;
    }
    isCtrlPressed = true;
  }
  if ((ctrlLeft.classList.contains('active') || ctrlRight.classList.contains('active')) && isCtrlPressed) {
    if (e.code === 'KeyC') {
      copyString();
      updateTextArea();
    }

    if (e.code === 'KeyV') {
      addToString(copiedText);
      updateTextArea();
    }

    if (e.code === 'KeyA') {
      selectAll();
    }

    if (e.code === 'KeyX') {
      if ((getSelection().end - getSelection().start) !== 0) {
        copyString();
        deleteFromString();
        updateTextArea();
      }
    }

    return;
  }

  // enter to textarea
  if (!key.classList.contains('fn')) {
    addToString(key.textContent);
  } else if (key.classList.contains('Enter')) {
    addToString('\n');
  } else if (key.classList.contains('Tab')) {
    addToString('\t');
  } else if (key.classList.contains('ArrowLeft') || key.classList.contains('ArrowRight') || key.classList.contains('ArrowUp') || key.classList.contains('ArrowDown')) {
    addToString(key.textContent);
  }

  if (e.code === 'Backspace') {
    deleteFromString();
  }
  if (key.classList.contains('Delete')) {
    deleteFromString(true);
  }

  updateTextArea();

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
    if (isCapsPressed === false) {
      lettersToUpper();
      isCapsPressed = !isCapsPressed;
    } else {
      lettersToLower();
      isCapsPressed = !isCapsPressed;
    }
    if ((isCapsPressed && isShiftPressed) || (!isCapsPressed && !isShiftPressed)) {
      lettersToLower();
    } else {
      lettersToUpper();
    }
  }

  // translate handler
  if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && (altLeft.classList.contains('active') || altRight.classList.contains('active'))) {
    if (language === 'en') {
      language = 'ru';
    } else {
      language = 'en';
    }
    localStorage.setItem('language', language);
    translate();
  }
}

function onKeyUp(e) {
  isKeyDown = false;
  const key = document.querySelector(`.${e.code}`);

  if (key) {
    key.classList.remove('active');
  }

  if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
    isCtrlPressed = false;
    e.target.classList.remove('active');
  }

  if (e.code === 'CapsLock' && isCapsPressed) {
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
}

function onMouseClick(e) {
  // ctrl handler
  if (e.target.classList.contains('ControlLeft') || e.target.classList.contains('ControlRight')) {
    if (!isCtrlPressed) {
      isCtrlPressed = true;
      e.target.classList.add('active');
    } else {
      isCtrlPressed = false;
      e.target.classList.remove('active');
    }
  }
  if (isCtrlPressed) {
    if (e.target.classList.contains('KeyC')) {
      copyString();
    }

    if (e.target.classList.contains('KeyV')) {
      addToString(copiedText);
    }

    if (e.target.classList.contains('KeyA')) {
      selectAll();
    }
    if (e.target.classList.contains('KeyX')) {
      copyString();
      deleteFromString();
    }
    updateTextArea();
    return;
  }

  // enter to textarea
  if (!e.target.classList.contains('fn')) {
    addToString(e.target.textContent);
  } else if (e.target.classList.contains('Enter')) {
    addToString('\n');
  } else if (e.target.classList.contains('Tab')) {
    addToString('\t');
  } else if (e.target.classList.contains('ArrowLeft') || e.target.classList.contains('ArrowRight') || e.target.classList.contains('ArrowUp') || e.target.classList.contains('ArrowDown')) {
    addToString(e.target.textContent);
  }

  if (e.target.classList.contains('Backspace')) {
    deleteFromString();
  }

  if (e.target.classList.contains('Delete')) {
    deleteFromString(true);
  }

  updateTextArea();
  // shift handler
  if ((e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) && !isKeyDown) {
    if (!isShiftPressed) {
      isShiftPressed = true;
      digitsToSymbols();
      shiftSymbols();
      if (!isCapsPressed) {
        lettersToUpper();
      } else {
        lettersToLower();
      }
      e.target.classList.add('active');
    } else {
      isShiftPressed = false;
      symbolsToDigits();
      unshiftSymbols();
      if (!isCapsPressed) {
        lettersToLower();
      } else {
        lettersToUpper();
      }
      shiftLeft.classList.remove('active');
      shiftRight.classList.remove('active');
    }
  }

  // capslock handler
  if (e.target.classList.contains('CapsLock')) {
    if (isCapsPressed === false) {
      lettersToUpper();
      isCapsPressed = !isCapsPressed;
      e.target.classList.add('active');
    } else {
      lettersToLower();
      isCapsPressed = !isCapsPressed;
      e.target.classList.remove('active');
    }
    if ((isCapsPressed && isShiftPressed) || (!isCapsPressed && !isShiftPressed)) {
      lettersToLower();
    } else {
      lettersToUpper();
    }
  }

  // translate handler
  if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && (e.target.classList.contains('AltLeft') || e.target.classList.contains('AltRight'))) {
    if (language === 'en') {
      language = 'ru';
    } else {
      language = 'en';
    }
    if (!isKeyDown) {
      isShiftPressed = false;
      shiftLeft.classList.remove('active');
      shiftRight.classList.remove('active');
    }
    altLeft.classList.remove('active');
    altRight.classList.remove('active');
    localStorage.setItem('language', language);
    translate();
  }
}

document.addEventListener('keydown', onKeyDown);

document.addEventListener('keyup', onKeyUp);

keys.forEach((key) => key.addEventListener('click', onMouseClick));

textArea.addEventListener('click', () => {
  cursorPos = textArea.selectionStart;
});

window.onload = () => {
  language = localStorage.getItem('language') || language;
  translate();
};
