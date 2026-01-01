import React, { useEffect } from 'react'
import { useAuthStore, isLoading, usePostStore } from '../utils/Zustand'
import { HomeNavbar } from '../components/HomeNavbar'
import axios from '../utils/axios'
import Sidebar from '../components/Sidebar'
import { Plus } from 'lucide-react'
import PostForm from '../components/PostForm'
import { usePostFormStore } from '../utils/Zustand'

function Home() {
    const user = useAuthStore((state) => state.User)
    const setUser = useAuthStore((state) => state.setUser)
    const setIsLoading = isLoading((s) => s.setIsLoading)
     const setPosts = usePostStore((s) => s.setPosts)
     const posts = usePostStore((s) => s.posts)
     const setFormState = usePostFormStore((s) => s.setFormState)

    useEffect(() => {
       () => setIsLoading(true)
       .then(axios("/api/home"))
       .then((res) => setUser(res.data?.user))
       .catch(() => {
        logOut()})
      }, [])

    useEffect(() => {
      const GetUserPosts = async () => {  
          try {
            const post = await axios("/post/posts")
            await setPosts(post.data?.posts)
            console.log(posts.map(post => post.title))
            setIsLoading(false)
          } catch (error) {
            console.log("something went wrong: " + error.message)
          }
      } 

      GetUserPosts()
    }, [])


  return (
    <main >
        <HomeNavbar />

        <section className='text-center p-5 flex items-center justify-evenly'>
            {!posts.length ? <p>No Posts</p> : <p>you have {posts.length} posts</p>} <button className='btn btn-primary btn-sm' onClick={() => setFormState(true)}><Plus /></button>
        </section>
        
        <section className='flex flex-col gap-2'>
        <PostForm />
          {posts.map(post => <div className='p-2'>
          <div className=''>
            {post.author?.firstname + " " + post.author?.lastname}
          </div>

          <div className='px-1'>
            <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
          
          </div>)}
        </section>
       
    </main>
  )
}

export default Home