# Internlink

Internlink is a web application built with Next.js, React, and Sequelize. It uses PostgreSQL as its database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a Windows machine. This guide is tailored for Windows users.
- You have access to the PostgreSQL database.

## Installing Internlink

To install Internlink, follow these steps:

1. Clone the repository: `git clone https://github.com/FutureSpace-Kenya/InternLink.git`
2. Navigate to the project directory: `cd internlink`
3. Install the dependencies: `npm install`

## Configuring the Database

1. Ensure that the environment variables in your `.env` file match the configuration in your `config/config.json` file.
2. Run migrations using Sequelize CLI: `sequelize db:migrate`

## Using Internlink

To use Internlink, follow these steps:

1. Start the development server: `npm run dev`
2. Open your web browser and navigate to `http://localhost:3000`

## Contributing to Internlink

To contribute to Internlink, follow these steps:
 
1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.
