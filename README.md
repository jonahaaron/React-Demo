# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/


# Setup Instructions

"If you run flow, you'll notice we broke our tests. Here is yet another benefit of Flow: it'd be easy to forget how modifying the API for Search would break the tests. Flow is quick to get that. It derives that fact because we changed what props are being passed to Search. Clever!"

Sublime License (check email)

node.js
https://nodejs.org/en/

brew update && brew install yarn

yarn global add jest@v19.0.2
yarn global add nodemon
yarn global add webpack@v2.2.1
yarn global add prettier@v0.22.0
yarn global add eslint@v3.18.0

Sublime Packages:
Babel
Babel Snippets
SublimeLinter
JsPrettier (config below)
{
	"debug": false,
	"prettier_cli_path": "",
	"node_path": "",
	"auto_format_on_save": true,
	"auto_format_on_save_excludes": [],
	"auto_format_on_save_requires_prettier_config": false,
	"allow_inline_formatting": false,
	"custom_file_extensions": [],
	"max_file_size_limit": -1,
	"additional_cli_args": {},
	"prettier_options": {
		"printWidth": 120,
		"singleQuote": true,
		"trailingComma": "none",
		"bracketSpacing": true,
		"jsxBracketSameLine": false,
		"parser": "babylon",
		"semi": true,
		"requirePragma": false,
		"proseWrap": "preserve",
		"arrowParens": "avoid"
	}
}

https://github.com/SublimeLinter/SublimeLinter-eslint