"use server"
import { redirect } from 'next/navigation';
import task from '../model/Task';
import { auth } from "@/auth"
import User from '../model/user';
import connectDB from '../db-connect';
import { revalidatePath } from 'next/cache'

export async function create(text) {
  let session = await auth();
  console.log(session.user)
  // let description = formdata.get("test")
  let description = text
  try {
    await connectDB()
    const user = await User.findOne({ sub: session.user.sub })

    let task1 = await task.create({ description, creatorId: user._id })

    await User.updateOne(
      { _id: user._id },
      { $push: { tasks: task1._id } }
    );
    return {
      success: "task created successfully",
      createdTask: task1
    }
  } catch (error) {
    console.log(error)
  }


}


export async function getAllTaks() {
  let session = await auth();
  console.log(session?.user.email);
  await connectDB()
  const user = await User.findOne({ sub: session?.user.sub })
  if (user) {
    try {
      const alltask = await task.find({ creatorId: user._id })
      if (alltask) {

      }

      return JSON.stringify(alltask)
    } catch (error) {

    }
  }
}

export async function deleteAction(id) {
  console.log(id)
  const result = await task.deleteOne({ _id: id })
  if (result.deletedCount === 1) {
    console.log('Successfully deleted one document.');

    return {
      success: "deleted successfully",
      deletedId: id
    }
  } else {
    console.log('No documents matched the query. Deleted 0 documents.');
  }

}

export async function updateaction(id, title) {
  try {
    await connectDB()
    const task1 = await task.findByIdAndUpdate(id, { description: title }, { new: true })
    if (!task1) {
      throw new Error("no task")
    }
    return {
      success: "updated successfully"
    }
  } catch (error) {
    console.log(error)
  }
 
}