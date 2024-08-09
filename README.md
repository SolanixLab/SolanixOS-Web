# SolanixOS Web

![Linting](https://github.com/SolanixLab/SolanixOS-Web/actions/workflows/lint.yml/badge.svg) ![Testing](https://github.com/SolanixLab/SolanixOS-Web/actions/workflows/test.yml/badge.svg) ![Building](https://github.com/SolanixLab/SolanixOS-Web/actions/workflows/build.yml/badge.svg)

SolanixOS is a web-based operating system designed for managing basic embedded services, home lab environments, and domotics systems.

## Project Setup & Dev

To get started with SolanixOS Web, follow these steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Compile and Hot-Reload for Development**
   ```bash
   npm run serve
   ```

3. **Compile and Minify for Production**
   ```bash
   npm run build
   ```

4. **Lint and Fix Files**
   ```bash
   npm run lint
   ```

5. **Customize Configuration**
   For additional configuration options, refer to the [Configuration Reference](https://cli.vuejs.org/config/).

## Docker Setup

To deploy SolanixOS Web using Docker, follow these instructions:

1. **Create Environment File**

   Copy the sample environment file to create your own configuration:
   ```bash
   cp .env.sample .env
   ```
   Edit the `.env` file to set your environment variables as needed.

2. **Build and Start Containers**

   Use Docker Compose to build and start your containers:
   ```bash
   docker-compose up --build
   ```

3. **Stop and Remove Containers**

   To stop and remove the containers, use:
   ```bash
   docker-compose down
   ```

4. **Check Docker Compose Logs**

   To view the logs for your Docker containers, use:
   ```bash
   docker-compose logs
   ```

5. **Accessing the Application**

   After starting the containers, you can access the SolanixOS Web application through your browser at `http://localhost:YOUR_PORT`, where `YOUR_PORT` is defined in your `.env` file or `docker-compose.yml`.