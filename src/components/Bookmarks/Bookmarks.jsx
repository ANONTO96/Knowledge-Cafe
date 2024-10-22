import PropTypes from "prop-types"
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mt-8 rounded-2xl bg-slate-200">
            <div className="bg-violet-200 rounded-xl px-3 py-6 m-1 border-violet-600 border-2">
                <h3 className="text-2xl font-semibold text-violet-700 text-center">Spent time on read:{readingTime}</h3>
            </div>
            <h2 className="text-2xl px-2 py-10 font-bold">Bookmarked Blogs:{bookmarks.length}</h2>
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