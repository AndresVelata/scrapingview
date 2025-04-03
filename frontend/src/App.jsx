import React from 'react';
import TitleCard from './components/TitleCard';
import RadialProgressCard from './components/RadialProgressCard';
import ProgressBarCard from './components/ProgressBarCard';
import ColumnChartCard from './components/ColumnChartCard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 grid grid-cols-2 gap-4">
      <TitleCard />
      <RadialProgressCard />
      <ProgressBarCard />
      <ColumnChartCard />
    </div>
  );
}

export default App;
