import './App.css';
import Card from "./components/Card/Card";

const items = [
  {
    id: 1,
    header: 'Сказочное заморское яство',
    name: 'Нямушка',
    with: 'фуа-гра',
    portion: '10 порций',
    size: '0,5',
    presents: 'мышь в подарок',
    description: '',
    selected: false,
    selectedText: 'Печень утки разварная с артишоками.',
    count: 1,
    image: ''
  },
  {
    id: 2,
    header: 'Сказочное заморское яство',
    name: 'Нямушка',
    with: 'рыбой',
    portion: '40 порций',
    size: '2',
    presents: '2 мыши в подарок',
    description: '',
    selected: false,
    selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    count: 2,
    image: ''
  },
  {
    id: 3,
    header: 'Сказочное заморское яство',
    name: 'Нямушка',
    with: 'курой',
    portion: '100 порций',
    size: '5',
    presents: '5 мышей в подарок',
    description: 'заказчик доволен',
    selected: false,
    selectedText: 'Филе из цыплят с трюфелями в бульоне.',
    count: 0,
    image: ''
  }
]



function App() {
  return (
    <div className="App">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      <div className="cards">
        {
          items.map((card) => <Card key={card.id} {...card} />)
        }
      </div>
    </div>
  );
}

export default App;
