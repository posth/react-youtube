import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyB8MEDPqcWi9gLCZTj8Lnf0nxAeNDz78jE",
   authDomain: "react-youtube-dd1fd.firebaseapp.com",
   databaseURL: "https://react-youtube-dd1fd.firebaseio.com",
   storageBucket: "react-youtube-dd1fd.appspot.com",
   messagingSenderId: "720845780955"
 };

firebase.initializeApp(config);
const database = firebase.database();

export default database;
