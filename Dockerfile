#FROM nodesource/precise:0.10.30

FROM ulin/dockermiicapp:latest

ADD package.json package.json
RUN npm install
ADD . . 

EXPOSE 8124
CMD [ "npm", "start" ]
