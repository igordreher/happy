import React from 'react';

interface TitleProps{
  "text": string;
}

function Title(props: TitleProps){
return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="App">
      <Title text="Hello World"/>
      <Title text="NWL3"/>
    </div>
  );
}

export default App;
