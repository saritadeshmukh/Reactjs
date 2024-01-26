import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state)=>state.auth.state);//to get status of user if login or logout from authslice
  const navigate=useNavigate();

  //making nav Array of item to be add in navbaar in app
  const navItems = [
    {name:'Home',
     slug:'/',
     active:true},

   {name:'Login',
    slug:'/login',
    active:!authStatus},

    {
      name:"Sighup",
      slug:'/Signup',
      active:!authStatus},

    {
      name:"All Posts",
      slug:"/",
      active:authStatus},
    {
      name:"Add posts",
      slug:"/add-post",
      active:authStatus }
  ]

  return (
    <header className='py-3 shadow bg-gray-300'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to="/"></Link>
            <Logo width="70px" />
          </div>
          <ul className='flex ml-4'>
             { navItems.map((navItem)=> navItem.active?(<li keys={navItem.name}> 
                                      {/*after onClick will navigate on any url means item.slug */}
                                       <button className='inline-block px-6 py-2'
                                          onClick={()=>{navigate(navItem.slug)}}>{navItem.name}
                                        </button></li>):null)}

             {/* //if authStatus true then logout */}
           {authStatus&&(<li><LogoutBtn /></li>)}
            
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header;
