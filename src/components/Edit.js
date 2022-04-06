import { Button, Modal, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/Actions/ActionsToList";

function Edit({ task }) {
  const [text, setText] = useState(task.description);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            placeholder="enter newdesciption"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editTask(task.id, text));
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Edit;
