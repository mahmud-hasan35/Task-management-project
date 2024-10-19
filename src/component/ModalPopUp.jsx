import { Label, TextInput } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
export function ModalPopUp({onOpen,onClose}) {

  return (
    <>
      
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="Title" value="Title" />
        </div>
        <TextInput id="title" type="title" required shadow />
      </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button>I accept</Button>
          <Button >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
