FROM node:13
COPY ./ /root/pvz/pvz-workflow
WORKDIR /root/pvz/pvz-workflow
RUN npm install -g typescript
RUN npm install && \
    npm run build
EXPOSE 3000
CMD npm run