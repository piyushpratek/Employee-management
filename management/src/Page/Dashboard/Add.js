import React from 'react';
import Swal from 'sweetalert2';
import { useState, useEffect, useRef } from 'react';
function Add({ employees, setEmployees, setIsAdding }) {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [age, setAge] = useState('');
  const [avaibility, setAvaibility] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !designation || !department || !age || !avaibility) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const newEmployee = {
      id,
      name,
      designation,
      department,
      age,
      avaibility,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${name} 's data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className='small-container'>
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          ref={textInput}
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
          <input type='submit' value='Add' />
          <input
            style={{ marginLeft: '12px' }}
            className='muted-button'
            type='button'
            value='Cancel'
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
