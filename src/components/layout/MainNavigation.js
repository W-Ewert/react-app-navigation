import { Link } from 'react-router-dom'

function MainNavigation() {
  return(
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Page01</Link>
          </li>
          <li>
            <Link to='/page02'>Page02</Link>
          </li>
          <li>
            <Link to='/page03'>Page03</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;