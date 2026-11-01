"use strict";
// Ключевое слово 'as' гарантирует статическому типизатору то, что мы работает с элементом HTMLButtonElement, 
// а не просто HTMLElement или null
const applyBtn = document.getElementById('applyBtn');
const addPhoneBtn = document.getElementById('addPhoneBtn');
const phoneContainer = document.getElementById('phoneContainer');
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
function collectFormData() {
    // Собираем все инпуты с телефонами, преобразуем NodeList в массив и достаем их value
    const phoneInputs = document.querySelectorAll('.phone-input'); // типы пишутся как в C++
    const phoneValues = Array.from(phoneInputs)
        .map(input => input.value)
        .filter(val => val.trim() !== ''); // отсекаем пустые строки
    // Возвращаем объект CardState, используем наш interface
    return {
        company: document.getElementById('companyInput').value,
        name: {
            text: document.getElementById('nameInput').value,
            align: document.getElementById('nameAlign').value,
            size: document.getElementById('nameSize').value,
            color: document.getElementById('nameColor').value,
        },
        position: {
            text: document.getElementById('positionInput').value,
            align: document.getElementById('positionAlign').value,
            size: document.getElementById('positionSize').value,
            color: document.getElementById('positionColor').value,
        },
        phones: phoneValues,
        email: {
            text: document.getElementById('emailInput').value,
            show: document.getElementById('emailShow').checked,
        },
        address: {
            text: document.getElementById('addressInput').value,
            show: document.getElementById('addressShow').checked,
        }
    };
}
// Функция для отрисовки <- принимает наш объект CardState
function renderCard(state) {
    // Компания
    const cardCompany = document.getElementById('cardCompany');
    cardCompany.textContent = state.company;
    // 2. ФИО
    const cardName = document.getElementById('cardName');
    cardName.textContent = state.name.text;
    cardName.style.textAlign = state.name.align;
    cardName.style.fontSize = state.name.size;
    cardName.style.color = state.name.color;
    // 3. Должность
    const cardPosition = document.getElementById('cardPosition');
    cardPosition.textContent = state.position.text;
    cardPosition.style.textAlign = state.position.align;
    cardPosition.style.fontSize = state.position.size;
    cardPosition.style.color = state.position.color;
    // 4. Телефоны
    const cardPhonesList = document.getElementById('cardPhonesList');
    cardPhonesList.innerHTML = ''; // очищаем старый список
    state.phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.textContent = phone;
        cardPhonesList.append(phoneDiv);
    });
    // 5. Email и адрес
    const cardEmail = document.getElementById('cardEmail');
    cardEmail.textContent = state.email.text;
    // Меняем свойство display, чтобы скрыть или показать элемент
    cardEmail.style.display = state.email.show ? 'block' : 'none'; // тернарный оператор
    const cardAddress = document.getElementById('cardAddress');
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
