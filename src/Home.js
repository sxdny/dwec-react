import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// useEffect es un hook que se ejecuta cada vez que se renderiza el componente      

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [nombre, setNombre] = useState("mario"); // Se puede tener más de un useState en un componente. En este caso, se tiene un useState para el array de blogs y otro para el nombre. Si se cambia el nombre, se renderiza el componente y se ejecuta el useEffect, aunque el array de blogs no haya cambiado.

  const handleEliminarBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id); // Devuelve un array con todos los blogs cuyo id sea distinto al id que se pasa como parámetro
    setBlogs(newBlogs);

    // setBlogs(blogs.filter((blog) => blog.id !== id)); // También se puede hacer así

  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  }, [handleEliminarBlog]); // Si no se pasa el segundo parámetro, se ejecuta cada vez que se renderiza el componente. Si se pasa un array vacío, se ejecuta solo la primera vez que se renderiza el componente. Si se pasa un array con una variable, se ejecuta cada vez que se renderiza el componente y la variable cambia de valor.

  return (
    <div className="home p-5 flex gap-5 flex-col md:flex-row">
      <BlogList blogs={blogs.filter(blog => blog.id === 2)} title="Lista de blogs con id 3" handleEliminarBlog={handleEliminarBlog} />

      {/* <BlogList blogs={blogs.filter(blog => blog.title === "My new website")} title="Lista de blogs 'My new website'" />

      <BlogList blogs={blogs.filter(blog => blog.author === "mario")} title="Lista de blogs de Mario" /> */}

      <p>{nombre}</p>
      <button className="bg-neutral-800 hover:bg-neutral-950 p-3 border rounded text-white" onClick={() => setNombre("luigi")}>Cambiar nombre</button>
    </div>
  );
};

export default Home;
