import React, { useState } from 'react';

const DataTable2 = () => {

    const initialData = [{
            id: '1', firstName: 'Leo', lastName: 'Alcantara', age: '43', 
            birthDate: '1978-03-14', country: 'Brazil', city: 'Sao Paulo'
        }, {
            id: '2', firstName: 'Sanya', lastName: 'Ogunjobi', age: '35', 
            birthDate: '1986-06-12', country: 'Nigeria', city: 'Abuja'
        }, {
            id: '3', firstName: 'Charles', lastName: 'Rudahusha', age: '32', 
            birthDate: '1989-11-11', country: 'Burundi', city: 'Gitega'
        }, {
            id: '4', firstName: 'Adrian', lastName: 'Nilsson', age: '43', 
            birthDate: '1978-10-07', country: 'Sweden', city: 'Halmstad'
    }]

    const [studentList, setStudentList] = useState(initialData);
    const [showDetails, setShowDetails] = useState(false);
    const [student, setStudent] = useState({id:0, firstName:'', lastName:'', age: '', 
    birthDate: '', country: '', city: ''});

const TableHeader = () => {
    return (
    <thead>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
        <th scope="col">Birthdate</th>
        <th scope="col">Country</th>
        <th scope="col">City</th>
        <th scope="col">Action</th>
    </thead>)
};



const TableRow = (props) => {
    return (
        <tbody>
            {
                props.list.map((student)=> (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td>{student.birthDate}</td>
                    <td>{student.country}</td>
                    <td>{student.city}</td>
                    <td><TableAction student={student}/></td>
                </tr>))
            }             
         </tbody>
    )
};

const TableAction = (props) => {
    const showData = () => {
        setShowDetails(true);
        console.log("Show Data", props.student);
        setStudent(props.student);
    };
    return (
      <button type="button" className="btn btn-primary" onClick={showData}>Details</button>
    );
  };

  
  const ShowStudentDetails = () => {
      if(showDetails){
        return(
            <div className="card">
                <div className="card-header bg-info text-white">
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
      <button type="button" className="btn btn-outline-primary" onClick={()=> {setShowDetails(false); setStudent({student})}}>Hide details</button>
  </div>
            </div> 
      ); 
      } else {
          return("");
      }
  };

    return (
        <div className="container">
           
            <table className="table table-striped">
           <TableHeader/>
           <TableRow list={studentList}/>
           </table>
           <br/>
           <ShowStudentDetails/>
        </div>
    );
};

export default DataTable2;