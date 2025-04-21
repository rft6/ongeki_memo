FROM node:23-alpine

ENV TZ Asia/Tokyo

WORKDIR /app

RUN apk --update add --no-cache bash git 

RUN npm update

COPY ./app /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]