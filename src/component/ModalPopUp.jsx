import { Label, TextInput, Textarea, Select } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




export function ModalPopUp({ onOpen, onClose }) {

    const schema = yup.object({

        title:yup.string().required().min(5). max(10),
        description:yup. string().required().min(5). max(10),
        assignTo: yup.string(). required(),
        priority: yup.string().required()
      }).required();



    const {register,handleSubmit,formState : {errors} } =  useForm({
        resolver: yupResolver(schema)
    });
    
    
    
    

    const onSubmit = data => {
        console.log(data);
        
    }

    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()}>
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form action="" className="flex flex-wrap" onSubmit= {handleSubmit (onSubmit)} >
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="Title" value="Title" />
                                </div>
                                <TextInput  {...register('title')}   id="text" type="text"/>
                                {errors.title  && <span className="text-red-400">{errors.title.message}</span>}
                           </div>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <Textarea {...register('description')} id="description"  rows={4} />
                                {errors.description  && <span className="text-red-700">{errors.description.message}</span>} 
                            </div>

                            <div className="w-2/3">
                                <div className="pr-3">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" value="Assing To" />
                                    </div>
                                    <Select {...register('assignTo')} id="assign">
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
                                <Select   {...register('priority')} id="Priority">
                                    <option value='Desabled'>Select Priority</option>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </Select>
                                {errors.priority && <span className="text-red-700">{errors.priority.message}</span>}
                            </div>
                    
                        <Button type="submit" className="mt-6" gradientMonochrome="lime">Add Task</Button>
                    
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
