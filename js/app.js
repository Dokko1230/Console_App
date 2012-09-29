jQuery(function($, undefined) {
	$("#terminal").terminal(function(command, term) {
		if(command === "chan -help"){
			term.echo("available commands are: hello ");
		} else if (command == 'chan -help') {

		} else {
			term.echo('Hello');
		}
	}, { 
		greetings: 'Greetings! My name is Chan Dokko. It is a pleasure to meet you! Simply use this like a command line interface. Type \'sean -help\' for command line options.',
		name: 'js_demo',
		height: 700,
		prompt: 'Chan>'});
});
