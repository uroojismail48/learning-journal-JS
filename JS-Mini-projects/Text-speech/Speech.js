let voices = []; //empty array
let speech = new SpeechSynthesisUtterance(); //storing
let voiceSelected = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; //default voice

    voiceSelected.innerHTML = "";

    voices.forEach((voice, i) => {
        voiceSelected.options[i] = new Option(voice.name, i);
    }); //option me naam pass of all available voices in the device
};

voiceSelected.addEventListener("change", () => {
    speech.voice = voices[voiceSelected.value];
}); //onclick pe change hona

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}); //speech me convert krna