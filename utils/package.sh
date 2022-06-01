cp package.json dist
cd dist
npm pack
mv *.tgz ../
rm package.json
cd ..