import "./Header.scss";
import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';


function Header() {
  
  return (
    <div className='header'>
       <div className='header_cont'>
          <p className='header_logo'>WATERS</p>
            <ul className='header_list_cont'>
               <li className='header_list'>HOME</li>
               <li className='header_list'>MOVIES</li>
               <li className='header_list'>SERIES</li>
               <li className='header_list'>NEWS</li>
               <li className='header_list'>MY LIST</li>
            </ul>
       </div>
   
        <div className='header_profile_cont'>
           <FiSearch className='search_btn'/>
           <FaBell className='notification_btn'/>
           <button className='profile_btn'>PROFILE</button>
        </div>
       
    </div>
  );
}
export default Header;


