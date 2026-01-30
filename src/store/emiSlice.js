import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  motorcyclePrice: 257284,
  downPaymentPercent: 50,
  loanTenure: 24,
  interestRate: 9,
};

const emiSlice = createSlice({
  name: "emi",
  initialState,
  reducers: {
    setMotorcyclePrice: (state, action) => {
      state.motorcyclePrice = action.payload;
    },
    setDownPaymentPercent: (state, action) => {
      state.downPaymentPercent = action.payload;
    },
    setLoanTenure: (state, action) => {
      state.loanTenure = action.payload;
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
    },
  },
});

export const {
  setMotorcyclePrice,
  setDownPaymentPercent,
  setLoanTenure,
  setInterestRate,
} = emiSlice.actions;

export default emiSlice.reducer;
export const selectEMIState = (state) => state.emi;

export const selectEMICalculations = createSelector(
  [selectEMIState],
  ({ motorcyclePrice, downPaymentPercent, loanTenure, interestRate }) => {
    const downPaymentAmount = Math.round(
      (motorcyclePrice * downPaymentPercent) / 100
    );

    const loanAmount = motorcyclePrice - downPaymentAmount;

    const monthlyInterestRate = interestRate / 12 / 100;

    const emi =
      loanAmount > 0 && monthlyInterestRate > 0
        ? Math.round(
            (loanAmount *
              monthlyInterestRate *
              Math.pow(1 + monthlyInterestRate, loanTenure)) /
              (Math.pow(1 + monthlyInterestRate, loanTenure) - 1)
          )
        : 0;

    return { downPaymentAmount, loanAmount, emi };
  }
);
