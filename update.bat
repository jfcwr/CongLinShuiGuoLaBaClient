@echo off
pushd "%~dp0"

cd %~d0

upa tools git@github.com:jfcwr/clientTools.git
python tools/update_game.py

popd

if "%1"=="" pause