import styled from 'styled-components';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';

const ProjectSlider = styled(AwesomeSlider)`
margin-bottom: 0;
.awssld__bullets button {
  
  background-color: var(--primary-color); /* Change to your desired bullet color */
}

.awssld__controls__arrow-left::before,
.awssld__controls__arrow-left::after,
.awssld__controls__arrow-right::before,
.awssld__controls__arrow-right::after {
  background-color: #0e5a9c;
}

.awssld__bullets {
  position: relative; /* Position the bullets relative to the slider */
  top: -40px; /* Adjust the top position to be a few pixels above the slider */
  left: 50%; /* Align bullets horizontally to the center */
  transform: translateX(-50%); /* Center bullets horizontally */
  z-index: 100; /* Ensure bullets appear on top of the images */
}



.awssld__bullets button.awssld__bullets--active {
  background-color: #0e5a9c; /* Set the active bullet color */
}

`;

export default ProjectSlider;