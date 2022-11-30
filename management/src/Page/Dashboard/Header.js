import React from 'react';

function Header({ setIsAdding, searchInput, handleChange }) {
  return (
    <header>
      <h1>ABC Corporation Employee Management System</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)} className='round-button'>
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
