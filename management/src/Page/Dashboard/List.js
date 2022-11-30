import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
function List({ employees, handleEdit, handleDelete }) {
  return (
    <div className='contain-table'>
      <table className='striped-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Age</th>
            <th>Avaibility</th>
            <th colSpan={2} className='text-center'>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.department}</td>
                <td>{employee.age}</td>
                <td>{employee.avaibility} </td>
                <td className='text-right'>
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className='button muted-button'
                  >
                    <BsFillPencilFill />
                  </button>
                </td>
                <td className='text-left'>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className='button muted-button'
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
