import React from 'react';
import Navbar from './components/NavBar';
import QnABot from './components/QnABot';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 p-4">
        <QnABot />
      </div>
      <Footer />
    </div>
  );
};

export default App;
