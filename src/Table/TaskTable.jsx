import { Button } from "flowbite-react";
import Container from "../component/Container";
import { TextInput } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { Table } from "flowbite-react";
import { ModalPopUp } from "../component/ModalPopUp";
import { useState } from "react";

function TaskTable() {
    let [modal, setModal] = useState(false);

    return (
        <Container className="mt-10">
            <div className="flex justify-end">
                <Button onClick={() => setModal(true)} className="mr-4" color="success">Add Task</Button>
                <Button color="warning">Clear Tasks</Button>
            </div>
            <div className="p-2 border rounded my-6 dark:border-slate-900">
                <div className="flex justify-between items-center mt-5 mb-8">
                    <h2 className="text-2xl font-bold text-rose-700 cursor-pointer ml-2 dark:text-yellow-500">Your Task</h2>
                    <div className="max-w-md">
                        <TextInput id="email4" type="email" rightIcon={IoSearchOutline} required />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell className="text-base">#</Table.HeadCell>
                            <Table.HeadCell className="text-base">Title</Table.HeadCell>
                            <Table.HeadCell className="text-base">Description</Table.HeadCell>
                            <Table.HeadCell className="text-base">Assigned To</Table.HeadCell>
                            <Table.HeadCell className="text-base">Priority </Table.HeadCell>
                            <Table.HeadCell className="text-base">Action </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 w-100">
                                <Table.Cell className="font-semibold">1</Table.Cell>
                                <Table.Cell className="font-semibold">Api Building</Table.Cell>
                                <Table.Cell className="font-semibold">Create an API by using laravel platform</Table.Cell>
                                <Table.Cell className="font-semibold">Mahmud Hasan</Table.Cell>
                                <Table.Cell className="font-semibold">Height</Table.Cell>
                                <Table.Cell className="font-semibold text-base ">
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 dark:text-lime-600 ">
                                        Edit
                                    </a>
                                    <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500 ml-6 dark:text-rose-500">
                                        Delete
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <ModalPopUp onOpen={modal} onClose={() => setModal(false)} />
        </Container>
    );
}

export default TaskTable;
