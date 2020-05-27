window.onload = function (e) {
  let data = [
    {
      month: 'Январь 2020',
      events: [
        {
          from: '03.01.2020',
          to: '04.01.2020',
          description: 'Первенство Брянской области среди юниоров до 20 лет (2001-2002гг.р.), юношей и девушек до 18 лет (2003-2004гг.р.)',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '1'
        },
        {
          from: '05.01.2020',
          to: '06.01.2020',
          description: 'Первенство Брянской области',
          city: 'Брянск',
          category: 'Дзюдо',
          link: '2'
        },
        {
          from: '08.01.2020',
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
          from: '03.02.2020',
          to: '',
          description: 'Первенство г.Брянска среди юношей и девушек (2005-2006, 2007-2008гг.р.)',
          city: 'Брянск',
          category: 'Легкая атлетика',
          link: '4'
        },
        {
          from: '07.02.2020',
          to: '08.02.2020',
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
          from: '03.03.2020',
          to: '04.03.2020',
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

  class Table {
    constructor(props) {
      this.table = [];
      for (let i = 0; i < props.length; i++) {
        this.table.push(props[i]);

      }
      this.render();
    }
    render() {
      for (let i = 0; i < this.table.length; i++) {
        let table__item = document.querySelector('.table__item');
        table__item.innerHTML += `<div class="table__month">${this.table[i].month}</div>`;
        for (let j = 0; j < this.table[i].events.length; j++) {
          table__item.innerHTML += `<div class="table__event">
            <a class="event" href="${this.table[i].events[j].link}">
              <div class="event__date date">
                <div class="event__from">${this.table[i].events[j].from}</div>
                <div class="event__to">${this.table[i].events[j].to}</div>
              </div>
              <div class="event__content">
                <div class="event__description">
                  ${this.table[i].events[j].description}
                </div>
                <div class="event__info">
                  <div class="event__city">
                    <i class="fas fa-map-marker-alt"></i>
                    ${this.table[i].events[j].city}
                  </div>
                  <div class="event__category">
                    ${this.table[i].events[j].category}
                  </div>
                </div>
              </div>
            </a>
          </div>`;

        }
      }
    }
  }
  new Table(data);
};
