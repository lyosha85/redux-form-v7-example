import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoForm from './DemoForm';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<DemoForm />
				</div>
			</Provider>
		);
	}
}

export default App;
