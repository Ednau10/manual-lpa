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
      <Main>
        <MenuColumn
          topics={selectedProfile?.topics || []} // Check selectedProfile before passing topics
          selectedTopic={selectedTopic}
          handleTopicChange={handleTopicChange} // Correct prop name to handleTopicChange
        />
        {selectedTopic && (
          <>
            <InstructionsColumn
              topics={selectedProfile?.topics || []} // Check selectedProfile before passing topics
              selectedTopic={selectedTopic}
            />
            <VideoColumn
              topics={selectedProfile?.topics || []} // Check selectedProfile before passing topics
              selectedTopic={selectedTopic}
            />
          </>
        )}
        <NavigationButtons />
      </Main>
    </Container>
  );
};

export default Manual;
