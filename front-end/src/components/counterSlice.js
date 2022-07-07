import { action } from "history";

const initialState = { count: 0 }
export const counterSlice = createSlice({

    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: () => {
            state.count += 1;
        },
        incrementByAmount: () => {
            state.count += action.payload

        }

    }

})

export deafult counterSlice.reducer;
export const { increment, incrementByAmount } = counterSlice.actions