import './App.css'
import {TraineeBadge} from './trainee-badge'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Counter from './counter';


const traineeBadges = [
  { id : 1, name: "Tashi Phuntsho", vertical: "Dev", cohort: 3 },
  {id : 2, name: "Update Karma ", vertical: "BA", cohort: 3 },
  {id : 3, name: "Pema Wangchuk", vertical: "QA", cohort: 3 }
]
function TraineeList() {
  return (
  <>
  <h1 className="text-2xl font-bold text-gray-800 text-center mb-7">
        Trainee List
      </h1>
    <div className="flex flex-wrap justify-center gap-2 p-10">
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
function Count() {
  return (
    <>
      <div className=" bg-gradient-to-br from-blue-30 to-indigo-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-7">
        Count Performance Trackers
      </h1>
      
      {/* Container for the 3 cards */}
      <div className="flex flex-wrap justify-center gap-4">
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </div>
    </>
  );
}

function App() {

  return (    
      <BrowserRouter>
      {/* 2. Navigation Bar (Always visible) */}
      <nav className="p-4 bg-white shadow-sm flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-600 font-bold">Counter </Link>
        <Link to="/traineeList" className="hover:text-blue-600 font-bold">Trainee List</Link>
      </nav>

      <Routes>
        {/* Correct v6 syntax: use element={<Component />} */}
        <Route path="/" element={<Count/>} />
        <Route path="/traineeList" element={<TraineeList />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
