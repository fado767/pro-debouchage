@echo off
setlocal EnableExtensions EnableDelayedExpansion
rem ==========================================================================
rem  save-to-cloud.cmd  -  Back up the Pro Debouchage project files to GitHub.
rem
rem  Just double-click this file. It will ONLY say "SAVED" when a new snapshot
rem  really reached GitHub. If nothing needed saving it says "UP TO DATE"
rem  instead, and if anything goes wrong it shows a big "NOT SAVED" message
rem  that says what happened and what to do. It never pretends a failed or
rem  empty backup saved something.
rem
rem  What it does, in plain steps:
rem    1. git add    - gather every changed file
rem    2. git commit - save a snapshot named "backup <date> <time>"
rem    3. git push   - upload it to GitHub
rem    4. git fetch  - then PROVE GitHub matches this computer before saying OK
rem
rem  If git left a busy ".git\index.lock" file behind, it waits and retries a
rem  few times, and only as a last resort removes that stale lock.
rem ==========================================================================

cd /d "%~dp0"

set "EXITCODE=0"
set "REASON=Unknown error."
set "GITLOG=%TEMP%\save-to-cloud-last-git.log"
set "LOCKFILE=.git\index.lock"
set "MAXTRIES=3"
set "REMOTEREF=origin/main"

echo.
echo ============================================
echo   Saving your Pro Debouchage files to GitHub...
echo ============================================
echo.

rem -- Remember where we are now, so we can show what got added at the end. --
set "PREV_HEAD="
for /f "delims=" %%H in ('git rev-parse --short HEAD 2^>nul') do set "PREV_HEAD=%%H"

rem -- Step 1 of 4: stage every change. --
echo [1/4] Gathering changed files...
set "GITCMD=git add -A"
call :git_with_retry
if not "!GIT_RC!"=="0" (
    set "REASON=Could not gather your files. The 'git add' step failed."
    goto :failed
)

rem -- Step 2 of 4: commit. "nothing to commit" is normal, not a failure. --
echo [2/4] Saving a snapshot...
set "NOTHING=0"
set "GITCMD=git commit -m "backup %date% %time%""
call :git_with_retry
if not "!GIT_RC!"=="0" (
    findstr /i /c:"nothing to commit" "%GITLOG%" >nul
    if not errorlevel 1 (
        set "NOTHING=1"
        echo     Nothing new to save
    ) else (
        set "REASON=Could not save a snapshot. The 'git commit' step failed."
        goto :failed
    )
)

rem -- Where are we now (the snapshot we are about to upload)? --
set "NEW_HEAD="
for /f "delims=" %%H in ('git rev-parse --short HEAD 2^>nul') do set "NEW_HEAD=%%H"

rem -- Step 3 of 4: upload to GitHub. --
echo [3/4] Uploading to GitHub...
set "GITCMD=git push"
call :git_with_retry
if not "!GIT_RC!"=="0" (
    set "REASON=Could not upload to GitHub. The 'git push' step failed. Check your internet connection."
    goto :failed
)

rem -- Step 4 of 4: PROVE it. Fetch, then compare this computer to GitHub. --
echo [4/4] Double-checking that GitHub really has everything...
git fetch origin > "%GITLOG%" 2>&1
set "FETCH_RC=!errorlevel!"
type "%GITLOG%"
if not "!FETCH_RC!"=="0" (
    set "REASON=Could not check GitHub after uploading. The 'git fetch' step failed, so the backup is NOT confirmed."
    goto :failed
)

set "LOCAL_ID="
set "REMOTE_ID="
for /f "delims=" %%H in ('git rev-parse HEAD 2^>nul') do set "LOCAL_ID=%%H"
for /f "delims=" %%H in ('git rev-parse %REMOTEREF% 2^>nul') do set "REMOTE_ID=%%H"

if "!REMOTE_ID!"=="" (
    set "REASON=Could not read GitHub's latest position, so the backup is NOT confirmed."
    goto :failed
)
if not "!LOCAL_ID!"=="!REMOTE_ID!" (
    set "REASON=GitHub does not match this computer yet, so the upload did not fully go through."
    goto :failed
)

