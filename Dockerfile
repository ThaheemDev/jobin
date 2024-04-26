# 1. Build app
FROM node:20.11.0
#FROM node:current-slim
# Set the working directory
WORKDIR /usr/src/app

# ARG: with this we can tell Docker, that we will use the NPM_TOKEN build argument
ARG NPM_TOKEN

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY src/.npmrc ./
# COPY package.json ./

# RUN npm ci --only=production
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# webpack
ENV NODE_ENV development
# ENV DB_URL

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the command inside your image filesystem.
# Build the application for production!
RUN npm run compile

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 4000

# Run the specified command within the container. ##
#CMD [ "npm", "run", "start" ]
# In order to do proper signal handling in node, you'll want to not run as a child of npm. When you npm run foo, your node process is started as a child of npm, but npm won't handle signals like a normal process manager might. When we send the SIGTERM signal, we send it to every process. If you're executing your app with npm run, that means npm also receives the signals. What it decides to do with them afterwards is up to npm, and in the case of SIGTERM on Linux, that is to immediately kill any children (including your app) and to exit with a code of 143.
CMD [ "node", "dist/index" ]
