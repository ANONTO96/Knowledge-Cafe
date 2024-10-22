import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {title,cover_image,reading_time,author,author_image,posted_date,hash_tags} = blog;
    return (
        <div className="mb-8 w-[90%] mx-auto">
            <img className="" src={cover_image} alt="" />
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-3">
                <img className="w-14 h-14 rounded-full object-contain" src={author_image} alt="" />
                <div>
                <h3 className="font-semibold">{author}</h3>
                <h4 className="text-gray-600">{posted_date}</h4>
                </div>
                </div>
                <div className="flex">
                    <span>{reading_time} mins read</span>
                    <button><img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=26087&format=png&color=000000" alt="" /></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p className="text-gray-600">
                {
                  hash_tags.map((hashtag, idx) => <span className="mr-1" key={idx}><a href="">{hashtag}</a></span>)
                }
            </p>
            <p className="text-blue-800"><a href="">Mark as read</a></p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
} 

export default Blog;