import { Link } from 'react-router-dom'
import Label from './mainNavigationItems/Label'
import NavigationItem from './mainNavigationItems/NavigationItem';
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return(
    <div className={classes.sidebar}>
      <header>
        <Label />
        <nav>
          <div>
            <Link className={classes.link} to='/'>
              <NavigationItem name="Sample Data Generator" />
            </Link>

            <Link className={classes.link} to='/page02'>
              <NavigationItem name="Investment"/>
            </Link>

            <Link className={classes.link} to='/page03'>
              <NavigationItem name="in development"/>
            </Link>
          </div>
        </nav>
        </header>
    </div>
    
  );
}

export default MainNavigation;