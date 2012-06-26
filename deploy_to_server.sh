#!/usr/bin/env bash

PROJ="HaiFengCRM"
rm -rf /tmp/$PROJ
cd ..
cp -rf $PROJ /tmp/$PROJ
echo "copy to tmp"
cd /tmp/$PROJ
pwd
rm -rf .git
echo "remove git folder"
cd ..
pwd
echo "begin to copy..."
scp -r HaiFengCRM root@hyphen100.com:/tmp 
ssh root@hyphen100.com /var/www/html/deploy.sh
echo "remove tmp"
rm -rf /tmp/$PROJ
echo "finish"
