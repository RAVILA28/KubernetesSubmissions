FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# Instalamos las dependencias
RUN npm install

COPY index.js ./

CMD ["npm", "start"]