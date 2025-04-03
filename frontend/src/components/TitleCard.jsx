import React from 'react';

const TitleCard = () => {
  return (
<div class="p-6 grid grid-cols-2 gap-2" >
  <h2 class="text-xl font-bold text-center text-gray-800 col-span-2">PROYECTO DE INVESTIGACIÓN</h2>
  
  <div class="">
    <p class="text-sm text-gray-500">Facultad:</p>
    <p class="text-base font-medium text-gray-700">Facultad de Ingeniería</p>
  </div>
  
  <div class="">
    <p class="text-sm text-gray-500">Carrera:</p>
    <p class="text-base font-medium text-gray-700">Tecnologías de la Información</p>
  </div>

  <div class="col-span-2">
    <p class="text-sm text-gray-500">Tema:</p>
    <p class="text-base font-medium text-gray-700">Aplicación web para el análisis de sentimientos con propósitos académicos en las redes sociales de la Universidad Nacional de Chimborazo</p>
  </div>


  <div class="">
    <p class="text-sm text-gray-500">Estudiante:</p>
    <p class="text-base font-medium text-gray-700">Jonathan Israel Villegas Machado</p>
  </div>

  <div class="">
    <p class="text-sm text-gray-500">Tutor:</p>
    <p class="text-base font-medium text-gray-700">Ing. María Isabel Uvidia, Msc.</p>
  </div>

</div>

  );
};

export default TitleCard;
