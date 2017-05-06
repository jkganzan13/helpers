module.exports = {
    "env": {
		"browser": true,
		"es6": true
	},
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"rules":{
		"indent": [2, "tab", {"SwitchCase": 1}],
		"no-tabs": 0
	}
};