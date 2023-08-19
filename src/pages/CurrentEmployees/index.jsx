import { Header } from '../../components/Header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployees } from '../../utils/selectors';
import { getEmployees } from '../../features/employees';
import { useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";  

export const CurrentEmployees = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const rawEmployees = useSelector(selectEmployees).data ?? [];

  const employees = [];

  rawEmployees.forEach((employee) => {
    employees.push({
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      startDate: employee.startDate,
      department: employee.department,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
    });
  });

  return (
    <div className="page">
      <Header page="current-employees" />
      <h2 className="page__title">Current employees</h2>
      <DataTable value={employees}>
        <Column field="firstName" header="First name"></Column>
        <Column field="lastName" header="Last name"></Column>
        <Column field="dateOfBirth" header="Date of birth"></Column>
        <Column field="startDate" header="Start date"></Column>
        <Column field="department" header="Department"></Column>
        <Column field="street" header="Street"></Column>
        <Column field="city" header="City"></Column>
        <Column field="state" header="State"></Column>
        <Column field="zipCode" header="ZIP Code"></Column>
      </DataTable>
    </div>
  );
};
