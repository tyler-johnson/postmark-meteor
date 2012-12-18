Package.describe({
	summary: "Postmark.js brought to Meteor."
});

Package.on_use(function (api) {
	api.use('http', 'server');
	api.add_files('postmark.js', 'server');
});