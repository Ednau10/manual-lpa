// scr/components/manual/MenuColumn.jsx
import React from 'react';
import { MenuContainer, MenuList } from './MenuColumn.styled';

const MenuColumn = ({ topics, selectedTopic, handleTopicChange }) => {
  return (
    <MenuContainer>
      <MenuList>
        {topics.map((topic) => (
          <li
            key={topic.id}
            onClick={() => handleTopicChange(topic)}
            className={selectedTopic === topic ? 'active' : ''}
          >
            {topic.title}
          </li>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default MenuColumn;