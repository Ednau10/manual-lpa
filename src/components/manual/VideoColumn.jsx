// src/components/manual/VideoColumn.jsx
import React from 'react';

const VideoColumn = ({ topics, selectedTopic }) => {
  if (!selectedTopic) {
    return null; // No hay tema seleccionado, no se muestra nada
  }

  const selectedTopicData = topics.find((topic) => topic.id === selectedTopic);

  if (!selectedTopicData) {
    return null; // No se encontró el tema seleccionado en la lista de temas
  }

  return (
    <div className="video-column">
      {/* Aquí mostramos el video */}
      <iframe
        width="300"
        height="315"
        src={selectedTopicData.videoUrl}
        
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoColumn;
