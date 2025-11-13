import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  role: "allUsers",
  status: "active",
  number:5,
  search:""
};

const userFilterSlice = createSlice({
  name: "UserFilter",
  initialState,
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    }, 

    setSearch(state, action) {
      state.search = action.payload;
    },     
    resetFilters(state) {
      state.role = "all";
      state.status = "all";
      state.number = 5;
      state.search = " ";
    },    
    
  },
});
export const { setRole, setStatus,setNumber,setSearch, resetFilters } = userFilterSlice.actions;
export default userFilterSlice.reducer;
