@echo off
pushd "%~dp0"

cd %~d0

set dst=release
set BRANCH=conglinshuiguo

upa tools git@github.com:jfcwr/clientTools.git
python tools\publish_game.py -b %BRANCH%  -lb baomahui -dirname "conglinshuiguo" -curmain "CLSGMain" -targetmain "CLSGMain"

popd

if "%1"=="" pause