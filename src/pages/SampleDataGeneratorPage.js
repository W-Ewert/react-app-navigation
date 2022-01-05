import classes from './SampleDataGeneratorPage.module.css'

function SampleDataGeneratorPage() {
  return(
    <div className={classes.page}>
      <h1 className={classes.header}>Create your sample data</h1>
      <div className={classes.mainContent}>
        <div className={classes.contentElement}>

          Element 01

          <div className={classes.input}>
            Input Form
            <form>
              <fieldset>
                <input></input>
              </fieldset>
              <fieldset>
                <input></input>
              </fieldset>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <table>
            <tr>
              <th>abc</th>
              <th>abc</th>
              <th>abc</th>
            </tr>
            <tr>
              <td>kjdsfklsj</td>
              <td>kjdsfklsj</td>
              <td>kjdsfklsj</td>
            </tr>
            <tr>
              <td>kjdsfklsj</td>
              <td>kjdsfklsj</td>
              <td>kjdsfklsj</td>
            </tr>
            <tr>
              <td>kjdsfklsj</td>
              <td>kjdsfklsj</td>
              <td>kjdsfklsj</td>
            </tr>
          </table>
        </div>
        <div className={classes.contentElement}>Element 02</div>
      </div>
    </div>
  ); 
}

export default SampleDataGeneratorPage;