#!/bin/bash

docker run -d -p 3000:3000 --env-file website/.env bookstars/pages:latest 