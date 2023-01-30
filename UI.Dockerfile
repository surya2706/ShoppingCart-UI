FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["yarn", "run", "dev", "--host"]
