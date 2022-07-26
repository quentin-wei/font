#!/bin/bash

#判断文件是否存在
if [ ! -f "package.json.md5" ]; then
  echo "文件不存在,需要重新安装依赖"
  # npm install
  #把文件的md5值写入到目标文件中
  md5sum package.json >package.json.md5
else
  echo "文件已经存在"
fi

#检查md5sum是否有变更
if (md5sum -c package.json.md5); then
  echo "md5值一致"
else
  echo "md5值不一致, 需要重新安装依赖"
  # npm install
  md5sum package.json >package.json.md5
fi

