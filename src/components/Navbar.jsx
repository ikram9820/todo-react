function Navbar({handleSearch}) {
    const handleChange= (event)=>{
        handleSearch(event.target.value)
    }
  return (
    <nav className="navbar bg-body-tertiary">
        <a className="navbar-brand">My Todo</a>
        <div className="d-flex">
          <input
            onChange={handleChange}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
    </nav>
  );
}

export default Navbar;
