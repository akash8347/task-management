"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { create, updateaction } from "./lib/actions/actions";
import { signOut } from "next-auth/react";
import Card from "@/myComponents/Card";
import { getAllTaks } from "./lib/actions/actions";
import { deleteAction } from "./lib/actions/actions";
import { useToast } from '@chakra-ui/react'
import Image from "next/image";
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function Page() {
  const toast = useToast()
  const router = useRouter();
  const [text, setText] = useState('');
  const [load, setLoading] = useState(true)
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin")
    },
  })
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const updateTasks = async () => {
      setLoading(true)
      const updatedTasks = await getAllTaks()
      if(updatedTasks){
        const test = JSON.parse(updatedTasks)
        setTasks(test)
        setLoading(false)
      }
    

    }
    updateTasks()
  }, [])



  if (!session) return <div>Not authenticated</div>

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleDel = async (id) => {
    const testdel = deleteAction.bind(null, id)
    const test = await testdel()
    if (test.success) {
      const deletedTask = test.deletedId
      setTasks((prev) => {
        return prev.filter((task) => task._id !== id)
      })
    }


  }
  const updateTask = async (id, title) => {
    console.log(id)
    console.log(title)
    const res = await updateaction(id, title)
    if (res.success) {
      toast({
        title: res.success,
       
        status: "success",
        duration: 4000,
        position: 'top',
      })
    }

  }

  const createFormSubmit = async (e) => {
    e.preventDefault()


    const { success, createdTask } = await create(text)
    if (success) {
      setText('')
      toast({
        title: success,

        status: "success",
        duration: 4000,
        position: 'top',
      })
      setTasks([...tasks, createdTask])

    }


  }

  return (

    <div className="min-h-screen all-cont px-24 bg-blue-200">

      <div className=" pt-10 mb-5  ">
        <div className="text-4xl text-center font-semibold ">Fast-Task App</div>
        <div>
          <div className="profile mt-3 flex items-center justify-center ">
            <div className="name-image flex items-center mr-4 ">
              <Image width={30} height={30} className="rounded-full" src={session.user.image} />
              <span className="ml-2 "> {session.user.name}</span>
            </div>
            <Button colorScheme="blue" onClick={() => signOut("google")}>
              signout
            </Button>
          </div>
        </div>
      </div>


      <div className="form-cont text-center flex justify-start ">
        <form onSubmit={createFormSubmit} className="flex w-full">
          <input
            className="flex-grow rounded-md border shadow-lg shadow-blue-400 border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none p-1 mr-3"
            required
            value={text}
            name="test"
            onChange={handleChange}
            type="text"
            placeholder="enter task content"

          />
         <Button type="submit" colorScheme='blue'>Button</Button>
        </form>

      </div>

      {!load ? (
        <>

          {tasks?.length > 0 &&

            <div className="container min-h-[200px] mx-auto py-4 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tasks.map((card) => (
                  <Card onbtnclick={handleDel} key={card._id} id={card._id} title={card.description} create={card.createdAt} updateTask={updateTask} />
                ))}
              </div>
            </div>



          }
        </>

      ) : (
        <>
          <div className="text-center mt-52">Loading</div>
        </>
      )}



    </div>
  )
}