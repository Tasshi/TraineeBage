import { useState } from 'react';
import "./index.css";

interface AttendanceBadgeProps {
  name: string;
}

function AttendanceBadge({ name }: AttendanceBadgeProps) {
  // State: present (boolean), initialized to true
  const [isPresent, setIsPresent] = useState(true);

  // Determine styles based on state
  const statusText = isPresent ? "Present" : "Absent";
  
  // Dynamic background colors: Green for Present, Red for Absent
  const bgStyles = isPresent 
    ? "bg-green-100 border-green-500 text-green-800" 
    : "bg-red-100 border-red-500 text-red-800";

  return (
    <div 
      onClick={() => setIsPresent(!isPresent)}
      className={`cursor-pointer select-none border-l-4 p-4 rounded-lg shadow-sm transition-all duration-300 w-64 ${bgStyles}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase tracking-wider font-semibold opacity-70">Trainee</p>
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
        
        <div className="text-right">
          <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${isPresent ? 'bg-green-200' : 'bg-red-200'}`}>
            {statusText}
          </span>
        </div>
      </div>
    </div>
  );
}
export default AttendanceBadge;