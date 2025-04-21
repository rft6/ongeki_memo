FROM node:23-alpine

ENV TZ Asia/Tokyo

WORKDIR /app

RUN apk --update add --no-cache bash git 

RUN npm update

COPY ./app /app

RUN npm install

COPY ./nuxt_build/startup.sh /startup.sh

RUN chmod 744 /startup.sh

CMD ["/startup.sh"]