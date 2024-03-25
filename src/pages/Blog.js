import Header from "../component/Header/Header";
import Heroine from "../component/Heroine/Heroine"
import Eleven from "../component/Eleven/Eleven";
import Tenth from "../component/Tenth/Tenth";
import "./Blog.css"

function Blog() {
  return (
      <div>
        <Header/>
      <div className="blog">
        <Eleven/>
       <Heroine/>
      </div>
      <Tenth/>
      </div>
  );
}

export default Blog;