# Git Cheatsheet

Git tracks CHANGES to code, not the files themselves while github is a thirdparty repository hosting

## `git init`
creates a hidden `.git` folder, turning uour directory into a repository

## `git status`
lists all files that have been modified since the last commit

## `git add <file name>`
adds a changed file to the 'staging area'

## `git commit -m 'message goes here short and sweet'`
packages all the chnages in the staging area into a timeline milestone.

## `git diff`
shows a detail of what has been changed in each file.

## `git log`
shows a list of all commits

## `git add -A`
adds all the changes to a file or directory


## `git reset --hard (id from git log)`
got back a stage in the timeline. retrieves last commit

## `git remote add origin<repo-url-http`
links computerto the github. adds a remote destination that we could push to or pull from

##`git remote -v`
list available destinations to push to or pull from

##`git push origin master`
compares local changes to remote chages, then uploads local changes that the remote doesnt't have yet.

##`git clone <remote-repo-url>`
creates a directory named after the remote repo, and contact server at the remote url then download the commit history to your download

##`git checkout -b <branch name>`
create a new bracnh and switch to it in one command.

##` git branch`
list all branches, highlighting the one we're on.

##` git checkout <branch-name> `
switch to an existing branch.

##`git merge <branch-name>
First, make sure you're on the branch that you want to bring new commits into. Then run this command to bring any commits from another branch that your current bracnh doesn't have.




m