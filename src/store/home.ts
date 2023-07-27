import { createSlice, PayloadAction,  } from "@reduxjs/toolkit";
export interface InitialState {
  mainInfo:any
}

let initialState: InitialState = {
  mainInfo:{
    domainId:'1024261900845920256'
  }
};

// export const fetchGlobalMultidataAction = createAsyncThunk(
//   "fetch/globalmultidata",
//   async () => {
//     const res = await ajax.get("xxx");
//     return res?.data;
//   }
// );

const home = createSlice({
  name: "home",
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

  
  },
  extraReducers: {
    // [fetchGlobalMultidataAction.fulfilled](state, { payload }) {
    //   state.xxx = payload.xxx
    // },
  },
});

export const { setState } = home.actions;

export default home.reducer;
