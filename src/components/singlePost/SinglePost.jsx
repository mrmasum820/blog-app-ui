import './singlepost.css';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>MR Masum</b></span>
                    <span className="singlePostDate">2 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam, dolor velit ut perspiciatis magni modi saepe! Ea nisi minus expedita, at tempore soluta ullam consequatur suscipit nulla reprehenderit temporibus, commodi dolores tenetur quisquam unde dolore porro laudantium excepturi doloremque totam nobis neque possimus alias. Repellendus dolores eligendi cupiditate adipisci voluptate, rem assumenda repudiandae, reiciendis culpa minima iste, natus rerum alias. Qui tenetur nam, dolores pariatur quo cumque, fuga quidem hic, temporibus deleniti veritatis eius quasi beatae facilis eum porro impedit! Architecto necessitatibus veritatis beatae sapiente assumenda corrupti quis ullam pariatur aut molestias sunt dolorum harum iure non, quo expedita?
                </p>
            </div>
        </div>
    )
}
