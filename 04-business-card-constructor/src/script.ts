
// interface в type script - это как Protocol в python
interface TextSettings { // Настройки текста
    text: string;
    align: string;
    size: string;
    color: string;
}

interface CardState { // Настройки всей визитки
    company: string;
    name: TextSettings;
    position: TextSettings;
    phones: string[];
    email: {
        text: string;
        show: boolean;
    };
    address: {
        text: string;
        show: boolean;
    };
}

// Ключевое слово 'as' гарантирует статическому типизатору то, что мы работает с элементом HTMLButtonElement, 
// а не просто HTMLElement или null
const applyBtn = document.getElementById('applyBtn') as HTMLButtonElement;
const addPhoneBtn = document.getElementById('addPhoneBtn') as HTMLButtonElement;
const phoneContainer = document.getElementById('phoneContainer') as HTMLDivElement;

// Телефон
addPhoneBtn.addEventListener('click', () => {
    const row = document.createElement('div');
    row.className = 'phone-row';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'phone-input';
    input.placeholder = 'Введите телефон';
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Удалить';
    removeBtn.className = 'btn-remove';
    removeBtn.addEventListener('click', () => row.remove());
    
    row.append(input, removeBtn);
    phoneContainer.append(row);
});

// Функция для сбора данных -> возвращает наш объект CardState
function collectFormData(): CardState {
    // Собираем все инпуты с телефонами, преобразуем NodeList в массив и достаем их value
    const phoneInputs = document.querySelectorAll('.phone-input') as NodeListOf<HTMLInputElement>; // типы пишутся как в C++
    const phoneValues = Array.from(phoneInputs)
        .map(input => input.value)
        .filter(val => val.trim() !== ''); // отсекаем пустые строки

    // Возвращаем объект CardState, используем наш interface
    return {
        company: (document.getElementById('companyInput') as HTMLInputElement).value,
        name: {
            text: (document.getElementById('nameInput') as HTMLInputElement).value,
            align: (document.getElementById('nameAlign') as HTMLSelectElement).value,
            size: (document.getElementById('nameSize') as HTMLSelectElement).value,
            color: (document.getElementById('nameColor') as HTMLInputElement).value,
        },
        position: {
            text: (document.getElementById('positionInput') as HTMLInputElement).value,
            align: (document.getElementById('positionAlign') as HTMLSelectElement).value,
            size: (document.getElementById('positionSize') as HTMLSelectElement).value,
            color: (document.getElementById('positionColor') as HTMLInputElement).value,
        },
        phones: phoneValues,
        email: {
            text: (document.getElementById('emailInput') as HTMLInputElement).value,
            show: (document.getElementById('emailShow') as HTMLInputElement).checked,
        },
        address: {
            text: (document.getElementById('addressInput') as HTMLInputElement).value,
            show: (document.getElementById('addressShow') as HTMLInputElement).checked,
        }
    };
}

// Функция для отрисовки <- принимает наш объект CardState
function renderCard(state: CardState) {
    // Компания
    const cardCompany = document.getElementById('cardCompany') as HTMLDivElement;
    cardCompany.textContent = state.company;

    // 2. ФИО
    const cardName = document.getElementById('cardName') as HTMLDivElement;
    cardName.textContent = state.name.text;
    cardName.style.textAlign = state.name.align;
    cardName.style.fontSize = state.name.size;
    cardName.style.color = state.name.color;

    // 3. Должность
    const cardPosition = document.getElementById('cardPosition') as HTMLDivElement;
    cardPosition.textContent = state.position.text;
    cardPosition.style.textAlign = state.position.align;
    cardPosition.style.fontSize = state.position.size;
    cardPosition.style.color = state.position.color;

    // 4. Телефоны
    const cardPhonesList = document.getElementById('cardPhonesList') as HTMLDivElement;
    cardPhonesList.innerHTML = ''; // очищаем старый список
    state.phones.forEach(phone => { // для каждого
        const phoneDiv = document.createElement('div');
        phoneDiv.textContent = phone;
        cardPhonesList.append(phoneDiv);
    });

    // 5. Email и адрес
    const cardEmail = document.getElementById('cardEmail') as HTMLDivElement;
    cardEmail.textContent = state.email.text;
    // Меняем свойство display, чтобы скрыть или показать элемент
    cardEmail.style.display = state.email.show ? 'block' : 'none'; // тернарный оператор

    const cardAddress = document.getElementById('cardAddress') as HTMLDivElement;
    cardAddress.textContent = state.address.text;
    cardAddress.style.display = state.address.show ? 'block' : 'none';
}

// Триггер для сбора данных и отрисовки (мутирования DOM)
applyBtn.addEventListener('click', () => {
    const currentState = collectFormData();
    renderCard(currentState);
});

// Инициализация при первой загрузке страницы, чтобы применить дефолтные значения
renderCard(collectFormData());