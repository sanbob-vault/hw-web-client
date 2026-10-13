{
    // Календарь
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const lastMonthEnd = new Date(year, month, 0);
    const thisMonthEnd = new Date(year, month + 1, 0);

    const dates = [];

    { // нахожу последние дни прошлого месяца // кавычки чтобы переменные остались тут
        let startWeekDay = lastMonthEnd.getDay()
        let startWeekDate = lastMonthEnd.getDate()
        for (startWeekDay; startWeekDay > 0; startWeekDay--)
            dates.unshift(startWeekDate--);
    }

    { // Заполняем дни текущего месяца
        const thisMonthLastDate = thisMonthEnd.getDate();
        for (let date = 1; date <= thisMonthLastDate; date++)
            dates.push(date);
    }

    // дозаполняем массив следующим месяцем. Можно дозаполнять до % 7 !== 0
    for (let date = 1; dates.length !== 42; date++)
        dates.push(date);

    // Вставка на страницу
    const calendar = document.getElementById('calendar');
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    calendar.getElementsByTagName('caption')[0].innerText = `${monthNames[month]} ${year}`;

    const tbody = calendar.getElementsByTagName('tbody')[0];
    for (let i = 0; i < 42; i += 7) {
        const tr = document.createElement('tr');
        dates.slice(i, i + 7).forEach(
            (date) => {
                const td = document.createElement('td');
                td.innerText = date;
                tr.appendChild(td);
            }
        );
        tbody.appendChild(tr);
    }
}

{
    // Таблица умножения
    table = document.getElementById('multiply-table');
    for (let i = 1; i <= 10; i++) {
        tr = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            td = document.createElement('td');
            td.innerText = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}