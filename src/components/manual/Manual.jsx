//scr/components/manual/Manual.jsx
import React, { useState } from 'react';
import MenuColumn from './MenuColumn';
import InstructionsColumn from './InstructionsColumn';
import VideoColumn from './VideoColumn';
import NavigationButtons from './NavigationButtons';
import manualData from '../json/manualData.json';
import { Container, Main } from '../../App.styled';

const Manual = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleProfileChange = (profile) => {
    setSelectedProfile(profile);
    setSelectedTopic(null);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <Container>
    
        <section className="content-section">
          <div className="menu-column">
            {/* Menú para listado de temas se cargarán dinámicamente desde el JSON */}
            <ul className="menu-list">
              {manualData.topics.map((topic) => (
                <li key={topic.id} onClick={() => handleTopicChange(topic)}>
                  {topic.title}
                </li>
              ))}
            </ul>
          </div>
          {selectedTopic && (
            <>
              <div className="instructions-column">
                {/* Indicaciones para realizar el proceso */}
                <h6 className="miniTitle">{selectedTopic.title}</h6>
                <h4 className="title">Indicaciones</h4>
                <div className="textIndications">
                  <p>{selectedTopic.instructions}</p>
                </div>
              </div>
              <div className="video-column ">
                {/* Video explicativo se cargarán dinámicamente desde el JSON */}
                <iframe
                  width="560"
                  height="315"
                  src={selectedTopic.video}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </>
          )}
        </section>

        <NavigationButtons />
        
      
    </Container>
  );
};

export default Manual;