import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    /* Action: employees/fetching */
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending';
        return;
      }
      if (draft.status === 'rejected') {
        draft.error = null;
        draft.status = 'pending';
        return;
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating';
        return;
      }
      return;
    },
    /* Action: employees/resolved */
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = action.payload;
        draft.status = 'resolved';
        return;
      }
      return;
    },
    /* Action: employees/rejected */
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = action.payload;
        draft.status = 'rejected';
        draft.data = null;
        return;
      }
      return;
    },
  },
});

const { actions, reducer } = employeesSlice;

export const { fetching, resolved, rejected } = actions;

export default reducer;
