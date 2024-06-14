import React from 'react';
import ReactDOM from 'react-dom/client';

//React element
const heading = (<h1 id="title" key="h2"> Namaste React</h1>);
let xyz=10;
const Title =() => (<h1 id="title" key="h3"> Title React</h1>);
//React Component
const HeaderComponent = () => {
    return (<div>
        {heading}
        <Title/> //Component composition
        {Title()},{console.log("hello")},{xyz}
        <h1>Namaste React Functional Component</h1>
        <h2>this is h2</h2>
    </div>);
};
//without composition Component
const HeaderComponent2 = () =>
(<div>
    <h1>Nameste React Functional Component</h1>
    <h2>this is h2</h2>
</div>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
