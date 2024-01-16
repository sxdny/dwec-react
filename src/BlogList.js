// También se puede desestructurar el parámetro props:
// const BlogList = ({ blogs, title }) => {
//   return (
// ...

const BlogList = (props) => {
    const blogs = props.blogs;
    const handleEliminarBlog = props.handleEliminarBlog;

  return (
    <div className="blog-list border rounded-md p-5">
      <h2 className="text-2xl font-bold border-b pb-5">{props.title}</h2>
      <br />

      <div className="flex flex-col gap-5">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2 className="text-xl">{blog.title}</h2>
                <p className="text-sm">Written by {blog.author}</p>
                <button onClick={() => handleEliminarBlog(blog.id)} className="mt-3 bg-neutral-950 text-white p-2 rounded border">Eliminar blog</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
