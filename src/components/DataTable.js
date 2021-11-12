import React, { useState } from 'react';

const DataTable = () => {

    const studentList = [];

    const initialData = {id:0, firstName: '', lastName: '', age: '', 
    birthDate: '', country: '', city: ''};

    const [student, setStudent] = useState(initialData);
    const [showDetails, setShowDetails] = useState(false);
    
    let student1 = {id: '1', firstName: 'Leo', lastName: 'Alcantara', age: '43', 
    birthDate: '1978-03-14', country: 'Brazil', city: 'Sao Paulo'};

    let student2 = {id: '2', firstName: 'Sanya', lastName: 'Ogunjobi', age: '35', 
    birthDate: '1986-06-12', country: 'Nigeria', city: 'Abuja'};

    let student3 = {id: '3', firstName: 'Charles', lastName: 'Rudahusha', age: '32', 
    birthDate: '1989-11-11', country: 'Burundi', city: 'Gitega'};

    let student4 = {id: '4', firstName: 'Adrian', lastName: 'Nilsson', age: '43', 
    birthDate: '1978-10-07', country: 'Sweden', city: 'Halmstad'};
   

    studentList.push(student1);
    studentList.push(student2);
    studentList.push(student3);
    studentList.push(student4);

    const TableHeader = () => {
        return (
                <thead>
                     <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Country</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                     </tr>
                 </thead>
        );
      };

    const TableRow = (props) => {
        return (
          <tbody>
              {
                  props.studentList.map((s)=> (
                  <tr key = {s.id}>
                      <td>{s.id}</td>
                      <td>{s.firstName}</td>
                      <td>{s.lastName}</td>
                      <td>{s.age}</td>
                      <td>{s.birthDate}</td>
                      <td>{s.country}</td>
                      <td>{s.city}</td>
                      <td><TableAction student={s}/></td>
                      </tr>))
              }             
           </tbody>
        );
    };

    const TableAction = (props) => {       
            const showData = () => {
                setShowDetails(true);
                console.log("Show Data", props.student);
                setStudent(props.student);        
                console.log(student);
            };
        return (
          <button type="button" className="btn btn-primary" onClick= {showData}>
            Details
          </button>
        );      
    };

    
    

  const ShowStudentDetails = () => {
      if(showDetails){
          return(
              <div className= "card">
                  <div className= "card-header bg-info text-white">
                      Student Information
                  </div>
                  <div className = "card-body">
                    <h5 className="card-title">Student Name: {student.firstName} {student.lastName}</h5>
                    <p className="card-text">ID: {student.id}</p>
                    <p className="card-text">Birthdate: {student.birthDate}</p>
                    <p className="card-text">Nationality: {student.country}</p>
                    <p className="card-text">City: {student.city}</p> 
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-outline-dark" onClick={() => {setShowDetails(false); setStudent({student})}}>Hide Details</button>
                </div>
              </div>
          );
      } else {
        return("");
      }
  };
    
  //DataTable return statement
    return (
        <div className="container">
           
            <table className="table table-striped">
           <TableHeader/>
           <TableRow studentList={studentList}/>
           </table>
           <br/>
           <ShowStudentDetails/>
        </div>
    );
};

export default DataTable;