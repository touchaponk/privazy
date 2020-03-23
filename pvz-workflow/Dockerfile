FROM node:13
COPY ./ /root/pvz/pvz-workflow
WORKDIR /root/pvz/pvz-workflow
ENV WEBSITES_PORT=3000 \
    log=debug \
    SERVICE_NAME=workflow-api \
    DB_HOST=localhost \
    DB_USER=admin \
    DB_PASSWORD=password \
    DB_DATABASE=privazy
RUN npm install -g typescript
RUN npm install && \
    npm run build
EXPOSE 3000
CMD npm start