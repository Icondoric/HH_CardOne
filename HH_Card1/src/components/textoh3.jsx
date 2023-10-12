import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TextH3(props) {
  const { text, icon } = props;

  return (
    <h3>
      {icon && <FontAwesomeIcon icon={icon} />}{text}
    </h3>
  );
}

export default TextH3;
