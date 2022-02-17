 import { createSlice } from "@reduxjs/toolkit";


// const CHANGE_CATEGORY='CHANGE_CATEGORY',
// CHANGE_DIFFICULTY='CHANGE_DIFFICULTY',
// CHANGE_AMOUNT='CHANGE_AMOUNT',
// CHANGE_TYPE='CHANGE_TYPE',
// CHANGE_SCORE='CHANGE_SCORE';



const settingSlicer=createSlice(
    
    {   
      name:'Settings',
      initialState: {
      category: "",
      difficulty: "",
      type: "",
      questionAmount: 10,
      score: 0,
      },
      reducers:{
        selectCategory:(state,action)=>{
          state.category=action.payload;
        },
        selectDifficulty:(state,action)=>{
          state.difficulty=action.payload;
        },
        selectType:(state,action)=>{
          state.type=action.payload;
        },
        changeAmount:(state,action)=>{
          state.questionAmount=action.payload
        },
        updateScore:(state,action)=>{
          state.score+=action.payload;
        }}
      } 
      
)

export const {selectCategory,selectDifficulty,selectType,changeScore} =settingSlicer.actions;
export default settingSlicer.reducer;
