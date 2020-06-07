importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyAu2gbxDgP9lJPsnu67gGutXc4mRmiCr3k',
  authDomain: 'scs-covid-app.firebaseapp.com',
  databaseURL: 'https://scs-covid-app.firebaseio.com',
  projectId: 'scs-covid-app',
  storageBucket: 'scs-covid-app.appspot.com',
  messagingSenderId: '839644895228',
  appId: '1:839644895228:web:ea3a43946969bbe5f60479',
  measurementId: 'G-FR5R5J79CE'
});
const messaging = firebase.messaging();
messaging.requestPermission()
  .then(function () {
    console.log('got permission');
    return messaging.getToken();
  })
  .then(function (token) {
    console.log(token)
  })
  .catch(function (err) {
    console.log('Error occurred', err)
  })

messaging.onMessage(function (payload) {
  console.log('onMessage', payload)
})
messaging.setBackgroundMessageHandler(function (payload) {
  const title = "testing";
  const options = {
    body: "hello there"
  }
  return self.registration.showNotification(title, options)
})
