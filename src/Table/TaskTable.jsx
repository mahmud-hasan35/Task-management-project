import { Button } from "flowbite-react";
import Container from "../component/Container";
import { TextInput } from "flowbite-react";

import { Table } from "flowbite-react";
import { ModalPopUp } from "../component/ModalPopUp";
import { useState } from "react";
import TableItems from "./TableItems";
import TableHeader from "./TableHeader";

 function DataFound() { 
    return (
    <Table.Row>
        <Table.Cell colSpan={6} className="text-center text-xl">No Data Found</Table.Cell>
    </Table.Row> 
    )
}


function TaskTable() {
    let [modal, setModal] = useState(false);

    let [task,setTask] = useState([]);

    let [search,setSearch] =useState('')

    let onCreateHandler = (item) => {
        let apdateData = [
            ...task,
            item
        ];
        
        setTask(apdateData.reverse()) 
    }

    let editHandler = (items) => {

        setTask(task.map(item => {
            if (items.id === item.id) {
                return items;
            } else {
                return item;
            }
        }));
        
    }

    let deleteHandler = (id) => {
        setTask(task.filter(item => {
          return   item.id != id;
        }))
        
    }
    let searchHandler= (text) => {
        setSearch(text);
        
    }
    let updateTask = task.filter(item => {
        return item.title.toLowerCase(). includes (search.toLowerCase())
    })



    return (
        <Container className="mt-10">
            <div className="flex justify-end">
                <Button onClick={() => setModal(true)} className="mr-4" color="success">Add Task</Button>
                <Button onClick={() => setTask([])}   color="warning">Clear Tasks</Button>
            </div>
            <div className="p-2 border rounded my-6 dark:border-slate-900">

               <TableHeader onSearch={searchHandler}/>
               
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
                            {task.length == 0 ? <DataFound/> : updateTask.map((item,index) => <TableItems onEdit={editHandler} onDelete = {deleteHandler} data={item} index={index} key={item}/>)}
                          
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <ModalPopUp onCreate= {onCreateHandler}  onOpen={modal} onClose={() => setModal(false)} />
        </Container>
    );
}

export default TaskTable;
