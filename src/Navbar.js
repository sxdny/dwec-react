const Navbar = () => {
    return ( 
        <nav className="navbar justify-center bg-neutral-950 p-5">
            <h1 className="text-3xl text-white cursor-default">The DWEC Blog</h1>
            <div className="links flex gap-5 pt-2">
                <a className=" transition-colors text-neutral-400 hover:text-neutral-100" href="/">Home</a>
                <a className=" transition-colors text-neutral-400 hover:text-neutral-100" href="/create">New Blog</a>
            </div>
        </nav>
     );
}

 
export default Navbar;