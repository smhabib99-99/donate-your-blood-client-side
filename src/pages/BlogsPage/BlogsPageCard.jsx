import PropTypes from 'prop-types';

const BlogsPageCard = ({blog}) => {

    const {title,author,date,content} = blog||{};

    return (
        <div className="">
            <div className="card w-80 h-80 mx-auto bg-sky-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <p>{content}</p>
                    <div className="card-actions justify-center">
                    {/* <span>{date}</span> */}
                        <p className="btn"> <span>Posted: {date}</span>By: {author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsPageCard;

BlogsPageCard.propTypes = {
    blog:PropTypes.object,
};