.PHONY: bootstrap bundle bundle-dev lint run-bundle

bin = ./node_modules/.bin
bastion = BASTION_LOG_LEVEL=silly $(bin)/bastion-dev

bootstrap:
	npm install

bundle:
	$(bastion) bundle

bundle-dev:
	$(bastion) bundle --dev

lint:
	$(bastion) lint

run-bundle:
	node ./dist/bundle.js
