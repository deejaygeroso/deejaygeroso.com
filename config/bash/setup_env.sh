#!/bin/bash

# Allow gitlab-ci.yml have access to gitlab environment variables.
echo $@

# Store gitlab environment variables to .env file.
# The .env file will then be copied over to application container.
echo ENV=$ENV >> .env
echo PORT=$PORT >> .env
