const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const cors = require('cors')({origin: true});
const ejs = require('ejs');


var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'lifesaveredonotreply@gmail.com',
        pass:'oojmnxaxauksrqel'
    }, 
})

exports.sendEmail = functions.https.onRequest((req, res) => {
    //console.log('from sendEmail function. The request Object is:', JSON.stringify(req.body))

    cors(req,res, () => {

        const hospitalEmail = req.body.hospitalEmail 
        const donorEmail = req.body.donorEmail
        const mailList= [hospitalEmail, donorEmail]
        const bloodGroup = req.body.bloodGroup
        const hospitalName = req.body.hospitalName
        const hospitalPNumber = req.body.hospitalPNumber
        const bloodAmount = req.body.bloodAmount

     
        const mailOptions = {
            from: `lifesaveredonotreply@gmail.com`, 
            to:mailList,
            subject:'DONATION REQUEST ACCEPTED', 
            // context:{
            //     BloodGroup: bloodGroup,
            //     DonorEmailId: donorEmail,
            //     HospitalName:hospitalName,
            //     HospitalEmailId: hospitalEmail,
            //     HospitalPNumber: hospitalPNumber, 
            //     BloodAmount: bloodAmount
            // }
            text:`Hello,\nGood News! Donor with email address: ${donorEmail} has confirmed to donate the blood.\n\n\nUSER INFO\nEmail: ${donorEmail}\n\n\nHOSPITAL INFO\nName: ${hospitalName}\nEmail Id: ${hospitalEmail}\nPhone Number: ${hospitalPNumber}\nAmount: $${bloodAmount}\n\n\n\nThank You,\nLifeStream!\n`
        }; 

        // transporter.use('compile',hbs(handlebarOptions));

        return transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                return res.status(500).send({
                    data:{
                        status: 500,
                        message: error.toString(),
                    }
                })
            }
            return res.status(200).send({
                data:{
                    status:200, 
                    message:'Sent'
                }
            })
        })

    
    })
})


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
