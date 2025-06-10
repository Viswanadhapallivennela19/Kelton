// voice.jsx
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
}
