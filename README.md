# Cypress Automation Framework with TypeScript

A robust end-to-end testing framework built with Cypress 13.15 and TypeScript, designed for scalable, reliable, and maintainable testing of web applications. This framework is suited for CI/CD workflows and provides a modular test structure with strong type safety.

## Table of Contents

	•	Features
	•	Getting Started
	•	Installation
	•	Project Structure
	•	Running Tests
	•	Configuration
	•	Writing Tests
	•	Custom Commands
	•	Reporting
	•	Best Practices
	•	License

## Features

	•	TypeScript Support: Strong typing and enhanced tooling.
	•	Cypress 13.15: Latest Cypress features for reliable testing.
	•	Modular Test Structure: Organized for maintainability and scalability.
	•	CI/CD Ready: Seamlessly integrates with continuous integration workflows.

## Getting Started

This framework is designed for web application end-to-end testing, with a focus on reusability, consistency, and efficiency.

### Prerequisites

	•	Node.js (version >= 14.x.x)
	•	npm (or yarn)

### Installation

	1.	Clone the Repository and navigate to the project directory:

git clone [repository-url]
cd [repository-directory]


	2.	Install dependencies:

npm install


	3.	Open Cypress to generate initial configuration files:

npx cypress open



### Project Structure

The project is organized as follows:

.
├── cypress
│   ├── e2e                # Test files
│   ├── fixtures           # Test data (JSON files)
│   ├── support            # Custom commands and setup files
│   │   ├── commands.ts    # Custom commands
│   │   └── e2e.ts         # Test setup and hooks
├── cypress.config.ts      # Cypress configuration in TypeScript
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation

## Running Tests

Run All Tests (Headless Mode)

To execute all tests in headless mode:

npx cypress run

Open Cypress Test Runner (Interactive Mode)

To open the interactive Cypress Test Runner:

npx cypress open

## Configuration

The main configuration file is cypress.config.ts, where you can adjust settings like baseUrl, environment variables, and test options.

Example Configuration in cypress.config.ts

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set to your application URL
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // Custom event listeners or plugins
    },
  },
});

## Writing Tests

Create test files in cypress/e2e with .ts extensions for TypeScript. Here’s a simple test example:

// cypress/e2e/example.spec.ts

describe('Example Test Suite', () => {
  it('Should load the home page', () => {
    cy.visit('/');
    cy.contains('Welcome').should('be.visible');
  });
});

## Custom Commands

Add reusable custom commands in cypress/support/commands.ts. This is useful for common actions like logging in or setting up test data.

Example Custom Command

// cypress/support/commands.ts

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.request('POST', '/login', { username, password });
});

Don’t forget to add custom command types in cypress/support/index.ts if needed.

## Reporting

The framework supports multiple reporting formats to visualize test results:

	1.	JUnit: Useful for CI/CD integration.

npx cypress run --reporter junit --reporter-options "mochaFile=results/test-output.xml"


	2.	Mochawesome: Generates visually rich HTML reports.
	•	Install Mochawesome:

npm install --save-dev mochawesome


	•	Run with Mochawesome:

npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/reports"



Best Practices

	•	Use Page Objects: Keep locators and actions organized in page objects for reusability.
	•	Environment Variables: Store sensitive data securely and avoid hardcoding in tests.
	•	Custom Commands: Simplify repetitive tasks like login or data setup.
	•	CI/CD Integration: Use JUnit or similar reporters for test visibility in pipelines.

License

This project is licensed under the MIT License. See the LICENSE file for more information.

With this Cypress automation framework, you’ll have a reliable, scalable setup to support end-to-end testing with TypeScript. Happy testing! 🎉
