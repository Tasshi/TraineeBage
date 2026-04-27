import './App.css';

type TraineeBadgeProps = Readonly<{
  name: string;
  vertical: string;
  cohort: number;
}> ;

export const TraineeBadge = ({ name, vertical, cohort }: TraineeBadgeProps) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-60 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
        <span className="text-white text-xl font-bold">{initials}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{name}</h3>
      <p className="text-sm font-semibold text-blue-600 mb-3">{vertical}</p>
      <p className="text-sm text-gray-500">Cohort {cohort}</p>
    </div>
  );
};  