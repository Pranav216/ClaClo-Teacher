FROM node:20

RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json /usr/src/app/

# Install dependencies
RUN npm install
RUN yarn install

# Copy all files
COPY . /usr/src/app/

# Expose port 3000
EXPOSE 3000

# Run app
CMD [ "npm", "start" ]
