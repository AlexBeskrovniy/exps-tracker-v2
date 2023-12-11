FROM node:18
WORKDIR /app
COPY . /app
RUN RUN npm ci
EXPOSE 8080
CMD ["npm", "start"]