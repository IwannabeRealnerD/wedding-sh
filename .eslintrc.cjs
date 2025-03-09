/** @type { import("eslint").Linter.Config } */
module.exports = {
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"plugin:import/recommended",
		"plugin:@cspell/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
		sourceType: "module"
	},
	plugins: ["@typescript-eslint", "boundaries", "sort-keys-fix"],
	root: true,
	rules: {
		"@cspell/spellchecker": ["error", { checkComments: false }],
		"boundaries/element-types": [
			"error",
			{
				default: "allow",
				rules: [
					{
						disallow: ["routes"],
						from: "lib"
					},
					{
						disallow: ["routes"],
						from: "test"
					}
				]
			}
		],
		"import/order": [
			"error",
			{
				alphabetize: {
					caseInsensitive: true,
					order: "asc"
				},
				groups: [
					"builtin",
					"external",
					"internal",
					"type",
					"parent",
					"sibling",
					"index"
				],
				"newlines-between": "always",
				pathGroups: [
					{
						group: "external",
						pattern: "$lib/**",
						position: "after"
					},
					{
						group: "builtin",
						pattern: "{svelte*/**}",
						position: "before"
					}
				],
				pathGroupsExcludedImportTypes: ["react"]
			}
		],
		"sort-keys-fix/sort-keys-fix": [
			"error",
			"asc",
			{
				caseSensitive: true,
				natural: true
			}
		]
	},
	settings: {
		"boundaries/elements": [
			{
				pattern: "src/lib",
				type: "lib"
			},
			{
				pattern: "src/test",
				type: "test"
			},
			{ pattern: "routes", type: "routes" }
		],
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			typescript: { alwaysTryTypes: true }
		}
	}
};
