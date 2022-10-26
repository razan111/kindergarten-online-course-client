import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))
  }


  return (
    <div className="navbar bg-zinc-400 shadow shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>FAQ {user?.displayName}</a></li>
            <li><a>Blog</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><Link to='/'>Kindergarten</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link>FAQ</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">

        {
          user?.uid? <>
          <img src={user?.photoURL} alt="" />
          <Link onClick={handleLogOut} className="btn mr-3">Log Out</Link>
          
          </>:
          <><Link to='/login' className="btn mr-3">LogIn</Link>
          <Link to='/register' className="btn">Register</Link>
          </>
        }

        
      </div>
    </div>
  );
};

export default Header;