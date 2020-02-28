FROM node:latest
COPY . /usr/local/bussIT
WORKDIR /usr/local/bussIT
RUN npm install --no-optional
CMD ["npm", "start"]
