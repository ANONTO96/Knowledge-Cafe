import PropTypes from "prop-types"
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 mt-8 rounded-2xl bg-slate-200 p-1">
            <h2 className="text-2xl text-center p-2">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =>
                    <Bookmark key={bookmark.id} bookmark= {bookmark}></Bookmark>
                )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;