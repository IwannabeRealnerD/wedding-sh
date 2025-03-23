type CommandDefinition = {
	description: string;
	action: () => string;
};

export const COMMAND_DEFINITIONS: { [key: string]: CommandDefinition } = {
	map: {
		action: () => {
			window.open("https://map.naver.com/p/entry/place/1016525309");
			return "Opening naver map for Nuage Garden(누아주가든)...";
		},
		description: "Open naver map for Nuage Garden(누아주가든)"
	},
	clear: {
		action: () => "",
		description: "Clear history"
	},
	"calendar add": {
		action: () => {
			window.open(
				"https://calendar.google.com/calendar/u/0/r/eventedit?dates=20250531T120000/20250531T160000&text=Cinderella+and+Honggwan%27s+Wedding"
			);
			return "Opening google calendar to add wedding event...";
		},
		description: "Add wedding event to google calendar"
	},
	github: {
		action: () => {
			window.open("https://github.com/IwannabeRealnerD/wedding-sh");
			return "Opening wedding-sh's GitHub repository in a new window...";
		},
		description: "Open wedding-sh's GitHub repository"
	},
	"copy ko address": {
		action: () => {
			navigator.clipboard.writeText("경기 하남시 미사동로40번길 229");
			return "Address of venue is copied to clipboard in Korean.\nYou can paste it to where you want.";
		},
		description: "Copy address of venue in Korean"
	},
	"copy en address": {
		action: () => {
			navigator.clipboard.writeText("229, Misadong-ro 40beon-gil, Hanam-si, Gyeonggi-do");
			return "Adress of venue is copied to clipboard in English.\nYou can paste it to where you want.";
		},
		description: "Copy address of venue in English"
	},
	"copy url": {
		action: () => {
			navigator.clipboard.writeText("https://iwannaberealnerd.github.io/wedding-sh/");
			return "URL of this website is copied to clipboard.";
		},
		description: "Copy URL of this website"
	},
	help: {
		action: () => {
			return (
				"Available Commands:\n" +
				Object.entries(COMMAND_DEFINITIONS)
					.map(([key, command]) => `  ${key}: ${command.description}`)
					.join("\n")
			);
		},
		description: "Display available commands"
	},
	"message groom": {
		action: () => {
			window.open(`sms:${import.meta.env.VITE_GROOM_PHONE_NUMBER}`);
			return `Opening message app to send message to ${import.meta.env.VITE_GROOM_NAME}...`;
		},
		description: `Send message to ${import.meta.env.VITE_GROOM_NAME}`
	},
	"message bride": {
		action: () => {
			window.open(`sms:${import.meta.env.VITE_BRIDE_PHONE_NUMBER}`);
			return `Opening message app to send message to ${import.meta.env.VITE_BRIDE_NAME}...`;
		},
		description: `Send message to ${import.meta.env.VITE_BRIDE_NAME}`
	},
	"call groom": {
		action: () => {
			window.open(`tel:${import.meta.env.VITE_GROOM_PHONE_NUMBER}`);
			return `Opening phone app to call ${import.meta.env.VITE_GROOM_NAME}...`;
		},
		description: `Call ${import.meta.env.VITE_GROOM_NAME}`
	},
	"call bride": {
		action: () => {
			window.open(`tel:${import.meta.env.VITE_BRIDE_PHONE_NUMBER}`);
			return `Opening phone app to call ${import.meta.env.VITE_BRIDE_NAME}...`;
		},
		description: `Call ${import.meta.env.VITE_BRIDE_NAME}`
	}
} as const;
