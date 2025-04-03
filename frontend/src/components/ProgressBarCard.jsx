import React from 'react';

const ProgressBarCard = () => {
  const data = [
    { label: 'Dato A', value: 80, color: 'bg-blue-500' },
    { label: 'Dato B', value: 65, color: 'bg-green-500' },
    { label: 'Dato C', value: 40, color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Barras de Progreso</h2>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${item.color} h-2.5 rounded-full`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBarCard;
