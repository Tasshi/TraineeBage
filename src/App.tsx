import './App.css'
import {TraineeBadge} from './trainee-badge'

const traineeBadges = [
  {
    id : 1,
    name: "Tashi Phuntsho",
    vertical: "Dev",
    cohort: 3
  },
  {
    id : 2,
    name: "Update Karma ",
    vertical: "BA",
    cohort: 3
  },
  {
    id : 3,
    name: "Pema Wangchuk",
    vertical: "QA",
    cohort: 3
  },
  {
    id : 4,
    name: "Tashi Dorji",
    vertical: "Dev",
    cohort: 3
  }
]

function App() {

  return (
    <>     
      <div className="flex flex-wrap justify-center gap-2">
        {traineeBadges.map((trainee) => (
          <TraineeBadge 
            key={trainee.id} 
            name={trainee.name} 
            vertical={trainee.vertical} 
            cohort={trainee.cohort} 
          />
        ))}
      </div>
    </>
  )
}

export default App
