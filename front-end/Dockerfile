# Use an official Node.js runtime as a parent image
FROM node:lts-alpine


# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# SASS solve
RUN apk add g++ make py3-pip

# Install dependencies
RUN npm install

# Copy the rest of the project files to /app
COPY . .

# Start the app
CMD [ "npm", "run", "dev" ]
