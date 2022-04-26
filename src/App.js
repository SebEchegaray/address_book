import React from 'react';
import Header from "./components/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faFontAwesome)

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;