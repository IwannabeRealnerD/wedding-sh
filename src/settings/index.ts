type CommandDefinition = {
	name: string;
	description: string;
	action: () => string;
};

export const COMMAND_DEFINITIONS: { [key: string]: CommandDefinition } = {
	ABOUT: {
		action: () =>
			"khanne-sh is a terminal that has information about khanne(me). \n You can use 'help' command to see available commands.",
		description: "Get information about this project",
		name: "about"
	},
	BLOG: {
		action: () => {
			window.open("https://iwannaberealnerd.oopy.io/develog");
			return "Opening new tabs for khanne's blog...";
		},
		description: "Open new window for khanne's blog",
		name: "blog"
	},
	CLEAR: {
		action: () => "",
		description: "Clear history",
		name: "clear"
	},
	CONTACT: {
		action: () =>
			"- Email: iwannaberealnerd@gmail.com\n- Phone Number: +821051200592\n- LinkedIn: www.linkedin.com/in/honggwanjeong",
		description: "Get khanne's contact information",
		name: "contact"
	},
	GITHUB: {
		action: () => {
			window.open("https://github.com/IwannabeRealnerD");
			return "Redirecting to khanne's github repositories...";
		},
		description: "Open new window for khanne's GitHub",
		name: "github"
	},
	HELP: {
		action: () => "",
		description: "Display available commands",
		name: "help"
	},
	PWD: {
		action: () => window.location.href,
		description: "Show current URL",
		name: "pwd"
	}
};
