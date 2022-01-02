import classes from './Label.module.css'

function Label(){
  return(
    <div className={classes.label}>
      <div className={classes.labelContent}>
        <div className={classes.text}>My Super App</div>
        <div className={classes.icon}>Container for Icon</div>
      </div>
      <div>
        <hr className={classes.line} />
      </div>
    </div>
  );
}

export default Label;