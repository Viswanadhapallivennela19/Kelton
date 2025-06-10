import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function UserGame(){
	const { transcript, listening, resetTranscript } = useSpeechRecognition();
	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return <p>Your browser does not support speech recognition.</p>;
	  }
	return(
		<>
			<section className=''></section>
		</>
	)
}
export default UserGame;