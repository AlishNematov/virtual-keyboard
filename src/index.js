import './styles/index.scss';

const KEYBOARD = {
  0:
    [
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Backquote',
        keyEn: ['`', '~'],
        keyRu: ['ё', 'Ё'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit1',
        keyEn: ['1', '!'],
        keyRu: ['1', '!'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit2',
        keyEn: ['2', '@'],
        keyRu: ['2', '"'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit3',
        keyEn: ['3', '#'],
        keyRu: ['3', '№'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit4',
        keyEn: ['4', '$'],
        keyRu: ['4', ';'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit5',
        keyEn: ['5', '%'],
        keyRu: ['5', '%'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit6',
        keyEn: ['6', '^'],
        keyRu: ['6', '?'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit7',
        keyEn: ['7', '&'],
        keyRu: ['7', '?'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit8',
        keyEn: ['8', '*'],
        keyRu: ['8', '*'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit9',
        keyEn: ['9', '('],
        keyRu: ['9', '('],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Digit0',
        keyEn: ['0', ')'],
        keyRu: ['0', ')'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Minus',
        keyEn: ['-', '_'],
        keyRu: ['-', '_'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Equal',
        keyEn: ['=', '+'],
        keyRu: ['=', '+'],
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'Backspace',
        keyEn: 'Backspace',
        keyRu: 'Backspace',
      },
    ],
  1: [
    {
      displayableText: false,
      changeable: false,
      keyCode: 'Tab',
      keyEn: 'Tab',
      keyRu: 'Tab',
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyQ',
      keyEn: ['q', 'Q'],
      keyRu: ['й', 'Й'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyW',
      keyEn: ['w', 'W'],
      keyRu: ['ц', 'Ц'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyE',
      keyEn: ['e', 'E'],
      keyRu: ['у', 'У'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyR',
      keyEn: ['r', 'R'],
      keyRu: ['к', 'К'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyT',
      keyEn: ['t', 'T'],
      keyRu: ['е', 'Е'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyY',
      keyEn: ['y', 'Y'],
      keyRu: ['н', 'Н'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyU',
      keyEn: ['u', 'U'],
      keyRu: ['г', 'Г'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyI',
      keyEn: ['i', 'I'],
      keyRu: ['ш', 'Ш'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyO',
      keyEn: ['o', 'O'],
      keyRu: ['щ', 'Щ'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyP',
      keyEn: ['p', 'P'],
      keyRu: ['з', 'З'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'BracketLeft',
      keyEn: ['[', '{'],
      keyRu: ['х', 'Х'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'BracketRight',
      keyEn: [']', '}'],
      keyRu: ['ъ', 'Ъ'],
    },
    {
      displayableText: false,
      changeable: false,
      keyCode: 'Delete',
      keyEn: 'Delete',
      keyRu: 'Delete',
    },
  ],
  2: [
    {
      displayableText: false,
      changeable: false,
      keyCode: 'CapsLock',
      keyEn: 'CapsLock',
      keyRu: 'CapsLock',
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyA',
      keyEn: ['a', 'A'],
      keyRu: ['ф', 'Ф'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyS',
      keyEn: ['s', 'S'],
      keyRu: ['ы', 'Ы'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyD',
      keyEn: ['d', 'D'],
      keyRu: ['в', 'В'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyF',
      keyEn: ['f', 'F'],
      keyRu: ['а', 'А'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyG',
      keyEn: ['g', 'G'],
      keyRu: ['п', 'П'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyH',
      keyEn: ['h', 'H'],
      keyRu: ['р', 'Р'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyJ',
      keyEn: ['j', 'J'],
      keyRu: ['о', 'О'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyK',
      keyEn: ['k', 'K'],
      keyRu: ['л', 'Л'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'KeyL',
      keyEn: ['l', 'L'],
      keyRu: ['д', 'Д'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'Semicolon',
      keyEn: [';', ':'],
      keyRu: ['ж', 'Ж'],
    },
    {
      displayableText: true,
      changeable: true,
      keyCode: 'Quote',
      keyEn: ["'", '"'],
      keyRu: ['э', 'Э'],
    },
    {
      displayableText: false,
      changeable: false,
      keyCode: 'Enter',
      keyEn: 'Enter',
      keyRu: 'Enter',
    },
  ],
  3:
    [
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ShiftLeft',
        keyEn: 'Shift',
        keyRu: 'Shift',
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Backslash',
        keyEn: ['\\', '|'], // SIC!
        keyRu: ['\\', '/'], // SIC!
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyZ',
        keyEn: ['z', 'Z'],
        keyRu: ['я', 'Я'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyX',
        keyEn: ['x', 'X'],
        keyRu: ['ч', 'Ч'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyC',
        keyEn: ['c', 'C'],
        keyRu: ['с', 'С'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyV',
        keyEn: ['v', 'V'],
        keyRu: ['м', 'М'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyB',
        keyEn: ['b', 'B'],
        keyRu: ['и', 'И'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyN',
        keyEn: ['n', 'N'],
        keyRu: ['т', 'Т'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'KeyM',
        keyEn: ['m', 'M'],
        keyRu: ['ь', 'Ь'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Comma',
        keyEn: [',', '<'],
        keyRu: ['б', 'Б'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Period',
        keyEn: ['.', '>'],
        keyRu: ['ю', 'Ю'],
      },
      {
        displayableText: true,
        changeable: true,
        keyCode: 'Slash',
        keyEn: ['/', '?'],
        keyRu: ['.', ','],
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ArrowUp',
        keyEn: '↑',
        keyRu: '↑',
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ShiftRight',
        keyEn: 'Shift',
        keyRu: 'Shift',
      },
    ],
  4:
    [
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ControlLeft',
        keyEn: 'Ctrl',
        keyRu: 'Ctrl',
      },
      {
        displayableText: false,
        changeable: true,
        keyCode: 'Language',
        keyEn: ['EN', 'EN'],
        keyRu: ['RU', 'RU'],
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'AltLeft',
        keyEn: 'Alt',
        keyRu: 'Alt',
      },
      {
        displayableText: true,
        changeable: false,
        keyCode: 'Space',
        keyEn: ' ',
        keyRu: ' ',
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'AltRight',
        keyEn: 'Alt',
        keyRu: 'Alt',
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ControlRight',
        keyEn: 'Ctrl',
        keyRu: 'Ctrl',
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ArrowLeft',
        keyEn: '←',
        keyRu: '←',
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ArrowDown',
        keyEn: '↓',
        keyRu: '↓',
      },
      {
        displayableText: false,
        changeable: false,
        keyCode: 'ArrowRight',
        keyEn: '→',
        keyRu: '→',
      },
    ],
};

const MAIN_ELEMENTS = [
  ['h1', 'title', 'Virtual Keyboard for Windows'],
  ['textarea', 'textarea', ''],
  ['div', 'keyboard', ''],
  ['h2', 'information', 'Hotkeys for change language: Alt and Shift'],
  ['h2', 'attention attention_disable', 'Caps Lock is active'],
];

function createMainElements(elementsArray) {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  elementsArray.forEach((element) => {
    const newElement = document.createElement(element[0]);
    [, newElement.className, newElement.innerText] = element;
    wrapper.append(newElement);
  });
  return wrapper;
}

function createKeyboardElements(keyboardArray, language = 'En') {
  const keyboard = document.querySelector('.keyboard');
  Object.values(keyboardArray).forEach((keyboardElement, index) => {
    const row = document.createElement('div');
    row.className = `keyboard__row keyboard__row_${index}`;
    keyboardElement.forEach((element) => {
      const keyItem = document.createElement('button');
      keyItem.className = 'keyboard__key';
      keyItem.type = 'button';
      keyItem.setAttribute('data-displayableText', element.displayableText);
      keyItem.id = element.keyCode;
      keyItem.innerText = element.changeable ? element[`key${language}`][0] : element.keyEn;
      row.append(keyItem);
    });
    keyboard.append(row);
  });
}

function getLanguage() {
  if (localStorage.getItem('virtual_keyboard.language')) {
    return localStorage.getItem('virtual_keyboard.language');
  }
  localStorage.setItem('virtual_keyboard.language', 'En');

  return localStorage.getItem('virtual_keyboard.language');
}

function setCapsLock(event) {
  localStorage.setItem('virtual_keyboard.capsLock', event.getModifierState('CapsLock') ? 1 : 0);
  if (event.getModifierState('CapsLock')) {
    document.querySelector('.attention').classList.remove('attention_disable');
  } else {
    document.querySelector('.attention').classList.add('attention_disable');
  }
}

function getCapsLock() {
  return Number(localStorage.getItem('virtual_keyboard.capsLock'));
}

function getCursorPosition() {
  const startPosition = document.querySelector('.textarea').selectionStart;
  const endPosition = document.querySelector('.textarea').selectionEnd;
  return [startPosition, endPosition];
}

function addSubctring(key, position) {
  const textarea = document.querySelector('.textarea');
  const valueLength = textarea.value.length;
  const [start, end] = position;
  if (start !== valueLength) {
    textarea.value = textarea.value.slice(0, start) + key + textarea.value.slice(end, valueLength);
    textarea.setSelectionRange(start + 1, start + 1);
  } else if (start === valueLength) {
    textarea.value += key;
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }
}

function deleteSubstring(typeButton, position) {
  const textarea = document.querySelector('.textarea');
  let [start, end] = position;
  if (typeButton === 'Delete' && start === end) {
    end += 1;
  } else if (typeButton !== 'Delete' && start === end) {
    start -= 1;
  }
  const text = textarea.value.split('');
  text.splice(start, end - start);
  textarea.value = text.join('');
  textarea.setSelectionRange(start, start);
}

function setLanguage(language) {
  localStorage.setItem('virtual_keyboard.language', language);
  return localStorage.getItem('virtual_keyboard.language');
}

function changeKeyboardLayout() {
  const language = getLanguage() === 'Ru' ? setLanguage('En') : setLanguage('Ru');
  Object.values(KEYBOARD).forEach((keyboardItem) => {
    keyboardItem.forEach((element) => {
      if (element.changeable) {
        [document.querySelector(`#${element.keyCode}`).innerText] = element[`key${language}`];
      }
    });
  });
}

function modifyKeyboardShiftDown(event) {
  if (event.altKey) {
    changeKeyboardLayout();
  } else {
    const language = getLanguage();
    Object.values(KEYBOARD).forEach((keyboardItem) => {
      keyboardItem.forEach((item) => {
        if (item.changeable) {
          [, document.querySelector(`#${item.keyCode}`).innerText] = item[`key${language}`];
        }
      });
    });
  }
}

function modifyKeyboardShiftUp(event) {
  if (event.altKey) {
    // Some action
  } else {
    const language = getLanguage();
    Object.values(KEYBOARD).forEach((keyboardItem) => {
      keyboardItem.forEach((item) => {
        if (item.changeable) {
          [document.querySelector(`#${item.keyCode}`).innerText] = item[`key${language}`];
        }
      });
    });
  }
}

function changeCase(bool) {
  const language = getLanguage();
  Object.values(KEYBOARD).forEach((keyboardItem) => {
    keyboardItem.forEach((item) => {
      if (item.changeable && bool === 1) {
        document.querySelector(`#${item.keyCode}`).innerText = item[`key${language}`][0].toLowerCase();
      } else if (item.changeable && bool === 0) {
        item[`key${language}`][0].toUpperCase() 
      }
    });
  });
}

function addActionKeyDown(event) {
  document.querySelector(`#${event.code}`).classList.add('keyboard__key_active', 'keyboard__key_click');
  let text = document.querySelector(`#${event.code}`).innerText;
  if (event.key.length === 1 || event.key === 'Space') {
    event.preventDefault();
    addSubctring(text, getCursorPosition());
  } else if (event.keyCode === 'Tab') {
    event.preventDefault();
    addSubctring('    ', getCursorPosition());
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    deleteSubstring('Backspace', getCursorPosition());
  } else if (event.key === 'Delete') {
    event.preventDefault();
    deleteSubstring('Delete', getCursorPosition());
  } else if (event.key === 'CapsLock') {
    event.preventDefault();
    changeCase(getCapsLock());
  } else if (event.key === 'Shift') {
    event.preventDefault();
    modifyKeyboardShiftDown(event);
  } else if (event.key === 'LeftCtrl' || event.key === 'RightCtrl') {
    event.preventDefault();
  } else if (event.key === 'Alt') {
    event.preventDefault();
    if (event.shifKey) {
      changeKeyboardLayout();
    }
  } else if (event.key === 'Enter') {
    event.preventDefault();
    addSubctring('\n', getCursorPosition());
  }
}

function addActionKeyUp(event) {
  document.querySelector(`#${event.code}`).classList.remove('keyboard__key_active', 'keyboard__key_click');
  if (event.key === 'Shift') {
    event.preventDefault();
    modifyKeyboardShiftUp(event);
  } else if (event.key === 'CapsLock') {
    setCapsLock(event);
  }
}

function changeCursorPosition(arrow, position) {
    const textarea = document.querySelector('.textarea');
    const text = textarea.value;
    let [start, end] = position;
    const rowNumber = Math.ceil(start/90);
    if( start === end) {
        if (arrow === '↑') {
            let textRows = getRowsOfText(text.slice(0, start));
            if( textRows.length > 1) {
                if(textRows[textRows.length - 2].length < textRows[textRows.length - 1].length){
                    textarea.setSelectionRange(start - textRows[textRows.length - 1].length, start - textRows[textRows.length - 1].length);
                } else {
                    start -= textRows[textRows.length - 2].length - !text.slice(0, start).includes('\n') ;
                    textarea.setSelectionRange(start, start);
                }
            } else {
                textarea.setSelectionRange(start - text.slice(0, start).length, start - text.slice(0, start).length);
            }
        } else if (arrow === '←') {
            textarea.setSelectionRange(start - 1, start - 1);
        } else if (arrow === '→') {
            textarea.setSelectionRange(start + 1, start + 1);
        } else if (arrow === '↓') {
            let textRows = getRowsOfText(text.slice(0, start));
            let naxRows = getRowsOfText(text);
            console.log(textRows)
            if( textRows.length < naxRows.length) {
                textarea.setSelectionRange(start + 90, start + 90);
            } else {
                textarea.setSelectionRange(start + text.slice(0, start).length, start + text.slice(0, start).length);
            }
        }
    } else {
        if (arrow === '←' || arrow === '↑') {
            textarea.setSelectionRange(start, start);
        } else if (arrow === '→' || arrow === '↓') {
            textarea.setSelectionRange(end, end);
        }
    }
}

function getRowsOfText(text) {
    let number = []
    text.split('\n').forEach(element => {
        let splitElement = element.split('');
        if(splitElement.length > 90) {
            while(splitElement.length > 90) {
                number.push(splitElement.splice(0, 90).join(''));
            }
            number.push(splitElement.join(''))
        } else {
            number.push(element)
        }
    })
    return number.map(element => element += '\n');
}

function addActionMouseDown(event) {
  if (event.target.type === 'button') {
    const text = event.target.id === 'Space' ? ' ' : event.target.innerText;
    const arrows = ['↑', '←', '↓', '→'];
    document.querySelector('.textarea').focus();
    document.querySelector(`#${event.target.id}`).classList.add('keyboard__key_active', 'keyboard__key_click');
    if (event.target.innerText.length === 1 && !arrows.includes(event.target.innerText) || event.target.id === 'Space') {
      addSubctring(text, getCursorPosition());
    } else if (text === 'Tab') {
      addSubctring('    ', getCursorPosition());
    } else if (text === 'Backspace') {
      deleteSubstring('Backspace', getCursorPosition());
    } else if (text === 'Delete') {
      deleteSubstring('Delete', getCursorPosition());
    } else if (text === 'CapsLock') {
      changeCase(getCapsLock());
    } else if (text === 'Shift') {
      modifyKeyboardShiftDown(event);
    } else if (text === 'LeftCtrl' || text === 'RightCtrl') {
      // some code
    } else if (text === 'Alt') {
      if (event.shifKey) {
        changeKeyboardLayout();
      }
    } else if (text === 'Enter') {
      addSubctring('\n', getCursorPosition());
    } else if (event.target.id === 'Language') {
      changeKeyboardLayout();
    } else if (arrows.includes(event.target.innerText)){
      changeCursorPosition(event.target.innerText, getCursorPosition());
    }
  }
}

function addActionMouseUp(event) {
    document.querySelector('.textarea').focus();
  if (event.target.innerText === 'Shift') {
    // some code
  } else if (event.target.innerText === 'CapsLock') {
    setCapsLock(event);
  } else {
    document.querySelector(`#${event.target.id}`).classList.remove('keyboard__key_active', 'keyboard__key_click');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(createMainElements(MAIN_ELEMENTS));
  createKeyboardElements(KEYBOARD, getLanguage());
  document.addEventListener('keydown', addActionKeyDown);
  document.addEventListener('keyup', addActionKeyUp);
  document.querySelector('.keyboard').addEventListener('mousedown', addActionMouseDown);
  document.querySelector('.keyboard').addEventListener('mouseup', addActionMouseUp);
  document.addEventListener('mousemove', setCapsLock);
});
