import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './styles/postModal.css';

const PostModal = ({ data, show, click }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={click}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            User Posts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.map((post, index) => (
            <div className='post-container' key={post.id}>
              <p>{`${index + 1}. ${post.title.toUpperCase()}`}</p>
              <h6>{capitalize(post.body)}.</h6>
              <p aria-hidden='true'></p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={click}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
