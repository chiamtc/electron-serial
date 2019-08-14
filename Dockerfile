#docker file
FROM node:8.11.4-alpine

RUN apk update \
    && apk add --virtual build-dependencies \
        build-base \
        gcc \
        wget \
        git \
        openssh \
        libpng-dev\
    && apk add \
        bash


RUN npm i npm@latest -g
#run bash to update build number
RUN mkdir -p /usr/source
RUN mkdir -p /usr/source/src

#copying
COPY . /usr/source
WORKDIR /usr/source
RUN ls -a
RUN cat package.json
#complie code to stage folder
RUN npm install
RUN . buildNumber.sh
RUN npm run build-stage
RUN rm -rf src node_modules

#RUN mkdir -p /usr/core
#RUN mkdir -p /usr/core/stage
#RUN mkdir -p /usr/core/ssl

#copy codes from stage to image's stage
#COPY /usr/source/stage /usr/core/stage
#COPY /usr/source/sslcert /usr/core/sslcert
#COPY /usr/source/package.json /usr/core


#WORKDIR /usr/source

#installing expres js as server
RUN npm install --production
RUN ls stage
COPY index.js /usr/core

EXPOSE 80
EXPOSE 443
EXPOSE 8443


CMD [ "node","index.js"]
