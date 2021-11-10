import React, { useEffect, useState } from 'react';

const studentList = [];

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
                props.studentList.map((s)=> (<tr>
                    <td>{s.id}</td>
                    <td>{s.firstName}</td>
                    <td>{s.lastName}</td>
                    <td>{s.age}</td>
                    <td>{s.birthDate}</td>
                    <td>{s.country}</td>
                    <td>{s.city}</td>
                    <td>{TableAction}</td>
                    </tr>))
            }             
         </tbody>
      );
  };

  const ShowInfo = (props) => {
      return(
<div>
    {props.info && <div className="alert alert_info">{props.info}</div>}
</div>
      )
  };

  const TableAction = (props) => {
    return (
      <button type="button" className="btn btn-danger" onClick= {ShowInfo}>
        Info
      </button>
    );
  };

const DataTable = () => {
    

    const initialData = {id: '', firstName: '', lastName: '', age: '', 
    birthDate: '', country: '', city: ''};

    const [student, setStudent] = useState(initialData);
    
    let student1 = setStudent({id: '1', firstName: 'Leo', lastName: 'Alcantara', age: '43', 
    birthDate: '1978-03-14', country: 'Brazil', city: 'Sao Paulo'});

    let student2 = setStudent({id: '2', firstName: 'Sanya', lastName: 'Iogi', age: '35', 
    birthDate: '1986-06-12', country: 'Nigeria', city: 'Abuja'});

    let student3 = setStudent({id: '3', firstName: 'Charles', lastName: 'Hadush', age: '32', 
    birthDate: '1989-11-11', country: 'Burundi', city: 'Gitega'});

    let student4 = setStudent({id: '4', firstName: 'Adrian', lastName: 'Svensson', age: '43', 
    birthDate: '1978-10-07', country: 'Sweden', city: 'Halmstad'});
   

    studentList.push(student1);
    studentList.push(student2);
    studentList.push(student3);
    studentList.push(student4);
   

    return (
        <div className="container">
           
            <table className="table">
           <TableHeader/>
           <TableRow studentList= {studentList}/>
           </table>
        </div>
    );
};

export default DataTable;