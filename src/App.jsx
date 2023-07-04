import "./App.css"
import Column from "./components/column/Column"

const App = () => {
  return (
    <div className="App">
      <Column state="PLANNED"/>
      <Column state="ONGOING"/>
      <Column state="DONE"/>
    </div>
  )
}

export default App