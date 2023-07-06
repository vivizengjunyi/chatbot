#!/bin/bash

docker build . -t gcr.io/luna-199819/luna-client-amd64:0.2 && docker push gcr.io/luna-199819/luna-client-amd64:0.2
