import React from 'react';
// import styled from '@emotion/styled';

export const DataTable = ({headers, data}) => {

    return (
        <table>
            <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(rowData => 
                    <tr key={rowData.id}>
                        <td>{rowData.apptDateTime}</td>
                        <td>{rowData.patientName}</td>
                        <td>{rowData.patientId}</td>
                        <td>{rowData.staff}</td>
                        <td>{rowData.type}</td>
                        <td>{rowData.status}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}