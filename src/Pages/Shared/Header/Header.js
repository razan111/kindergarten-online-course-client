import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(result => {
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

            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='faq'>FAQ</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl"><Link to='/'>Kindergarten</Link></Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link to='faq'>FAQ</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li>

          </li>
        </ul>
        {/* toggle  */}
        {/* <div className=""> */}
          <label htmlFor="check" className='bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full'>
            <input type="checkbox" id='check' className='sr-only peer'/>
            <span className='w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11  transition-all duration-500'></span>
          </label>
        {/* </div> */}
      </div>
      <div className="navbar-end">

        {
          user?.uid ? <>
            <img className='h-12 mr-4  rounded-3xl' src={user?.photoURL} alt="" />
            <Link onClick={handleLogOut} className="btn mr-3">Log Out</Link>

          </> :
            <><Link to='/login' className="btn mr-3">LogIn</Link>
              <Link to='/register' className="btn">Register</Link>
            </>
        }


      </div>
    </div>
  );
};

export default Header;