import React from 'react';
import Component, { FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/example/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';

function App() {
  return (
    <>
      {/* <Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <ConditionalRender /> */}
      {/* <Example2 /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      <StateComponent />
    </>
  );
}

export default App;