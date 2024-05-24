
import './App.css';
import Card from './components/Card';

function App() {

  return (
    <div className='app'>
      <h1 className='app__title'>Simple Cards</h1>
      <div className='app__container'>
        <Card
          cardTitle='Primary'
          cardColor='dodgerblue'
        />
        <Card
          cardTitle='Secondary'
          cardColor='green'
        />
        <Card
          cardTitle='Danger'
          cardColor='red'
        />
      </div>
    </div>
  )
}

export default App;
