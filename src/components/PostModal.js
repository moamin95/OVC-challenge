import React from 'react';
import { Modal, Button, Placeholder } from 'react-bootstrap';

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
            <div>
              <p style={{ fontWeight: 'bold' }}>{`${
                index + 1
              }. ${post.title.toUpperCase()}`}</p>
              <h6 key={post.id}>{capitalize(post.body)}.</h6>
              <p aria-hidden='true'>
                <Placeholder className='w-100' bg='primary' />
              </p>
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

{
  /* <Modal show={show} onHide={click}>
  <Button onClick={click}>X</Button>
  {data.map((post) => (
    <div>
      <p key={post.id}>{post.body}</p>
    </div>
  ))}
</Modal>;
 */
}
