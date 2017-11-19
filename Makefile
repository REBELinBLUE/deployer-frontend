.DEFAULT_GOAL := help
.PHONY: build test coverage
.SILENT:

RED    := $(shell tput -Txterm setaf 1)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

## Build the bundle for development
dev: verify
	@npm run dev
	@$(MAKE) install

## Build the bundle for production
build: verify
	@npm run production
	@$(MAKE) install

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

install:
	@rm -rf $(DEPLOYER_DIR)/public/mix-manifest.json
	@rm -rf $(DEPLOYER_DIR)/public/js/
	@rm -rf $(DEPLOYER_DIR)/public/css/
	@rm -rf $(DEPLOYER_DIR)/public/fonts/
	@cp -r build/* $(DEPLOYER_DIR)/public/

ifndef DEPLOYER_DIR
verify:
	@echo "${RED}DEPLOYER_DIR is not set, make sure you define the variable first${RESET}"
	@echo ""
	@exit -1
else
verify:

endif
