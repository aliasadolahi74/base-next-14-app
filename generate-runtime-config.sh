#!/bin/sh

echo "{" > ./public/runtime-config.json

printenv | grep "^NEXT_PUBLIC_" | while IFS='=' read -r key value; do
  echo "  \"${key}\": \"${value}\"," >> ./public/runtime-config.json
done

sed -i 's/,$//' ./public/runtime-config.json
echo "}" >> ./public/runtime-config.json

echo "✅ Injected envs into /public/runtime-config.json:"
cat ./public/runtime-config.json
