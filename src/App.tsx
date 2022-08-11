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
    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Shohei Ohtani",
            age: 28,
            imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png",
            note: "Two-way player",
        },
        {
            name: "Mike Trout",
            age: 31,
            imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30836.png&w=350&h=254",
            note: "The GOAT",
        },
        {
            name: "Ichiro Suzuki",
            age: 48,
            imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4570.png",
            note: "Area 51 cannon",
        }
    ])

    return (
        <div className="App">
            <h1>Some pretty okay baseball players</h1>
            <List people={people} />
        </div>
    );
}

export default App;
