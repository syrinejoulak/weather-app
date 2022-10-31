import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  errorMessage: string;
}

const initialState: ModalState = {
  isOpen: false,
  errorMessage: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.errorMessage = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.errorMessage = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
