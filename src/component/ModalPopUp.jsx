import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { popupValidation } from "../form validation/formvalidation";





export function ModalPopUp({ onOpen, onClose,onCreate,taskToEdit,onEdit }) {
   


    const {register,handleSubmit,formState : {errors}, reset } =  useForm({
        resolver: yupResolver(popupValidation)
    });
    
    


    const onSubmit = data => {

        if(taskToEdit) {
            onEdit(data)
        } else {
            onCreate(data)
        }  
        
        
        reset();
        onClose()
        
        
    }

    let formData = taskToEdit || {
        id:crypto.randomUUID(),
        title: null,
        description: null,
        assignTo: null,
        priority: null,
    }

    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()}>
                <Modal.Header> {taskToEdit ? 'Edit Task' : 'Add New Task'}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form action="" className="flex flex-wrap" onSubmit= {handleSubmit (onSubmit)} >
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="Title" value="Title" />
                                </div>
                                <input type="text" defaultValue={formData.id} {...register('id')} type = "hidden"/>
                                <TextInput  defaultValue={formData.title} {...register('title')}   id="text" type="text"/>
                                {errors.title  && <span className="text-red-400">{errors.title.message}</span>}
                           </div>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <Textarea defaultValue={formData.description} {...register('description')} id="description"  rows={4} />
                                {errors.description  && <span className="text-red-700">{errors.description.message}</span>} 
                            </div>

                            <div className="w-2/3">
                                <div className="pr-3">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" value="Assing To" />
                                    </div>
                                    <Select defaultValue={formData.assignTo} {...register('assignTo')} id="assign">
                                        <option value="Desabled">Select assignTo</option>
                                        <option value="Person One">Person One</option>
                                        <option value="Person Two">Person Two</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                        <option value="Person Five">Person Five</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-400">{errors.assignTo.message}</span>}
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="mb-2 block">
                                    <Label htmlFor="Priority" value="Priority " />
                                </div>
                                <Select defaultValue={formData.priority}   {...register('priority')} id="Priority">
                                    <option value='Desabled'>Select Priority</option>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </Select>
                                {errors.priority && <span className="text-red-700">{errors.priority.message}</span>}
                            </div>
                    
                        <Button type="submit" className="mt-6" gradientMonochrome="lime"  >{taskToEdit ? 'Edit Task' : 'Add Task'}</Button>
                    
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
