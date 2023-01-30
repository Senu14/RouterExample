import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
     <ul>
      <li><Link to="/">Front Page</Link> </li>
      <li><Link to="/goals">Verdensmål</Link> </li>
     </ul>
    </nav>
  )
}


export default  NavBar;