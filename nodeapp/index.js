const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
var serviceAccount = require("./key.json");
initializeApp({
    credential: cert(serviceAccount)
});
const db = getFirestore();
const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  // Add a new document in collection "cities" with ID 'LA'
/*   const res =  db.collection('studentData').doc('LA').set(data);
  console.log(res); */
  var express = require('express');  
  var app = express(); 
  app.use(express.json());
  const bodyParser = require("body-parser")
  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  const path = require('path')
  app.use('/static', express.static(path.join(__dirname, 'public')));
  app.use('/css', express.static(path.join(__dirname, 'public/css')));
  app.use('/js', express.static(path.join(__dirname, 'public/js')));
  app.use('/images', express.static(path.join(__dirname, 'public/images')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.post('/profile', function (req, res) {  
  res.render('profile',{name : '1',username : '2',email : '3'})
  })  
    
  app.listen(8080, function () {  
  console.log('Example app listening on port 8080!')  
  })

