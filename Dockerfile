FROM node:18-alpine

WORKDIR /home/app

COPY . ./

RUN npm i

EXPOSE 5555

CMD ["npm", "run", "dev"]