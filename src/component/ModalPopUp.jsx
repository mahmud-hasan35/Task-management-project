import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
export function ModalPopUp({ onOpen, onClose }) {
    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()}>
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form action="" className="flex flex-wrap">
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="Title" value="Title" />
                                </div>
                                <TextInput id="title" type="title" required shadow />
                            </div>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <Textarea id="description" required rows={4} />
                            </div>

                            <div className="w-2/3">
                                <div className="pr-3">
                                    <div className="mb-2 block">
                                        <Label htmlFor="countries" value="Assigned To" />
                                    </div>
                                    <Select id="countries" required>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="mb-2 block">
                                    <Label htmlFor="countries" value="Priority " />
                                </div>
                                <Select id="countries" required>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </Select>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex  justify-between w-full">
                        <Button gradientMonochrome="failure">Close</Button>
                        <Button gradientMonochrome="lime">Add Task</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
