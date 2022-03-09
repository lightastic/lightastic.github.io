FROM alpine:latest

RUN apk update && apk add --no-cache git jekyll 

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8

WORKDIR /src/site

EXPOSE 4000 35729

CMD ["jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--livereload", "--livereload-port", "35729"]
