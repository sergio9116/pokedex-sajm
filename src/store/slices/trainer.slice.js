import { createSlice } from "@reduxjs/toolkit";

const trainer = createSlice({
    name: 'triner', 
    initialState: '',
    reducers: {
        setTrainer: (_value, action) => action.payload,
    }
});

export const { setTrainer } = trainer.actions;

export default trainer.reducer;