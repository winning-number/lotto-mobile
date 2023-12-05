PLATFORM_ANDROID=android
PLATFORM_IOS=ios
PLATFORMS=-android -ios

# Global colors for output
BLUE=\033[0;34m
BLACK=\033[0;30m
RED=\033[0;31m
CYAN=\033[0;36m
PURPLE=\033[0;35m
YELLOW=\033[0;33m
GREEN=\033[0;32m
# No Color
NC=\033[0m

## -- CI context --

## Run the ci rules
## call [ci-tool, dep, lint, tests, build]
.PHONY: all
all: dep lint tests build

## Install dependencies
.PHONY: dep
dep:
	npm ci

## Update dependencies
.PHONY: depup
depup:
	npm update

## Run linter on the full code base
.PHONY: lint
lint:

## Run the tests suite
## call [utest, bench]
.PHONY: tests
tests: utest bench

## Run unit tests and generate coverage file
.PHONY: utest
utest:

## Run benchmarks
.PHONY: bench
bench:

## run the ionic project in the browser
.PHONY: serve
serve:
	ionic serve

## Run the build for all targets (android and ios)
.PHONY: build
build: $(shell echo ${PLATFORMS} | sed -e 's/-/build./g')
	@

## Run the build for the specific command with 'build.<target_name>'
## <target_name> should match with the specific folder name inside the cmd folder
## check the build rule to have the specific behavior about the build
.PHONY: build.%
build.%:
	$(eval TARGET_NAME := $*)
	@npx cap build ${TARGET_NAME}

## Sync the project list for the native platform(s)
.PHONY: update
update: $(shell echo ${PLATFORMS} | sed -e 's/-/build./g') depup
	@

## Sync the project for the native platform
.PHONY: update.%
update.%:
	$(eval TARGET_NAME := $*)
	npx cap sync ${TARGET_NAME}

## -- Other commands --

## Cleanup the temporary resources
.PHONY: clean
clean:
	rm -rf node_modules
	rm -rf dist
	rm -rf public

## Reset the project to the initial state
## call [clean]
.PHONY: fclean
fclean: clean
	rm -rf ${PLATFORM_ANDROID}
	rm -rf ${PLATFORM_IOS}

# Private rules

## List available rules to this project
.PHONY: help
help:
# script awk behavior:
#	skip the .Phony rules
#	skip the --private rules
#	detect and record rules
#	detect and record the comment's rules and section delimeter starting by '##' (multi line support)
#	inpired by the topic https://gist.github.com/prwhite/8168133?permalink_comment_id=2749866#gistcomment-2749866
	@for file in $(MAKEFILE_LIST); do \
		printf "\nUsage of $$file:\n\n"; \
		awk -v color="true" 'function print_help(){ \
				if (helpCommand && helpMessage) { \
					if (color == "true") { \
						printf "${CYAN}%-30s${NC}${CYAN}%s${NC}\n", helpCommand, helpMessage; \
						color = "false"; \
					} else { \
						printf "${GREEN}%-30s${NC}${GREEN}%s${NC}\n", helpCommand, helpMessage; \
						color = "true"; \
					} \
				} else if (helpMessage) { \
					printf "${CYAN}\n%-30s${NC}%s\n\n", "", helpMessage; \
				} else if (helpCommand) { \
					printf "${CYAN}%-30s${NC}%s\n", helpCommand, "missing rule description"; \
				} else { \
					return; \
				} \
				helpCommand = ""; \
				helpMessage = ""; \
			} \
			{ \
				if ($$0 ~ /^.PHONY: .*$$/) { \
					; \
				} else if ($$0 ~ /^\-\-[a-zA-Z\-\_0-9.]+:/) { \
					; \
				} else if ($$0 ~ /^[a-zA-Z\-\_0-9.]+:/) { \
					helpCommand = substr($$0, 0, index($$0, ":")); \
					print_help(); \
				} else if ($$0 ~ /^[a-zA-Z\-\_0-9.]+.\%:/) { \
					helpCommand = substr($$0, 0, index($$0, ":")); \
					helpCommand = sprintf("%s \(dynamic rule\)", helpCommand); \
					print_help(); \
				} else if ($$0 ~ /^##/) { \
					if (helpMessage) { \
						helpMessage = sprintf("%s\n%-30s%s", helpMessage, "", substr($$0, 4)); \
					} else { \
						helpMessage = substr($$0, 4); \
					} \
				} else { \
					print_help(); \
				} \
			}' \
			$$file; \
	done