import counterReducer from './counterSlice'
import postReducer from './postStore'

 export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer
        

    }

})
