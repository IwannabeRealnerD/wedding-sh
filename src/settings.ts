type CommandDefinition = {
	name: string;
	description: string;
	action: () => string;
};

export const COMMAND_DEFINITIONS: { [key: string]: CommandDefinition } = {
	CALL: {
		action: () => {
			window.open("tel:+821051200592");
			return "Opening phone app to call khanne...";
		},
		description: "Call khanne",
		name: "call"
	},
	MAP: {
		action: () => {
			window.open("https://map.naver.com/p/entry/place/1016525309");
			return "Opening naver map for Nuage Garden...";
		},
		description: "Open naver map for Nuage Garden",
		name: "map"
	},
	CLEAR: {
		action: () => "",
		description: "Clear history",
		name: "clear"
	},
	CONTACT: {
		action: () =>
			" Email: iwannaberealnerd@gmail.com\n  Phone Number: +821051200592",
		description: "Get khanne's contact information",
		name: "contact"
	},
	GITHUB: {
		action: () => {
			window.open("https://github.com/IwannabeRealnerD/wedding-sh");
			return "Opening wedding-sh's GitHub repository in a new window...";
		},
		description: "Open wedding-sh's GitHub repository in a new window",
		name: "github"
	},
	HELP: {
		action: () => {
			return (
				"Available Commands:\n" +
				Object.values(COMMAND_DEFINITIONS)
					.map((command) => `  ${command.name}: ${command.description}`)
					.join("\n")
			);
		},
		description: "Display available commands",
		name: "help"
	},
	MESSAGE: {
		action: () => {
			window.open("sms:+821051200592");
			return "Opening message app to send message to khanne...";
		},
		description: "Send message to khanne",
		name: "message"
	}
};
