import './write.css';

export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg' src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput' />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder='Write your story' className='writeInput writeText' ></textarea>
                </div>
                <button type='submit' className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}