rem -- Both outcomes below are verified against GitHub by step [4/4] above.
rem    Pick the banner by what actually happened this run:
rem      a real new commit -> SAVED ; nothing to commit -> UP TO DATE. --
if "!NOTHING!"=="1" goto :uptodate
goto :saved


rem ==========================================================================
rem  SUBROUTINE :git_with_retry
rem  Runs the command in GITCMD. If git fails because of a leftover
rem  ".git\index.lock" file, it waits 3 seconds and retries, up to MAXTRIES
rem  attempts. Only if every attempt still hits the lock does it remove the
rem  stale lock file and try one final time. The lock is NEVER removed first.
rem  Leaves the final exit code in GIT_RC.
rem ==========================================================================
:git_with_retry
set /a _try=1
:gwr_run
!GITCMD! > "%GITLOG%" 2>&1
set "GIT_RC=!errorlevel!"
type "%GITLOG%"
if "!GIT_RC!"=="0" exit /b 0
rem -- Did it fail on a leftover lock file? If not, hand the error back. --
findstr /i /c:"index.lock" "%GITLOG%" >nul
if errorlevel 1 exit /b !GIT_RC!
rem -- It is a lock problem. Wait and retry while attempts remain. --
if !_try! LSS %MAXTRIES% (
    set /a _try+=1
    echo     Lock detected, retrying ^(!_try!/%MAXTRIES%^)
    ping -n 4 127.0.0.1 >nul
    goto :gwr_run
)
rem -- Every attempt hit the lock. Last resort: remove it and try once more. --
if exist "%LOCKFILE%" (
    del /f /q "%LOCKFILE%" >nul 2>&1
    echo     Removed a leftover lock file
)
!GITCMD! > "%GITLOG%" 2>&1
set "GIT_RC=!errorlevel!"
type "%GITLOG%"
exit /b !GIT_RC!


rem ==========================================================================
:failed
echo.
echo.
echo  ############################################################
echo  ##                                                        ##
echo  ##                     NOT SAVED                          ##
echo  ##                                                        ##
echo  ############################################################
echo.
echo   Your files did NOT reach GitHub.
echo.
echo   What went wrong:
echo     !REASON!
echo.
echo   What to do next:
echo     1. Read the git messages above for the exact error.
echo     2. Check your internet connection.
echo     3. Run this file again by double-clicking it.
echo     4. If it keeps failing, send a screenshot of this window.
echo.
set "EXITCODE=1"
goto :end


rem ==========================================================================
rem  A real new commit was created this run and verified on GitHub.
:saved
echo.
echo  ############################################################
echo  ##                                                        ##
echo  ##                       SAVED                            ##
echo  ##                                                        ##
echo  ############################################################
echo.
echo   Your files are safely on GitHub.
echo.
echo   New snapshot saved: !NEW_HEAD!
if not "!PREV_HEAD!"=="" echo   Uploaded range: !PREV_HEAD!..!NEW_HEAD!
echo.
set "EXITCODE=0"
goto :end


rem ==========================================================================
rem  Nothing needed saving this run and GitHub already matches this computer.
rem  This is NOT a new save, so it must never print the word SAVED.
:uptodate
echo.
echo  ############################################################
echo  ##                                                        ##
echo  ##                     UP TO DATE                         ##
echo  ##                                                        ##
echo  ############################################################
echo.
echo   No new changes to save this time.
echo   The latest snapshot on GitHub is: !NEW_HEAD!
echo.
set "EXITCODE=0"
goto :end


rem ==========================================================================
:end
rem -- Carry the exit code out through FINALCODE, then drop delayed expansion
rem    (endlocal) so a "!" anywhere in the command line can never mangle the
rem    pause check below. --
endlocal & set "FINALCODE=%EXITCODE%"


rem -- Keep the window open ONLY when double-clicked; never hang when run
rem    automatically. A double-click launches this via
rem    "cmd /c ...save-to-cloud.cmd..." so %cmdcmdline% contains the script
rem    name; a console / CI / agent run does not, so it won't pause. An
rem    automated caller can also set NO_PAUSE=1 to force no pause. --
if defined NO_PAUSE goto :finish
echo %cmdcmdline% | find /i "%~nx0" >nul && pause
:finish
exit /b %FINALCODE%
