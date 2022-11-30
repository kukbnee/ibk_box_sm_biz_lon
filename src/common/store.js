import { configureStore, createSlice } from '@reduxjs/toolkit'
//[99,99,99,99,99,99,99,99,99,99,99,99]
let answerStep1 = createSlice({
  name : 'answerStep1',
  initialState : [99,99,99,99,99,99,99,99,99,99,99,99],
  reducers : {
    changeAnswer(state){
      return state.concat([1,2,3]);
    }
  }
});

export let { changeAnswer } = answerStep1.actions;

export default configureStore({
  reducer: {
    answerStep1 : answerStep1.reducer
  }
}) 