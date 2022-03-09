TAG=ghpages

# Build the docker image
image:
	docker build -t ${TAG} .

# Produce a bash shell
shell:
	docker run --rm -it \
		-p 4000:4000 \
		-p 35729:35729 \
		-u `id -u`:`id -g` \
		-v `pwd`:/src/site \
		${TAG} \
		/bin/sh

server:
	docker run --rm -it \
		-p 4000:4000 \
		-p 35729:35729 \
		-u `id -u`:`id -g` \
		-v `pwd`:/src/site \
		${TAG}
