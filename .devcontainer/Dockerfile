# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /workspace

# Copy only package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Command to start the application
CMD ["npm", "run", "serve"]
