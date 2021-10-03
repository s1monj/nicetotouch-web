#!/usr/bin/env bash

cd nicetotouch.com
aws s3 sync . s3://nicetotouch.com --delete --profile wb-client-deploy
