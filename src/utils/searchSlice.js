import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:'search',
    initialState : {
        showGptSearch :false
    },
    reducers : {
        toggleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        }

    }

})


export const {toggleGptSearchView} = searchSlice.actions;
export default searchSlice.reducer;