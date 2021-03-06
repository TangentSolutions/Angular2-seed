# This image will be based on the official nodejs dockerimage
FROM node:latest
MAINTAINER Kangwa Bwali <kangwa@tangentsolutions.co.za>

# create the app directory
RUN mkdir -p /var/www/app

# Set the directory commands will run from
WORKDIR /var/www/app

# Put all our code inside that directory that lives in the container
ADD package.json /var/www/app

# Install depenedencies
RUN npm install

# ADD app /var/www/app/app
# ADD index.html /var/www/app
ADD . /var/www/app

# Tell Docker we are going to use port 8000
EXPOSE 8000

# The command to run our app when the container is run
CMD ["npm", "start"]
