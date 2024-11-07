import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate}) => {
    const menuList = ['여성','Divided','남성','신생아/유아','H&M HOME','Sale','지속가능성']
    const navigate = useNavigate()

    const search = (event) => {
        if(event.key === "Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

    const goToLogin = () => {
        navigate('/Login')
    }

    const goToMain = () => {
        navigate('/')
    }
  return (
    <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div onClick={goToLogin}>{authenticate==true?"로그아웃":"로그인"}</div>
        </div>
        <div className='nav-section'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg' width={100} onClick={goToMain}/>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                    {menuList.map((menu)=><li>{menu}</li>)}
            </ul>
            
            <div className='search-box'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type='text' placeholder='검색' onKeyPress={(event)=>search(event)}/>
            </div>
            
        </div>
      
      
    </div>
  )
}

export default Navbar
