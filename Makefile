.PHONY: bootstrap bundle bundle-dev lint run-bundle

# I'm referring to the local bastion version, but you can install it globally too
# bastion-dev just compiles the source at run-time, as a consumer you'll want the bastion script
# This is pre-compiled and fast
bin = ./node_modules/.bin

# You can set the log levels of winston with this environment variable
# Generally verbose will be enough, you won't really get logs without this
# Other than error and warning
bastion = BASTION_LOG_LEVEL=silly $(bin)/bastion-dev

bootstrap:
	# Fetch the dependencies
	# Bastion has a lot of dependencies since it's setting up the JavaScript
	# tooling soup for you.
	npm install

bundle:
	# Bundles src/index.js into dist/bundle.js
	# Essentially a production build.
	$(bastion) bundle

bundle-dev:
	# Creates a live reloading server for src/index.js
	# Open localhost:8080 and it'll live reload dist/bundle.js
	# All of these paths are just assumed defaults, they're easy to change
	$(bastion) bundle --dev

lint:
	# Lint everything with standard
	# You can configure the paths here too
	$(bastion) lint
