import {createAyncThunk,createSlice} from '@reduxjs/toolkit'
import aixos from 'axios'

export const fetchAllPosts= createAyncThunk('posts/fetchAllPosts',
aysnc(param) =>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
}
)

const postSlice= createSlice({
    name: 'posts',
    initialState,
    reducers:{
        
    }

})