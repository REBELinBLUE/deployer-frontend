.DEFAULT_GOAL := build
.PHONY: build test
.SILENT:

build:
	@gulp
	@rm build/js/app.js build/js/ie.js build/js/vendor.js
	@rm build/css/app.css build/css/vendor.css
	@rm -rf ~/Workspace/deployer/application/public/build/*
	@cp -r build ~/Workspace/deployer/application/public

test:
	npm run test

lint:
	npm run lint
