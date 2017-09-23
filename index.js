const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(5000,()=>{
    console.log('Express server listening on port %d in %s mode',server.address().port,app.settings.env);
});
var i=0;
app.post('/events',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    req.body.text = 'working its response'+(i++)
    res.send(JSON.stringify(req.body, null, 3));
})
/*   if(req.body.type === 'url_verification'){
       res.send(req.body.challenge);
    }
   q = req.body;
   console.log(q);
   if(q.token !== process.env.SLACK_VERFICATION_TOKEN){
       res.sendStatus(400);
       return;
   }
   else if(q.type ==='event_callback'){
       if(!q.event.text)    return;
       analyzeTone(q.event);
   }
});
const watson = require('watson-developer-cloud');
let tone_analyzer = watson.tone_analyzer({
    username: "561bdf76-0af2-4a66-8f76-5c7b32c5ac15",
    password: "8gdZWZyo3FpY",
    version : 'v3',
    version_date: '2016-05-19'
  });
const confidencethreshold = 0.55;
function analyzeTone(ev){
    let text = ev.text;
    let regex = /(^:.*:$)/; // Slack emoji, starts and ends with :
    if(regex.test(text)) {
      text = text.replace(/_/g , ' ');
      text = text.replace(/:/g , '');
    }
    tone_analyzer.tone({text:text},function(err,tone){
        tone.document_tone.tone_categories.forEach(function(tonecategory) {
            if(tonecategory.category_id === 'emotion_tone'){
                console.log(tonecategory.tones);
                tonecategory.tones.forEach(function(emotion){
                    if(emotion.score >= confidencethreshold){
                        postEmotion(emotion, ev);
                    }
                })
            }
            
        });
    })
}
function postEmotion(emotion, ev) {
    message = 'feeling' +emotion.tone_id;
    let options = {
        method:'POST',
        uri: 'https://slack.com/api/chat.postMessage',
        form: {
            token : 'xoxb-241798392241-caYmO9VOHcbLL4qyDidutOGG',
            channel: ev.channel,
            text:message,
            as_user: false,
            username : 'Watson Bot'
        }
    }
    request(options,function(err,res,body){
        if(err){
            console.log(err)
            }
        });
}*/