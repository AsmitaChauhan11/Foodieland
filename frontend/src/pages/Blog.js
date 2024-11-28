import BlogandArticleSearch from "../components/BlogandArticleSearch"
import BlogPost from "../components/BlogPost"
import AddBlog from "../components/AddBlog"

export default function Blog(){
    return(
        <div>
            <BlogandArticleSearch/>
            <BlogPost/>
            <AddBlog/>
        </div>
    )
}