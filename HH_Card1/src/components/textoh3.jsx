import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Styles/styletexttoh3.css';

function TextH3(frase) {
  const { text, icon } = frase;

  return (
    <h3 className={styles['texth3']}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}{text}
    </h3>
  );
}
/*<FontAwesomeIcon icon="fa-light fa-bed-front" /> para el icono de cama */
/*<FontAwesomeIcon icon="fa-solid fa-arrows-maximize" /> para el icono de espacio tamaño eree*/

export default TextH3;
