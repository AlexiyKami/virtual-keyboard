const keys = document.querySelectorAll('.kb-key');
const letterKeys = document.querySelectorAll('.key');
const digits = document.querySelectorAll('.digit');
const symbolKeys = document.querySelectorAll('.symbol');

let isCapsLocked = false;
document.addEventListener('keydown', (e) => {
  // find a pressed key
  const key = document.querySelector(`.${e.code}`);
  // if key not null
  if (key) {
    e.preventDefault();
    key.classList.add('active');
  }
  // shift handler
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    digitsToSymbols();
    shiftSymbols();
    if (!isCapsLocked) {
      lettersToUpper();
    } else {
      lettersToLower();
    }
  }

  // capslock handler
  if (e.code === 'CapsLock') {
    if(isCapsLocked === false) {
      lettersToUpper();
      isCapsLocked = !isCapsLocked;
    } else {
      lettersToLower();
      isCapsLocked = !isCapsLocked;
    }
  }



  console.log(e.code);
})

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(`.${e.code}`);

  if (key) {
    key.classList.remove('active');
  }

  if(e.code === 'CapsLock' && isCapsLocked) {
    key.classList.add('active');
  }

  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
    symbolsToDigits();
    unshiftSymbols();
    if (!isCapsLocked) {
      lettersToLower();
    } else {
      lettersToUpper();
    }
  }

  console.log(e.code);
})

function lettersToUpper() {
  letterKeys.forEach(key => key.innerHTML = key.innerHTML.toUpperCase())
}

function lettersToLower() {
  letterKeys.forEach(key => key.innerHTML = key.innerHTML.toLowerCase())
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
  
  one.innerHTML = '!';
  two.innerHTML = '@';
  three.innerHTML = '#';
  four.innerHTML = '$';
  five.innerHTML = '%';
  six.innerHTML = '^';
  seven.innerHTML = '&';
  eight.innerHTML = '*';
  nine.innerHTML = '(';
  zero.innerHTML = ')';
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

    backquote.innerHTML = '~';
    minus.innerHTML = '_';
    equal.innerHTML = '+';
    bracketLeft.innerHTML = '{';
    bracketRight.innerHTML = '}';
    backslash.innerHTML = '|';
    semicolon.innerHTML = ':';
    quote.innerHTML = '"';
    comma.innerHTML = '<';
    period.innerHTML = '>';
    slash.innerHTML = '?';
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

    backquote.innerHTML = '`';
    minus.innerHTML = '-';
    equal.innerHTML = '=';
    bracketLeft.innerHTML = '[';
    bracketRight.innerHTML = ']';
    backslash.innerHTML = `\\`;
    semicolon.innerHTML = ';';
    quote.innerHTML = '\'';
    comma.innerHTML = ',';
    period.innerHTML = '.';
    slash.innerHTML = '/';
}