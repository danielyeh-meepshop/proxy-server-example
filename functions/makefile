# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
all: help
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

start: ## start local funtions & pubsub emulator
	./bin/start

end: ## end local functions & pubsub emulator
	./bin/end

trigger: ## trigger function event
	curl -s -X POST 'http://localhost:8043/v1/projects/instant-matter-785/topics/reverse-proxy-crawler-local:publish' \
        -H 'Content-Type: application/json' \
    --data '{"messages":[{"data":"eyJncm91cEJ1eUV2ZW50SWQiOiAiYzc1OTk0YjYtYzhkYS00NmQ0LTgxZDgtM2Q4YTNiMGIyNzdkIiwgImF1dGhvcml6YXRpb24iOiAiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkRzl5WlVsa0lqb2laR0k0WWpZMU9UTXRNVGsyT1MwME0yUmtMVGd4TVdJdE1EaGpOV0V6Wm1aaE5EQm1JaXdpZEhsd1pTSTZJbTFsY21Ob1lXNTBJaXdpZFhObGNrbGtJam9pWmpJM01tWXpZVGN0WlRkbFl5MDBOVEZsTFRnNE9UTXRNR1JpWlRGbFltRmtPVFk0SWl3aWFXRjBJam94TmpjeU9UZzBNakl4TENKbGVIQWlPakUyTnpNd056QTJNakY5LkNuX01yM2cyT1o0ZjQ5Y0ZFN2ZWRklTcXFOdENXWmdJbXBld3gtMU9kTWsifQ=="}]}'
