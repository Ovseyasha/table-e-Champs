window.onload = function (e) {
  let table = [
    {
      month: 'Январь 2020',
      events: [
        {
          from: '3.01.2020',
          to: '4.01.2020',
          description: 'Первенство Брянской области среди юниоров до 20 лет (2001-2002гг.р.), юношей и девушек до 18 лет (2003-2004гг.р.)',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '1'
        },
        {
          from: '5.01.2020',
          to: '6.01.2020',
          description: 'Первенство Брянской области',
          city: 'Брянск',
          category: 'Дзюдо',
          link: '2'
        },
        {
          from: '8.01.2020',
          to: '',
          description: 'Чемпионат и первенство Брянской области среди юношей и девушек (2005-2006гг.р.)',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '3'
        }
      ],
    },
    {
      month: 'Февраль 2020',
      events: [
        {
          from: '3.02.2020',
          to: '',
          description: 'Первенство г.Брянска среди юношей и девушек (2005-2006, 2007-2008гг.р.)',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '4'
        },
        {
          from: '7.02.2020',
          to: '8.02.2020',
          description: 'Первенство ЦФО(вольная борьба) до 21 года',
          city: 'Брянск',
          category: 'Спортиваня борьба',
          link: '5'
        },
        {
          from: '13.02.2020',
          to: '',
          description: 'Межрегиональные соревнования памяти ЗРФК, ЗТ СССР и РСФСР В.Д.Самотесова в помещении',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '6'
        }
      ],
    },
    {
      month: 'Март 2020',
      events: [
        {
          from: '3.03.2020',
          to: '4.03.2020',
          description: 'Всероссийские соревнования по спортивной гимнастике «Юный Динамовец - надежда России»',
          city: 'Брянск',
          category: 'Спортивная гимнастика',
          link: '7'
        },
        {
          from: '13.03.2020',
          to: '14.03.2020',
          description: 'Областной турнир памяти ЗТ РСФСР В.А.Сыромолотова» в помещении',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '8'
        },
        {
          from: '23.03.2020',
          to: '24.03.2020',
          description: 'Первенство Брянской области по легкоатлетическим многоборьям в помещении (2003-2004гг.р., 2005-2006гг.р., 2007-2008гг.р.)',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '9'
        }
      ],
    },

  ];
  let table__item = this.document.querySelector('.table__item');

  for (let i = 0; i < table.length; i++) {

    let month = this.document.createElement('div');
    month.classList.add('table__month');
    month.innerHTML = table[i].month;
    table__item.appendChild(month);

    for (let j = 0; j < table[i].events.length; j++) {
      let table__event = this.document.createElement('div');
      let event = this.document.createElement('a');
      let event__date = this.document.createElement('div');
      let event__from = this.document.createElement('div');
      let event__to = this.document.createElement('div');
      let event__content = this.document.createElement('div');
      let event__description = this.document.createElement('div');
      let event__info = this.document.createElement('div');
      let event__city = this.document.createElement('div');
      let fas = this.document.createElement('i');
      let event__category = this.document.createElement('div');

      table__event.classList.add('table__event');
      event.classList.add('event');
      event__date.classList.add('event__date');
      event__date.classList.add('date');
      event__from.classList.add('event__from');
      event__to.classList.add('event__to');
      event__content.classList.add('event__content');
      event__description.classList.add('event__description');
      event__info.classList.add('event__info');
      event__city.classList.add('event__city');
      fas.classList.add('fas');
      fas.classList.add('fa-map-marker-alt');
      fas.classList.add('color-97');
      event__category.classList.add('event__category');


      event.setAttribute('href', table[i].events[j].link);

      event__from.innerHTML = table[i].events[j].from;

      event__to.innerHTML = table[i].events[j].to;

      event__description.innerHTML = table[i].events[j].description;

      event__city.appendChild(fas);
      event__city.innerHTML += table[i].events[j].city;

      event__category.innerHTML = table[i].events[j].category;

      event__date.appendChild(event__from);
      event__date.appendChild(event__to);

      event__info.appendChild(event__city);
      event__info.appendChild(event__category);

      event__content.appendChild(event__description);
      event__content.appendChild(event__info);

      event.appendChild(event__date);
      event.appendChild(event__content);

      table__event.appendChild(event);
      table__item.appendChild(table__event);
    }
  }
};
