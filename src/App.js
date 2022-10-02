import './App.css';
import Card from './components/card';
import Collapse from './components/collapse';

function App() {
  return (
    <div class="App">

      <div className='container'>
        <div className='row'>
          <div className='card-group w-100'>

            <div className='col'>
              <Collapse href="collapseExampleOne">
                <Card cardTitle="cardOne" cardText="CARD TEXT 1" cardDate="1 day ago" image="https://picsum.photos/id/1/200/300" />
              </Collapse>
            </div>

            <div className='col'>
              <Collapse href="collapseExampleTwo">
                <Card cardTitle="cardTwo" cardText="CARD TEXT 2" cardDate="2 days ago" image="https://picsum.photos/id/2/200/300" />
              </Collapse>
            </div>


            <div className='col'>
              <Collapse href="collapseExampleThree">
                <Card cardTitle="cardThree" cardText="CARD TEXT 3" cardDate="3 days ago" image="https://picsum.photos/id/3/200/300" />
              </Collapse>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
