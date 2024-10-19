
import { Button } from "flowbite-react";
import Container from "../component/Container";
import { TextInput } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { Table } from "flowbite-react";

function TaskTable() {
  return (
    <Container className="mt-10">
    <div className="flex justify-end">
        <Button className="mr-4" color="success">Success</Button>
        <Button color="warning">Warning</Button>
    </div>
    <div className="p-3 border rounded my-6">
        <div className="flex justify-between items-center mt-5 mb-8">
        <h2 className="text-2xl font-bold text-rose-700 cursor-pointer">Your Task</h2>
        <div className="max-w-md">
        <TextInput id="email4" type="email" rightIcon={IoSearchOutline} required />
        </div>                                                          
        </div>
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Assigned To</Table.HeadCell>
          <Table.HeadCell>Priority </Table.HeadCell>
          <Table.HeadCell>Action </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Api Building</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>Create an API by <br /> using laravel platform</Table.Cell>
            <Table.Cell>Height</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
                Edit
              </a>
              <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>


    </div>
    </Container>
  )
}

export default TaskTable