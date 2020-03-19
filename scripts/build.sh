#!/usr/bin/env bash

environment=${1:-development}

rm -rf dist

webpack \
    --mode=$environment \
    $(if [ $environment = 'production' ]; then --optimize-minimize; fi)
