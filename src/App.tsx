import React from 'react';
import Component, { FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2 from './component_manage/example/Example2';

function App() {
  return (
    <>
      {/* <Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <ConditionalRender /> */}
      <Example2 />
    </>
  );
}

export default App;