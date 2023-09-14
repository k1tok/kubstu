// Создаю объект с соответствием дней недели и id таблицы
const dayToTableId = {
  'Понедельник': 'scheduleTableMonday',
  'Вторник': 'scheduleTableTuesday',
};

// Создаю массив с данными для таблицы 
const scheduleData = [
  {
    day: 'Понедельник',
    time: '08:00  09:30',
    subject: 'Электроника и схемотехника | К-401 ( заполнено с помощью JS )'
  },
  {
    day: 'Вторник',
    time: '08:00  09:30',
    subject: 'Электроника и схемотехника -> Для вторника | К-401 ( заполнено с помощью JS )'
  },
  // остальные дни
  
];

// Прохожусь по массиву данных и создаю строки для таблицы для каждого дня недели
scheduleData.forEach(item => {
  // Получаем соответствующий id таблицы из объекта dayToTableId
  const tableId = dayToTableId[item.day];

  // Получаю ссылку на элемент tbody в таблице
  const tbody = document.querySelector(`#${tableId} tbody`);

  // Создаю строку для таблицы
  const row = document.createElement('tr');

  const timeCell = document.createElement('td');
  timeCell.innerHTML = item.time;

  const subjectCell = document.createElement('td');
  subjectCell.innerHTML = `<p style="font-size:16px">${item.subject}</p>`;

  row.appendChild(timeCell);
  row.appendChild(subjectCell);

  tbody.appendChild(row);
});
