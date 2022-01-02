import { Link } from 'react-router-dom'
import Label from './mainNavigationItems/Label'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return(
    <div className={classes.sidebar}>
      <header>
        <Label />
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
    </div>
    
  );
}

export default MainNavigation;