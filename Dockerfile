FROM node:20-slim

COPY dist /papercup
COPY node_modules /papercup/node_modules
COPY public /papercup/public
COPY package.json /papercup/package.json
WORKDIR /papercup

EXPOSE 8000

CMD ["npm", "start"]