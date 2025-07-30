import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function EmployeeCRUD() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', role: 'Developer', department: 'Engineering' },
    { id: 2, name: 'Bob', role: 'Designer', department: 'UI/UX' },
    { id: 3, name: 'Charlie', role: 'Manager', department: 'HR' },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', department: '' });
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  
  const addEmployee = () => {
    if (!newEmployee.name || !newEmployee.role || !newEmployee.department) return;
    const newId = employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1;
    setEmployees([...employees, { ...newEmployee, id: newId }]);
    setNewEmployee({ name: '', role: '', department: '' });
    alert('Employee Added Successfully');
  };

 
  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };


  const modalView = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h3>Employee CRUD</h3>

      
      <div className="card p-3 mb-4">
        <h5>Add Employee</h5>
        <div className="row">
          <div className="col-md-3 mb-2">
            <input className="form-control" placeholder="Name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
          </div>
          <div className="col-md-3 mb-2">
            <input
              className="form-control"
              placeholder="Role"
              value={newEmployee.role}
              onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
            />
          </div>
          <div className="col-md-3 mb-2">
            <input
              className="form-control"
              placeholder="Department"
              value={newEmployee.department}
              onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
            />
          </div>
          <div className="col-md-3 mb-2">
            <button className="btn btn-primary w-100" onClick={addEmployee}>
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>
                <button className="btn btn-info btn-sm me-2" onClick={() => modalView(emp)}>
                  View
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && (
            <div>
              <p><strong>Name:</strong> {selectedEmployee.name}</p>
              <p><strong>Role:</strong> {selectedEmployee.role}</p>
              <p><strong>Department:</strong> {selectedEmployee.department}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
