import PropTypes from "prop-types"
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mt-8 rounded-2xl bg-slate-200 p-1">
            <div>
                <h3 className="text-3xl text-center">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center p-2">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) =>
                    <Bookmark key={idx} bookmark= {bookmark}></Bookmark>
                )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;