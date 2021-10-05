import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const DataTable = ({ headers, rows }) => {
  return (
    <Table striped bordered hover style={{ marginTop: '3vh' }}>
      <thead>
        <tr>
          {headers &&
            headers.map((value, index) => {
              return (
                <th key={index}>
                  <div>{value.toUpperCase()}</div>
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((value) => {
            return buildRow(value, headers);
          })}
      </tbody>
    </Table>
  );
};

function buildRow(row) {
  return (
    <tr key={row.id}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.address.city}</td>
      <td>{row.company.name}</td>
      <td>
        <Button variant='outline-primary'>Show Posts</Button>
      </td>
    </tr>
  );
}

export default DataTable;
