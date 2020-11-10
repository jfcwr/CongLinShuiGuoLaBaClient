@echo off
pushd "%~dp0"

cd %~d0

set dst=release
set BRANCH=xiyouji

upa tools git@github.com:jfcwr/clientTools.git
python tools\publish_game.py -b %BRANCH%  -lb guest -dirname "xiyouji" -curmain "XYJMain" -targetmain "XYJMain"

popd

if "%1"=="" pause