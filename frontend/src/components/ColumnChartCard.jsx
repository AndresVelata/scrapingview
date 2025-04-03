import React from 'react';

const ColumnChartCard = () => {
  const columns = [
    { height: 'h-16', color: 'bg-yellow-500', label: 'Q1', value: '25%' },
    { height: 'h-24', color: 'bg-red-500', label: 'Q2', value: '50%' },
    { height: 'h-32', color: 'bg-indigo-500', label: 'Q3', value: '75%' },
    { height: 'h-40', color: 'bg-green-500', label: 'Q4', value: '100%' },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Columnas Verticales</h2>
      <div className="flex justify-between items-end h-44">
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div className={`w-8 rounded ${col.color} ${col.height}`}></div>
            <span className="text-xs">{col.label}</span>
            <span className="text-sm font-semibold">{col.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnChartCard;
