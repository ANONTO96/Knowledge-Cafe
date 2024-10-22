import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-300 m-1 p-3 my-1 rounded-2xl">
            <h3 className="md:text-xl text-lg">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;