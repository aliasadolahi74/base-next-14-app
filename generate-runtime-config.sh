#!/bin/sh

echo "{" > ./runtime-config.json

printenv | grep "^NILVA_APP_" | while IFS='=' read -r key value; do
  echo "  \"${key}\": \"${value}\"," >> ./runtime-config.json
done

sed -i 's/,$//' ./runtime-config.json
echo "}" >> ./runtime-config.json

echo "✅ Injected envs into /runtime-config.json:"
cat ./runtime-config.json
