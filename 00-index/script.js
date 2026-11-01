
const homeworks = [
    {
        num: '03',
        title: 'Работа с DOM и событиями',
        desc: 'Календарь и таблица умножения',
        tag: 'HTML/JS',
        date: '13.10',
        url: './03-dom/index.html'
    },
    {
        num: '04',
        title: 'Работа с формой и DOM',
        desc: 'Конструктор визиток',
        tag: 'HTML/TS',
        date: '01.11',
        url: './04-business-card-constructor/index.html'
    }
];

function renderList() {
    const listContainer = document.getElementById('hw-list');
    listContainer.innerHTML = homeworks.map(item => `
        <a href="${item.url}" class="hw-item">
            <div class="hw-left">
                <span class="hw-num">${item.num}</span>
                <div>
                    <span class="hw-title">${item.title}</span>
                    ${item.desc ? `<span class="hw-desc">${item.desc}</span>` : ''}
                </div>
            </div>
            <div class="hw-right">
                ${item.tag ? `<span class="hw-tag">${item.tag}</span>` : ''}
                <span class="hw-date">${item.date}</span>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderList);
