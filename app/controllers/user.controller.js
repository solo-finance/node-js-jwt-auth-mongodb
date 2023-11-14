const axios = require('axios');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.getToken = async (req, res) => {
   const clientId = process.env.CLIENTID || "e9c593e6-925e-45e7-8b9a-facd06bd6e54"
   const clientSecret = process.env.SECRET || "DnOwsZnoPIphPNR5gm/CvbRzDGrsxOJMMQVFCZUYPmo="
   const payload = {
     client_id: clientId,
     client_secret: clientSecret,
     external_user_id: req.userId,	   
   } 	
   var reply = await axios.post("https://stg-api.solo.one/auth/apilogin", payload, {
	   headers: {
    		"Content-Type": "application/json",
	   },
   	}   
   );
   res.status(200).send(reply.data)	
}	



exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
