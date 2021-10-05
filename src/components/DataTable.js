import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/userAction';
import PostModal from './PostModal';

const DataTable = ({ headers, rows, getPosts, userPosts }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const rowClick = async (id) => {
    try {
      await getPosts(id.id);
      handleShow();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
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
                <tr key={value.id} onClick={() => rowClick(value)}>
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
export default connect(mapStateToProps, { getPosts })(DataTable);
