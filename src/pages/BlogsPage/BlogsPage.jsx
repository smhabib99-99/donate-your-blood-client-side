import { useLoaderData } from "react-router-dom";
import BlogsPageCard from "./BlogsPageCard";
// import BlogsPageCard from "./BlogsPageCard";


const BlogsPage = () => {
    const blogs = useLoaderData()


    return (
        <div>
            <h2 className="text-3xl font-medium text-center bg-sky-400 py-4 text-white my-3">Blogs About Blood Donations</h2>

           <div className="grid md:grid-cols-3 gap-4">
           {
                // <BlogsPageCard blogs={blogs}></BlogsPageCard>
                blogs?.map((blog)=><BlogsPageCard key={blog.id} blog={blog}></BlogsPageCard>)
            }
           </div>

        </div>
    );
};

export default BlogsPage;