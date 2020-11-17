@echo off
pushd %~dp0

set BRANCH=conglinshuiguo

upa tools git@github.com:jfcwr/clientTools.git

upa ..\MahjongCommon git@github.com:jfcwr/MahjongCommon.git %BRANCH%

python tools/table_game.py

popd
if "%1"=="" pause

