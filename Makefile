.DEFAULT_GOAL := build
.PHONY: build test
.SILENT:

build:
	@gulp
	@rm -rf ~/Workspace/deployer/application/public/build/*
	@cp -r build ~/Workspace/deployer/application/public

test:
	npm run test

lint:
	npm run lint
