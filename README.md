Cypress Automation Framework with TypeScript

An automation framework built with Cypress 13.15 and TypeScript for end-to-end testing of web applications. This project leverages Cypress’s latest features, strong typing with TypeScript, and a modular test structure for scalable, reliable testing.

Table of Contents

	•	Features
	•	Getting Started
	•	Project Structure
	•	Installation
	•	Running Tests
	•	Configuration
	•	Writing Tests
	•	Custom Commands
	•	Reporting
	•	Best Practices
	•	Contributing
	•	License

Features

	•	TypeScript Support: Type safety and better tooling for improved code quality.
	•	Cypress 13.15: Uses the latest Cypress version for robust E2E testing.
	•	Modular Structure: Organizes tests, custom commands, and configuration for easy maintenance.
	•	CI/CD Ready: Integrates seamlessly with CI/CD pipelines for continuous testing.

Getting Started

This framework is intended for end-to-end testing of web applications with a focus on reusability and modularity. It supports cross-browser testing and integration with CI/CD tools.

Prerequisites

	•	Node.js (>= 14.x.x)
	•	npm (or yarn)

Project Structure

The project follows a Cypress and TypeScript structure:

.
├── cypress
│   ├── e2e                # Test specifications
│   ├── fixtures           # Test data (JSON files)
│   ├── support            # Custom commands and setup files
│   │   ├── commands.ts    # Custom commands
│   │   └── e2e.ts         # Test hooks and setup
├── cypress.config.ts      # Cypress configuration in TypeScript
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation

Installation

	1.	Clone the Repository:

git clone https://github.com/your-username/cypress-automation-framework.git
cd cypress-automation-framework


	2.	Install Dependencies:

npm install


	3.	Run Cypress:

npx cypress open



Running Tests

Run All Tests (Headless)

To execute all tests in headless mode:

npx cypress run

Run Tests with Cypress Test Runner

To open the interactive Cypress Test Runner:

npx cypress open

Configuration

The main configuration file is cypress.config.ts, where you can set global options like baseUrl, environment variables, and test timeouts.

Example Configuration in cypress.config.ts

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Change this to your app's URL
    setupNodeEvents(on, config) {
      // Add custom event listeners or plugins here
    },
    supportFile: 'cypress/support/e2e.ts'
  }
});

Writing Tests

Cypress tests are organized in the cypress/e2e folder and use .ts extensions for TypeScript. Below is a basic test example:

// cypress/e2e/example.spec.ts

describe('Example Test Suite', () => {
  it('Should load the homepage', () => {
    cy.visit('/');
    cy.contains('Welcome').should('be.visible');
  });
});

Custom Commands

Add reusable custom commands in cypress/support/commands.ts. These commands help organize and reuse code, such as logging in or setting up user sessions.

Example Custom Command

// cypress/support/commands.ts

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.request('POST', '/login', { username, password });
});

Remember to declare the command type in cypress/support/index.ts if needed.

Reporting

This framework supports multiple reporting formats to visualize test results:

	1.	JUnit: Useful for CI/CD integration.

npx cypress run --reporter junit --reporter-options "mochaFile=results/test-results.xml"


	2.	Mochawesome: A visually rich HTML report.
	•	Install Mochawesome:

npm install --save-dev mochawesome


	•	Run with Mochawesome:

npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/reports"



Best Practices

	•	Organize Tests Using Page Objects: Keep locators and actions organized in page objects for maintainability.
	•	Use Custom Commands: Reuse code for repetitive actions like login or navigation.
	•	Environment Variables: Use Cypress’s env feature to store credentials and sensitive data.
	•	CI/CD Integration: Use JUnit or other CI-compatible reporters for visibility in CI tools.

Contributing

Contributions are welcome! Please follow these steps to contribute:

	1.	Fork the repository.
	2.	Create a feature branch (git checkout -b feature/YourFeature).
	3.	Commit your changes (git commit -m 'Add YourFeature').
	4.	Push to the branch (git push origin feature/YourFeature).
	5.	Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more information.

With this Cypress automation framework, you’ll have a scalable and maintainable structure to support end-to-end testing with TypeScript. Happy testing!
