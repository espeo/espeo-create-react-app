#!/usr/bin/env bash

environment=${1:-development}

case $environment in

development | production)
  bash ./scripts/build.sh $environment && node -r dotenv/config dist/server.js dotenv_config_path=.env.$environment
  ;;

mocked)
  concurrently --kill-others 'yarn mocked-server' 'webpack --mode=none && node -r dotenv/config dist/server.js dotenv_config_path=.env.local'
  ;;

esac
