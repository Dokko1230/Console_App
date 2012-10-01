jQuery(function($, undefined) {
	$("#terminal").terminal(function(command, term) {
		term.resize();
		if (command.toLowerCase() === "sean -help"){
			term.echo("Usage: sean [-options] ");
			term.echo("where options include:");
			term.echo("\t -experiences");
			term.echo("\t -employment");
			term.echo("\t -about");
			term.echo("\t -skills");
			term.echo("\t -education");
			term.echo("\t -projects");
			term.echo("\t -hobbies");
			term.echo("\t -linkedin");
			term.echo("\t -email");
			term.echo("\t -fullview  |  Displays all of the sections.");
			term.echo("\t example: sean -skills");
		} else if (command.toLowerCase() === 'sean -experiences') {
			term.echo(printExperiences());
		} else if (command.toLowerCase() === 'sean -employment') {
			term.echo(printEmployment());
		} else if (command.toLowerCase() === 'sean -about') {
			term.echo(printAbout());
		} else if (command.toLowerCase() === 'sean -skills') {
			term.echo(printSkills());
		} else if (command.toLowerCase() === 'sean -education') {
			term.echo(printEducation());
		} else if (command.toLowerCase() === 'sean -projects') {
			term.echo(printProjects());
		} else if (command.toLowerCase() === 'sean -hobbies') {
			term.echo(printHobbies());
		} else if (command.toLowerCase() === 'sean -linkedin') {
			term.echo("www.linkedin.com/in/dokko1230");
		} else if (command.toLowerCase() === 'sean -email') {
			term.echo("dokko1230@gmail.com");
		} else if (command.toLowerCase() === 'sean -fullview') {
			term.echo("About Me:");
			term.echo(printAbout());
			term.echo("My Employment History:");
			term.echo(printEmployment());
			term.echo("My Experiences:");
			term.echo(printExperiences());
			term.echo("My Education:");
			term.echo(printEducation());
			term.echo(printProjects());
			term.echo(printSkills());
			term.echo("My Hobbies:");
			term.echo(printHobbies());
			term.echo("dokko1230@gmail.com");
			term.echo("www.linkedin.com/in/dokko1230");
		} else {
			term.echo('command not recognized.');
		}
	}, {
		greetings: 'Greetings! My name is Sean Dokko. It is a pleasure to meet you! Simply use this like a command line interface. \nType \'sean -help\' for command line options.\n ',
		name: 'js_demo',
		// height: term.resize(),
		prompt: '$> '});
	
	var printExperiences = function() {
		var s = "I have a focus for user interaction with a background in front-end and object oriented languages like Java and Javascript.";
			s+= "\nI've had the pleasure of using frameworks such as Backbone.js to write modularized front-end code.";
			s+= "\nDuring my previous internship with Mindbloom, I wrote black-box regression tests with Selenium as well as perform general";
			s+= "\nQuality Assurance duties. Within my academic career, I've worked with technical and non-technical professionals to help reach";
			s+= "\ntheir goals.";
			s+= "\n";
		return s;
	};

	var printEmployment = function() {
		var s = "Mindbloom\tQuality Assurance, Intern\tFall 2011 - Winter 2011";
			s+= "\n\t-Collaborated with a team of developers in assessing development of the multi-platform game.";
			s+= "\n\t-Developed an automation testing suite from the ground-up to reduce redundancies testing.";
			s+= "\n\t-Reduced a significant amount of bugs in the mobile and web application.";
			s+= "\n\t-Documented over 400 testing and design requirements: created and updated docuements for development.";
			s+= "\n\t-Improved customer satisfaction by analyzing customer needs within the game with Google Analytics.";
			s+= "\n\t-Handled customer issues and analyzed customer feedback with Salesforce.";
			s+= "\n";
			s+= "\nStudentPainters.Net\tBranch Manager\tWinter 2009 - Fall 2010";
			s+= "\n\t-Sold and produced approximately 30,000 dollars of production in painting jobs.";
			s+= "\n\t-Utilized sales techniques and objection handling techniques to reach quota.";
			s+= "\n\t-Hired and trained a fully functioning painting team.";
			s+= "\n\t-Effectively oversaw multiple work locations.";
			s+= "\n";
			s+= "\nArco AM/PM\tAssistant Manager\tSummer 2009 - Winter 2010";
			s+= "\n\t-Maintained and organized invoices and other business data into the database.";
			s+= "\n\t-Created an efficient method for restocking products.";
			s+= "\n\t-Improved customer satisfaction by training employees to maintain a cleaner working environment.";
			s+= "\n";
		return s;
	};

	var printAbout = function() {
		var s = "I am Currently attending University of Washington with a focus of Informatics, Human-Computer Interaction.";
		s += "\nBy studying interaction design in school and by learning how to program as a hobby, I hope to build out a well-rounded career.";
		s += "\nIn school, I focus on research methodologies, user experience, and design. Outside of school, I tend to focus more on learning different languages,";
		s += "\nreading up on implementation methodologies, and in general, how to write better code.";
		s += "\n";
		return s;
	};

	var printSkills = function() {
		var s = " My Stack Includes:";
			s+="\n Designing & Wireframing   Client-Side           Backend   Other";
			s+="\n_____________________________________________________________________________";
			s+="\n|Axure                    | HTML5 & CSS3 (SASS) | PHP     | UNIX C#         |";
			s+="\n|Photoshop                | Javascript & jQuery |         | Java Selenium   |";
			s+="\n|Illustrator              | Backbone.js         |         | Python Git Bash |";
			s+="\n|                         | Underscore.js       |         |                 |";
			s+="\n|---------------------------------------------------------------------------|";
			s+="\n";
		return s;
	};

	var printEducation = function() {
		var s = "University of Washington\tFall 2009 - Spring 2013";
			s+= "\nB.S. in Informatics: Human-Computer Interaction";
			s+= "\nUndergraduate Coursework: ";
			s+= "\n\tCooperative Software Design; Web Technologies; Information Systems Analysis and Management;";
			s+= "\n\tProgramming Languages; Research Methodologies; Project Management.";
			s+= "\n";
		return s;
	};

	var printProjects = function() {
		var s = "Projects:";
			s+= "\n\tNote Taking Application (Fall 2012):";
			s+= "\n\t\tWeb based note taking application using localstorage and MV framework. Backbone.js, localstorage, jQuery";
			s+= "\n\tCarmax.Com (Spring 2012):";
			s+= "\n\t\tPerformed heuristic evaluations and gathered data regarding how consumers purchase cars to create a Vehicle";
			s+= "\n\t\tRecommendation Tool design. Axure, Adobe Illustrator";
			s+= "\n\tDeloitte Case Competition (Spring 2012):";
			s+= "\n\t\tAnalyzed the current mobile payment market and created a plan for introducing a new mobile payment ecosystem.";
			s+= "\n\tSwedish Medical (Fall 2011):";
			s+= "\n\t\tImproved Swedish Medical Hospital's patient recall system. Worked with a small group of";
			s+= "\n\t\tstaff members to provide a systems analysis that would help reduce inefficiencies and streamline";
			s+= "\n\t\ttheir workflow.";
			s+= "\n";
		return s;
	};

	var printHobbies = function() {
		var	s = "I like to read programming books. This summer, I've read the Pragmatic Programmer by Andrew Hunt,";
			s+= "\nJavascript: The Good Parts by Douglas Crockford, and am currently reading Code Complete by Steve McConnell.";
			s+= "\nBesides reading, I've been playing the cello for 8 years and am currently learning how to play the guitar.";
			s+= "\nI like to snowboard whenever I get the seance to, which is not so often.";
			s+= "\n";
			return s;
	};

});
