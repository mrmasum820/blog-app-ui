import './post.css';

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg' src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <div className="postTitle">
                    Lorem ipsum dolor sit amet
                </div>
                <hr />
                <span className="postDate">2 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate animi porro, quod, facere ab iste exercitationem accusamus soluta, aut doloremque a enim ipsa molestias minus? Voluptate officiis saepe delectus corrupti enim totam in repudiandae, modi dignissimos blanditiis ad laudantium, esse est sint voluptatem autem dolor et eligendi magni quo. Consequuntur facere, veritatis enim tenetur eius reiciendis. Rem ducimus obcaecati sed optio saepe alias assumenda sapiente adipisci est quaerat libero et, molestiae praesentium! Deserunt mollitia nostrum explicabo accusantium, est repudiandae nulla.
            </p>
        </div>
    )
}
