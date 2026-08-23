@echo off
rem ==========================================================================
rem  first-time-setup.cmd  -  Run ONCE, by Fady, by double-click.
rem  Turns this folder into a git repo and connects it to a NEW, EMPTY,
rem  PRIVATE GitHub repo that Fady creates first at https://github.com/new
rem  (suggested name: pro-debouchage). After this, save-to-cloud.cmd works
rem  exactly like the taxi one. Sandboxed tools (Claude Code, Cowork) never
rem  run this, per AGENTS.md section 7.
rem ==========================================================================
cd /d "%~dp0"
if exist ".git" (
  echo This folder is already a git repo. Nothing to do. Use save-to-cloud.cmd.
  pause
  exit /b 0
)
set /p REMOTE=Paste the GitHub repo URL (example https://github.com/fado767/pro-debouchage.git): 
if "%REMOTE%"=="" ( echo No URL given. Stopped. & pause & exit /b 1 )
git init -b main
git add -A
git commit -m "first snapshot %date% %time%"
git remote add origin %REMOTE%
git push -u origin main
if errorlevel 1 (
  echo.
  echo  NOT CONNECTED. Check the URL and that the GitHub repo exists and is empty, then run again.
) else (
  echo.
  echo  DONE. From now on double-click save-to-cloud.cmd to back up.
)
pause
