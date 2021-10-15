import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store";
import {addUser, createNewGame} from "./store/birSlice";

function App() {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.BirSlice);
    console.log(state)


    const user = {
        id: 'asdwdasdw',
        name: 'aaaaa',
        cash: 123,
        property: [],
        canPlay: true,
        position: 0
    }

    const game = {
        id: 'aaaa',
        name: 'nasasda',
        users: [user]
    }
    const newUser = () => {
        dispatch(addUser(user));
        dispatch(createNewGame(game));
    }

    return (
        <div className="App">
            <header onClick={newUser} className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
