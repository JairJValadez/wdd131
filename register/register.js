// Import from modules
import { participantCount, initParticipants } from './participants.js';
import { submitForm } from './submission.js';

initParticipants();

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    submitForm(event, participantCount); 
});