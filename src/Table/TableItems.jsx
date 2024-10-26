import { Button, Modal, Table } from "flowbite-react";
import { ModalPopUp } from "../component/ModalPopUp";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { DeleteModal } from "./deleteModal";

function TableItems(props) {
  const [openModal, setModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const onEditHandler = (task) => {
    props.onEdit(task);
  };

  const confirmDeleteHandler = () => {
    if (taskToDelete) {
      props.onDelete(taskToDelete);
      setOpenDeleteModal(false);
      setTaskToDelete(null);
    }
  };

  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setOpenDeleteModal(true);
  };

  const { id, title, description, assignTo, priority } = props.data;

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 w-100">
        <Table.Cell className="font-semibold">{props.index + 1}</Table.Cell>
        <Table.Cell className="font-semibold">{title}</Table.Cell>
        <Table.Cell className="font-semibold">{description}</Table.Cell>
        <Table.Cell className="font-semibold">{assignTo}</Table.Cell>
        <Table.Cell className="font-semibold">{priority}</Table.Cell>
        <Table.Cell className="font-semibold text-base">
          <button
            onClick={() => setModal(true)}
            className="font-medium text-cyan-600 hover:underline dark:text-lime-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteClick(id)}
            className="font-medium text-red-600 hover:underline ml-6 dark:text-rose-500"
          >
            Delete
          </button>
        </Table.Cell>
      </Table.Row>

      <ModalPopUp
        taskToEdit={props.data}
        onEdit={onEditHandler}
        onOpen={openModal}
        onClose={() => setModal(false)}
      />

      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        confirmDeleteHandler={confirmDeleteHandler}
      />
    </>
  );
}

export default TableItems;
