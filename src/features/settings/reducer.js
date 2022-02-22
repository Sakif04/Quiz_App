 import { createSlice } from "@reduxjs/toolkit";



const settingSlicer=createSlice(
  { 
    name:'Settings',
    initialState: {
    category: "",
    difficulty: "",
    type: "",
    questionAmount: 10,
    score: 0,
    questions:null
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
      },
      getQuestions:(state,action)=>{
        state.questions=action.payload;
      }
    }
  }   
)

export const {selectCategory,selectDifficulty,selectType,changeScore,changeAmount,getQuestions,updateScore} = settingSlicer.actions;
export default settingSlicer.reducer;
