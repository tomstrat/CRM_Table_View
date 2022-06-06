FROM node:16.13.2
RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "server"]