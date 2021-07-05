import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
					<h1>Google Clone 🚀</h1>
					<Home />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
