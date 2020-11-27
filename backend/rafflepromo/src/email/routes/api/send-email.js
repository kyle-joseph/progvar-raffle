const expresss = require('express');
const { body, validationResult } = require('express-validator');
const sendEmail = require('../../repository/email');

const router = expresss();


router.post('/send-email',[
    body('subjectTitle').not().isEmpty().escape(),
    body('subjectContent').not().isEmpty().escape(),
    body('emailTo').isEmail().normalizeEmail(),
    ], async (req,res) => {
        console.log(req.params);
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({err: errors.array() });
        }
        console.log(req.body);
        const toUser = req.body.emailTo;
        const subjectTitle = req.body.subjectTitle;
        const contentText = `Congratulations Your Raffle ${req.body.subjectContent} Just Won`;

        let isSend = await sendEmail(toUser,subjectTitle,contentText);
        if(isSend){
            res.send(isSend);
        }else{
            res.status(400).send('Something is Wrong');
        }
    }
)



module.exports = router;