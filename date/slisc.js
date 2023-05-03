import { createSlice } from "@reduxjs/toolkit";
let initialState  ={
  cart : [],
  count : 0 ,
  allprise : 0 ,
  discount : 0 ,
  rated : 0 ,
}
export const redus = createSlice({
  pepe : 0 ,
  name : "date" ,
  initialState ,
  reducers :{
    increm :(state,action)=>{
      let r = 0 ;
      state.cart.map((ele ,index)=>{
        if (action.payload.id === ele.id){
          r += 1;
          ele.count += 1 ;
        }
      })
      if(r <= 0){
        state.cart = [...state.cart , action.payload];
      }
      state.count = state.cart.reduce((con , ele)=>{
        return con + ele.count ;
      },0)
      state.cart.map((ele)=>{
        ele.allprice = ele.count * ele.salery ;
      })
      state.allprise = state.cart.reduce((con , ele)=>{
        return con + ele.allprice ;
      },0)
    },
    ducement :(state ,action)=>{
      state.cart.map((ele ,index)=>{
        if(ele.id === action.payload.id){
          ele.count -= 1
        }
        if(ele.count === 0){
          state.cart =  state.cart.filter((e)=>{return e.id !== ele.id})
        }
        ele.allprice = ele.count * ele.salery
      })
      state.count = state.cart.reduce((con , ele)=>{
        return con + ele.count ;
      },0)
      state.allprise = state.cart.reduce((con , ele)=>{
        return con + ele.allprice ;
      },0)
    },
    discount:(state ,action)=>{
      state.discount = action.payload
    },
    rate:(state)=>{
      state.rated += 1 ;
    }
  }
})
export const {increm ,ducement,discount ,rate} = redus.actions ;
export default redus.reducer ;