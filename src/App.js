import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import UserMainPage from './components/UserMainPage';

function App() {
  return (
    <div className="App">
	  <div className="container">
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                    </div>
    {/* <UserMainPage/>*/}
    </div>
  );
}

export default App;
