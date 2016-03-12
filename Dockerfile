# This image will be based on the official nodejs dockerimage
FROM node:latest

# Set the directory commands will run from
WORKDIR /var/www/app

# Put all our code inside that directory that lives in the container
ADD . /var/www/app

# Install depenedencies
RUN \
    npm install

# Tell Docker we are going to use port 3000
EXPOSE 3000

# The command to run our app when the container is run
CMD ["npm", "start"]
