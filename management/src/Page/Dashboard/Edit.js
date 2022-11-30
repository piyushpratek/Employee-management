import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;
  const [name, setName] = useState(selectedEmployee.name);
  const [designation, setDesignation] = useState(selectedEmployee.designation);
  const [department, setDepartment] = useState(selectedEmployee.department);
  const [age, setAge] = useState(selectedEmployee.age);
  const [avaibility, setAvaibility] = useState(selectedEmployee.avaibility);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !designation || !department || !age || !avaibility) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
    const employee = {
      id,
      name,
      designation,
      department,
      age,
      avaibility,
    };
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.name} 's data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='small-container'>
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='designation'>Designation</label>
        <input
          id='designation'
          type='text'
          name='designation'
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <label htmlFor='department'>Department</label>
        <input
          id='department'
          type='text'
          name='department'
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          type='number'
          name='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor='avaibility'>Avaibility</label>
        <input
          id='avaibility'
          type='text'
          name='avaibility'
          value={avaibility}
          onChange={(e) => setAvaibility(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type='submit' value='Update' />
          <input
            style={{ marginLeft: '12px' }}
            className='muted-button'
            type='button'
            value='Cancel'
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
