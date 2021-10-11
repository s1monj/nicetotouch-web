#!/usr/bin/env bash
aws s3 cp index.html s3://nicetotouch.com --website-redirect 'https://nicetotouch.eth.link' --profile wb-client-deploy
aws s3 cp index.html s3://www.nicetotouch.com --website-redirect 'https://nicetotouch.eth.link' --profile wb-client-deploy
