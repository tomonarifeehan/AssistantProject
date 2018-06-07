'use strict';

// [START speech_quickstart]
// Imports the Google Cloud client library
var speech = require('@google-cloud/speech');
var fs = require('fs');

// Creates a client
var client = new speech.SpeechClient();

// The name of the audio file to transcribe
var fileName = '../resources/audio.raw';

// Reads a local audio file and converts it to base64
var file = fs.readFileSync(fileName);
var audioBytes = file.toString('base64');

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
var audio = {
  content: audioBytes,
};
var config = {
  encoding: 'LINEAR16',
  sampleRateHertz: 16000,
  languageCode: 'en-US',
};
var request = {
  audio: audio,
  config: config,
};

// Detects speech in the audio file
client
  .recognize(request)
  .then(data => {
    var response = data[0];
    var transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
// [END speech_quickstart]