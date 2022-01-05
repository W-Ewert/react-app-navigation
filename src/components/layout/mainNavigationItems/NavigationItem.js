import classes from './NavigationItem.module.css'

function NavigationItem(props){
  return(
    <div className={classes.navigationItem}>
      <div className={classes.icon}>bla</div>
      <div className={classes.content}>{props.name}</div>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
}

export default NavigationItem;