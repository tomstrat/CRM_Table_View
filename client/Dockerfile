FROM node:16
RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]