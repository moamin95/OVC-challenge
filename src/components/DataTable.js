import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUserPosts } from '../store/actions/userAction';
import PostModal from './PostModal';

const DataTable = ({ headers, rows, getUserPosts, userPosts }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
  };

  const clickableRow = async (id) => {
    try {
      await getUserPosts(id.id);
      handleShow();
    } catch (err) {
      console.log('error', err);
    }
  };
  return (
    <div>
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
              return (
                <tr key={value.id} onClick={() => clickableRow(value)}>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.address.city}</td>
                  <td>{value.company.name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <PostModal data={userPosts} show={show} click={handleClose} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userPosts: state.users.posts,
  };
};
export default connect(mapStateToProps, { getUserPosts })(DataTable);
