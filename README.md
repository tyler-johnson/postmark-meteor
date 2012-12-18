This is a port of Postmark.js (https://github.com/voodootikigod/postmark.js) for Meteor. Only works on server (I think PostmarkApp blocks the client). Here is basic usage:

	Postmark("YOUR_API_KEY").send({
		From: "Test <test@example.com>",
		To: "foo@bar.com",
		Subject: "Test",
		TextBody: "Hullo!"
	}, function (err, res) {
		console.log(err, res);
	});