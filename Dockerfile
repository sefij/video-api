FROM node:20

COPY src /papercup/src
COPY public /papercup/public
COPY package.json /papercup/package.json
COPY package-lock.json /papercup/package-lock.json
COPY tsconfig.json /papercup/tsconfig.json
COPY tsoa.json /papercup/tsoa.json
WORKDIR /papercup
RUN npm i
RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]