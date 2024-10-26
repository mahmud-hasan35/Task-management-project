import { TextInput } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";

function TableHeader({onSearch}) {

    let changeHandler = (e) => {
        let val = e.target.value;
        onSearch(val);
    }
    
  return (
    <div className="flex justify-between items-center mt-5 mb-8">
                    <h2 className="text-2xl font-bold text-rose-700 cursor-pointer ml-2 dark:text-yellow-500">Your Task</h2>
                    <div className="max-w-md">
                        <TextInput onChange={changeHandler} id="email4" type="email" rightIcon={IoSearchOutline} required />
                    </div>
                </div>
  )
}
export default TableHeader