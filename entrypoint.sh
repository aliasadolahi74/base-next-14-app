#!/bin/sh
# Extract NILVA_APP_ env vars to runtime-config.json
printenv | grep '^NILVA_APP_' | awk -F= '{printf "\"%s\": \"%s\",\n", $1, $2}' | sed '$ s/,$//' | sed '1s/^/{\n/' | sed '$s/$/\n}/' > /app/runtime-config.json

# Debug: print the generated file
cat /app/runtime-config.json

# Start Next.js
exec yarn start
