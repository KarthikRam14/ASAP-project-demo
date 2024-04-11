// App.js
import React from 'react';
import PDFToImage from './assets/PDFToImage';

function App() {
  const invoiceData = {
    name: 'Product Name',
    quantity: 5,
    total: 50, // Assuming total price
  };

  return (
    <div className="App">
      <PDFToImage data={invoiceData} />
    </div>
  );
}

export default App;
