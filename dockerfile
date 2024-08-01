FROM node:alpine

WORKDIR /Users/prajaktahali/source/shopping-cart

COPY . /Users/prajaktahali/source/shopping-cart

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng","serve", "--host", "0.0.0.0"]
