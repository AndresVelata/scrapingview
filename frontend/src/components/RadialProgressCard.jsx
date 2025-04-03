import React from 'react';

const RadialProgressCard = () => {
  const percentage = 65; // Valor dinámico si quieres

  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Progreso Radial</h2>
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90" width="128" height="128">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#e5e7eb"
            strokeWidth="16"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#f97316"
            strokeWidth="16"
            fill="none"
            strokeDasharray={351.68}
            strokeDashoffset={(1 - percentage / 100) * 351.68}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default RadialProgressCard;
