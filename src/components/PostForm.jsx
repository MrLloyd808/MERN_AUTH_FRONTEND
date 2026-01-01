import { Leaf, X } from 'lucide-react'
import { usePostFormStore } from '../utils/Zustand'
import { useForm } from 'react-hook-form'
import axios from "../utils/axios"
import { usePostStore } from '../utils/Zustand'

function PostForm() {
    const {register, handleSubmit} = useForm()
    const setPosts = usePostStore((s) => s.setPosts)
    const formState = usePostFormStore((s) => s.formState)
    const setFormState = usePostFormStore((s) => s.setFormState)
    const posts = usePostStore((s) => s.posts )

  return (
    <form onSubmit={handleSubmit(async (data) => {
        try {
          const res = await axios.post("/post/makepost", data)
          if (res.status === 201) return setFormState(false)
          window.location.reload()
          console.log(posts)
          
        } catch (err) {
          console.error(err.message)
        }
        })}
    
    className={`flex flex-col w-[80%] p-2 gap-3 transition-all max-w-100 shadow-lg bg-neutral rounded absolute z-566 left-[50%]  translate-x-[-50%] translate-y-[-50%] ${formState ? "top-[35%]" : "top-[-80%]" }`}>
    <div className='flex items-center justify-between px-3'>
       
        <h3 className='font-semibold'> Add Post</h3>
        
        <X onClick={() => setFormState(false)} className='cursor-pointer'/>
        
    </div>
    
 
  <input type="text" className="input w-full outline-0" {...register("title")}placeholder="Post title" required/>
  <textarea className="textarea w-full outline-0" {...register("body")} placeholder="Body" required></textarea>
  <button className='btn btn-success'>Post</button>
    </form>
  )
}

export default PostForm