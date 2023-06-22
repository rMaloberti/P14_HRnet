import { createSlice } from '@reduxjs/toolkit';
import { selectEmployees } from '../utils/selectors';

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

export const getEmployees = () => {
  return async (dispatch, getState) => {
    const status = selectEmployees(getState()).status;

    if (status === 'pending' || status === 'updating') {
      return;
    }

    dispatch(fetching());

    try {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      dispatch(resolved(employees));
    } catch (error) {
      dispatch(rejected(error));
    }
  };
};

export const createEmployee = (newEmployee) => {
  return async (dispatch, getState) => {
    const status = selectEmployees(getState()).status;

    if (status === 'pending' || status === 'updating') {
      return;
    }

    dispatch(fetching());

    try {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];

      const employee = {
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        dateOfBirth: newEmployee.dateOfBirth,
        startDate: newEmployee.startDate,
        department: newEmployee.department,
        street: newEmployee.street,
        city: newEmployee.city,
        state: newEmployee.state,
        zipCode: newEmployee.zipCode,
      };

      employees.push(employee);
      localStorage.setItem('employees', JSON.stringify(employees));

      dispatch(resolved(employees));
    } catch (error) {
      dispatch(rejected(error));
    }
  };
};
