import React, { Component } from 'react';
import ProductList from './components/ProductList'
import './App.css';

const tempProducts = 
[
	{	id:1,
		displayName:"Produkt 1", 
		description: "description 1", 
		imageUrls:
			[
				"url1",
				"url2"
			],
		price: 123
	}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fire Rooster</h2>
        </div>
        <ProductList products={tempProducts}/>
      </div>
    );
  }
}

export default App;
