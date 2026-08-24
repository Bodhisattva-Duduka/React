import { Link } from 'react-router'
function Navbar() {
  return (
    <>
      <div className='flex gap-2'>
        <Link to="/" >
          Home
        </Link>

        <Link to="/contact" >
          Contact
        </Link>

        <Link to="/about" >
          About
        </Link>
      </div>
    </>
  )
}

export default Navbar;