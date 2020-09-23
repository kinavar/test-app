import React, {useEffect, useState} from 'react';
import {DataTable} from './components/data-table'

const mapTableData = (data) => {
  const {appointments, staff, patients} = data;
  const res = [];

  for(let i=0; i<appointments.length; i++) {
    const patient = patients.find(patient => patient.id === appointments[i].patientId); 
    const staffPerson = staff.find(staffP => staffP.id === appointments[i].staffId);
    
    res.push({
      id: i,
      apptDateTime: appointments[i].apptDateTime,
      patientName: `${patient.firstName} ${patient.lastName}`,
      patientId: appointments[i].patientId,
      staff: `${staffPerson.firstName} ${staffPerson.lastName}`,
      type: appointments[i].type,
      status: appointments[i].status
    })
  }

  return res;
}

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
      const fetchFile = async () => {
        const res = await fetch('/file/data.json');
        const data = await res.json();

        setTableData(mapTableData(data))
      }

      fetchFile();

  }, [])

  return (
      <DataTable data={tableData} headers={['Date', 'Patient name', 'Patient Id', 'Staff', 'Type', 'Status']} />
  );
}

export default App;
