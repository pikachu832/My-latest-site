// לא לשכוח להוריד הם 
// npm i

const express = require('express')
const app = express()
const fs = require('fs')
var nodemailer = require('nodemailer');
const { title } = require('process');

app.set('view engine' , 'ejs')
app.use( express.static( "public" ) )

app.listen(8080,function(){
    console.log('server is running on port 8080')
    console.log('GG 😉');
})

app.get('/', function (req, res){
    res.status(200).render('home', {title:'Home page'})
})

app.get('/Red-panda', function (req, res){
    res.status(200).render('Red-panda', {title:'Red panda page'})
})

app.get('/puma', (req,res) =>{
    res.status(200).render('puma', {title:'big cats page'})
})

app.get('/flamingo', (req,res) =>{
    res.status(200).render('flamingo', {title:'big cats page'})
})

app.get('/Rabbits', (req,res) =>{
    res.status(200).render('Rabbits', {title:'big cats page'})
})

app.get('/contact', (req,res) =>{
    res.status(200).render('contact', {title:'big cats page'})
})

app.get('/Animals' , (req,res) =>{
    res.status(200).render('Animals', {title:'ghhh'})
});

app.use(function(req,res){
    res.status(404).render('404', {title:'Error - Not Found'})
})

const fs = require('fs');

const user1 = {
    name: "ronen",
    lastname: "mahagony",
    age: 22,
    work: "student"
}

const user2 = {
    name: "lirit",
    lastname: "shlomot",
    age: 17,
    work: "programer"
}


app.listen(3000, () => {
    console.log('plugged to port 3000. server is running');
});


app.use(express.static('website'));

function saveData(data) {
    function ifError(error){
        if(error){
            console.log(error);
            return;
        }
    }
    // const jasonData = JSON.stringify(data);
    const jasonData = JSON.stringify(data, null ,2);
    console.log(data);
    console.log(jasonData);

    fs.writeFile('users.json', jasonData, ifError);
}

saveData(user1);

///////////////saving more then 1/////////////////////////////

// function saveData(data, file) {
   
//     function ifError(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//     }

//     const jasonData = JSON.stringify(data, null ,2);

    
//     if (fs.existsSync(file)) {
//     // path exists
//     console.log("exists:", file);
//     let rawdata = fs.readFileSync(file);
//     let someuser = JSON.parse(rawdata);
//     console.log("name exist: ", someuser.name )
//     } else {
//     console.log("DOES NOT exist:", file);
//     fs.writeFile(file, jasonData, ifError);
//     console.log(jasonData);
//     }

// }

// saveData(user1, 'user-1.json');
// saveData(user2, 'user-2.json');

///////////////////reading///////////////////////////////
// let rawdata = fs.readFileSync('user-1.json');
// let someuser = JSON.parse(rawdata);
// console.log(someuser.name);

// fs.readFile('users.json', (err, data) => {
//     if (err){
//         console.log(err);
//     } else{
//     let someuser = JSON.parse(data);
//     console.log(someuser.name);
//     }
// });
// app.post('/submit-post', (req, res) =>{
//   const firstName = req.first; 
//   const last = req.last;
//   const email = req.email;
//   res.render('nodemailer', {firstName , last , email});
// });

// var nodemailer = require('nodemailer');
// const { reset } = require('nodemon');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth:{
//     user: 'liornatan@tedikolek-jer.org.il',
//     pass: 'jjruyyurjj1231A9'
//   }
// });

// var mailOptions = {
//   from: 'liornatan@tedikolek-jer.org.il',
//   to: 'email',
//   subject: 'firstName',
//   text: 'last'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent:liornatan@tedikolek-jer.org.il' + info.response);
//   }
// });