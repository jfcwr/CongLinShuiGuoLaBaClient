@echo off
pushd "%~dp0"

upa tools git@git.code4.in:ZhangYu/tools.git
python tools\resource.py -op 0


popd
if "%1"=="" pause
