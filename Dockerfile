#FROM nodesource/precise:0.10.30

FROM ulin/nodesource-miicapp:latest

ADD package.json package.json
RUN npm install
ADD . . 
RUN mkdir miic_images

EXPOSE 8124:8124
CMD [ "npm", "start" ]
