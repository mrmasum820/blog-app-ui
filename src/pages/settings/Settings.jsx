import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img className='settingsProfileImg' src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='MR Masum' />
                    <label>Email</label>
                    <input type="email" placeholder='masum@gmail.com' />
                    <label>Password</label>
                    <input type="text" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
