#!/bin/bash

git_pull=`git pull`
node_modules='./node_modules'
yarn_install=`yarn > y.txt`
dele_folder=`rm -rf $node_modules`

echo "---------Start deploy----------------------------"

echo $git_pull

if [ ! -d "$node_modules" ], then
    echo $yarn_install
else
    echo $dele_folder
    echo $yarn_install
fi

echo "---------End deploy----------------------------"
