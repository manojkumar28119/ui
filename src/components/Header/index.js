import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaSignOutAlt } from "react-icons/fa";
import Cookies from "js-cookie"




import './index.css'

const Header = (props) => {

    const onClickSignOut = () => {
        const {history}  = props 

        Cookies.remove("userName")

        history.replace("/signup")
    }

    return (
        <div className="nav-header">
          <div className="nav-content">
              <div className="avatar-card">
                  <i className="fa-solid fa-user avatar-icon" ></i>
              </div>
              <div className='popup-container'>
                <Popup
                    modal
                    trigger={
                    <button
                        className="hamburger-icon-button"
                        type="button"
                    >
                        <TfiMenuAlt className="menu-icon"/>
                    </button>
                    }
                    className="popup-content"
                >
                    {close => (
                    <div className="modal-container">
                        <button
                        className="close-button"
                        type="button"
                        onClick={() => close()}
                        >
                          <IoMdClose size="30" color="#616e7c" />
                        </button>
                        <ul className="nav-links-list">
                            <li className="nav-link-item">
                                <Link className="nav-link" to="/" onClick={() => close()}>
                                <AiFillHome size="20" />
                                <p className="nav-link-content">Home</p>
                                </Link>
                            </li>
                            <li className="nav-link-item">
                                <a href='https://ccbptimelinemk.ccbp.tech/' className="nav-link" target="_blank"  onClick={() => close()}>
                                    <BsInfoCircleFill size="20" />
                                    <p className="nav-link-content">my work</p>
                                </a>
                            </li>
                            <li className="nav-link-item">
                                <button type='button' className='signout-btn'   onClick={onClickSignOut}>
                                    <FaSignOutAlt size="20" />
                                    <p className="nav-sign-out-text">Sign out</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    )}
                </Popup>
              </div>
              <div className='desk-nav-content'>
                    <ul className="nav-links-list">
                        <li className="nav-link-item">
                            <Link className="nav-link" to="/">
                             <p className="nav-link-content">Home</p>
                            </Link>
                        </li>
                        <li className="nav-link-item">
                            <a href='https://ccbptimelinemk.ccbp.tech/' className="nav-link" target="_blank" >
                                 <p className="nav-link-content">my work</p>
                            </a>
                        </li>
                        <li className="nav-link-item">
                            <button type='button' className='signout-btn'   onClick={onClickSignOut}>
                                 <p className="nav-sign-out-text">Sign out</p>
                            </button>
                        </li>
                    </ul>
              </div>
          </div>
        </div>
      )
}

export default withRouter(Header)
