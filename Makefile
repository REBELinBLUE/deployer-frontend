.DEFAULT_GOAL := help
.PHONY: build test
.SILENT:

YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

## Build the bundle
build:
	@npm run dev
	@rm -rf ~/Workspace/deployer/application/public/mix-manifest.json
	@rm -rf ~/Workspace/deployer/application/public/js/
	@rm -rf ~/Workspace/deployer/application/public/css/
	@rm -rf ~/Workspace/deployer/application/public/fonts/
	@cp -r build/* ~/Workspace/deployer/application/public/

## Run tests
test:
	npm run test

## Run eslint
lint:
	npm run lint

## Generate code coverage
coverage:
	npm run test:coverage

## Prints this help
help:
	@echo "\nUsage: make ${YELLOW}<target>${RESET}\n\nThe following targets are available:\n";
	@awk -v skip=1 \
		'/^##/ { sub(/^[#[:blank:]]*/, "", $$0); doc_h=$$0; doc=""; skip=0; next } \
		 skip  { next } \
		 /^#/  { doc=doc "\n" substr($$0, 2); next } \
		 /:/   { sub(/:.*/, "", $$0); printf "\033[34m%-30s\033[0m\033[1m%s\033[0m %s\n", $$0, doc_h, doc; skip=1 }' \
		$(MAKEFILE_LIST)
