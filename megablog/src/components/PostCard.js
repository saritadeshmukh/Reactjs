import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
<Link to= {`/post/${$id}`}>    
<div className='rounded-xl p-4 py-4 w-full'>
    <div className='w-full mb-4 justify-center'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
    </div>
    <h1 className='text-xl font-bold'>{title}</h1>
</div>
</Link>
  )
}

export default PostCard
