import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getAllFaqs, getFaqById } from "./faqAction";

const initialState = {
  loading: false,
  faqs: [],
  error: null,
};

const faqSlice = createSlice({
  name: "faq",
  initialState: initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllFaqs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFaqs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.faqs = payload;
      })
      .addCase(getAllFaqs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getFaqById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFaqById.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getFaqById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export const { logout } = faqSlice.actions;

export const getFilteredFaqs = createSelector(
    (state)=>state.faq.faqs,
    (_, searchQuery)=>searchQuery,
    (faqs, searchQuery)=>{
      if(searchQuery === "") return faqs;
      return faqs.filter(faq=>faq.question.toLowerCase().includes(searchQuery.toLowerCase()));
    }
)

export default faqSlice.reducer;
