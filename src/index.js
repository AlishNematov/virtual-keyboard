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
        keyEn: ['En', 'En'],
        keyRu: ['Ru', 'Ru'],
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
    localStorage.getItem('virtual_keyboard.language');
  } else {
    localStorage.setItem('virtual_keyboard.language');
  }
  return localStorage.getItem('virtual_keyboard.language');
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(createMainElements(MAIN_ELEMENTS));
  createKeyboardElements(KEYBOARD, getLanguage());
});
