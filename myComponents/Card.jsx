import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import moment from "moment";
import { useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";

export default function Card({ title, create, id, onbtnclick ,updateTask}) {
  const [edit, setEdit] = useState(false);
  const [newtitle,setTitle]=useState(title);
  const submitcall=(e)=>{
    e.preventDefault()
      updateTask(id,newtitle)
      setEdit(false)
  }

  return (
    <div className="relative py-2 pl-4 pr-10 transition-all border border-black bg-white z-10 shadow-md rounded-lg">
      {
        !edit ? (<div className=" break-words text-xl 
        font-semibold mb-2 py-1 ">
          {newtitle}
        </div>) : (
<>
          <form onSubmit={submitcall}>
            <input
              className="border  focus:outline-none focus:border-blue-400 focus:ring-2 border-blue-700 text-xl  font-normal
              mb-0 py-1 w-full  mr-5  rounded-lg"
              placeholder="edit" value={newtitle} onChange={(e)=>setTitle(e.target.value)}
            />
            <p className="text-xs mb-2 text-red-500">click checkmark or enter to save</p>
            <button  type="submit"  ><CiBookmarkCheck className=" text-blue-500 active:scale-150" size={25}/></button>
            </form>
            </>
        )
      }


      <p className=" ">
        {moment(create).fromNow()}
      </p>

      <span
        className="absolute top-0 right-0 p-2 cursor-pointer"
        onClick={() => onbtnclick(id)}

      >
        <MdDeleteOutline size={24} />
      </span>
      <span
        className="absolute top-7 right-0 p-2 cursor-pointer"
        onClick={() => { setEdit(!edit) }}

      >
        <MdEdit size={24} />
      </span>

    </div>
  );
}
