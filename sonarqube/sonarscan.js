const scanner = require("sonarqube-scanner");

scanner(
	{
		serverUrl: "http://localhost:9000",
		token: "27bc5098bd17daf7b16c31c1a3210c2ba079e51f",
		options: {
			"sonar.projectName": "restuarant-dts",
			"sonar.projectDescription": "restuarant react app",
			"sonar.projectKey": "restuarant-dts",
			"sonar.projectVersion": "0.0.1",
			"sonar.exclusions": "",
			"sonar.sourceEncoding": "UTF-8",
		},
	},
	() => process.exit()
);
