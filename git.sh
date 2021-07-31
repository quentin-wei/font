#!/bin/sh
subMsg=$1

if branch=$(git symbolic-ref --short -q HEAD)
then
  echo $branch
else
  echo not on any branch
  exit
fi
 
if [ -n "$branch" ]; then
  git plo $branch
  sleep 1
  git add .
  sleep 1
  git cm $subMsg
  sleep 1
  git pho $branch
fi


