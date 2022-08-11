import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";

interface IState {
    people: {
        name: string,
        age: number,
        imageUrl: string,
        note?: string, // ? - optional
    }[] // [] - going to be an array
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([])

    return (
        <div className="App">
            <h1>Some pretty okay baseball players</h1>
            <List people={people} />
        </div>
    );
}

export default App;
