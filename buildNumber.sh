DATE=`date '+%Y.%m.%d%H'`
SHA=`git rev-parse --short HEAD`
VERSION=`git describe --abbrev=0`
echo $DATE
echo $SHA
echo $VERSION

printf 'export const buildDate = "'"$DATE"'"\nexport const version = "'"$VERSION"'"\nexport const SHA = "'"$SHA"'"' > "src/version.js"
