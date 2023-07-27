import { createSlice, PayloadAction,  } from "@reduxjs/toolkit";
export interface InitialState {
  lang: string;
  loginInfo:{
    token?:string,
    
  }
}

let initialState: InitialState = {
  lang: 'zh',
  loginInfo: {},
};

// export const fetchGlobalMultidataAction = createAsyncThunk(
//   "fetch/globalmultidata",
//   async () => {
//     const res = await ajax.get("xxx");
//     return res?.data;
//   }
// );

const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<{ [key: string]: unknown }>) => {
      const obj = action.payload;
      Object.keys(obj).forEach((key) => {
        // @ts-ignore
        state[key] = obj[key];
      });
      return state;
    },

    // setLocation:(state,action:PayloadAction<any>)=>{

    //   state.location =Object.assign(state.location,action.payload)


    // },


    setUserInfo:(state,action:PayloadAction<any>)=>{

      state.loginInfo =Object.assign(state.loginInfo,action.payload)

      // storage.session.set('logInfo',state.loginInfo)

    },
  },
  extraReducers: {
  },
});

export const { setState } = global.actions;

export default global.reducer;
