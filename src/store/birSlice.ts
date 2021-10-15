import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GameRoom {
    id: string;
    name: string;
    users: User[];
}

export interface User {
    id: string;
    name: string;
    cash: number;
    property: any;
    canPlay: boolean;
    position: number;
}

const initialState: any[] = [];

const BirSlice = createSlice({
    name: "birSlice",
    initialState,
    reducers: {
        createNewGame: (state, action:PayloadAction<GameRoom>) => {
            const newGameRoom = {
                id: action.payload.id,
                name: action.payload.name,
                users: action.payload.users
            };
            state.push(newGameRoom);
        },
        addUser: (state, action:PayloadAction<User>) => {
            const newUser = {
                id:action.payload.id,
                name: action.payload.name,
                cash: action.payload.cash,
                property: action.payload.property,
                canPlay: action.payload.canPlay,
                position: action.payload.position
            };
            state.push(newUser);
        }
    }
})

export default BirSlice.reducer;
export const { addUser, createNewGame } = BirSlice.actions;
