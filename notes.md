# Notes for BYU CS 260 #

## The Console ##

Before the creation of graphical user interfaces, all computing systems were simple console environments consisting as of a prompt for inputting a command and the display of the command output. All of the original programming tools ran as console application. The console tradition is still actively used by professional developers and most programming tools execute within a console window.

Also known as the command line, shell, or terminal, the console window is an essential web development tool. The console provides access to the file system and allows for the execution of command line applications.

There are many console applications that you can chose from. All operating systems come with a default console, but you will probably want to install one in order to get the best experience. Here is an example of Warp running on a Mac.

### Make sure you have a console application ###
In order for you to successfully use the console for web programming it must be POSIX compliant. POSIX compliance means that it supports a standard set of console commands. Both Mac and Linix support POSIX. That means any necessary console commands will work on those operating systems.

### Getting a console application for Windows ###
If you are using Microsoft Windows you can get a reasonable approximation of a POSIX compliant console by installing Git Bash. When installing, use all the default settings.

Once it is installed, hit the Windows button on your keyboard, and type Git Bash. This should open a console window that looks something like the following. Make sure you look for the Git Bash icon so that you don't accidentally use an non-POSIX compatible console application.

⚠ Do not use Git Command, cmd, or Powershell. That will not work for the commands and scripts we run in this class.

You can use Windows Subsystem for Linux (WSL) (e.g Ubuntu on Windows) for your work in this class, but you must be very careful to do all of your work actually within WSL. Don't download files to your Windows partition and then access them from WSL. It is suggested that you use Git Bash instead of WSL, unless you are really familiar with WSL.

### Testing your console application ###
Once you have a acceptable console application on your development computer, open it up and make sure you can run a simple POSIX compliant command such as printf 'hello\n'.

If this displays hello then you are on the right track. If that doesn't work then you are using a console application that is not POSIX compliant. For example, Windows Powershell will not work.

### Viewing the file system ###
One of the primary purposes of a console application is to view the files on the computer. The files on a computer are organized into a tree structure of nodes called directories. At any given point in time your console is located at one of the directories in the file system. You can see which directory you are in with the pwd (present working directory) command.

```
➜  pwd

/Users/student/byu//webprogramming260
```
You can list all of the files in the directory with ls (list files). Most command line applications take parameters that are specified after you type the application name. For example, ls can list all files (even hidden ones) in a long format if you provide the parameter -la.

```
➜ ls -la

total 16
-rw-r--r--  1 lee  staff   1.0K Nov 19 08:47 LICENSE
-rw-r--r--  1 lee  staff    82B Nov 19 08:47 README.md
drwxr-xr-x  4 lee  staff   128B Nov 19 08:48 profile
drwxr-xr-x  4 lee  staff   128B Nov 19 08:47 react
```

### Executing commands ###
The other primary purpose of the console is to execute commands. You already did this in the previous section when you executed commands for working with the file system. However, console commands can perform many different operations. Here are some basic commands that you show experiment with.

- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual
- You can also chain the input and output of commands using special characters

- `| - Take the output from the command on the left and pipe, or pass, it to the command on the right`
- `> - Redirect output to a file. Overwrites the file if it exists`
- `>> - Redirect output to a file. Appends if the file exists`
For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

```
ls -l | grep ' Nov ' | wc -l
```
There are also keystrokes that have special meaning in the console.

- CTRL-R - Use type ahead to find previous commands
- CTRL-C - Kill the currently running command



## Editors ##
The code editor is the workspace of a web application developer. Deeply learning an editor that makes you efficient and flexible will pay significant dividends in your ability to deliver quality work and greatly reduce frustration. A good editor should feel like a friend. If you are constantly arguing with your editor, then perhaps you need a relationship adjustment.

For your work with this instruction I would highly suggest you use two editors. The first one, Visual Studio Code, is your main editor for daily coding activities. The second one, is VI. You will use VI when you are shelled into your production environment and need a simple, but powerful, console based editor for quickly editing text files.

### Visual Studio Code ###
Created by Microsoft, Visual Studio Code (VS Code), is free and supported by a large community of open source developers. The 2021 Stack Overflow developer survey put VS Code as the number one most common IDE, used by 71% of professional developers.

VS Code is both simple to use, incredibly flexible, and powerful. At its most basic level it represents files in a given directory on the left and a space on the right for editing files. VS Code then adds excellent Git support, auto-formatting, auto-suggestions, and debugging support for JavaScript right out of the box. You can easily install language server extensions for most major programming languages that provide coding, building, and debugging support. From there you have your choice of thousands of extensions to add whatever functionality you would like. This includes extensions such as an auto-reloading HTTP server for hosting your project code locally in a browser, an image editor, a spell checker, hex editor, testing frameworks, linters, code prettier, or even docker container management to compartmentalize your development of different projects.

So unless you are already a master of some other development environment, it is highly suggested you go and install VS Code right now.

### Live Server extension ###
The VS Code Live Server extension is great for building web applications. You are going to build a lot of HTML, CSS, and JavaScript. You can do much of this on CodePen, but for your projects you are going to be working in your development environment. This means you will have a GitHub repository cloned to your personal development computer. When you open VS Code to the directory where your repository is located you can start creating HTML, CSS, and JavaScript, but when you want to see your code working you need to actually run a web server to deliver your files to the browser. That is where the Live Server extension comes in handy. With the press of the Go Live button on the bottom right status bar, your entire project directory is served up through your browser. Additionally, if you make any changes to a file the browser will automatically be updated.

To install the Live Server extension, open up VS Code and follow these three steps.

Congratulations! You have joined the 38 million other users already enjoying this extension. You can test it by opening VS Code, creating a new file named index.html and pasting `<h1>hello<h1>` into the file. Then save the file and press the Go Live button. This will launch your browser and display the rendered index.html file. If you make changes to your file and save it, the browser will automatically be updated to display your changes.

### GitLens ###
The basic support that VS Code offers for working with Git is sufficient for most tasks, but if you really want to unleash the power of git, consider installing the GitLens extension. It makes reviewing the commit history, stashing, merging, and comparing so much easier. With over 25 million users, you might enjoy joining the party.

### VI ###
VI, or technically vim, is one of the oldest console editors. It is extremely powerful and some incredibly talented software engineers use it as their sole development environment. The reason why you should learn VI is that it is available on every Linux server and can do anything that you will need. With that said it has a bit of an initial learning curve. However, once you have memorized a few basic commands you will be able to get around easily. If you take some time to really learn VI, you might find a new essential tool.

There are lots of tutorials for VI. Here are a few based on how you like to learn.

Additionally, the following instructions walk you through the basics and give you a few important commands to get started.

To use VI, open your console and change directory to one that holds some code you want to work on. For example, if you wanted to edit index.html you would type:

```
vi index.html
```

What you will immediately notice is that there is no menu bar or navigation aids. Instead, VI works entirely by keyboard commands. There are two modes in VI, command mode and insert mode. When you open VI, you are in command mode and all of the command keystrokes will work. To edit a document, use the command i to enter insert mode. Now your keystrokes will modify the document. To exit insert mode and type commands again, press ESC. Type :q from command mode (yes, you have to type the colon) to quit VI when you're done.

The following short list of commands should allow you to do most of what you will ever want to do.

keystroke	meaning
- :h	help
- i	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
- u	undo
- CTRL-r	redo
- gg	go to beginning of file
- G	go to end of file
- /	search for text that you type after /
- n	next search match
- N	previous search match
- v	visually select text
- y	yank or copy selected text to clipboard
- p	paste clipboard
- CTRL-wv	Split window vertically
- CTRL-ww	Toggle windows
- CTRL-wq	Close current window
- :e	Open a file. Type ahead available. If you open a directory you can navigate it in the window
- :w	write file (save)
- :q	quit. Use :q! to exit without saving
The great thing about learning these commands is that you will find that they work with a lot of the POSIX console programs. For example, with the file viewing utility less you can use gg and G to jump to the top and bottom of a file. Here is a cheat sheet if you want to see all the commands.



## GitHub ##
- Make sure to commit frequently and consistantly. Stay ahead of assignments in order to keep up with the class.
- Here's a link to my [README.md](https://github.com/a-vaan/startup/blob/main/README.md) files

Linus Torvalds, the creator of Linux, was fed up with the proprietary version control software that he was using to track the code for the Linux kernel and so over a weekend he built Git, the world's most popular version control system.

“Talk is cheap. Show me the code.”
— Linus Torvalds

### Installing Git ###
Before we can talk about Git you need to make sure it is installed in your development environment. Open a console and type `git --version`.

```
➜  git --version
git version 2.32.0 (Apple Git-132)
If you do not see something like that, then you need to follow these instructions to install Git.
```

### What is Git? ###
Git provides two valuable functions. First, it allows you to track versions of files in a directory. Second, it allows you to clone all of those versions to a different location, usually to a different computer. We are going to focus on tracking versions in this instruction and cover cloning repositories when we talk later about GitHub.

You can track file versions of any files in a directory by initializing Git for that directory. You can do this right now by creating a new directory in a console window and initializing it as a Git repository.

```
➜  mkdir playingWithGit
➜  cd playingWithGit
➜  git init
```
If you list all files in the directory you will see that you now have a hidden directory named .git.

```
➜  ls -la
total 0
drwxr-xr-x   3 lee  staff    96 Dec  1 22:59 .
drwxr-xr-x+ 54 lee  staff  1728 Dec  1 23:00 ..
drwxr-xr-x   9 lee  staff   288 Dec  1 22:59 .git
```
The `.git` directory is where all of the versions get stored. Now use the `echo` command to create a file so that we can see how versioning works. After creating the new file, use `git status` to tell you what git is doing.

```
➜ echo hello world > hello.txt
➜ git status

On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
 hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```
`git status` tells you that it detects a new file named `hello.txt`, but it isn't currently tracking versions for that file. To begin tracking versions you need to add it. Usually you track all files in a repository directory and so you can tell Git to track everything that it doesn't know about with `git add .`. Make sure you include the period at the end of the command. Follow the add command with another call to `git status` in order to see what the repo looks like now.

```
➜  git add .
➜  git status

On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
 new file:   hello.txt
```
Now Git tells us that it has staged the file `hello.txt`, meaning it is ready to be committed as a version in the repository. We commit a version with the `commit` command. We always want to have a meaningful comment about the version we are committing and so we use the `-m` parameter to provide a message that will live with the version. Follow this with another call to `git status`.

```
➜  git commit -m "initial draft"
[master (root-commit) d43b07b] initial draft
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt

➜  git status
On branch master
nothing to commit, working tree clean
```
Congratulations! You have just committed your first file to a Git repository. It is important to note that we were only working with a single file in this example. However, a commit can represent multiple files. You just need to add them all before you execute the commit. Also, note that the point of the stage, `git add` step, is so that you can commit some files while still leaving other modified files out of the commit. Only files you've staged will be committed.

Let's make an edit to our file and commit it again. This time we will tell Git that we want to add all the modified tracked files to our commit, without having to `git add` them again, by including the `-a` parameter along with our message parameter.

```
➜  echo goodbye world > hello.txt

➜  git commit -am "changed greeting to reflect the present mood"

[master e65f983] changed greeting to reflect the present mood
 1 file changed, 1 insertion(+), 1 deletion(-)
```
Now that we have a couple versions in our repository we can view the versions with the git log command.

```
➜  git log

commit e65f9833ca8ee366d0d9c1676a91b1a977dab441 (HEAD -> master)
Author: Lee
Date:   Thu Dec 1 23:32:22 2022 -0700

    changed greeting to reflect the present mood

commit d43b07b8890f52defb31507211ba78785bf6dccf
Author: Lee
Date:   Thu Dec 1 23:29:11 2022 -0700

    initial draft
```
This shows both commits with the associated comments.

### Commit SHA ###
Every commit has a unique identifier that is generated by hashing the file along with the timestamp using the SHA hashing algorithm. You can always refer to a specific commit in your version history by using its SHA. For example, if we want to temporarily switch back to a previous version to see what it contains we can use the checkout command. You only need to provide the first few characters of the SHA.

```
➜  git checkout d43b07b8890f

Note: switching to 'd43b07b8890f'.
HEAD is now at d43b07b initial draft

➜  cat hello.txt
hello world
```
The above output omits a big message saying that you are no longer looking at the latest version, but the important thing is that you can see that we are now looking at our old version. Note that you don't want to make commits at this point since it will create a branch that is not for the latest code. To get back to the top of the version chain, use the checkout command and reference the branch name, which is by default master.

```
➜  git checkout master
Previous HEAD position was d43b07b initial draft
Switched to branch 'master'

➜  cat hello.txt
goodbye world
```
Now we are back to our latest version.

The following diagram shows how your commits move from your working directory, to staging them for a commit, and then committing them to a repository.

A commit is a full snapshot of what was staged from your directory at the time of the commit. That means all of the files contained in the commit were reverted when you executed the checkout command. Since we only had one file in our commit, it looks like we are only flipping that file around, but basically you can think of it as a time machine for the entire directory.

### Diff ###
Most of the time you don't want to reverse back to an earlier commit. Instead you just want to compare the differences between commits. We can do that with the diff command. You can specify two SHAs that you would like to compare, or you can use the HEAD variable, which always points to the commit you're currently looking at. To refer to earlier commits you just add ~ and the numerical distance from HEAD that you want to reference. In this case we will compare HEAD and HEAD~1.

```
➜  git diff HEAD HEAD~1
```
```
diff --git a/hello.txt b/hello.txt
index 3b18e51..eeee2af 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1 @@
-hello world
+goodbye world
```
You can see that we made a change to hello.txt by removing hello world and adding goodbye world.

### Branches ###
Git supports the ability to branch your code. This allows you to work on variations of the code while still allowing progress on the main branch. For example, if you wanted to work on a new feature named A without interrupting work on the master branch, you would use the git branch A command to create a new branch named A, then start working on the new branch with the git checkout A command. Now commits can be done to either the master branch or the A branch. When you want to combine the work done on both branches, you checkout the master branch and execute git merge A. If you decide you want to abandon the new feature, then you just don't ever merge it back into the master branch.

Here is a demonstration of this working on the visualization tool provided by git-school.github.io.

### Commit often ###
You will be required to have at least ten commits for each project that you submit in order to get full credit. Commonly, this will be an initial commit that contains empty project files, followed by commits at each functional milestone, and then a final commit for the working project. Committing your code often is an important practice for you to develop. It protects you from losing your work, allows access from anywhere, makes it so you can quickly share changes, reduces conflicts with your peers, and enables you to efficiently explore different possibilities. This also enables others to review the progression of your development efforts in order to prove the originality of your work.

Remember to make meaningful commit messages that describe the what and why of the changes made. Here is a good post on how to make meaningful commit messages.

### Binary files ###
You can store any type of file in Git, but be aware that if you store large binary files, such as images or videos, you are storing a copy of that file each time you make a change to it. For example, suppose you use Git to track the changes you make to a video production project. Every time you save a change to your 10 GB video file you store a complete copy of the file. That means 10 commits of the video file will store 100 GB of data in your repository.

### VS Code and Git ###
Knowing how to use Git from the console is a very valuable skill. Git offers a wide variety of functionality such as creating branches of the repository, temporarily stashing changes, and cloning repositories to other machines.

However, by using a tool like VS Code you can hide all of the complexity of the command line and use a visual interface instead.

Here we see VS Code, with the GitLens extension installed, looking at the directory we have been working in. On the left you see all the commits we have previously created. We can edit our hello.txt file and VS Code will automatically detect the change and set it up for us to commit. VS Code will even put a marking on the left side of the edited text to show us what line we have changed. We can click on the staged file, in the commit area, and see the differences before we commit. Since they look good, we add a comment, and press commit. The new commit immediately shows up in our list of commits. We can use the visual diff again to click through all of the previous versions.

Underneath the covers, the GitLens extension is running Git commands just like we did on the command line, but using a visual tool makes working with versions much easier. Take some time and play with adding files, modifying them, committing, and diffing. You want to get to the point where this is second nature so that you can easily experiment and make mistakes, knowing that with Git, you can always easily recover.



## GitHub ##
When we introduced Git, we said that Git provides two things, 1) Version tracking in a repository, and 2) the ability to clone a copy of the repository to a different location. You can clone repositories between computers used by your development team, but the management of cloning repositories is much easier when you use a cloud based service such as GitHub.

GitHub was launched in 2008 by a small group of developers that wanted to make code collaboration easy. GitHub was acquired by Microsoft in 2018 for $7.5 billion. Since its beginning as a simple web application for cloning and storing Git repositories, GitHub has added functionality for hosting websites, supporting community pull requests, tracking issues, hosting codespaces, running continuous deployment processes, managing projects, and even AI driven code generation.

We are going to use GitHub for three things.

1. Hosting all of this instruction. Because it is hosted on GitHub you can generate pull requests when you see things that need improvement.
2. Publicly hosting your project repositories. This creates a backup copy of your code, demonstrates your progress with your commit history, allows for reviews of your code, and makes it so you can collaborate with your peers. It also looks good on a resume!
3. Keeping notes about what you have learned and things you want to remember.

### Creating a GitHub account ###
If you do not already have a GitHub account then go and create one now. GitHub provides a free version of their services that will more than cover your usage in this class. Chances are that once you start using GitHub you will use this account for many years to come, both for personal and professional projects.

### Creating and cloning a repository ###
While you can create a repository in your development environment using git init and then connect it to an upstream repository on GitHub, it is always easier to create your repository first on GitHub and then clone it to your development environment. That way your local repository and your GitHub repository are automatically linked to each other.

To create a repository in GitHub, log into your account, select the Repositories tab, and press New repository. You then specify a unique repository name, give a description, indicate that you want it to be public, add a default README.md file, and choose a license.

Every repository in GitHub has a unique URL assigned to it. Assuming the repository is public, anyone with the URL can clone it to their development environment. A repository clone is an exact copy of the repository including all of the commits, comments, and SHAs. It also configures the clone to know what the remote source is so that you can use Git commands to keep them in sync as changes are made. In this case, the remote source is the GitHub repository.

You clone a repository by providing the GitHub repository's URL as a parameter to the git clone command from in a console window. You can get a copy of the URL from the repository's GitHub page and clicking on the green Code button, and then clicking on the copy button next to the HTTPS URL.

When you clone a repository it is placed in a subdirectory named with the name of the repository. So make sure you are in the directory where you keep all of your source repositories before you run the command.

```
➜  git clone https://github.com/webprogramming260/startup-example.git

Cloning into 'startup-example'...
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.

➜  cd startup-example
```

### Making changes ###
You can now make changes to the files in the repository and commit those changes. As you create new commits on your local clone, you want to push those changes back up to the GitHub clone of the repository so that the repositories are in sync with each other. This is done with the push Git command. Once you have pushed the new commits then your peers who have cloned the repository can pull the commits down using the pull Git command.

The following demonstrates console commands for making a change to a test.md file, committing it, and then pushing it up to GitHub. Of course you can also do this using the Git interface of VS Code.

```
➜  printf "\nChange from my development environment!\n" >> test.md

➜  git add test.md

➜  git commit -am "update(notes) thoughts about startup applications"

➜  git push
```
This is the pattern that you want to make a reflexive part of your development process.

1. Pull the repository's latest changes from GitHub (git pull)
2. Make changes to the code
3. Commit the changes (git commit)
4. Push the changes to GitHub (git push)
⚠ Note: The first time you make a push request to a repository Git will ask you how you want to identify yourself and what credential (e.g. password) to use in order to authenticate with GitHub. You will need to create a Personal Access Token and provide that as your password.

```
*** Please tell me who you are

Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your name"
```
Make sure you use the email that you provided for your GitHub account.

After pushing changes to GitHub, you can then view the changes on GitHub with your browser. In the example above, you would see the changes to the test.md file. You can also edit and commit changes directly from GitHub. When looking at a repository file on GitHub you will see a little pencil in the top right hand corner of the file. If you press that you will enter edit mode. You use that to modify the file and then commit the changes with an appropriate comment.

Now there is a commit that GitHub has, but you do not have in your development environment. If we run the fetch Git command, you will get the latest information about the changes on GitHub without actually changing your local repository. We then run the status Git command to see the differences between the clones and see that we are missing a commit. You can pull it down using the pull Git command. You can also use the Git functionality in VS Code to view the status and sync up your repository.

```
➜  git fetch
➜  git status
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

➜  git pull
Updating d13a9ce..cafe81a
Fast-forward
 test.md | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-)
```
After running the pull command, your development clone and the GitHub clone are now the same.

### Handling merge conflicts ###
By pushing and pulling often, everyone keeps an up to date copy of the repository. This is important so that you don't run into merging problems caused by two peers modifying the exact same code. Merging only becomes something you have to deal with when two people modify the exact same line of code. However, when you have two peers working together you are always going to have a merge conflict at some point in time and so let's discuss how to handle this.

We can simulate a merge conflict by editing a line in a file and committing the file in your development environment, and before pushing that change, modifying the same line using GitHub. Now, run fetch and status again in your console.

```
➜  git fetch
➜  git status
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```
This shows that the cloned repositories have diverged from each other. Normally this is fine and we can just push and pull the different commits, but if we do that this time, we will get an error because the exact same line was changed in the two different commits. Git doesn't know which change to keep.

```
➜  git pull

Auto-merging test.md
CONFLICT (content): Merge conflict in test.md
Automatic merge failed; fix conflicts and then commit the result.
```
We now need to resolve the merge conflict that it says has happened with our test.md file. If you are using VS Code with the GitLens extension installed it will visually walk you through this process. However, so you can understand what is going on, we will do this using the console. The first step is to open up test.md in an editor. You will see that git has injected lines that highlight where the conflict is. Both your local change and the change made on GitHub are included.

```
An example startup application

Change from my development environment!

Change from GitHub

<<<<< HEAD
Conflict change made in development environment
=======
Conflict change made in GitHub
>>>>> b9f4c53c91eff509993d7291e60148f903827de0
```
We resolve the conflict by modifying the file to remove the textual conflict delimiters and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

```
# startup-example

An example startup application

Change from my development environment and from GitHub
Now that the conflict is resolved we commit our resolution and push up the result.

➜  git commit -am "merge(notes) combined both edits"
➜  git push
```
If you go look at the file again on GitHub you will see the additional commit in the history and the result of our merge in the file content.

### README.md ###
Keeping notes of what you have learned and things that you want to remember is an essential step for accelerating your web programming skills. GitHub supports the inclusion of a file with the special name README.md in the root of your repository. The README.md file is displayed in GitHub when you view your repository. This file uses Markdown syntax. If you have not used Markdown before, then take some time to learn how to use it. For this course you will use your startup application's README.md file to describe the modifications and alterations that you make to your startup.

You will also create another Markdown file named notes.md to track what you have learned in the course. You can use anything that you put in your notes.md file when taking the midterm or final.

### Forks ###
A GitHub fork provides the ability to create a copy of a GitHub repository. Usually you fork a repo to get a copy of an open source code base that you want to experiment with, or contribute to. For example, the repository containing these instructions. A fork is similar to cloning a repository to your development environment, but it clones to GitHub instead. Then pull the fork down to your development environment to work on it. The fork maintains a link to the upstream (original) repository that allows you to easily pull down updates and merge them with your fork. A fork also allows you to create a pull request in order to push suggested changes to the original repository.

If you have never forked a repository before you should go find an open source project that interests you. For example, here is the Dad Jokes API. This simple web service provides an endpoint to get a joke. Consider forking this repository in order to experiment with how it works. Don't worry too much about what the code is doing. That will make more sense as the class goes on.

It would be awesome if we can increase the fork count for Dad Jokes API into the hundreds. Also make sure you push the Star button to show that you like the repo. Let's blow KegenGuyll's mind!

### Pull requests ###
GitHub allows you to create a fork of any repository on GitHub. You just push the Fork button from the repository's GitHub page. You can then make modifications to the repository fork and push the changes as a pull request. This notifies the original repository's owner that a request is being made to enhance the original repository. The owner can review your changes and if appropriate commit the changes into the original. This is how open source communities manage development from a volunteer group of global developers.

In this class, if you notice something in the instruction that needs to be enhanced, feel free to fork the repo, and make a pull request. This will give you experience with this practice and improve the instruction for others at the same time. Plus your name will be included as a contributor. How cool is that!



## A brief history of web programming ##
Having a basic knowledge of the history of web programming helps you to understand why we have the assortment of technologies that you will be working with. There has been three distinct phases that make up this history.

1. The formation of the internet that supports the communication of web applications
2. The creation of HTML and HTTP that made it possible to shared hyperlinked documents (Web 1.0).
3. The creation of CSS and JavaScript that enabled interactive web applications (Web 2.0).

### The Internet ###
The essential first step to enabling what we now call web programming was the formation of a global communications network that was reliable and publicly available. This was made possible when the United States Department of Defense created the ARPANET as a means of sharing information between universities doing defense related research.

— ARPANET access points in the 1970s

ARPANET was defined with the goal of withstanding a nuclear attack. This led to the implementation of a redundantly connected graph of computing devices. Within that network, two computers communicate by dynamically discovering a path to each other without the help of a single central authority.

In the 1980s, the National Science Foundation continued the expansion of the network, and commercial enterprises began to make significant contributions. This eventually led to the Internet as we know it today, as the world went online as part of a massive explosion of consumer participation in the early 1990s. This was followed by another exponential increase in the 2000s as smart phones and appliances became common.

The management of the Internet is controlled by two major organizations. The Internet Engineering Task Force (IETF) defines the technical standards that specify how the physical network communicates. The Internet Corporation for Assigned Names and Numbers (ICANN) oversees both the Internet Protocol (IP) address space, and the Domain Name System (DNS). These two databases form the address book of the Internet. When the United States government transitioned control of these governing bodies to a global community of non-profit stake holders in 2016, the Internet became a worldwide asset free from any specific political control.

### Hypertext Markup Language (HTML) ###
“I just had to take the hypertext idea and connect it to the TCP and DNS ideas and—ta-da!—the World Wide Web.”

— Tim Berners-Lee, (Source: Answers for Young People)

Starting in 1980, Tim Berners-Lee was working at the research laboratory Cern. He was tasked with building a system that would allow researchers to share documents between remote academic institutions. Realizing that the ARPANET provided the necessary connectivity, he defined the protocols for document sharing that formed the underpinning of what would be termed the World Wide Web. Berners-Lee named the document format the HyperText Markup Language (HTML) based on inspiration from the digital publishing industry's Standard Generalized Markup Language (SGML). One of the key innovations of HTML was the idea that documents could be interconnected with what he termed hyperlinks to allow immediate access to related documents. In 1990 he put all the pieces together and built the world's first web server on his desktop NeXT computer. You can visit a reproduction of the first web site at info.cern.ch.

Originally, HTML contained only 18 elements, or tags. The latest version of HTML has now grown to over 100. The initial explosion of elements was caused in part by browser vendors racing to create differentiating functionality in order to gain market share. Since 1996 the HTML specification has been controlled by the W3C. The following is an example of a simple HTML document.

```
<html>
  <body>
    <p>Hello world!</p>
  </body>
</html>
```

### HTTP and URL ###
While HTML was an incredible step forward, Berners-Lee also made other significant contributions. This included the definition of the HyperText Transfer Protocol (HTTP) and the Uniform Resource Locator (URL). These two definitions specify how web documents are addressed and transmitted across the Internet. The following gives an example of a URL and HTTP request.

```
http://info.cern.ch/hypertext/WWW/Helping.html
```
```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

### Cascading Style Sheets (CSS) ###
Cascading Style Sheets (CSS) was first proposed in 1994 by Håkon Wium Lie, a contemporary of Berners-Lee at CERN, in order to give HTML documents visual styling independent of the content's structure. Before the introduction of CSS, HTML was going down the path of hard coding the visual appearance of the content with HTML elements. This would have resulted in a single visual style for the entire web that was completely defined by the browser vendors.

“If we hadn’t developed CSS, we could have ended up with the web being a giant fax machine”

— Håkon Wium Lie (Source: Medium.com)

By 1996, CSS became a standard and all the major browsers began to implement the functionality. Unfortunately, for the first years of CSS the same proprietary wars that plagued HTML also affected CSS. Much of the work on version 2.1 was to remove error and make all the features of CSS compatible. Here is a simple example of CSS that defines the white spacing, color, and shadowing of paragraph text.

```
p {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```
The ability of CSS to style a web page has increased significantly from its original implementation. With modern CSS a web programmer can import fonts, animate HTML elements, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation.

### JavaScript ###
In 1995 Netscape (the maker of the popular browser Navigator) decided to add the ability to script web pages. The initial implementation was led by Brendan Eich and given the name JavaScript. JavaScript turned the previously static web into an interactive experience where a web page could dynamically change based upon a user's interaction.

“Always bet on JS”

— Brendan Eich (Source: brendaneich.github.io)

In 1996 Netscape turned control of JavaScript over to ECMA International in an attempt to standardize the definition of the language. At that point JavaScript officially became know as ECMAScript, although it is still commonly referred to as JavaScript.

Here is an example of a simple JavaScript program that combines variables and prints out the result.

```
const join = (...a) => {
  return a.reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(join(1, 2));
console.log(join('hello', ' ', 'world', '!'));
```
The first decade of JavaScript was turbulent as each of the major browser vendors attempted to introduce new proprietary features in order to gain market share. Eventually in 2009 the major vendors agreed on the ECMAScript 5 standard and in 2015 ECMAScript 6 was released as the last major feature upgrade. Since then minor releases have taken the year of their release as their version number.

### JavaScript outside the browser ###
In 2009 Ryan Dahl created Node.js as the first successful application for deploying JavaScript outside of a browser. This changed the mindset of JavaScript as purely a browser technology to one that is leveraged across an entire technology stack.

Other important milestones in the history of JavaScript include the 2013 standardization of the common object notation JSON, a typed variant named TypeScript in 2012, and the introduction of numerous transpilers for converting other languages into compatible ECMAScript.

### What's next? ###
Looking forward, there are many exciting opportunities, as well as problems to solve. This includes addressing topics like application complexity, device diversity, internationalization, security, privacy, data ownership, environmental impact, global authorization identity, performance, and accessibility.

The only thing certain is that you have an opportunity to be a big part of it. One important lesson you can learn from these early pioneers, is that with web programming, a single person can change the world. I hope to see your face on this history page one day.



## Technology stack ##
- The collection of technologies used to create or deliver a web application is called a technology stack. It is a stack because they usually layer on top of one another.
- Dependability, support, scalability, performance, and security are all important factors when it comes to developing a technology stack
The collection of technologies that you use to create or deliver your web application is called a technology stack. It is a stack because they usually layer one on top of each other. Generally at the top of the stack is your web framework. This includes possibilities such as Angular, React, Vue, or Svelte. The web framework then communicates with one or more web services to provide authentication, business, data, and persistent storage. The web service then uses backend services such as caching, database, logging, and monitoring.

Here is what our stack looks like: React for the web framework, talking to Caddy as the web server hosted on AWS, running web services with Node.js, and MongoDB as the database hosted on MongoDB Atlas.

The key with a tech stack is the realization that there is no one answer to the question of what technology to use where, and the answer continually evolves. Usually you will use what the company you work for has invested in. Migrating to a new stack is very expensive and error prone. So learning how to maximize your effectiveness, regardless of the technology, will make you very valuable. Being discontent because the latest new toy is not being used, will usually cause an unnecessary disruption to the team. However, if you can validate that a change in the tech stack will produce significant monetary, performance, or security gains, then you will greatly benefit your team.

### Complex technology stack ###
Here is an example of a tech stack from a small web application company. You can see that there are dozens of technologies used to make the application work. When you build a commercial stack you want to be very careful about the pieces you choose. Dependability, support, scalability, performance, and security are all important factors. You also want to consider development productivity factors such as documentation, ease of use, common acceptance, community support, build times, and testing integration.



## Amazon Web Services - EC2 ##
- Public IP address: http://44.219.229.13/
- SSH command to get into prod server from the CS 260 folder: ssh -i Production.pem ubuntu@simplycinema.click
Now that you know all about web servers, it is time for you to rent your own. In theory you could contact your ISP and lease an IP address that you would then associate with your laptop. This would make your laptop into a web server, but this has the downside of requiring your laptop to always be available, have enough bandwidth to support your millions of fans, and creates a significant security risk for your laptop. Instead we want to use a cloud provider that can give you an inexpensive small computer that you can experiment with and throw away any time that you would like. This is actually exactly what many web companies do with their core business and so it should work fine for you.

When you rent a web server, it is physically located in a massive data center located in a place like Virginia, Ohio, Dublin, or Tokyo. Think of a data center as a very secure, climate controlled, warehouse that has hundreds of thousands of computers sitting in massive racks.

### Creating an AWS server instance ###
Assuming you already have an AWS account it is time to create your web server.

⚠ Note that the AWS interface changes all the time, so the images given below may not match what you see. However, the concepts they represent should all be there in some shape or form.

1. Open the AWS console in your browser and log in.

2. Navigate to the EC2 service.

3. Change your region (top right corner) to US East (N. Virginia) - us-east-1. Changing your region to N. Virginia will make it so that your server is located there. ⚠ This is crucial because the Amazon Machine Image (AMI) you will use is only available in N. Virginia.

4. Select the option to Launch instance.

5. Give your instance a meaningful name. Perhaps use a convention such as [owner]-[purpose]-[version].

6. We have created an Amazon Machine Image (AMI) for you to use as the base for your server. It has Ubuntu, Node.js, NVM, Caddy Server, and PM2 built right in so that you do not have to install them. Paste this AMI ID (ami-0b009f6c56cdd83ed) into the search box and press enter. Then select the Community AMIs tab. If no matches are found, make sure that your region is set to US East (N. Virginia) - us-east-1 (You can check this by looking in the top right corner of the page).

This should display the information about the class AMI. If the AMI ID matches ami-0b009f6c56cdd83ed select it.

7. Select t3.nano, t3.micro, or t2.micro for the instance type depending on how much power you want, how much you want to spend, or if you qualify for a free usage tier. If you qualify for a free usage tier then pick that that instance type, otherwise choose the cheapest one. You can always change this later if your server is running slow and needs more power.

8. Create a new key pair. Make sure you save the key pair to your development environment. This needs to be safe in a place that is not publicly accessible and that you won't accidentally delete or commit to a GitHub repository. You will need this every time you secure shell (ssh) into this server (production environment). Note that you don't have to create a new key pair every time you launch an instance. You can use one that you created previously so that all of the servers you create can be accessed with the same key file.

9. For the network settings, make sure the auto-assign public IP address is enabled. For the Firewall (security group) select the option to Create security group if this is the first server that you are creating. Allow SSH, HTTP, and HTTPS traffic from anywhere.

If you have created a server before, then you already have a security group that you can use, and you should not clutter up your account with additional ones. In that case, use the option to Select existing security group and select the name of the existing security group.

A security group represents the rules for allowing access to your servers. Security group rules specify both the port that is accessible on your server, and the source IP address that requests are allowed from. For example, you could allow only port 443 (the secure HTTPS port) from your development environment's IP address. However, doing so would mean that your web application would not be available from any other computer. You can learn more about security groups from the AWS documentation.

10. If you are using a T3 class server you can take an advantage of the unlimited credit specification. If you are not using at T3 class instance you can ignore this step. In the Advanced details, change the Credit specification to Unlimited. This allows your T class (throttled class) server to keep using CPU running normally even though it has exceeded its current credit limit. You do incur a minimal charge for when this happens, but the alternative is to always spend more for a larger instance, or to have your server lock up when it hits the limit. For the minimal use that your server will see, you should not normally exceed your limit, but it is nice to not have your server die if you do. Even if you do temporarily exceed the limit, the charges will be mere pennies per hour.

11. Select the option to Launch instance.

It will take a couple minutes for the instance to startup, but once it is marked as running it is close to being ready. Look at the properties for the instance and copy the public IP address.

Open your browser and paste the public IP address for your server in the location bar along with the prefix http://. For example:

```
http://3.22.63.37
```
If the server has started up, then you should see the following. Otherwise, wait a little bit and refresh your browser again. If the server is marked as running and it has been longer than 5 minutes, then there is a problem.

If that is what you see, then congratulations! You are now running your very own web server that the whole world can see! Time to celebrate with cookies.

### SSH into your server ###
Now, let's remote shell into your server and see what is under the hood. Go to your console window and use SSH to shell into the server. You will need to supply the public IP address (copied from the EC2 instance details) and the location of your key pair file that you created/used when you launched your instance. Hopefully, you saved that off to a safe location in your development environment; otherwise you will need to terminate your instance and create a new one, with a new key.

```
➜  ssh -i [key pair file] ubuntu@[ip address]
```
For example,

```
➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123
```
⚠ You may get a warning that your key pair file permissions are too open. If so then you can restrict the permissions on your file so that they are not accessible to all users by running the chmod console command:

```
chmod  600 [key pair file]
```
⚠ As it connects to the server it might warn you that it hasn't seen this server before. You can confidently say yes since you are sure of the identity of this server.

Once it has connected, you are now looking at a console window for the web server that you just launched and you should be in the ubuntu user's home directory. If you run ls -l, you should see something like the following. (Note that the dates might appear different.)

```
➜  ls -l

total 4
lrwxrwxrwx 1 ubuntu ubuntu   20 Apr 13 15:06 Caddyfile -> /etc/caddy/Caddyfile
lrwxrwxrwx 1 ubuntu ubuntu   16 Apr 13 15:06 public_html -> /usr/share/caddy
drwxrwxr-x 4 ubuntu ubuntu 4096 Apr 13 16:48 services
```
The Caddyfile is the configuration file for your web service gateway. The public_html directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The services directory is the place where you are going to install all of your web services once you build them.

Once you are done poking around on your server, you can exit the remote shell by running the exit command. That is everything. You will only change a few configuration settings on your server in the future. With rare exception, all changes to the server are done using an automated continuous integration process.

### Keeping the same public IP address ###
You can stop your server at any time. Don't confuse this with terminating your server which completely destroys it. Stopping your server just powers down the device. This is nice because you don't have to pay for it while it is stopped. However, every time you stop and start your server, it will be assigned a new public IP address. It is important to keep the same public IP address so that you, and others, can always browse to the same place. More importantly, when you create your domain name, you can assign it to an address that never changes.

You have two choices in order to keep the same public IP address:

1. Never stop your server.
2. Assign an elastic IP address to your server so that it keeps the same address even if you stop it.
Your first elastic IP address is free. However, the catch is that it is only free while the server instance it is assigned to is running. While your server is not running you are charged $0.005/hr. This is the same cost for running a t3.nano server instance. So if you assign an elastic IP address, you don't save any money unless you are running a more powerful instance, and are stopping your instance when you, or the TAs, don't need it.

We would suggest that you do both options. Keep your server running and associate an elastic IP. That way if you do need to reboot it for some reason, you will still keep the same IP address, and it doesn't cost you anything more either way.

Here is how you assign an elastic IP address to your server instance.

1. Open the AWS console in your browser and log in.

2. Navigate to the EC2 service.

3. From the menu on the left select Network & Security|Elastic IPs.

4. Press the Allocate Elastic IP address button.

5. Press the Allocate button.

6. Select the newly displayed allocated address and press the Actions button.

7. Select the Associate Elastic IP address option.

8. Click on the Instance box and select your server instance.

9. Press Associate.

Assigning an elastic IP address will change the IP address for your server, but it will not change again until you release the elastic IP address. If you do terminate your server and create a new one, you can again associate the same elastic IP address with your new server.

Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.

### What size of server should you use? ###
The t3.nano instance size has just enough memory and CPU to meet the requirements of this course if you are careful. However, if you find that your server is running slowly or erratically, you should consider upgrading to a larger instance size. If you have an elastic IP address you can change your instance size whenever you would like and you won't lose your public IP address. You can even stop your server when no one is using it. This is useful because you don't get charged for your server when it is stopped.



## Amazon Web Services - Route 53 ##
Referring to a web server by its IP address is fine for development, but it is not going to work for most users. Additionally, you want to create a secure (HTTPS) connection to your application, and that is not possible with just an IP address. Instead you want to use a domain name to represent your web application. That way you can make it easy to remember and secure. In order for you to do this you need to buy a domain name, and then create DNS records with a DNS (Domain Name System) server.

Route 53 is the AWS service that handles everything DNS-related. With Route 53 you can buy a domain name, host your domain on their DNS servers, and create DNS records.

⚠ You should already have an account with AWS from your work to rent a EC2 server instance. If you haven't done that work, go create your account and server following the previous instruction.

### Purchasing a domain name ###
AWS provides extensive documentation for all their services. You can find the documentation for registering a new domain on their website. You may find the simplified directions below easier to follow, but if you run into trouble, or have additional questions, refer to the official documentation. Remember that you are leasing a domain name for a year, and so make sure it is a name that you would like. Also note that AWS credits do not apply to purchase of domain names.

1. Open the AWS console in your browser and log in.

2. Navigate to the Route 53 service.

3. Select the Domains > Registered domains option from the menu on the left.

4. Push the Register Domain option.

5. Select the TLD that you want. AWS currently offers the .click TLD for $3 and .link for $5.

6. Put your desired root domain into the search box and press the Check button to see if it is available. Common one or two word phrases are almost always taken. For example, 260.click is taken, but webprogramming260.click is not. Keep searching until you find one you like.

7. Press Add to cart.

8. Fill out the contact details. This information is sent to the authorized DNS registrar and is what shows up to the world for your domain name. Once registration is complete you can see this information using the console program whois. Make sure you fill in this information correctly. Providing false information may cause the registrar to revoke your registration.

⚠ If you are using new contact information that a registrar has never seen before, it will require you to verify the email address. Usually this means you will receive an email that you must respond to within 30 days. If you fail to do this your domain name will be removed from the registry without warning. Check your spam folder if you do not receive this email.

9. Press Continue.

10. Review everything and press Complete Order

It may take a while before your purchase is completed, but when it is the Route 53 service dashboard will show that you have a hosted zone for your domain name.

### Manage your DNS records ###
Now that you own a domain name you can use it to create DNS records that will map domain names to IP addresses (A records) or other domain names (CNAME records). For the purposes of this class, you want your root domain name, and any subdomain of your root domain, to map to the IP address of the web server you created previously.

You will need the public IP address for your server. You can get the public IP address by opening the AWS browser console and viewing the details of your server on the EC2 service page.

⚠ Note that the AWS browser console interface changes all the time; the directions below may not match exactly, but similar functionality should be there in some shape or form.

1. Open the AWS console in your browser and log in.
2. Navigate to the Route 53 service.
3. Select the Hosted zones option from the menu on the left.
4. You should see your domain name listed here. If it doesn't then the registration did not complete, or it is still pending. In that case go review the information found under Domains > Pending requests.
5. Click on your domain name to view the details. This should display existing DNS records with types such as NS, and SOA.
6. First, create the root domain DNS record. This will associate your domain name with your server's IP address and allow you to use your domain name in the browser to navigate to your server.
Press the Create record button.
In the Value box enter the public IP address of your server.
Press Create records
A new A type record should appear in your list of records that represents the root domain name and your server's public IP address.
7. Next we will create a DNS record that will map to your server for any subdomain of your root domain name. This is possible because DNS allows you to specify wildcards for a DNS record.
Press the Create record button.
In the Record name box enter the text *. This wildcard represents that any subdomain will match this record, so long as it is not explicitly defined by another DNS record.
In the Value box enter the public IP address of your server.
Press Create records
A new A type record should appear in your list of records that represents the wildcard subdomain name and your server's public IP address.

Your DNS records should look similar to the following when you are done.

By defining both a record for your root domain and a wildcard record for any subdomain of your root domain you can now navigate to your server with either your domain name or a subdomain. For example, if you purchased the domain name myfunkychickens.click you could reach your server by navigating your browser to myfunkychickens.click, simon.myfunkychickens.click, or startup.myfunkychickens.click.

Open your browser and paste your domain in the location bar along with the prefix http://. For example:
```
http://myfunkychickens.click
```
This should show your web server's default page just like it did when you used the IP address.

Note that your browser will warn you that the website is not secure. We will resolve that in future instruction when we configure Caddy to generate a website certificate for you.

### Other record types ###
The additional NS and SOA type records that were listed for your domain name are important for working with DNS. These records were created automatically for you when you registered your domain name. The name server (NS) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server. Those same authoritative name servers are listed with the registrar that you leased your domain name from. That way the authoritative name server can verify that the DNS records and the DNS registration match and are authorized to represent the domain name when defining DNS records. Otherwise a hacker could just add DNS records and take over your domain name.

The start of authority (SOA) record provides contact information about the owner of this domain name.



## Caddy ##
“Imperfect member of the restored Church of Jesus Christ. Husband. Father. Stepdad.”

— Matt Holt (Source: Twitter)

Released in 2020, Matt Holt combined the power of building an HTTP server using the Go programming language with the ease of generating TLS certificates using LetsEncrypt.

Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to another web service. This ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy).

For this course, we use Caddy for the following reasons.

- Caddy handles all of the creation and rotation of web certificates. This allows us to easily support HTTPS.
- Caddy serves up all of your static HTML, CSS, and JavaScript files. All of your early application work will be hosted as static files.
- Caddy acts as a gateway for subdomain requests to your Simon and startup application services. For example, when a request is made to simon.yourdomain Caddy will proxy the request to the Simon application running with node.js as an internal web service.

Caddy is preinstalled and configured on your server and so you do not need to do anything specifically with it other than configure your root domain name.

### Important Caddy files ###
As part of the installation of Caddy we created two links in the Ubuntu user's home directory that point to the key Caddy configuration files. The links were created in the home directory so that you do not have to hunt around your server looking for these files.

- Configuration file: ~/Caddyfile

Contains the definitions for routing HTTP requests that Caddy receives. This is used to determine the location where static HTML files are loaded from, and also to proxy requests into the services you will create later. Except for when you configure the domain name of your server, you should never have to modify this file manually. However, it is good to know how it works in case things go wrong. You can read about this in the Caddy Server documentation.

- HTML files: ~/public_html

This is the directory of files that Caddy serves up when requests are made to the root or your web server. This is configured in the Caddyfile discussed above. If you actually look at the Caddyfile you will see that the static file server is mapped to /usr/share/caddy. That is the location that the file link in the Ubuntu user's home directory, ~/public_html, is pointing to.

```
:80 {
      root * /usr/share/caddy
      file_server
}
```
Therefore, according to this configuration, whenever Caddy receives an HTTP request for any domain name on port 80 it will use the path of the request to find a corresponding file in this directory. For example, a request for http://yourdomainname/index.html will look for a file named index.html in the public_html directory.



## HTTPS, TLS, and web certificates ##
To this point you have been accessing your web server using HTTP. If you notice your browser has been yelling at you that your connection is ⚠ Not Secure from the location bar.

During the first couple decades of the web, it was pretty common for websites to simply use HTTP (non-secure hypertext transport protocol) since it was difficult, non-performant, and expensive to secure the connection. Additionally, most websites just provided access to documents and so it didn't need to protect user's information. Usually, only websites that were doing commerce needed a secure connection. That all changed when computers got faster and the web moved from simple document servers (Web 1.0) to full on web applications (Web 2.0) that accepted information from users and displayed that information within the application. Without a secure connection anyone that had access to the network traffic, at any point, from the user's computer to the server handling the request could easily capture all the data sent in either direction. Remember when we used the console program traceroute to show you how many computers your connection goes through. You definitely do not want those computers to have access to your user's sensitive information.

### HTTPS and TLS ###
The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS). This is basically HTTP with a negotiated secure connection that happens before any data is exchanged. Having a secure connection means that all the data is encrypted using the TLS protocol. TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data. You can see the actual negotiation that happens by using the console browser based application curl, along with the -v parameter to see the verbose output of the HTTPS exchange. The > /dev/null redirection throws away the actual HTTP response, since we only care about the negotiation, by redirecting the output to the null device.

```
➜  curl -v -s https://byu.edu > /dev/null

*   Trying 128.187.16.184:443...
* Connected to byu.edu (128.187.16.184) port 443 (#0)
* ALPN: offers h2
* ALPN: offers http/1.1
*  CAfile: /etc/ssl/cert.pem
*  CApath: none
* (304) (OUT), TLS handshake, Client hello (1):
} [312 bytes data]
* (304) (IN), TLS handshake, Server hello (2):
{ [122 bytes data]
* (304) (IN), TLS handshake, Unknown (8):
{ [25 bytes data]
* (304) (IN), TLS handshake, Certificate (11):
{ [3211 bytes data]
* (304) (IN), TLS handshake, CERT verify (15):
{ [520 bytes data]
* (304) (IN), TLS handshake, Finished (20):
{ [52 bytes data]
* (304) (OUT), TLS handshake, Finished (20):
} [52 bytes data]
* SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384
* ALPN: server accepted http/1.1
* Server certificate:
*  subject: C=US; ST=Utah; L=Provo; O=Brigham Young University; CN=*.byu.edu
*  start date: Jan 24 00:00:00 2022 GMT
*  expire date: Jan 24 23:59:59 2023 GMT
*  subjectAltName: host "byu.edu" matched cert's "byu.edu"
*  issuer: C=US; O=DigiCert Inc; CN=DigiCert TLS RSA SHA256 2020 CA1
*  SSL certificate verify ok.
```
You can see that the negotiation is fairly complex as it involves multiple steps in the handshake. A core piece of the handshake is the exchange of a web certificate that identifies the domain name of the server creating the secure connection. The browser will compare the certificate domain name to the one represented in the URL and if they don't match, or the certificate is invalid or out of date, it will display a massive warning.

In the example above we asked for byu.edu and got a valid certificate for byu.edu and so everything looks great.

### Web certificates ###
Web certificates are generated by a trusted 3rd party using public/private key encryption. The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate. Once you have a certificate for your domain name, you can serve the certificate from your web server and then the browser can validate the certificate by using the public keys of the certificate issuer.

Until about 2014 it would cost you hundreds of dollars a year to get a web certificate, and you needed a certificate for every domain and subdomain that you owned. That would cost, even a small company, thousands of dollars a year because the certificates needed to be renewed in order to ensure that it still represented the owner of the domain name and to limit the impact of a stolen certificate.

That all changed when two Mozilla employees created a non-profit called Let's Encrypt with the goal of creating trusted web certificates for free. This effectively broke the monopoly that the trusted web certificate issuers had on the industry.

Now using a service like Let's Encrypt, and the IETF standard ACME protocol that they pioneered, anyone who owns a domain name, can dynamically generate and renew a certificate for free. This incredible contribution of critical web technology has made the web safer, and more reliable, for everyone.

Caddy uses Let's Encrypt to generate a web certificate every time an HTTPS request is made for a domain name that Caddy doesn't have a web certificate for. When this happens Caddy asks Let's Encrypt to verify that the domain for the requested certificate is actually owned by the requester. Let's Encrypt does that by telling the requester to return a specific digitally signed response for a temporary URL when an HTTP request to the domain is made. Let's Encrypt then makes the HTTP request, and if successful, issues the certificate to the requester.

If you are interested, you can learn about how the Let's Encrypt generates certificate from their documentation.

### Enabling HTTPS ###
Modern browsers now expect web servers to exclusively use HTTPS for all communication. In fact, the next version of HTTP (v3) only supports secure connections. For this reason, you should always support HTTPS for any web application that you build.

You can obtain, and renew, a web certificate by enabling the ACME protocol for your web server and communicating with Let's Encrypt to generate the needed certificates. This is not difficult to do, and many languages such as Rust, Node.js, or Go support this functionality by simply including an additional library.

#### Caddy ####
For our work we are using the web service Caddy to act as a gateway to our different services and to host our static web application files. Caddy has ACME support built into it by default, and so all you need to do is configure Caddy with the domain name for your web server. Here are the steps to take.

⚠ Note that this is one of the few modification that you will manually make to your web server. Most other production changes are completed with automated continuous integration processes.

1. Open a console window.

2. Use the ssh console program to shell into your production environment server.

```
➜  ssh -i [key pair file] ubuntu@[yourdomainnamehere]
```
for example,

```
➜  ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click
```

3. Edit Caddy's configuration (Caddyfile) file found in the ubuntu user's home directory.

```
➜  cd ~
➜  vi Caddyfile
```

4. Modify the Caddy rule for handling requests to port 80 (HTTP), to instead handle request for your domain name. By not specifying a port the rule will serve up files using port 443 (HTTPS), and any request to port 80 will automatically redirect the browser to port 443. Replace :80 with your domain name (e.g. myfunkychickens.click). Make sure that you delete the colon.

5. Modify the Caddy rules that route the traffic for the two web applications that we will build. To do this replace the two places where yourdomain appears with your domain name (e.g. myfunkychickens.click).

6. Review the Caddyfile to make sure it looks right. If your domain name was myfunkychickens.click it would look like the following.

```
myfunkychickens.click {
   root * /usr/share/caddy
   file_server
   header Cache-Control no-store
   header -etag
   header -server
}


startup.myfunkychickens.click {
   reverse_proxy * localhost:4000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}

simon.myfunkychickens.click {
   reverse_proxy * localhost:3000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}
```

7. Save the file and exit VI (:wq)

8. Restart Caddy so that your changes take effect. Note that this requires you to use sudo (super user do) to elevate your user to have the rights to restart the gateway.

```
sudo service caddy restart
```
If you open your browser and navigate to your domain name you will now see that the browser is displaying a lock icon, using HTTPS, and your certificate has been automatically requested by Caddy and issued by Let's Encrypt.



## Hypertext Markup Language ##
HyperText Markup Language (HTML) provides the foundational content structure that all web applications build on. HTML was originally designed to be a publishing format for web documents, or pages. From that original definition web programmers have morphed the web page concept into a web application where a page now represents either a single page application (SPA) or a large group of hyperlinked pages that form a multi-page application (MPA). By itself HTML is amazing, but to create a full web application we will need other technologies to style (CSS) our pages and make them interactive (JavaScript). For now, we will focus on creating the content structure with HTML.

Here is an example of a simple HTML document.

```
Hello world
```
The first thing you noticed is that this looks like a simple text document. That is because text is valid HTML. In order to provide structure to our text we need to introduce the concept of elements and their associated tag representation.

### Elements and tags ###
HTML elements are represented with enclosing tags that may enclose other elements or text. For example, the paragraph element, and its associated tag (p), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (<) and greater than (>) symbols. A closing tag will also have a forward slash (/) before its name.

```
<p>Hello world</p>
```
We can continue adding structure to the page with additional elements. Each of these elements may contain other elements that provide the structure of our web page. The html element represents the top level page structure. The head element contains metadata about the page and the page title. The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content. These additional elements result in the following HTML page.

```
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```
However, when we render the HTML in a browser it would look exactly the same as our original simple text example. The reason for that is that HTML is almost completely about structure. The visual appearance of the web page won't really change until we start styling the page with CSS.

### Attributes ###
Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the id attribute gives a unique ID to the element so that you can distinguish it from other elements. The class attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (') or double quotes (") to delimit attribute values.

```
<p id="hello" class="greeting">Hello world</p>
```

### Hyperlinks ###
One of the core features that made the web so successful was the ability to create hyperlinks that take you from one page to another another with a simple click. A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference (href). A hyperlink to BYU's home page looks like this:

```
<a href="https://byu.edu">Go to the Y</a>
```

### Complete example ###
HTML defines a header (<!DOCTYPE html>) that tells the browser the type and version of the document. You should always include this at the top of the HTML file. We can now add the header, some attributes, and more content to our document for a full example.

```
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>
```

Notice that the rendered document has almost no styling. That is because the entire purpose of HTML is to provide content and structure. The layout of the content is left almost entirely up to Cascading Stylesheets (CSS). When styling was introduced with CSS, all of the HTML elements that defined style such as font, strike, and plaintext were deprecated.

### Common elements ###
Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

```
element	meaning
html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page
```

### Comments ###
You can include comments in your HTML files by starting the comment with <!-- and ending it with -->. Any text withing a comment block will be completely ignored when the browser renders it.

```
<!-- commented text -->
```

### Special characters ###
HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the entity syntax. For example, to display a less than symbol (<) you would instead use the less than entity (&lt;). You can also use the entity syntax to represent any unicode character.

```
Character	Entity
&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;
```

### HTML Versions ###
Understanding when different HTML features were introduced helps you know what has been around for a long time and probably supported by all browsers, and what is new and may not work everywhere. HTML is pretty stable, but it is still good to check a website like MDN or canIUse to make sure.

```
Year	Version	Features
1990	HTML1	format tags
1995	HTML2	tables, internationalization
1997	HTML3	MathML, CSS, frame tags
1999	HTML4	external CSS
2014	HTML5	email, password, media, and semantic tags
```

### index.html ###
By default a web server will display the HTML file named index.html when a web browser, such as Google Chrome, makes a request without asking for a specific HTML file. For example, when you ask for https://google.com in your web browser you will actually get back the HTML for the file https://google.com/index.html. For this reason, it is very common to name the main HTML file for your web application index.html.

### Rendering HTML ###
You can save any HTML file to your computer's disk and then open the file using your browser. You can also open the HTML file in VS Code and use the Live Server extension to display the HTML. Another way to easily play with HTML is to use a sandbox like CodePen. However, when you use CodePen it is not necessary to supply the HTML DocType header or the root html element since CodePen already assumes you are providing HTML. Here is our example HTML document rendered in CodePen.



## HTML structure elements ##
The two major purposes of HTML is to provide structure and content to your web application. Some of the common HTML structural elements include body, header, footer, main, section, aside, p, table, ol/ul, div, and span. We demonstrate the use of each element with the following HTML document. It starts with the top level content body. The body has three children, a header, main, and footer. Each of the body children then contains other structural content.

The header contains a paragraph with a span, and a navigation containing multiple divisions of sub-content.

The main contains multiple sections that contain either an unordered list (ul) or a table. Main also contains an aside for content that does not fit the content flow of the sections.

The footer has a content division with a single span.

```
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```
If we rendered this HTML, and added just a bit of styling, so we can see how they related to each other, we would see the following.

Properly representing the page structure using the elements is important not only so it makes logical sense to a programmer, but also so that automated tools like search indexing crawlers and accessibility screen readers can correctly interpret the document.

### Block and inline ###
There is a distinction between structure elements that are block vs inline. A block element is meant to be a distinct block in the flow of the content structure. An inline element is meant to be inline with the content flow of a block element. In other words, inline elements do not disrupt the flow of a block element's content. For example, the block element div (division) could have an inline element b in order to bring attention to a portion of its sub-text. Likewise a p (paragraph) element could have a span to mark the paragraph's sub-text as a person's name.

```
<div>He said <b>don't</b> cross the beams.</div>

<p>Authors such as <span>ee cummings</span> often used unconventional structure.</p>
```



## HTML input elements ##
From the very early days of HTML it contained elements for accepting the input of user data. These elements include the following:

```
Element	Meaning	Example
form	Input container and submission	<form action="form.html" method="post">
fieldset	Labeled input grouping	<fieldset> ... </fieldset>
input	Multiple types of user input	<input type="" />
select	Selection dropdown	<select><option>1</option></select>
optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
option	Selection option	<option selected>option2</option>
textarea	Multiline text input	<textarea></textarea>
label	Individual input label	<label for="range">Range: </label>
output	Output of input	<output for="range">0</output>
meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>
```

### Form element ###
The main purpose of the form element is to submit the values of the inputs it contains. Before JavaScript was introduced the form container element was essential because it was the only way for the browser to send the input data to a web server as part of a request to process the input and generate a new web page displaying the result of the input. With JavaScript we have much more control over input data and what is done with it. For example, in a single page application the JavaScript will dynamically rebuild the HTML elements to reflect the results of the user interaction. With this ability the data may not even be sent to the server. This greatly reduces the necessity of the form element, but it is often still used simply as a container. Just remember that you are not required to have a form element to use input elements.

Here is an example of a simple form that submits the value of a textarea element.

```
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```
Pressing the submit button sends the following data to the web server. The browser generates the data by combining the textarea's name attribute with the current value of the textarea.

```
ta-id=Some+text
```

### Input element ###
The input element represents many different input types. You set the type of input with the type attribute. There are several different types to choose from. This includes different flavors of textual, numeric, date, and color inputs.

```
Type	Meaning
text	Single line textual value
password	Obscured password
email	Email address
tel	Telephone number
url	URL address
number	Numerical value
checkbox	Inclusive selection
radio	Exclusive selection
range	Range limited number
date	Year, month, day
datetime-local	Date and time
month	Year, month
week	Week of year
color	Color
file	Local file
submit	button to trigger form submission
```
In order to create an input you specify the desired type attribute along with any other attribute associated with that specific input. Here is an example of a checked radio button and its associated label.

```
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
```
Most input elements share some common attributes. These include the following.

```
Attribute	Meaning
name	The name of the input. This is submitted as the name of the input if used in a form
disabled	Disables the ability for the user to interact with the input
value	The initial value of the input
required	Signifies that a value is required in order to be valid
The following shows what the inputs look like when rendered. Don't worry about how clunky they look right out of the box. We will fix that when we start styling things with CSS.
```

### Validating input ###
Several of the input elements have validation built into them. This means that they will not accept a value that is not for example, a number, a URL, outside of a range, or an email address. You can also specify the required attribute on an input element to mark it as requiring a value before it can be submitted. The pattern attribute exists on text, search, url, tel, email, and password inputs. When present, the pattern attribute provides a regular expression that must match for the input to be considered as valid.

You should also have validation built into your JavaScript that checks input data to ensure everything is valid before it is submitted. All of the input elements support functions for determining their validation state. Additionally, there are CSS style selectors for visualizing the validity of the input. In order to have a good user experience, it is critical that you provide sufficient user feedback early in the input process. A good design will give feedback as, or before, the user begins to input. A poor design will keep the user guessing as to why the data is not being accepted, or even if it was accepted.



## HTML media elements ##
The HTML elements that represent media include img, audio, video, svg, and canvas. The img, audio, and video elements are all simple references to an external file, but svg and canvas both contain the code to render a visual image that can even be animated.

### External media ###
The media tags that reference external media all take a URL as an attribute. The path represented by the URL can either be a relative path or full path. A full path includes the protocol, domain name, and path to the file.

```
https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg
```
A relative path references a file that is served from the same location as the HTML page rendering the element. You want to make the path as relative as possible so that you can move your code around without having to actually adjust all of the external page references. For example, if your HTML page is located in a directory with a subdirectory named images that contains a file named photo.jpg you would use a relative path as follows.

```
images/photo.jpg
```

#### Image ####
To include an image in your content you use the img element and specify the src attribute with the URL to the source image. In order to support accessibility, you should also include an alt attribute that describes the image. A full img element would look like the following.

```
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```

#### Audio ####
To include an audio file in your content you use the audio element and specify the src attribute with the URL to the source audio file. You can include the controls attribute if you want the user to be able to control the audio playback. If you do not display the controls then there is no visual representation of the audio in the rendered page. The autoplay attribute starts the audio playing as soon as the audio file is loaded, and the loop attribute keeps it playing over and over.

⚠ Note that automatically playing audio is strongly discouraged unless you provide a way for the user to opt-in to that behavior.

```
<audio controls src="testAudio.mp3"></audio>
```

#### Video ####
To include a video in your content you use the video element and specify the src attribute with the URL to the source video. Like the audio element you can include the controls or autoplay attributes.

⚠ Note that you may need to include the crossorigin="anonymous" attribute if you are requesting files from a different domain than the one serving your content.

```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

### Internal media ###
The internal media elements svg and canvas allow you to actually create images directly within your HTML.

#### Scalable Vector Graphics (SVG) ####
SVG is an extremely powerful and widely supported way to render graphics inline in your HTML. An example SVG graphic that draws a black border and a red circle looks like this:

```
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```

When combined with JavaScript and CSS you can produce some amazing visualizations. Checkout this CodePen for an example.

Consult the MDN documentation if you are interested in learning more about SVG.

#### Canvas ####
The canvas element was introduced to HTML in order to facilitate 2D drawing and animation. The HTML for the canvas element is fairly simple, but actually drawing on the canvas requires JavaScript support. Here again, is our simple red dot example.

```
<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
```



## Cascading Style Sheets ##
Cascading Style Sheets (CSS) converts the structure and content of HTML into a vibrant, responsive experience. The initial objective of CSS was to simply style the HTML based upon the desires of the user, developer, and browser. In modern web applications CSS styling focuses more on helping the developer create complex renderings of dynamic content that is responsive to the actions of the user and the device the application is rendered on. With CSS a web programmer can animate the page, deploy custom fonts, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation.

Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.

For example, consider the following rule.

```
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```
The selector p selects all paragraph elements in the HTML document. The four specified declarations then: 1) change the font to use a sans-serif font, 2) increase the font size to be twice as big as the default font, 3) change the text color to be navy, and 4) create a gray shadow for the text. The result looks like this.

### Associating CSS with HTML ###
There are three ways that you can associate CSS with HTML. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.

```
<p style="color:green">CSS</p>
```
The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.

```
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```
The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document.

```
<link rel="stylesheet" href="styles.css" />
```
**styles.css**
```
p {
  color: green;
}
```
All of the above examples are equivalent, but using the link element usually is the preferred way to define CSS.

### Cascading styles ###
Because elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times. For example, we might set color property for all body elements to be red, and then paragraph elements to be green, and then span elements to be blue, and finally use a style element on a specific span to be black.

```
<body>
  <p><span style="color:black">CSS</span></p>
</body>
```
```
body {
  color: red;
}
p {
  color: green;
}
span {
  color: blue;
}
```
In this case, the rules cascade down from the highest nodes in the DOM tree to the lowest level. Any declaration property defined at a lower level will override the higher declaration. You can see this happening if you use the browser's debugger. In Chrome right click on the element and select inspect. You can then click on each element in the debugger and see what the value of the color property is. For the case defined above you will see that each of the higher level declarations is crossed out until you get to the style explicitly defined on the element.

### The box model ###
CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element's box there are several internal boxes. The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace. It is important to understand each of these boxes so that you can achieve the desired visual result by applying the proper CSS declaration.

<img alt="box model" src="images/cssBoxModel.jpg">

By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.

### CSS Versions ###
As with HTML, CSS has evolved significantly over the years. The following version table gives you an idea of when certain features were added and therefore how stable the support for them are.

```
Year	Version	Features
1996	CSS1	selectors, font, color, background, alignment, margin, border, padding
1998	CSS2	positioning, z-index, bidirectional text, shadows
2011	CSS2.1	removed incompatible features
1999-2021	CSS3	enhancements for media, box, background, borders, color, template, multi-column, selectors
```
Beginning with CSS3 the specification was divided into modules so that they could be implemented at different levels of maturity. Whether these modules will culminate in a CSS4 specification has not yet been decided.



## CSS Selectors ##
The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to. The CSS rule selector can take many forms. In order to explain the most common selectors we need some demonstration HTML. Let's image a simple document describing the departments in a university. In our case we have a physics and a chemistry department. The information provided is very sparse, but the structure provided by the HTML is enough to work with.

```
<body>
  <h1>Departments</h1>
  <p>welcome message</p>
  <section id="physics">
    <h2>Physics</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
</body>
```
By default every browser defines a base set of styles that it applies to all HTML. This varies slightly from browser to browser, but for the most part our document would render like this using the base browser styles.

We would like to style our document so that it looks like this when we are done.

### Element type selector ###
To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the body element we will cascade our declaration down to all the children of the body, which is the whole document.

```
body {
  font-family: sans-serif;
}
```
Note that we could also use the wildcard element name selector (*) to select all elements, but for our needs the body element will work just fine.

We can also use element name selectors to give a bottom border to the top level heading (h1), as well as modify the section elements to pop out with a gray background and some white space in the padding and margins.

```
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```

### Combinators ###
Next we want to change the color of the second level headings (h2), but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all h2 elements that are descendants of section elements.

```
section h2 {
  color: #004400;
}
```
There are other types of combinators that you can use. These include the following.

```
Combinator	Meaning	Example	Description
Descendant	A list of descendants	body section	Any section that is a descendant of a body
Child	A list of direct children	section > p	Any p that is a direct child of a section
General sibling	A list of siblings	div ~ p	Any p that has a div sibling
Adjacent sibling	A list of adjacent sibling	div + p	Any p that has an adjacent div sibling
```
We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.

```
h2 ~ p {
  padding-left: 0.5em;
}
```

### Class selector ###
The next selector we will use is the class selector. Remember that any element can have zero or more classifications applied to it. For example, our document has a class of introduction applied to the first paragraph, and a class of summary applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (.summary).

```
.summary {
  font-weight: bold;
}
```
You can also combine the element name and class selectors to select all paragraphs with a class of summary.

```
p.summary {
  font-weight: bold;
}
```

### ID selector ###
ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (#). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.

```
#physics {
  border-left: solid 1em purple;
}
```

### Attribute selector ###
Attribute selectors allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute (a[href]). You can also specify a required value for an attribute (a[href="./fish.png"]) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (p[href*="https://"]).

```
p[class='summary'] {
  color: red;
}
```
For a full description of attribute selections refer to MDN.

### Pseudo selector ###
CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

```
section:hover {
  border-left: solid 1em purple;
}
```



## CSS Declarations ##
CSS rule declarations specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document. For our purposes we will discuss just a few of the more commonly used ones so that you can get a feel for wide variety of functionality they represent.

```
Property	Value	Example	Discussion
background-color	color	red	Fill the background color
border	color width style	#fad solid medium	Sets the border using shorthand where any or all of the values may be provided
border-radius	unit	50%	The size of the border radius
box-shadow	x-offset y-offset blu-radius color	2px 2px 2px gray	Creates a shadow
columns	number	3	Number of textual columns
column-rule	color width style	solid thin black	Sets the border used between columns using border shorthand
color	color	rgb(128, 0, 0)	Sets the text color
cursor	type	grab	Sets the cursor to display when hovering over the element
display	type	none	Defines how to display the element and its children
filter	filter-function	grayscale(30%)	Applies a visual filter
float	direction	right	Places the element to the left or right in the flow
flex			Flex layout. Used for responsive design
font	family size style	Arial 1.2em bold	Defines the text font using shorthand
grid			Grid layout. Used for responsive design
height	unit	.25em	Sets the height of the box
margin	unit	5px 5px 0 0	Sets the margin spacing
max-[width/height]	unit	20%	Restricts the width or height to no more than the unit
min-[width/height]	unit	10vh	Restricts the width or height to no less than the unit
opacity	number	.9	Sets how opaque the element is
overflow	[visible/hidden/scroll/auto]	scroll	Defines what happens when the content does not fix in its box
position	[static/relative/absolute/sticky]	absolute	Defines how the element is positioned in the document
padding	unit	1em 2em	Sets the padding spacing
left	unit	10rem	The horizontal value of a positioned element
text-align	[start/end/center/justify]	end	Defines how the text is aligned in the element
top	unit	50px	The vertical value of a positioned element
transform	transform-function	rotate(0.5turn)	Applies a transformation to the element
width	unit	25vmin	Sets the width of the box
z-index	number	100	Controls the positioning of the element on the z axis
```

### Units ###
You can use a variety of units when defining the size of a CSS property. For example, the width of an element can be defined using absolute units such as the number of pixels (px) or inches (in). You can also use relative units such as a percentage of the parent element (50%), a percentage of a minimum viewport dimension (25vmin), or a multiplier of the size of the letter m (1.5rem) as defined by the root element.

```
p {
  width: 25%;
  height: 30vh;
}
```
Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

```
Unit	Description
px	The number of pixels
pt	The number of points (1/72 of an inch)
in	The number of inches
cm	The number of centimeters
%	A percentage of the parent element
em	A multiplier of the width of the letter m in the parent's font
rem	A multiplier of the width of the letter m in the root's font
ex	A multiplier of the height of the element's font
vw	A percentage of the viewport's width
vh	A percentage of the viewport's height
vmin	A percentage of the viewport's smaller dimension
vmax	A percentage of the viewport's larger dimension
```

### Color ###
CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

```
Method	Example	Description
keyword	red	A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)
RGB hex	#00FFAA22 or #0FA2	Red, green, and blue as a hexadecimal number, with an optional alpha opacity
RGB function	rgb(128, 255, 128, 0.5)	Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage
HSL	hsl(180, 30%, 90%, 0.5)	Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is.
```



## CSS Fonts ##
Choosing appropriate fonts is a key web application design characteristic. A beautiful modern font will make your application enjoyable to use. Picking a hard to read font, an overused font, or using too many fonts will turn users away.

The CSS font-family property defines what fonts should be used. The property value represents an ordered list of fonts. The first font in the list that is available will be used. This ability to select from a list of fonts is important because different operating systems have different default fonts and your first choice may not be available.

### Font families ###
There are four major families of fonts: Serif, sans-serif, fixed, and symbol. A serif is a small stroke attached to the ends of a character's major strokes. Serif fonts have the extra strokes; sans-serif fonts do not. Fixed fonts characters all are the same size. This is useful for lining up text when doing things like coding or displaying tabular data. Symbol fonts represent non-language characters such as arrows or emojis.

### Importing fonts ###
In addition to referencing standard fonts found on the user's computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the @font-face rule and provide the font name and source location.

```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```

If you do not want to host font files on your server, then you can load them from a font provider. For example, Google provides a large selection of open source fonts that you can use without paying any royalties. The easiest way to use Google fonts is to use a CSS import statement to reference the Google Font Service. This will automatically generate the CSS for importing the font.

```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```



## CSS Animation ##
Using CSS to animate your components is an easy way to make your application feel alive and interactive. You create CSS animations using the animation properties and defining keyframes for what the element should look like at different times in the animation. Let's walk through an example.

We have a paragraph of centered text and we want it to zoom in until its size is 20% of the view height.

```
p {
  text-align: center;
  font-size: 20vh;
}
```
To make this happen we specify that we are animating the selected elements by adding the animation-name property with a value of demo. This name refers to the name of the keyframes that we will specify in a minute. The keyframes tell what CSS properites should be applied at different key points in the animation sequence. We also add an animation-duration property in order to specify that the animation should last for three seconds.

```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```
Now we are ready to create the keyframes. We don't have to define what happens at every millisecond of the animation. Instead we only need to define the key points, and CSS will generate a smooth transition to move from one keyframe to another. In our case we simply want to start with text that is invisible and have it zoom into the full final size. We can do this with two frames that are designated with the keywords from and to.

```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```
That's everything we need to do. However, let's make one more addition. It would look better if towards the end, the paragraph bounced out a little bigger than its final size. We can accommodate that by adding another key frame that happens 95 percent through the animation.

```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```
Animation is not just for pushing buttons or making text float around. Here is an example of animating a watch using only HTML and CSS.



## Responsive design ##
Modern web applications are expected to run well on a large variety of computing devices. This includes everything from desktops, to mobile phones, to shopping kiosks, to car dashboards. This ability to reconfigure the interface so the application accommodates and takes advantage of the screen's size and orientation is called responsive design.

Much of HTML and CSS is already fluid due to the fact that it responds to the browser window being resized. For example a paragraph element will resize when the browser window is resized. However, the following features can completely change the layout of the application based on the device's size and orientation.

### Display ###
The CSS display property allows you to change how an HTML element is displayed by the browser. The common options for the display property include the following.

```
Value	Meaning
none	Don't display this element. The element still exists, but the browser will not render it.
block	Display this element with a width that fills its parent element. A p or div element has block display by default.
inline	Display this element with a width that is only as big as its content. A b or span element has inline display by default.
flex	Display this element's children in a flexible orientation.
grid	Display this element's children in a grid orientation.
```
We can demonstrate the different CSS display property values with the following HTML that contains a bunch of div elements. By default div elements have a display property value of block.

```
<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>
```
With the default of block this HTML would render like this.

If we modify the display property associated with each element with the following CSS, then we get a totally different rendering.

```
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

### Viewport meta tag ###
When smart mobile devices started gaining popularity they began to be used to view websites. However, the websites were optimized for desktop displays and not little tiny mobile screens. To solve this mobile browsers automatically started scaling the website so that it looked better on a small screen. Unfortunately, as web applications started being responsive to the screen size, the mobile browser's scaling got in the way. The solution is to include a meta tag in the head element of all your HTML pages. This tells the browser to not scale the page.

```
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

### Float ###
The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it. For example, if we had an aside element followed by a large paragraph of text, we could create the following CSS rule in order to cause the text to wrap around the aside.

```
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```

When the browser resizes, the text will flow around the floating element. You can use this CodePen to experiment with float. Try changing the descriptor value to none or left and see what happens.

### Media queries ###
One of the main CSS features for creating responsive applications is the @media selector. This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

We can use the @media selector to tell us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees.

```
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```
We can demonstrate the result of applying the media selector by using the browser's debugger and switching into phone and responsive mode. You can also use this CodePen and play with it yourself by simply resizing the browser's window.

You can also use media queries to make entire pieces of your application disappear, or move to a different location. For example, if we had an aside that was helpful when the screen is wide, but took up too much room when the screen got narrow, we could use the following media query to make it disappear.

```
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

Here is the CodePen for this example.

### Grid and Flexbox ###
The final two responsive technologies that we want to discuss are Grid and Flexbox. These are both CSS display modes that automatically respond to screen sizes to position and resize their child elements. We will discuss each of these in detail in the following instruction.



## CSS Grid ##
The grid display layout is useful when you want to display a group of child elements in a responsive grid. We start with a container element that has a bunch of child elements.

```
<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
We turn this into a responsive grid by including a CSS display property with the value of grid on the container element. This tells the browser that all of the children of this element are to be displayed in a grid flow. The grid-template-columns property specifies the layout of the grid columns. We set this to repeatedly define each column to auto-fill the parent element's width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (1fr) of the parents total width. A fractional unit is dynamically computed by splitting up the parent element's width into equal parts. Next, we fix the height of the rows to be exactly 300 pixels by specifying the grid-auto-rows property. Finally, we finish off the grid configuration by setting the grid-gap property to have a gap of at least 1 em between each grid item.

```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```



## CSS Flexbox ##
The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls on the left and content on the right.

So we can visualize our design by quickly sketching it out.

Next we build our structural HTML to match our design.

```
<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>
```
Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.

```
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
```
To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

- header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
- footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
- main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.

```
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```
Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.

```
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```

### Media Query ###
That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orient the main sections as rows if it gets too narrow.

To support the narrow screen (portrait mode), we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.

To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.

```
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```



### CSS Frameworks ###
CSS frameworks provide functions and components that commonly appear in web applications. As web developers built more and more web applications they began to use the same patterns over and over. They combined these patterns into a shared package of code and contributed it to the world as open source repositories. This helped not only decrease the time to develop an application, but created a common user experience for the web in general.

Today, there are lots of different open source CSS frameworks available to choose from. Many of them contain the same types of functionality, but they all bring something a little different to the table.

### Tailwind ###
A new rising contender in the CSS framework space is Tailwind CSS and its associated component library Tailwind UI. In the 2022 StateOfCSS poll, Tailwind gained an impressive 46% general usage ranking with a retention rating of 78%, all within the last four years.

Tailwind takes a different approach than traditional CSS frameworks. Instead of using large, rich, CSS rulesets to compartmentalize styling and functionality, it uses smaller definitions that are applied specifically to individual HTML elements. This moves much of the CSS representation out of the CSS file and directly into the HTML.

```
<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p class="text-lg font-medium">“Tailwind CSS”</p>
</div>
```

### Bootstrap ###
The reigning champion for CSS frameworks is Bootstrap. Bootstrap has been supported by an active and vibrant community for over a decade and contains many lessons learned from real world applications. The major downside of Bootstrap is its own success. Because it is so popular, Bootstrap defines the de facto look and feel of websites. This is great for user experience continuity, but it makes it difficult for a website to grab the attention of new users.

#### Getting bootstrap ####
You can integrate Bootstrap into your web applications simply by referencing the Bootstrap CSS files from their content delivery network (CDN). You then add the HTML link elements to your head element like this.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
If you are going to use Bootstrap components that require JavaScript (carousel, buttons, and more), you will also need to include Bootstrap's JavaScript module. You add this by putting the following at the end of your HTML body element.

```
<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```
You don't need to worry about this now, but later on, when we introduce the downloading of JavaScript packages, you can use the Node Package Manager (NPM) to download Bootstrap and include it in your source code. That way you don't have to rely on someone else's server to provide you with a vital piece of your application. For future reference, to include Bootstrap in your application using NPM you would run the following from your console.

```
npm install bootstrap@5.2.3
```
⚠ Note that those links are version specific (version 5 in this case). You will want to get the latest version links when you begin building your application.

#### Using bootstrap ####
Once you have Bootstrap linked in your HTML files you can begin using the components it provides. Let's start with a simple button. When we use the Bootstrap btn CSS class, the button gets a nice looking rounded appearance. The Bootstrap btn-primary CSS class shades the button with the current primary color for the application, which by default is blue. The following demonstrates the difference between a Bootstrap style button and a plain vanilla button. Functionally they both work exactly the same. The Bootstrap button is just a lot easier on the eyes.

```
// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button>
```



## Debugging CSS ##
CSS is extremely powerful, but sometimes is can be very frustrating to figure out why your page is not rendering the way that you expect. To help you understand why things are rendering the way they are you can use the browser's developer tool to inspect the CSS properties and visualize the HTML layout. Using the Google Chrome debugger you can access the developer tools by right clicking on the HTML page element that you want to debug and selecting the inspect option. You can experience this by creating a directory that contains the following content, composed of an HTML file (index.html) and a CSS file (index.css). This simple example has one paragraph of text and uses flex to center the text.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="index.css" />
  </head>
  <body>
    <p>Center text in centered element</p>
  </body>
</html>
```
```
* {
  border: thick solid blue;
  box-sizing: border-box;
  padding: 0.2em;
  font-size: 24px;
  font-family: Arial;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

p {
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  text-align: center;
}
```
Open the directory with VS Code and use the Live Server extension to view the HTML in the Chrome browser. In the browser, right click on the text and select inspect. This will open the debugger window and display the Elements tab. As you move your cursor over the different elements you will visually see what the padding, borders, and margins are set to. The Styles pane shows all of the CSS properties applied to the currently selected element. If you scroll down to the bottom of the styles pane you will see the CSS box. By moving the cursor over the different parts of the CSS box it will highlight the different box parts in the browser window.

You can change any of the CSS properties, and even add new properties, directly in the debugger. This allows you to see what each property is contributing and change them to see how that impacts the rendering. This is a great way to figure out what CSS works best without having to continually change the CSS file and refresh the browser.

This example has a small problem. Each element has with a blue border and some padding. But the body element does not render any padding at the bottom. Inspecting the body element and looking at the CSS box reveals that the default margin for the elements is pushing the body element down so that the padding overflows into its parent element. We can fix this by setting the margin for elements to be zero.

Now, notice that if you resize the browser so that it is wider, the centered text will appear left justified.



## JavaScript introduction ##
Officially known as ECMAScript, JavaScript is a weakly typed language based upon concepts found in C, Java, and Scheme. It is by far the most used programming language in the world. It runs on every web browser, and it is commonly used as a web server language and for creating serverless functions. In this instruction we will cover the basic parts of the language necessary to create a reasonable website. There are many features of the language that will not be discussed, and you should take time to dig into the corners of the language as time allows. The more effectively you understand JavaScript, the better web programmer you will be.

Typically JavaScript is executed using an interpreter at runtime instead of compiling it into a machine specific binary at build time. This has the advantage of making JavaScript very portable, but also allows for many errors, such as using an undefined variable. These types of errors commonly only get discovered when the program crashes during execution.

### JavaScript Versions ###
The following table describes the version history of JavaScript. You don't need to worry too much about versions right now, but this is important to be aware of since browser compatibility is always an issue when developing a web application. When considering the use of a JavaScript feature you should consult websites like MDN or CanIUse to see how well the feature is supported.

```
Year	Version	Features
1997	ES1	types, functions
1999	ES3	regex, exceptions, switch
2009	ES5	json, array iteration
2015	ES6	let/const, default params, classes, template literals, destructuring, generators, promises, modules, internationalization
2016	ES2016	array.includes
2017	ES2017	async/await
2018	ES2018	rest/spread, promise.finally
2019	ES2019	string.trim
2020	ES2020	?? operator
```

### Getting started ###
Let's start with a basic example. The following JavaScript will concatenate three strings together and then throw away the result. Not very useful, but JavaScript doesn't complain much.

```
'Hello' + ' ' + 'world';
```
Only slightly more complex is to call a function with the result of our concatenated string. In this case we call the JavaScript runtime's built in function console.log to output the string to the debugger console.

```
console.log('Hello' + ' ' + 'world');
// OUTPUT: Hello world
```
You can also write your own functions.

```
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
```
### Comments ###
You can comment your JavaScript with either line or block comments.

```
// Line comment

/*
Block comment
*/
```

### Code delimiters ###
While not technically required in most cases, it is considered good form to end JavaScript statements with a semicolon (;). Code blocks, and their resulting scope, are defined with curly braces ({ }).

### Playgrounds ###
Before we go any further we need a way for you to write and run JavaScript yourself. There are two easy ways to do this.

1. Use an online sandbox like CodePen. With CodePen you can write whatever JavaScript you would like and immediately see the results. Make sure you display the CodePen's Console window if your JavaScript is using the console.log function.

2. Use your browser's debugger. For example, if you open Chrome and press F12 the debugger will display. Select the Console menu option. This will display a JavaScript interpreter where you can write and execute your code.



## JavaScript console ##
The JavaScript console object provides interaction with the JavaScript runtime's debugger console. This usage of console should not be confused with your operating system's console (AKA terminal or command line). The console object provides functionality for outputting the value of text and objects, running timers, and counting iterations. These are useful debugging tools when you can actually execute your code in an interactive debugger (such as VS Code).

### Log ###
The basic usage of the console object is to output a log message.

```
console.log('hello');
// OUTPUT: hello
```
You can create formatted messages in the log parameter.

```
console.log('hello %s', 'world');
// OUTPUT: hello world
```
You can even specify CSS declarations in order to style the log output.

```
console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
```

### Timers ###
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.

```
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

### Count ###
To see how many times a block of code is called you can use the count function.

```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```



## Adding JavaScript to HTML ##
You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or by using the src attribute of the script element to reference an external JavaScript file.

**index.js**
```
function sayHello() {
  console.log('hello');
}
```

**index.html**
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```
Notice that we call the sayHello and sayGoodbye JavaScript functions from the HTML in the onclick attribute of the button element. Special attributes like onclick automatically create event listeners for different DOM events that call the code contained in the attribute's value. The code specified by the attribute value can be a simple call to a function or any JavaScript code.

```
<button onclick="let i=1;i++;console.log(i)">press me</button>
<!-- OUTPUT: 2 -->
```



## JavaScript type and construct ##
### Declaring variables ###
Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.

```
let x = 1;

const y = 2;
```
⚠ Originally JavaScript used the keyword var to define variables. This has been deprecated because it causes hard-to-detect errors in code related to the scope of the variable. You should avoid var and always declare your variables either with let or const.

### Type ###
JavaScript defines several primitive types.

```
Type	Meaning
Null	The type of a variable that has not been assigned a value.
Undefined	The type of a variable that has not been defined.
Boolean	true or false.
Number	A 64-bit signed number.
BigInt	A number of arbitrary magnitude.
String	A textual sequence of characters.
Symbol	A unique value.
```
Of these types Boolean, Number, and String are the types commonly thought of when creating variables. However, variables may refer to the Null or Undefined primitive. Because JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of Undefined.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following:

```
Type	Use	Example
Object	A collection of properties represented by name-value pairs. Values can be of any type.	{a:3, b:'fish'}
Function	An object that has the ability to be called.	function a() {}
Date	Calendar dates and times.	new Date('1995-12-17')
Array	An ordered sequence of any type.	[3, 'fish']
Map	A collection of key-value pairs that support efficient lookups.	new Map()
JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}
```

### Common operators ###
When dealing with a number variable, JavaScript supports standard mathematical operators like + (add), - (subtract), * (multiply), / (divide), and === (equality). For string variables, JavaScript supports + (concatenation) and === (equality).

### Type conversions ###
JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometimes the results of automatic conversions can be unexpected from programmers who are used to strongly typed languages. Consider the following examples.

```
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```
Getting unexpected results is especially common when dealing with the equality operator.

```
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```
⚠ The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

```
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```
Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

```
('b' + 'a' + +'a' + 'a').toLowerCase();
```

### Conditionals ###
JavaScript supports many common programming language conditional constructs. This includes if, else, and if else. Here are some examples.

```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
You can also use the ternary operator. This provides a compact if else representation.

```
a === 1 ? console.log(1) : console.log('not 1');
```
You can use boolean operations in the expression to create complex predicates. Common boolean operators include && (and), || (or), and ! (not).

```
if (true && (!false || true)) {
  //...
}
```

### Loops ###
JavaScript supports many common programming language looping constructs. This includes for, for in, for of, while, do while, and switch. Here are some examples.

#### for ####
Note the introduction of the common post increment operation (i++) for adding one to a number.

```
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```

#### do while ####
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
#### while ####
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

#### for in ####
The for in statement iterates over an object's property names.

```
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```
For arrays the object's name is the array index.

```
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```

#### for of ####
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

```
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```

#### switch ####
Use the switch statement to select one of many code blocks to be executed.
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution inside the switch block. It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

The default keyword specifies the code to run if there is no case match.

If multiple cases matches a case value, the first case is selected. If no matching cases are found, the program continues to the default label. If no default label is found, the program continues to the statement(s) after the switch.

Sometimes you will want different switch cases to use the same code. In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
```
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

#### Break and continue ####
All of the looping constructs demonstrated above allow for either a break or continue statement to abort or advance the loop.

```
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```



## JavaScript string ##
Strings are a primitive type in JavaScript. A string variable is specified by surrounding a sequence of characters with single quotes ('), double quotes ("), or backticks (`). The meaning of single or double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.

```
'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```

### Unicode support ###
JavaScript supports Unicode by defining a string as a sequence of 16-bit unsigned integers that represent UTF-16-encoded characters. Unicode support allows JavaScript to represent most languages spoken on the planet. This includes those that are read from right to left.

حجر

أقول لهذا الحجر: أنا أنت. فيقول: لستَ مرناً الى هذا الحدّ. أقول: قلبي مثلك؟ فيقول:

However, there are several important steps you must take in order to make your web application fully internationalized. This includes handling of currency, time, dates, iconography, units of measure, keyboard layouts, and respecting local customs. Read this article on the W3C website to learn more about internationalization.

### String functions ###
The string object has several interesting functions associated with it. Here are some of the commonly used ones.

```
Function	Meaning
length	The number of characters in the string
indexOf()	The starting index of a given substring
split()	Split the string into an array on the given delimiter string
startsWith()	True if the string has a given prefix
endsWith()	True if the string has a given suffix
toLowerCase()	Converts all characters to lowercase
```
```
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```



## Functions ##
In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

```
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```
A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

```
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
```

### Function parameters ###
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

```
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

### Anonymous functions ###
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

```
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```

### Creating, passing, and returning functions ###
Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

```
// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
```

### Inner functions ###
Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

```
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
```



## JavaScript arrow function ##
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

```
() => 3;
```

The following two invocations of sort are equivalent.

```
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

### Return values ###
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

### This pointer ###
Next, arrow functions inherit the this pointer from the scope in which they are created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.

The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

```
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.

```
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```
Now, when we call the closure function, it will output the values contained in the scope in which it was created, instead of the current values of the variables.

```
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

### Putting it all together ###
Now that you know how functions work in JavaScript, let's look at an example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a debounce function.

The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.

The following code calls the browser's window.addEventListener function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to addEventListener specifies that it wants to listen for scroll events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named debounce.

The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.

```
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
```
The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the windowFunc it sets a timer based on the value of windowMs. If the debounce function is called again before the window times out then it resets the timeout.

```
function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
```



## JavaScript array ##
JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

```
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
```

### Object functions ###
The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

```
Function	Meaning	Example
push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop()
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => i < 1)
```
```
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```



## JSON ##
JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, RFC 8259).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

#### Format ####
A JSON document contains one of the following data types:

```
Type	Example
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null
```
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
JSON is always encoded with UTF-8. This allows for the representation of global data.

#### Converting to JavaScript ####
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

```
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.



## JavaScript object and classes ##
A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

```
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.

### Object-literals ###
You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

```
const obj = {
  a: 3,
  b: 'fish',
};
```

### Object functions ###
Object has several interesting static functions associated with it. Here are some of the commonly used ones.

```
Function	Meaning
entries	Returns an array of key value pairs
keys	Returns an array of keys
values	Returns an array of values
```
```
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

### Constructor ###
Any function that returns an object is considered a constructor and can be invoked with the new operator.

```
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

```
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

### This pointer ###
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.

### Classes ###
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

```
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties and functions of classes private by prefixing them with a #.

```
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

### Inheritance ###
Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.

```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```



## JavaScript regular expressions ##
Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

```
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.

```
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```



## JavaScript rest and spread ##
### Rest ###
Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.

```
function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
```

However sometimes you don't have an array to work with. In this case you could create one on the fly.

```
function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
```
But JavaScript provides the rest syntax to make this easier. Think of it as a parameter that contains the rest of the parameters. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.

```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
Note that you can only make the last parameter a rest parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, rest allows JavaScript to provide what is called variadic functions.

### Spread ###
Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```



## JavaScript exceptions ##
JavaScript supports exception handling using the try catch and throw syntax. An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime, for example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the try keyword, and follow the try block with a catch block. If within the try block, including any functions that block calls, an exception is thrown, then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a finally block that is always called whenever the try block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

```
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```
For example:

```
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```
⚠ When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a file not found exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a file not found exception when the file is required for your code to run, such as a required configuration file. Your code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.

### Fallbacks ###
The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.

```
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```



## JavaScript destructuring ##
Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.

An example of destructuring arrays looks like the following.

```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

You can also combine multiple items from the original object using rest syntax.

```
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
This works in a similar manner for objects, except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When destructuring objects, you explicitly specify the properties you want to pull from the source object.

```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```
You can also map the names to new variables instead of just using the original property names.

```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```
Default values may also be provided for missing ones.

```
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```
Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.

```
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```



## Scope ##
Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:

1. Global - Visible to all code
2. Module - Visible to all code running in a module
3. Function - Visible within a function
4. Block - Visible within a block of code delimited by curly braces
### Var ###
Initially JavaScript used the keyword var to declare a variable. The problem with var, unlike const or let, is that it ignores block scope. Variables declared with var are always logically hoisted to the top of the function. For example, the following code shows the same variable name being used within different enclosing scopes. However, because var ignores block scope the for loop is simply assigning a new value to x rather than declaring a new variable that has the same name.

```
var x = 10;
console.log('start', x);

for (var x = 0; x < 1; x++) {
  console.log('middle', x);
}

console.log('end', x);

// OUTPUT: start 10
//         middle 0
//         end 1
```
⚠ There are few cases where it makes sense to use var. It is strongly suggested that you only use const and let unless you fully understand why you are using var.

### This ###
The keyword this represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The this variable is automatically declared and you can reference this anywhere in a JavaScript program. Because the value of this depends upon the context in which it is referenced, there are three different contexts to which this can refer:

1. Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
2. Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
3. Object - When this is referenced in an object it refers to the object.
```
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```
Running the above code in a browser results in the following.

```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```
Note that if we were not using JavaScript strict mode then globalFunctionThis would refer to Window.

### Closure ###
A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside that function. This holds true even if you pass the function outside of the scope of its original creation.

Here is an example of a function that is created as part of an object. That means that function has access to the object's this pointer.

```
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```
Arrow functions are a bit different because they inherit the this pointer of their creation context. So if we change our previous example to return an arrow function, then the this pointer at the time of creation will be globalThis.

```
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```
However, if we make function in our object that returns an arrow function, then the this pointer will be the object's this pointer since that was the active context at the time the arrow function was created.

```
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```



## JavaScript modules ##
JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.

JavaScript got full module support with ES6, and they have become the standard module representation as browser support for ES modules is now almost universal.

In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules. For this discussion, we will focus only on ES modules.

Because modules create a file-based scope for the code they represent, you must explicitly export the objects from one file and then import them into another file. For example, here is a simple module that exports a function that displays an alert.

**alert.js**

```
export function alertDisplay(msg) {
  alert(msg);
}
```
You can import the module's exported function into another module using the import keyword.

**main.js**

```
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

### ES Modules in the browser ###
When you use ES modules in the browser via HTML script references, things get a little complicated. The key thing to understand is that modules can only be called from other modules. You cannot access JavaScript contained in a module from the global scope that your non-module JavaScript is executing in.

From your HTML, you can specify that you are using an ES module by including a type attribute with the value of module in the script element. You can then import and use other modules. This is shown in the example below.

**index.html**

```
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```
If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope. We do this by either attaching an event handler or explicitly adding a function to the global window object. In the example below, we expose the alertDisplay imported module function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler. We also expose the module function by attaching a keypress event.

**index.html**

```
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```
Now, if the button is pushed or a key is pressed our ES module function will be called.

### Modules with web frameworks ###
Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you usually don't have to worry about differentiating between global scope and ES module scope. The bundler will inject all the necessary syntax to connect your HTML to your modules. Historically, this was done by removing the modules and placing all of the JavaScript in a namespaced global partition. Now that ES Modules are supported on most browsers, the bundler will expose the ES module directly.

Because of the complex history of modules they can be a confusing topic, but it is well worth the time to understand how they work as they are a core piece of a web programmer's toolkit.



## Document Object Model ##
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

```
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```
```
p {
  color: red;
}
```
For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

### Accessing the DOM ###
Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through every element in the tree.

```
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

```
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

### Modifying the DOM ###
The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```
To delete elements call the removeChild function on the parent element.

```
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

### Injecting HTML ###
The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

```
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```
However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```
If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.

### Event Listeners ###
All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.

```
Event Category	Description
Clipboard	Cut, copied, pasted
Focus	An element gets focus
Keyboard	Keys are pressed
Mouse	Click events
Text selection	When text is selected
```
You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.

```
<button onclick='alert("clicked")'>click me</button>
```



## Local storage ##
The browser's localStorage API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user's name on one HTML page, and then retrieve the name later when a different HTML page is loaded. The user's name will also be available in local storage the next time the same browser is used to access the same website.

In addition to persisting application data between page renderings, localStorage is also used as a cache for when data cannot be obtained from the server. For example, your frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available.

### How to use LocalStorage ###
There are four main functions that can be used with localStorage.

```
Function	Meaning
setItem(name, value)	Sets a named item's value into local storage
getItem(name)	Gets a named item's value from local storage
removeItem(name)	Removes a named item from local storage
clear()	Clears all items in local storage
```
A local storage value must be of type string, number, or boolean. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion, and parse it back to JavaScript with JSON.parse() when retrieved.

### Example ###
Open your startup website and run the following code in the browser's dev tools console window.

```
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
```
**Output**

```
Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true]
```
Notice that you are able to see the round trip journey of the local storage values in the console output. If you want to see what values are currently set for your application, then open the Application tab of the dev tools and select Storage > Local Storage and then your domain name. With the dev tools you can add, view, update, and delete any local storage values.



## JS Promises ##
The rendering process of your HTML executes on a single thread. That means that you cannot take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript Promise. The execution of a promise allows the main rendering thread to continue while some action is executed in the background. You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three possible states.

1. pending - Currently running asynchronously
2. fulfilled - Completed successfully
3. rejected - Failed to complete
We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also in a for loop outside the promise so that both code blocks are running in parallel.

```
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

### Resolving and rejecting ###
Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

```
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```
If you wait ten seconds and then log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

```
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

### Then, catch, finally ###
With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```
We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed



## JavaScript Async/await ##
JavaScript Promise objects are great for asynchronous execution, but as developers began to build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.

```
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```
We can create equivalent executions with either a promise then/catch chain, or an await with a try/catch block.

**then/catch chain version**

```
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```
**async, try/catch version**

```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

### async ###
One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

```
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```
If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

```
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```
We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```
You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

### await ###
The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

```
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```
By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

### Putting it all together ###
You can see the benefit for async/await clearly by considering a case where multiple promises are required. For example, when calling the fetch web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

```
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```
With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

```
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```



## Debugging JavaScript ##
It is inevitable that your code is going to have problems, or bugs, at some point. That may be while you are originally authoring it, working on other code that changes assumed dependencies, or while enhancing the code with new functionality.

Learning how to quickly discover, and resolve, bugs will greatly increase your value as a web developer. Additionally, debugging skills can also be used during the development process. By following a pattern of writing a block of code and then stepping through, or debugging, the block, you gain confidence that the block is working as desired before moving on to the next block.

### Console debugging ###
One of the simplest ways to debug your JavaScript code is to insert console.log functions that output the state of the code as it executes. For example, we can create a simple web application that has an HTML and JavaScript file that demonstrates the difference between let and var. By inserting console.log statements into the code, we can see what the value of each variable is as the code executes.

**index.html**

```
<body>
  <h1>Debugging</h1>
  <script src="index.js"></script>
</body>
```
**index.js**

```
var varCount = 20;
let letCount = 20;

console.log('Initial - var: %d, let: %d', varCount, letCount);

for (var varCount = 1; varCount < 2; varCount++) {
  for (let letCount = 1; letCount < 2; letCount++) {
    console.log('Loop - var: %d, let: %d', varCount, letCount);
  }
}

const h1El = document.querySelector('h1');
h1El.textContent = `Result - var:${varCount}, let:${letCount}`;
console.log('Final - var: %d, let: %d', varCount, letCount);
```

Take the following steps to see the result of console debugging.

1. Create the above files in a test directory named testConsole
2. Open the testConsole directory in VS Code
3. Run index.html using the VS Code Live Server extension
4. Open the Chrome browser debugger (press F12)
5. Select the Console tab
6. Refresh the browser

You can use the debugger console window to inspect variables without using the console.log function from your code. For example, if you type varCount in the console window it will print out the current value of varCount. You can also execute JavaScript directly in the console window. For example, if you type varCount = 50 and press Enter it will change the current value of varCount.

### Browser debugging ###
console.log debugging is great for times when you just need to quickly see what is going on in your code, but to really understand the code as it executes you want to use the full capabilities of the browser's debugger.

Using the same setup we used for console.log debugging, open up Chrome's browser debugger, but this time select the source tab. This will display the source files that comprise the currently rendered content.

You can either select index.js from the source view on the left, or press CTRL-P (on Windows) or ⌘-P (on Mac) and then select index.js from the list that pops up. Then set a breakpoint on line 4 by clicking on the line number on the left of the displayed source code. This makes it so that the execution of code will pause whenever that line is executed. Refreshing the browser window will cause index.js to reload and pause on the breakpoint.

With the browser paused in the debugger you can move your mouse cursor over a variable to see its value, see what variables are in scope, set watches on variables, or use the console to interact with the code.

This gives you complete control to inspect what the JavaScript code is doing and experiment with possible alternative directions for the code. Take some time to poke around in the debugger. Learning how to exploit its functionality will make you a much better web developer.



## Node.js ##
In 2009 Ryan Dahl created Node.js. It was the first successful application for deploying JavaScript outside of a browser. This changed the JavaScript mindset from a browser technology to one that could run on the server as well. This means that JavaScript can power your entire technology stack. One language to rule them all. Node.js is often just referred to as Node, and is currently maintained by the Open.js Foundation.

“You can never understand everything. But, you should push yourself to understand the system”

— Ryan Dahl

Browsers run JavaScript using a JavaScript interpreter and execution engine. For example, Chromium based browsers all use the V8 engine created by Google. Node.js simply took the V8 engine and ran it inside of a console application. When you run a JavaScript program in Chrome or Node.js, it is V8 that reads your code and executes it. With either program wrapping V8, the result is the same.

### Installing NVM and Node.js ###
Your production environment web server comes with Node.js already installed. However, you will need to install Node.js in your development environment if you have not already. The easiest way to install Node.js is to first install the Node Version Manager (NVM) and use it to install, and manage, Node.js.

#### Installing on Windows ####
If you are using Windows, then follow the installation instructions from the windows-nvm repository. Click on latest installer and then scroll down to the Assets and download and execute nvm-setup.exe. Once the installation is complete, you will need to open a new console window so that it gets the updated path that includes NVM.

In the console application install the long term support (LTS) version of Node.

```
➜ nvm install lts
➜ nvm use lts
```

#### Installing on Linux or MacOS ####
If you are using Linux or MacOS then you can install NVM with the following console commands.

```
➜ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

➜ . ~/.nvm/nvm.sh
```
In the console application install the long term support (LTS) version of Node.

```
➜ nvm install --lts
```

### Checking that Node is installed ###
The node.js console application is simply called node. You can verify that Node is working correctly by running node with the -v parameter. Note that your version might be different than what is shown here. As long as it is an LTS version you should be fine.

```
➜ node -v
v20.10.0
```

### Running programs ###
You can execute a line of JavaScript with Node.js from your console with the -e parameter.

```
➜  node -e "console.log(1+1)"
2
```
However, to do real work you need to execute an entire project composed of dozens or even hundreds of JavaScript files. You do this by creating a single starting JavaScript file, named something like index.js, that references the code found in the rest of your project. You then execute your code by running node with index.js as a parameter. For example, with the following JavaScript saved to a file named index.js

```
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();
```
We can execute the JavaScript by passing the file to node, and receive the following result.

```
➜  node index.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5
```
You can also run node in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.

```
➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello
```

### Node package manager ###
While you could write all of the JavaScript for everything you need, it is always helpful to use preexisting packages of JavaScript for implementing common tasks. To load a package using Node.js you must take two steps. First install the package locally on your machine using the Node Package Manager (NPM), and then include a require statement in your code that references the package name. NPM is automatically installed when you install Node.js.

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the NPM website. However, before you start using NPM to install packages you need to initialize your code to use NPM. This is done by creating a directory that will contain your JavaScript and then running npm init. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use npm init -y and skip the Q&A.

```
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

### Package.json ###
If you list the files in the directory you will notice that it has created a file named package.json. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands (scripts) that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. The following shows what your package.json looks like currently. It has some default metadata and a simple placeholder script that just runs the echo command when you execute npm run test from the console.

```
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```
With NPM initialized to work with your project, you can now use it to install a node package. As a simple example, we will install a package that knows how to tell jokes. This package is called give-me-a-joke. You can search for it on the NPM website, see how often it is installed, examine the source code, and learn about who created it. You install the package using npm install followed by the name of the package.

```
➜  npm install give-me-a-joke
```
If you again examine the contents of the package.json file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the npm uninstall <package name here> console command.

With the dependency added, the unnecessary metadata removed, the addition of a useful script to run the program, and also adding a description, the package.json file should look like this:

```
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "Simple Node.js demo",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "node index.js"
  },
  "dependencies": {
    "give-me-a-joke": "^0.5.1"
  }
}
```
⚠ Note that when you start installing package dependencies, NPM will create an additional file named package-lock.json and a directory named node_modules in your project directory. The node_modules directory contains the actual JavaScript files for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do not want to check this directory into your source control system since it can be very large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node_modules in your .gitignore file.

When you clone your source code from GitHub to a new location, the first thing you should do is run npm install in the project directory. This will cause NPM to download all of the previously installed packages and recreate the node_modules directory.

The package-lock.json file tracks the version of the package that you installed. That way if you rebuild your node_modules directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.

With NPM and the joke package installed, you can now use the joke package in a JavaScript file by referencing the package name as a parameter to the require function. This is then followed by a call to the joke object's getRandomDadJoke function to actually generate a joke. Create a file named index.js and paste the following into it.

**index.js**

```
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```
If you run this code using node.js you should get a result similar to the following.

```
➜  node index.js
What do you call a fish with no eyes? A fsh.
```
This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.

1. Create your project directory
2. Initialize it for use with NPM by running npm init -y
3. Make sure .gitignore file contains node_modules
4. Install any desired packages with `npm install <package name here>`
5. Add `require('<package name here>')` to your application's JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with node index.js

### Deno and Bun ###
You should be aware that Ryan has created a successor to Node.js called Deno. This version is more compliant with advances in ECMAScript and has significant performance enhancements. There are also competitor server JavaScript applications. One of the more interesting rising stars is called Bun. If you have the time you should learn about them.



## Debugging Node.js ##
Previously your JavaScript debugging was done by running the Live Server VS Code extension and using the browser's debugging tools as it executed in the browser. Now that you are writing JavaScript that runs using Node.js, you need a way to launch and debug your code that runs outside of the browser. One great way to do that is to use the debugging tools built into VS Code. To debug JavaScript in VS Code you first need some JavaScript to debug. Open up VS Code and create a new file named main.js and paste the following code into the file.

```
let x = 1 + 1;

console.log(x);

function double(x) {
  return x * 2;
}

x = double(x);

console.log(x);
```
You can now debug main.js in VS Code by executing the Start Debugging command by pressing F5. The first time you run this, VS Code will ask you what debugger you want to use. Select Node.js.

The code will execute and the debug console window will automatically open to show you the debugger output where you can see the results of the two console.log statements found in the code.

You can pause execution of the code by setting a breakpoint. Move your cursor over to the far left side of the editor window. As you hover on the left side of the line numbers you will see a red dot appear. Click on the dot to set the breakpoint.

Now start the debugger again by pressing F5. The code will start running, but pause on the line with the breakpoint. You can then see the values of variables by looking at the variable window on the left, or by hovering your mouse over the variable you would like to inspect.

You can continue execution of the code by pressing F10 to step to the next line, F11 to step into a function call, or F5 to continue running from the current line. When the last line of code executes the debugger will automatically exit and you will need to press F5 to start it running again. You can stop debugging at any time by pressing SHIFT-F5.

Experiment with this simple file until you are comfortable running the debugger, setting breakpoints, and inspecting variables.

## Midterm Review ##

- Padding puts space around the content of selected elements.
- The CSS box model goes, from the outside in, margin, boarder, padding, content
- In JavaScript regular expressions, the i flag stands for case-insensitive matching. This means that your regex will match both uppercase and lowercase characters, regardless of the case in your pattern. Additionally a forward slash (/) indicates the beginning and end of the expression.
```
Flag	Description	Corresponding property
d	Generate indices for substring matches.	hasIndices
g	Global search.	global
i	Case-insensitive search.	ignoreCase
m	Allows ^ and $ to match next to newline characters.	multiline
s	Allows . to match newline characters.	dotAll
u	"Unicode"; treat a pattern as a sequence of Unicode code points.	unicode
v	An upgrade to the u mode with more Unicode features.	unicodeSets
y	Perform a "sticky" search that matches starting at the current position in the target string.	sticky
```

<img alt="regex" src="images/regex.png">

- `<javascript></javascript>` is not valid syntax for adding JavaScript to HTML
- The DOM textContent property sets the child text for the an element(?)
- This code adds a mouseover effect to **a** p element `document.querySelector('p').addEventListener('mouseover', console.log);`
- The `chmod +x` command in Linux adds the execute (x) permission to a file
- In CSS, the main difference between padding and margin is where they create space on a web page: 

**Padding**
Creates space inside an element, between its content and its border. Padding can be used to separate text and images, or to increase or decrease the size of an element. 

**Margin**
Creates space around an element, outside of its border. Margin can be used to separate elements from each other, or from the edge of the screen.
- The CSS property `padding: 0 0.3em;` sets the padding (the space between the content of an element and its border) on the element as follows: Top and bottom padding: 0 (no space). Left and right padding: 0.3em. The unit em is relative to the font size of the element. For example, if the font size is 16px, 0.3em equals 0.3 times 16px, which is 4.8px. This CSS rule creates space only on the left and right sides of the content but no space above or below.
- In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array.
- The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.
- The addEventListener() method attaches an event handler to a document. Following is an addEventListener example that adds a click event to the document:

```
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```

- In JavaScript, the # symbol is not a selector by itself. Instead, it is used in conjunction with the querySelector and querySelectorAll methods to select elements based on their ID.

**Example:**
```
// Select the element with the ID "myElement"
const element = document.querySelector("#myElement"); 

// Do something with the element
element.style.backgroundColor = "red"; 
```
**Explanation:**
1. querySelector("#myElement"): This method searches the entire document for the first element with the ID "myElement".
2. querySelectorAll("#myElement"): This method searches the entire document for all elements with the ID "myElement".

- By default, the HTML <span> element has a CSS display property value of inline. This means that:
1. The element does not start on a new line.
2. It only takes up as much width as necessary.
3. It does not break the flow of surrounding text or content.
The <span> element is typically used for styling or manipulating small portions of text or inline content.

- How to turn only text blue with divs: `div.header { color: blue; }`
- How to add an image with a hyperlink in HTML:

```
<html>
  <head>
  </head>
  <body>
    <a href="https://www.educative.io" target="_blank">
      <img src="https://www.educative.io/static/imgs/logos/logoMarkv2.png">
    </a>
  </body>
</html>
```
By adding the <img> tag inside an <a> tag the browser can see that the image should be clickable.

- Potential way to use JavaScript to select an element and change the text color: `document.getElementById("myP2").style.color = "blue";`
- The opening HTML tags for a second level heading is `<h2>`, a first level heading is `<h1>`, and a third level heading is `<h3>` respectively.
- To declare the document type to be HTML, you can add the following line of code to the top of your HTML document: `<!DOCTYPE html>`

- It is possible to add new properties to JavaScript objects. Here are two ways to do it:
1. Dot notation:
```
const person = {
  name: "John"
};

person.age = 30;

console.log(person); // { name: "John", age: 30 }
```
2. Bracket notation:
```
const car = {};

car["brand"] = "Toyota";

console.log(car); // { brand: "Toyota" }
```

- To specifically target the text "animal" and change it to "crow" while leaving the "fish" text unaffected, you can use JavaScript as follows:
```
// Select the first <span> element (which contains "animal")
document.querySelector('span').textContent = 'crow';
```

**Explanation:**
- document.querySelector('span') selects the first <span> element in the document (which contains the text "animal").
- .textContent = 'crow'; changes the text inside that <span> to "crow."

This approach works if the "animal" text is the first <span> element in the document. If there are more <span> elements and you need to be more specific, you can add classes or IDs to the <span> tags to differentiate them.
```
<span id="animal">animal</span>
<span>fish</span>
```
```
document.getElementById('animal').textContent = 'crow';
```
Here, the id="animal" ensures that only the span with "animal" is modified.

- The chmod (CHange MODe) command is used to change file and directory permissions on Unix and Unix-like systems. It allows users to control who can access files and directories, and what they can do with them.
- Nano is a simple, terminal-based text editor that allows users to edit text files directly from the command line. It's commonly used in Unix-based operating systems and is ideal for making small changes to configuration files or writing short plain text files.
- mv example: `mv [source_file_name(s)] [Destination_file_name]`
- man example: `man [command_name]`

- ssh example: `ssh [options] user@hostname`

**Key Components**
ssh: The command to start the SSH client.
user: The username you want to log in as (on the remote system).
hostname: The remote machine’s IP address or domain name (e.g., 192.168.1.10 or example.com).
options: Optional flags that modify the SSH behavior (e.g., port, identity file, etc.).

SSH with a custom port: If the SSH server is running on a different port (e.g., 2222 instead of the default 22), you can specify the port using the -p option: `ssh -p 2222 user@hostname`

Using an identity (private key) file: If the remote server uses a specific private key for authentication, you can specify the private key file with the -i option: `ssh -i /path/to/private_key user@hostname`

Running a command remotely: You can also execute a command on the remote server after logging in: `ssh user@hostname 'command'`

SSH with agent forwarding: To forward your local SSH agent to the remote server, use the -A option: `ssh -A user@hostname`

Enable verbose mode: For debugging purposes or to see detailed connection info, you can use the -v option: `ssh -v user@hostname`

- The wget command in Linux is a powerful utility used to download files from the web directly via the command line. It supports downloading files over protocols such as HTTP, HTTPS, and FTP: `wget [options] [URL]`
- The sudo (short for "superuser do") command in Linux allows a permitted user to execute a command as the superuser (root) or another user, as specified in the /etc/sudoers file. It is commonly used to run commands that require administrative or root-level privileges without logging in as the root user: `sudo [options] command`
- When the -la parameter is specified for the ls command in Linux, the following is true:

-l: This option stands for "long format." It displays detailed information about each file or directory, including:
1. File type and permissions.
2. Number of links to the file.
3. Owner name.
4. Owner group.
5. File size.
6. Last modified date and time.
7. File or directory name.

-a: This option stands for "all." It includes hidden files and directories in the output. In Unix-like systems, files and directories that begin with a dot (.) are considered hidden and are not shown by default.

The . represents the current directory, the .. represents the parent directory, the -rw-r--r-- indicates file permissions, and user group shows the owner and group.

- Top-Level Domain (TLD): `.com`; Root Domain: `example.com`; Subdomain: `blog.example.com`; `banana.fruit` (where banana is a subdomain of fruit, which is itself a subdomain of bozo.click)
- A web certificate, also known as an SSL certificate, is required to use HTTPS
- A DNS A record can point to an IP address or another A record
- Each port number is assigned to a specific protocol or service. Port 80 is used for HTTP traffic, port 443 is used for HTTPS (HyperText Transfer Protocol Secure) traffic, and port 22 is used for Secure Shell (SSH) communication and allows remote administration access to the VM
- `function (x) = {}` is not valid JavaScript function syntax
- The textContent property in the DOM (Document Object Model) is used to get or set the text content of an element and its descendants. It represents the textual content of a node and its child nodes.



## Web frameworks ##
Web frameworks seek to make the job of writing web applications easier by providing tools for completing common application tasks. This includes things like modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices.

Some frameworks take things beyond the standard web technologies (HTML, CSS, JavaScript) and create new hybrid file formats that combine things like HTML and JavaScript into a single file. Examples of this include React JSX, Vue SFC, and Svelte files. Abstracting away the core web file formats puts the focus on functional components rather than files.

There are lots of web frameworks to choose from and they evolve all the time. You can view the latest popularity poll at StateOfJS.

Each framework has advantages and disadvantages. Some are very prescriptive (opinionated) about how to do things, some have major institutional backing, and others have a strong open source community. Other factors you want to consider include how easy it is to learn, how it impacts productivity, how performant it is, how long it takes to build, and how actively the framework is evolving.

### Hello world examples ###
For our classwork we will use the web framework React. However, before we dig into React let's look at how the major frameworks would render a simple hello world application.

#### Vue ####
Vue combines HTML, CSS, and JavaScript into a single file. HTML is represented by a template element that can be aggregated into other templates.

**SFC**
```
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>
```

#### Svelte ####
Like Vue, Svelte combines HTML, CSS, and JavaScript into a single file. The difference here is that Svelte requires a transpiler to generate browser-ready code, instead of a runtime virtual DOM.

**Svelte file**
```
<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>
```

#### React ####
React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself leverages the functionality of JavaScript and can be represented as a function or class.

**JSX**
```
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};
```

**CSS**
```
p {
  color: green;
}
```

#### Angular component ####
An Angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that are usually grouped together in a directory rather than using the single file representation.

**JS**
```
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```

**HTML**
```
<p>hello {{name}}</p>
```

**CSS**
```
p {
  color: green;
}
```



## React ##
React, and its associated projects, provide a powerful web programming framework. The name React comes from its focus on making reactive web page components that automatically update based on user interactions or changes in the underlying data.

“The best drug is getting little things done that have been weighing on you. Instant high.”

— Jordan Walke (Source: Twitter)

React was created by Jordan Walke for use at Facebook in 2011. It was first used with Facebook's news feed and then as the main framework for Instagram. Shortly thereafter, Facebook open sourced the framework and it was quickly adopted by many popular web applications.

React abstracts HTML into a JavaScript variant called JSX. JSX is converted into valid HTML and JavaScript using a preprocessor called Babel. For example, the following is a JSX file. Notice that it mixes both HTML and JavaScript into a single representation.

```
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```
Babel will convert that into valid JavaScript:

```
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```

The `React.createElement` function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered, React will trigger dependent changes.



## Components ##
React components allow you to modularize the functionality of your application. This allows the underlying code to directly represent the components that a user interacts with. It also enables code reuse as common application components often show up repeatedly.

### The render function ###
One of the primary purposes of a component is to generate the user interface. This is done with the component's render function. Whatever is returned from the render function is inserted into the component HTML element.

As a simple example, a JSX file containing a React component element named Demo would cause React to load the Demo component, call the render function, and insert the result into the place of the Demo element.

**JSX**
```
<div>
  Component: <Demo />
</div>
```
Notice that Demo is not a valid HTML element. The transpiler will replace this tag with the resulting rendered HTML.

**React component**
```
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```
**Resulting HTML**
```
<div>Component: <b>Hello world</b></div>
```

### Properties ###
React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.

**JSX**
```
<div>Component: <Demo who="Walke" /><div>
```
**React component**
```
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```
**Resulting HTML**
```
<div>Component: <b>Hello Walke</b></div>
```

### State ###
In addition to properties, a component can have internal state. Component state is created by calling the React.useState hook function. The useState function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called clicked and toggles the click state in the updateClicked function that gets called when the paragraph text is clicked.

```
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```
You should note that you can use JSX even without a function. A simple variable representing JSX will work anyplace you would otherwise provide a component.

```
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```

### Class style components ###
In addition to the preferred function style components demonstrated above, React also supports class style components. However, you should note that the React team is moving away from the class style representation, and for that reason you should probably not use it. With that said, you are likely to see class style components and so you should be aware of the syntax. Below is the equivalent class style component for the Clicker component that we created above.

The major difference is that properties are loaded on the constructor and state is set using a setState function on the component object.

```
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

### Reactivity ###
A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.



## Toolchains ##
As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application tool chain include:

```
Code repository - Stores code in a shared, versioned location.
Linter - Removes, or warns of, non-idiomatic code usage.
Prettier - Formats code according to a shared standard.
Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
Testing - Automated tests at multiple levels to ensure correctness.
Deployment - Automated packaging and delivery of code from the development environment to the production environment.
```
The toolchain that we use for our React project consists of GitHub as the code repository, Vite for JSX, TS, development and debugging support, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.

You don't have to fully understand what each of these pieces in the chain are accomplishing, but the more you know about them the more you can optimize your development efforts.

In the following instruction we will show you how to use Vite to create a simple web application using the tools mentioned above. We will then demonstrate how to convert your startup into a modern web application by converting Simon to use Vite and React.



## React hooks ##
React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the useState hook.

```
function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
```

### useEffect hook ###
The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.

```
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
You can also take action when the component cleans up by returning a cleanup function from the function registered with useEffect. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.

```
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.

### Hook dependencies ###
You can control what triggers a useEffect hook by specifying its dependencies. In the following example we have two state variables, but we only want the useEffect hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the useEffect call.

```
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
If you specify an empty array [] as the hook dependency then it is only called when the component is first rendered.

Note that hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.



## Router ##
A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many that you can choose from. We will use react-router-dom Version 6. The simplified routing functionality of React-router-dom derives from the project react-router for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

A basic implementation of the router consists of a BrowserRouter component that encapsulates the entire application and controls the routing action. The Link, or NavLink, component captures user navigation events and modifies what is rendered by the Routes component by matching up the to and path attributes.

```
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```



## Reactivity ##
Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: props, state, and render.

When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's state or prop objects. React then monitors those objects and if it detects that they have changed it will call the component's render function so that the impact of the change is visualized.

The following example contains two components: a parent <Survey/> component and a child <Question/> component. The Survey has a state named color. The Question has a property named answer. The Survey passes its color state to the Question as a property. This means that any change to the Survey's color will also be reflected in the Question's color. This is a powerful means for a parent to control a child's functionality.

Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen. You only know that it will eventually happen.

```
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: </span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
```



## Vite ##
Now that we have covered the basics of React, we want to extend our usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application.

For our toolchain we are going to use Vite. Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.

To create a new React-based web application using Vite, open your console and run the following commands:
```
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```
This will create a new web application in the demoVite directory, download the required 3rd party packages, and start up the application using a local HTTP debugging server. You can tell Vite to open your browser to the URL that is hosting your application by pressing o, or press h to see all of the Vite CLI options.

Congratulations! You have just created your first React-enabled web application.

Once you have played around with the application in your browser, you can return to your console and stop Vite from hosting the application by pressing q.

### Generated project ###
Now, let's explore the application files that Vite created. From the console, use VS Code (code .) to open the project directory and take a look at the files.
```
Directory	File	Purpose
./		
index.html	Primary page for the application. This is the starting point to load all of the JSX components beginning with main.jsx.
package.json	NPM definition for package dependencies and script commands. This is what maps npm run dev to actually start up Vite.
package-lock.json	Version constraints for included packages (do not edit this).
vite.config.js	Configuration setting for Vite. Specifically this sets up React for development.
./public		
vite.svg	Vite logo for use as favicon and for display in the app.
./src		
main.jsx	Entry point for code execution. This simply loads the App component found in App.jsx.
index.css	CSS for the entire application.
App.jsx	JSX for top level application component. This displays the logs and implements the click counter.
App.css	CSS for the top level application component.
./src/assets		
react.svg	React logo for display in the app.
```
The main files in the application are index.html, main.jsx, and App.jsx. The browser loads index.html which provides the HTML element (#root) that the React application will be injected into. It also includes the script element to load main.jsx.

main.jsx creates the React application by associating the #root element with the App component found in App.jsx. This causes all of the component render functions to execute and the generated HTML, CSS, and JavaScript to be executed in index.html.

### JSX vs JS ###
The Vite CLI uses the .jsx extension for JSX files instead of the JavaScript .js extension. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you should prefer .jsx for files that contain JSX. The developers at AirBNB had an interesting conversation on this topic that you might browse if you would like to consider the differing opinions on this subject.

### Building a production release ###
When you execute npm run dev you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run npm run build. This executes the build script found in your package.json and invokes the Vite CLI. vite build transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named dist.

```
➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms
```

### Deploying a production release ###
The deployment script for Simon React (deployReact.sh) creates a production distribution by calling npm run build and then copying the resulting dist directory to your production server.

Take some time to build a production release by running npm run build. Then examine what Vite actually builds by examining the dist directory. For example, if you look at the dist/assets directory you will see the bundled and minified JavaScript and CSS files.



## The internet ##
The internet globally connects independent networks and computing devices. In a simplistic way, you can think of the internet as a massive redundant collection of wires that connect up all the computers in the world. A lot of those wires are wireless (wiFi, satellite, or cell), and not all of computers in the world are connected, but generally that is what the internet is. The deeper your mental model of the internet is, the more effectively you will be able to create web applications.

### Making connections ###
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.

```
➜  dig byu.edu

byu.edu.		5755	IN	A	128.187.16.184
```
Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection the transport and application layers start exchanging data.

#### Traceroute ####
You can determine the hops in a connection using the traceroute console utility. In the following example, we trace the route between a home computer and BYU. In the result you see the first address 192.168.1.1. This is the address of the network router the home computer is connected to. From there it goes through a couple devices that do not identify themselves and then hits the Google Fiber gateway. Google Fiber is the internet service provider, or ISP, for the requesting device. Then we jump through a few more unidentified devices before finally arriving at BYU (128.187.16.184).

```
➜  traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  10.942 ms  4.055 ms  4.694 ms
 2  * * *
 3  * * *
 4  192-119-18-212.mci.googlefiber.net (192.119.18.212)  5.369 ms  5.576 ms  6.456 ms
 5  216.21.171.197 (216.21.171.197)  6.283 ms  6.767 ms  5.532 ms
 6  * * *
 7  * * *
 8  * * *
 9  byu.com (128.187.16.184)  7.544 ms !X *  40.231 ms !X

 ```

If I run traceroute again I might see a slightly different route since every connection through the internet is dynamically calculated. The ability to discover a route makes the internet resilient when network devices fail or disappear from the network.

### Network internals ###
The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.

#### TCP/IP layers ####
```
Layer	      Example	        Purpose
Application	HTTPS	          Functionality like web browsing
Transport	  TCP	            Moving connection information packets
Internet	  IP	            Establishing connections
Link	      Fiber, hardware	Physical connections
```



## Web servers ##
A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

### Monolithic web servers ###
In the early days of web programming, you would buy a massive, complex, expensive, software program that spoke HTTP and installed on a hardware server. The package of server and software was considered the web server because the web service software was the only thing running on the server.

When Berners-Lee wrote his first web server it only served up static HTML files. This soon advanced so that they allowed dynamic functionality, including the ability to generate all the HTML on demand in response to a users interaction. That facilitated what we now know as modern web applications.

### Combining web and application services ###
Today, most modern programming languages include libraries that provide the ability to make connections and serve up HTTP. For example, here is a simple Go language program that is a fully functioning web service. Later on in the course we will show how this is done with JavaScript.

```
package main

import (
	"net/http"
)

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Listen for HTTP requests
	http.ListenAndServe(":3000", nil)
}
```
Being able to easily create web services makes it easy to completely drop the monolithic web server concept and just build web services right into your web application. With our simple go example we can add a function that responds with the current time, when the /api/time resource is requested.

```
package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func getTime(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, time.Now().String())
}

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Dynamically provide data
	http.HandleFunc("/api/time", getTime)

	// Listen for HTTP requests
	fmt.Println(http.ListenAndServe(":3000", nil))
}
```
We can run that web service code, and use the console application Curl to make an HTTP request and see the time response.

```
➜  curl localhost:3000/api/time

2022-12-03 09:50:37.391983 -0700
```

### Web service gateways ###
Since it is so easy to build web services it is common to find multiple web services running on the same computing device. The trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. Each service on the device starts up on a different port. In the example above, the go web service was using port 80. So you could just have a user access each service by referring to the port it was launched on. However, this makes it difficult for the user of the services to remember what port matches to which service. To resolve this we introduce a service gateway, or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTPS port 443. The gateway then looks at the request and maps it to the other services running on a different ports.

Our web server will use the application Caddy as the gateway to our services. The details of how Caddy works will be given later.

### Microservices
Web services that provide a single functional purpose are referred to as microservices. By partitioning functionality into small logical chunks, you can develop and manage them independently from other functionality in a larger system. They can also handle large fluctuations in user demand by simply running more and more stateless copies of the microservice from multiple virtual servers hosted in a dynamic cloud environment. For example, one microservice for generating your genealogical family tree might be able to handle 1,000 users concurrently. So in order to support 1 million users, you just deploy 1,000 instances of the service running on scalable virtual hardware.

### Serverless
The idea of microservices naturally evolved into the world of serverless functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.



## Domain names
In the instruction about the internet we showed how an IP address can be referenced by a domain name. You can get the IP address for any domain using the dig console utility. Notice that in the following example there are actually multiple IP addresses associated with the domain name amazon.com. This allows for redundancy in case one of the IP addresses fails to successfully resolve to a valid connection because the server listening at that IP address is not responding.

```
➜  dig amazon.com

amazon.com.		126	IN	A	205.251.242.103
amazon.com.		126	IN	A	52.94.236.248
amazon.com.		126	IN	A	54.239.28.85
```
A domain name is simply a text string that follows a specific naming convention and is listed in a special database called the domain name registry.

Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click. The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

<img alt="domain name parts" src="images/domainNameParts.jpg">

The owner of a root domain can create any number of subdomains off the root domain. Each subdomain may resolve to a different IP address. So the owner of cs260.click can have subdomains for travel (travel.cs260.click), finance (finance.cs260.click), or a blog (blog.cs260.click).

You can get information about a domain name from the domain name registry using the whois console utility.

```
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025
```
This provides information such as a technical contact to talk to if there is a problem with the domain, and an administrative contact to talk to if you want to buy the domain. Maybe we should talk to Mark and see if he is willing to sell.

### DNS
Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Of course you must also lease the IP address before you can use it to uniquely identify a device on the internet, but that is a topic for another time. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.

The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

### Leasing a domain name
You can pay to lease an unused domain name for a specific period of time. Before the lease expires, you have the right to extend the lease for an additional amount of time. The cost to buy the domain varies from something like $3 to $200 a year. Buying, or sub-leasing, an existing domain name from a private party can be very expensive, and so you are better off buying something obscure like idigfor.gold (currently available for only $101). This is one reason why companies have such strange names these days.



## Web services introduction
Up to this point, your entire application is loaded from your web server and runs on the user's browser. It starts when the browser requests the index.html file from the web server. The index.html, in turn, references other HTML, CSS, JavaScript, or image files. All of these files, that are running on the browser, comprise the frontend of your application.

Notice that when the frontend requests the application files from the web server it is using the HTTPS protocol. All web programming requests between devices use HTTPS to exchange data.

From our frontend JavaScript we can make requests to external services running anywhere in the world. This allows us to get external data, such as an inspirational quote, that we then inject into the DOM for the user to read. To make a web service request, we supply the URL of the web service to the fetch function that is built into the browser.

The next step in building a full stack web application, is to create our own web service. Our web service will provide the static frontend files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, executing application logic that you don't want your user to be able to see, and communicating with other users. The functionality provided by your web service represents the backend of your application.

Generally the functions provided by a web service are called endpoints, or sometimes APIs. You access the web service endpoints from your frontend JavaScript with the fetch function. In the picture below, the backend web service is not only providing the static files that make up the frontend, but also providing the web service endpoints that the frontend calls to do things like get a user, create a user, or get high scores.

The backend web service can also use fetch to make requests to other web services. For example, in the image below the frontend uses fetch to request the user's data from the backend web service. The backend then uses fetch to call two other web services, one to get the user's data from the database, and another one to request subway routes that are near the user's home. That data is then combined together by the backend web service and returned to the frontend for display in the browser.

In following instruction we will discuss how to use fetch, HTTP, and URLs, and build a web service using the Node.js application. With all of this in place your application will be a full stack application comprised of both a frontend and a backend.



## URL
The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.

Looking at the different parts of a URL is a good way to understand what it represents. Here is an example URL that represents the summary of accepted CS 260 BYU students that is accessible using secure HTTP.

```
https://byu.edu:443/cs/260/student?filter=accepted#summary
```
The URL syntax uses the following convention. Notice the delimiting punctuation between the parts of the URL. Most parts of the URL are optional. The only ones that are required are the scheme, and the domain name.

```
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```
```
Part	       Example	                            Meaning
Scheme	     https	                              The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain name	 byu.edu	                            The domain name that owns the resource represented by the URL.
Port	       3000	                                The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
Path	       /school/byu/user/8014	              The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
Parameters	 filter=names&highlight=intro,summary	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
Anchor	     summary	                            The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.
```
Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.

### URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.



## Ports
When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. Here is the link to IANA's registry.

Here is a list of common port numbers that you might come across.

```
Port	Protocol
20	  File Transfer Protocol (FTP) for data transfer
22	  Secure Shell (SSH) for connecting to remote devices
25	  Simple Mail Transfer Protocol (SMTP) for sending email
53	  Domain Name System (DNS) for looking up IP addresses
80	  Hypertext Transfer Protocol (HTTP) for web requests
110	  Post Office Protocol (POP3) for retrieving email
123	  Network Time Protocol (NTP) for managing time
161	  Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194	  Internet Relay Chat (IRC) for chatting
443	  HTTP Secure (HTTPS) for secure web requests
```

### Your ports
As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.

Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.



## HTTP
Hypertext Transfer Protocol (HTTP) is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. In previous instruction we discussed how to use HTTP. Now, we will talk about the internals of HTTP. Just like becoming fluent in a foreign language makes a visit to another country more enjoyable, understanding how to speak HTTP helps you communicate effectively when talking on the web.

When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like curl. For example, in your console you can use curl to make the following request.

```
curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
```

#### Request
The HTTP request for the above command would look like the following.

```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
An HTTP request has this general syntax.

```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

The first line of the HTTP request contains the verb of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.

In the above example, we are asking to GET a resource found at the path /hypertext/WWW/Helping.html. The version used by the request is HTTP/1.1. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a MIME type as defined by internet governing body IANA. In this case we are asking for HTML.

#### Response
The response to the above request looks like this.

```
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```
An HTTP response has the following syntax.

```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
You can see that the response syntax is similar to the request syntax. The major difference is that the first line represents the version and the status of the response.

Understanding the meaning of the common HTTP verbs, status codes, and headers is important for you to understand, as you will use them in developing a web application. Take some time to internalize the following common values.

### Verbs
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

```
Verb	  Meaning
GET	    Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST	  Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT	    Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.
```

### Status codes
It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.
Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.

```
Code	Text	                   Meaning

100	  Continue	               The service is working on the request
200	  Success	                 The requested resource was found and returned as appropriate.
201	  Created	                 The request was successful and a new resource was created.
204	  No Content	             The request was successful but no resource is returned.
304	  Not Modified             The cached version of the resource is still valid.
307	  Permanent redirect	     The resource is no longer at the requested location. The new location is specified in the response location header.
308	  Temporary redirect	     The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	  Bad request	             The request was malformed or invalid.
401	  Unauthorized	           The request did not provide a valid authentication token.
403	  Forbidden	               The provided authentication token is not authorized for the resource.
404	  Not found	               An unknown resource was requested.
408	  Request timeout	         The request takes too long.
409	  Conflict	               The provided resource represents an out of date version of the resource.
418	  I'm a teapot	           The service refuses to brew coffee in a teapot.
429	  Too many requests	       The client is making too many requests in too short of a time period.
500	  Internal server error	   The server failed to properly process the request.
503	  Service unavailable	     The server is temporarily down. The client should try again with an exponential back off.
```

### Headers
HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.

```
Header	        Example	                              Meaning
Authorization	  Bearer bGciOiJIUzI1NiIsI	            A token that authorized the user making the request.
Accept	        image/*	                              The format the client accepts. This may include wildcards.
Content-Type	  text/html; charset=utf-8	            The format of the content being sent. These are described using standard MIME types.
Cookie	        SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	          info.cern.ch	                        The domain name of the server. This is required in all requests.
Origin	        cs260.click	                          Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-
Allow-Origin	  https://cs260.click	                  Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	                                  The number of bytes contained in the response.
Cache-Control	  public, max-age=604800	              Tells the client how it can cache the response.
User-Agent	    Mozilla/5.0 (Macintosh)	              The client application making the request.
```

### Body
The format of the body of an HTTP request or response is defined by the Content-Type header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the accept header.

### Cookies
HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header.

```
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```

The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.

```
HTTP/2 200
Cookie: myAppCookie=tasty
```
This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies; the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.

### HTTP Versions
HTTP continually evolves in order to increase performance and support new types of applications. You can read about the evolution of HTTP on MDN.
```
Year	Version	Features
1990	HTTP0.9	one line, no versions, only get
1996	HTTP1	get/post, header, status codes, content-type
1997	HTTP1.1	put/patch/delete/options, persistent connection
2015	HTTP2	multiplex, server push, binary representation
2022	HTTP3	QUIC for transport protocol, always encrypted
```



## Fetch
The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the XMLHttpRequest API.

Today, the fetch API is the preferred way to make HTTP requests. The fetch function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote. If the request method is unspecified, it defaults to GET.

```
fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

**Response**

```
{
  author: 'Kyle Simpson',
  quote: "There's nothing more permanent than a temporary hack."
}
```
To do a POST request you populate the options parameter with the HTTP method and headers.

```
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```



## Node web service
With JavaScript we can write code that listens on a network port (e.g. 80, 443, 3000, or 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

First create your project.

```
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
```
Now, open VS Code and create a file named index.js. Paste the following code into the file and save.

```
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
This code uses the Node.js built-in http package to create our HTTP server using the http.createServer function along with a callback function that takes a request (req) and response (res) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.

The server.listen call starts listening on port 8080 and blocks until the program is terminated.

We execute the program by going back to our console window and running Node.js to execute our index.js file. If the service starts up correctly then it should look like the following.

```
➜ node index.js
Web service listening on port 8080
```
You can now open your browser and point it to localhost:8080 and view the result. The interaction between the JavaScript, node, and the browser looks like this.

Use different URL paths in the browser and note that it will echo the HTTP method and path back in the document. You can kill the process by pressing CTRL-C in the console.

Note that you can also start up Node and execute the index.js code directly in VS Code. To do this open index.js in VS Code and press the 'F5' key. This should ask you what program you want to run. Select node.js. This starts up Node.js with the index.js file, but also attaches a debugger so that you can set breakpoints in the code and step through each line of code.

⚠ Make sure you complete the above steps. For the rest of the course you will be executing your code using Node.js to run your backend code and serve up your frontend code to the browser. This means you will no longer be using the VS Code Live Server extension to serve your frontend code in the browser.

### Debugging a Node.js web service
In order to debug a web service running under Node.js we first need to write our code. Replace the code in your main.js file with the following.

```
const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
Switch to your console application and run npm init -y and npm install express from your code directory so that we can use the Express package to write a simple web service.

Now we are ready to debug again. Set a breakpoint on the getStore endpoint callback (line 5) and the app.listen call (line 9). Start debugging by pressing F5. The debugger should stop on the listen call where you can inspect the app variable. Press F5 again to continue running. Now open up your browser and set the location to localhost:8080. This should hit the breakpoint on the endpoint. Take some time to inspect the req object. You should be able to see what the HTTP method is, what parameters are provided, and what the path currently is. Press F5 to continue.

Your browser should display the JSON object, containing the URL, that you returned from your endpoint. Now change the URL in the browser to include a path and some query parameters. Something like http://localhost:8080/fish/taco?order=2. Requesting that URL should cause your breakpoint to hit again where you can see the URL changes reflected in the req object.

Now, instead of pressing F5 to continue, press F11 to step into the res.send function. This will take you out of your code and into the Express code that handles sending a response. Because you installed the Express package using NPM, all of Express's source code is sitting in the node_modules directory. You can also set breakpoints there, examine variables, and step into functions. Debugging into popular packages is a great way to learn how to code by seeing how really good programmers do things. Take some time to walk around Holowaychuk's code and see if you can understand what it is doing.

### Nodemon
Once you start writing complex web applications you will find yourself making changes in the middle of debugging sessions and you would like to have node restart automatically and update the browser as the changes are saved. This seems like a simple thing, but over the course of hundreds of changes, every second you can save really starts to add up.

The Nodemon package is basically a wrapper around node that watches for files in the project directory to change. When it detects that you saved something it will automatically restart node.

If you would like to experiment with this then take the following steps. First install Nodemon globally so that you can use it to debug all of your projects.

```
npm install -g nodemon
```
Then, because VS Code does not know how to launch Nodemon automatically, you need create a VS Code launch configuration. In VS Code press CTRL-SHIFT-P (on Windows) or ⌘-SHIFT-P (on Mac) and type the command Debug: Add configuration. This will then ask you what type of configuration you would like to create. Type Node.js and select the Node.js: Nodemon setup option. In the launch configuration file that it creates, change the program from app.js to main.js (or whatever the main JavaScript file is for your application) and save the configuration file.

Now when you press F5 to start debugging it will run Nodemon instead of Node.js, and your changes will automatically update your application when you save.



## Express
In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production-ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package Express come in. Express provides support for:

1. Routing requests for service endpoints
2. Manipulating HTTP requests with JSON body content
3. Generating HTTP responses
4. Using middleware to add functionality
Express was created by TJ Holowaychuk and is currently maintained by the Open.js Foundation.

“People tell you to not reinvent things, but I think you should … it will teach you things”

— TJ Holowaychuk

Everything in Express revolves around creating and using HTTP routing and middleware functions. You create an Express application by using NPM to install the Express package and then calling the express constructor to create the Express application and listen for HTTP requests on a desired port.

```
➜ npm install express
```
```
const express = require('express');
const app = express();

app.listen(8080);
```
With the app object you can now add HTTP routing and middleware functions to the application.

### Defining routes
HTTP endpoints are implemented in Express by defining routes that call a function based upon an HTTP path. The Express app object supports all of the HTTP verbs as functions on the object. For example, if you want to have a route function that handles an HTTP GET request for the URL path /store/provo you would call the get method on the app.

```
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```
The get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.

The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.

The Express app compares the routing function patterns in the order that they are added to the Express app object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the next parameter.

In our example above we hard coded the store name to be provo. A real store endpoint would allow any store name to be provided as a parameter in the path. Express supports path parameters by prefixing the parameter name with a colon (:). Express creates a map of path parameters and populates it with the matching values found in the URL path. You then reference the parameters using the req.params object. Using this pattern you can rewrite our getStore endpoint as follows.

```
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```
If we run our JavaScript using node we can see the result when we make an HTTP request using curl.

```
➜ curl localhost:8080/store/orem
{"name":"orem"}
```
If you wanted an endpoint that used the POST or DELETE HTTP verb then you just use the post or delete function on the Express app object.

The route path can also include a limited wildcard syntax or even full regular expressions in path pattern. Here are a couple route functions using different pattern syntax.

```
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
```
Notice that in these examples the next parameter was omitted. Since we are not calling next we do not need to include it as a parameter. However, if you do not call next then no following middleware functions will be invoked for the request.

### Using middleware
The standard Mediator/Middleware design pattern has two pieces: a mediator and middleware. Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines their order of execution. When a request comes to the mediator it then passes the request around to the middleware components. Following this pattern, Express is the mediator, and middleware functions are the middleware components.

Express comes with a standard set of middleware functions. These provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging. Some middleware functions are provided by default, and other ones must be installed using NPM before you can use them. You can also write your own middleware functions and use them with Express.

A middleware function looks very similar to a routing function. That is because routing functions are also middleware functions. The only difference is that routing functions are only called if the associated pattern matches. Middleware functions are always called for every HTTP request unless a preceding middleware function does not call next. A middleware function has the following pattern:

```
function middlewareName(req, res, next)
```
The middleware function parameters represent the HTTP request object (req), the HTTP response object (res), and the next middleware function to pass processing to. You should usually call the next function after completing processing so that the next middleware function can execute.

#### Creating your own middleware
As an example of writing your own middleware, you can create a function that logs out the URL of the request and then passes on processing to the next middleware function.

```
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```
Remember that the order that you add your middleware to the Express app object controls the order that the middleware functions are called. Any middleware that does not call the next function after doing its processing, stops the middleware chain from continuing.

#### Builtin middleware
In addition to creating your own middleware functions, you can use a built-in middleware function. Here is an example of using the static middleware function. This middleware responds with static files, found in a given directory, that match the request URL.

```
app.use(express.static('public'));
```
Now if you create a subdirectory in your project directory and name it public you can serve up any static content that you would like. For example, you could create an index.html file that is the default content for your web service. Then when you call your web service without any path the index.html file will be returned.

#### Third party middleware
You can also use third party middleware functions by using NPM to install the package and including the package in your JavaScript with the require function. The following uses the cookie-parser package to simplify the generation and access of cookies.

```
➜ npm install cookie-parser
```
```
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```
It is common for middleware functions to add fields and functions to the req and res objects so that other middleware can access the functionality they provide. You see this happening when the cookie-parser middleware adds the req.cookies object for reading cookies, and also adds the res.cookie function in order to make it easy to add a cookie to a response.

### Error handling middleware
You can also add middleware for handling errors that occur. Error middleware looks similar to other middleware functions, but it takes an additional err parameter that contains the error.

```
function errorMiddlewareName(err, req, res, next)
```
If you wanted to add a simple error handler for anything that might go wrong while processing HTTP requests you could add the following.

```
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});
```
We can test that our error middleware is getting used by adding a new endpoint that generates an error.

```
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});
```
Now if we use curl to call our error endpoint we can see that the response comes from the error middleware.

```
➜ curl localhost:8080/error
{"type":"Error","message":"Trouble in river city"}
```

### Putting it all together
Here is a full example of our web service built using Express.

```
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```



## SOP and CORS
Security should always be on your mind when you are working with the web. The ability to provide services to a global audience makes the information on the web very valuable, and therefore an attractive target for nefarious parties. When website architecture and browser clients were still in their infancy they allowed JavaScript to make requests from one domain while displaying a website from a different domain. These are called cross-origin requests.

Consider the following example. An attacker sends out an email with a link to a hacker website (byu.iinstructure.com) that is similar to the real course website. Notice the additional i. If the hacker website could request anything from the real website then it could make itself appear and act just like the real education website. All it would have to do is request images, html, and login endpoints from the course's website and display the results on the hacker website. This would give the hacker access to everything the user did.

To combat this problem the Same Origin Policy (SOP) was created. Simply stated SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. A request from byu.iinstructure.com for service endpoints that are made to byu.instructure.com would fail because the domains do not match. This provides significant security, but it also introduces complications when building web applications. For example, if you want build a service that any web application can use it would also violate the SOP and fail. In order to address this, the concept of Cross Origin Resource Sharing (CORS) was invented.

CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed. The server may say that all origins are allowed, for example if they are a general purpose image provider, or only a specific origin is allowed, for example if they are a bank's authentication service. If the server doesn't specify what origin is allowed then the browser assumes that it must be the same origin.

Going back to our hacker example, the HTTP request from the hacker site (byu.iinstructure.com) to the course's authentication service (byu.instructure.com) would look like the following.

```
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
```
In response the course website would return:

```
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
```
The browser would then see that the actual origin of the request does not match the allowed origin and so the browser blocks the response and generates an error.

Notice that with CORS, it is the browser that is protecting the user from accessing the course website's authentication endpoint from the wrong origin. CORS is only meant to alert the user that something nefarious is being attempted. A hacker can still proxy requests through their own server to the course website and completely ignore the Access-Control-Allow-Origin header. Therefore the course website needs to implement its own precautions to stop a hacker from using its services inappropriately.

### Using third party services
When you make requests to your own web services you are always on the same origin and so you will not violate the SOP. However, if you want to make requests to a different domain than the one your web application is hosted on, then you need to make sure that domain allows requests as defined by the Access-Control-Allow-Origin header it returns. For example, if I have JavaScript in my web application loaded from cs260.click that makes a fetch request for an image from the website i.picsum.photos the browser will fail the request with an HTTP status code of 403 and an error message that CORS has blocked the request.

That happens because i.picsum.photos does not return an Access-Control-Allow-Origin header. Without a header the browser assumes that all requests must be made from the same origin.

If your web application instead makes a service request to icanhazdadjoke.com to get a joke, that request will succeed because icanhazdadjoke.com returns an Access-Control-Allow-Origin header with a value of * meaning that any origin can make requests to this service.

```
HTTP/2 200
access-control-allow-origin: *

Did you hear about the bread factory burning down? They say the business is toast.
```
This would have also succeeded if the HTTP header had explicitly listed your web application domain. For example, if you make your request from the origin cs260.click the following response would also satisfy CORS.

```
HTTP/2 200
access-control-allow-origin: https://cs260.click

I’ll tell you something about German sausages, they’re the wurst
```
This all means that you need to test the services you want to use before you include them in your application. Make sure they are responding with * or your calling origin. If they do not then you will not be able to use them.



## Service design
Web services provide the interactive functionality of your web application. They commonly authenticate users, track their session state, provide, store, and analyze data, connect peers, and aggregate user information. Making your web service easy to use, performant, and extensible are factors that determine the success of your application. A good design will result in increased productivity, satisfied users, and lower processing costs.

### Model and sequence diagrams
When first considering your service design it is helpful to model the application's primary objects and the interactions of the objects. You should attempt to stay as close to the model that is in your user's mind as possible. Avoid introducing a model that focuses on programming constructs and infrastructure. For example, a chat program should model participants, conversations, and messages. It should not model user devices, network connections, and data blobs.

Once you have defined your primary objects you can create sequence diagrams that show how the objects interact with each other. This will help clarify your model and define the necessary endpoints. You can use a simple tool like SequenceDiagram.org to create and share diagrams.

### Leveraging HTTP
Web services are usually provided over HTTP, and so HTTP greatly influences the design of the service. The HTTP verbs such as GET, POST, PUT, and DELETE often mirror the designed actions of a web service. For example, a web service for managing comments might list the comments (GET), create a comment (POST), update a comment (PUT), and delete a comment (DELETE). Likewise, the MIME content types defined by IANA are a natural fit for defining the types of content that you want to provide (e.g. HTML, PNG, MP3, and MP4). The goal is to leverage those technologies as much as possible so that you don't have to recreate the functionality they provide and instead take advantage of the significant networking infrastructure built up around HTTP. This includes caching servers that increase your performance, edge servers that bring your content closer, and replication servers that provide redundant copies of your content and make your application more resilient to network failures.

### Endpoints
A web service is usually divided up into multiple service endpoints. Each endpoint provides a single functional purpose. All of the criteria that you would apply to creating well designed code functions also applies when exposing service endpoints.

⚠ Note that service endpoints are often called an Application Programming Interface (API). This is a throwback to old desktop applications and the programming interfaces that they exposed. Sometimes the term API refers to the entire collection of endpoints, and sometimes it is used to refer to a single endpoint.

Here are some things you should consider when designing your service's endpoints.

- **Grammatical** - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.

- **Readable** - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: /store/provo/order/28502. This makes it easier to remember how to use the endpoint because it is human readable.

- **Discoverable** - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.

```
GET /store/provo  HTTP/2
```
```
{
  "id": "provo",
  "address": "Cougar blvd",
  "orders": "https://cs260.click/store/provo/orders",
  "employees": "https://cs260.click/store/provo/employees"
}
```
- **Compatible** - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.

**Version 1**
```
{
  "name": "John Taylor"
}
```
**Version 2**

```
{
  "name": "John Taylor",
  "givenName": "John",
  "familyName": "Taylor"
}
```
By adding a new representation of the name field, you provide new functionality for clients that know how to use the new fields without harming older clients that ignore the new fields and simply use the old representation. This is all done without officially versioning the endpoint.

If you are fortunate enough to be able to control all of your client code you can mark the name field as depreciated and in a future version remove it once all of the clients have upgraded. Usually you want to keep compatibility with at least one previous version of the endpoint so that there is enough time for all of the clients to migrate before compatibility is removed.

- **Simple** - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.

- **Documented** - The Open API Specification is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The Swagger Petstore example documentation is a reasonable example to follow.

There are many models for exposing endpoints. We will consider three common ones, RPC, REST, and GraphQL.

### RPC
Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb. The actual verb and subject of the function call is represented by the function name. For example, deleteOrder or updateOrder. The name of the function is either the entire path of the URL or a parameter in the POST body.

```
POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}
```
or

```
POST /rpc HTTP/2

{"cmd":"updateOrder", "params":{"id": 2197, "date": "20220505"}}
```
One advantage of RPC is that it maps directly to function calls that might exist within the server. This could also be considered a disadvantage as it directly exposes the inner workings of the service, and thus creates a coupling between the endpoints and the implementation.

### REST
Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. This is not surprising considering the principle author of REST, Roy Fielding, was also a contributor to the HTTP specification. REST HTTP verbs always act upon a resource. Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call. This allows for the caching functionality of HTTP to work optimally. For example, GET will always return the same resource until a PUT is executed on the resource. When PUT is used, the cached resource is replaced with the updated resource.

With REST the updateOrder endpoint would look like the following.

```
PUT /order/2197 HTTP/2

{"date": "20220505"}
```
Where the proper HTTP verb is used and the URL path uniquely identifies the resource. These seem like small differences, but maximizing HTTP pays dividends by making it easy for HTTP infrastructure, such as caching, to work properly.

There are several other pieces of Fielding's dissertation on REST, such as hypermedia, that are often quoted as being required for a truly "restful" implementation, and these are just as often ignored.

### GraphQL
GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered. GraphQL was developed to address frustration concerning the massive number of REST, or RPC calls, that a web application client needed to make in order to support even a simple UI widget.

Instead of making a call for getting a store, and then a bunch of calls for getting the store's orders and employees, GraphQL would send a single query that would request all of that information in one big JSON response. The server would examine the query, join the desired data, and then filter out anything that was not wanted.

Here is an example GraphQL query.

```
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}
```
GraphQL helps to remove a lot of the logic for parsing endpoints and mapping requests to specific resources. Basically in GraphQL there is only one endpoint. The query endpoint.

The downside of that flexibility is that the client now has significant power to consume resources on the server. There is no clear boundary on what, how much, or how complicated the aggregation of data is. It also is difficult for the server to implement authorization rights to data as they have to be baked into the data schema. However, there are standards for how to define a complex schema. Common GraphQL packages provide support for schema implementations along with database adaptors for query support.



## PM2
When you run a program from the console, the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.

We want our web services to continue running as a daemon. We would also like an easy way to start and stop our services. That is what Process Manager 2 (PM2) does.

PM2 is already installed on your production server as part of the AWS AMI that you selected when you launched your server. Additionally, the deployment scripts found with the Simon projects automatically modify PM2 to register and restart your web services. That means you should not need to do anything with PM2. However, if you run into problems such as your services not running, then here are some commands that you might find useful.

You can SSH into your server and see PM2 in action by running the following command.

```
pm2 ls
```
This should print out the two services, simon and startup, that are configured to run on your web server.

You can try some of the other commands, but only if you understand what they are doing. Using them incorrectly could cause your web services to stop working.

```
Command	                                               Purpose
pm2 ls	                                               List all of the hosted node processes
pm2 monit	                                             Visual monitor
pm2 start index.js -n simon	                           Add a new process with an explicit name
pm2 start index.js -n startup -- 4000	                 Add a new process with an explicit name and port parameter
pm2 stop simon	                                       Stop a process
pm2 restart simon	                                     Restart a process
pm2 delete simon	                                     Delete a process from being hosted
pm2 delete all	                                       Delete all processes
pm2 save	                                             Save the current processes across reboot
pm2 restart all	                                       Reload all of the processes
pm2 restart simon --update-env	                       Reload process and update the node version to the current environment definition
pm2 update	                                           Reload pm2
pm2 start env.js --watch --ignore-watch="node_modules" Automatically reload service when index.js changes
pm2 describe simon	                                   Describe detailed process information
pm2 startup	                                           Displays the command to run to keep PM2 running after a reboot.
pm2 logs simon	                                       Display process logs
pm2 env 0	                                             Display environment variables for process. Use pm2 ls to get the process ID
```

### Registering a new web service
If you want to setup another subdomain that accesses a different web service on your web server, you need to follow these steps.

1. Add the rule to the Caddyfile to tell it how to direct requests for the domain.
2. Create a directory and add the files for the web service.
3. Configure PM2 to host the web service.

#### Modify Caddyfile
SSH into your server.

Copy the section for the startup subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server. For example:

```
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```
This tells Caddy that when it gets a request for tacos.cs260.click it will act as a proxy for those requests and pass them on to the web service that is listening on the same machine (localhost), on port 5000. The other settings tell Caddy to return headers that disable caching, hide the fact that Caddy is the server (no reason to tell hackers anything about your server), and to allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS). Depending on what your web service does you may want different settings.

Restart Caddy to cause it to load the new settings.

```
sudo service caddy restart
```
Now Caddy will attempt to proxy the requests, but there is no web service listening on port 5000 and so you will get an error from Caddy if you make a request to tacos.cs260.click.

#### Create the web service
Copy the ~/services/startup directory to a directory that represents the purpose of your service. For example:

```
cp -r ~/services/startup ~/services/tacos
```
If you list the directory you should see an index.js file that is the main JavaScript file for your web service. It has the code to listen on the designated network port and respond to requests. The following is the JavaScript that causes the web service to listen on a port that is provided as an argument to the command line.

```
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
There is also a directory named public that has static HTML/CSS/JavaScript files that your web service will respond with when requested. The index.js file enables this with the following code:

```
app.use(express.static('public'));
```
You can start up the web service, listening on port 5000, using Node as follows.

```
node index.js 5000
```
You can now access your web service through the browser, or curl.

```
curl https://tacos.cs260.click
```
Caddy will receive the request and map the subdomain name, tacos.cs260.click, to a request for http://localhost:5000. Your web service is listening on port 5000 and so it receives the request and responds.

Stop your web service by pressing CTRL-C in the SSH console that you used to start the service. Now your browser request for your subdomain should return an error again.

#### Configure PM2 to host the web service
The problem with running your web service from the console with node index.js 5000, is that as soon as you close your SSH session it will terminate all processes you started in that session, including your web service. Instead you need something that is always running in the background to run your web service. This is where daemons come into play. The daemon we use to do this is called PM2.

From your SSH console session run:

```
pm2 ls
```
This will list the web services that you already have registered with PM2. To run your newly created web service under PM2, make sure you are in your service directory, and run the command similar to the following, with the service name and port substituted to your desired values:

```
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```
If you run pm2 ls again you should see your web service listed. You can now access your subdomain in the browser and see the proper response. PM2 will keep running your service even after you exit your SSH session.



## Development and production environments
When working on a commercial web application, it is critical to separate where you develop your application, from where the production release of your application is made publicly available. Often times there are more environments than this, such as staging, internal testing, and external testing environments. If your company is seeking third party security certification (such as SOC2 compliance) they will require that these environments are strictly separated from each other. A developer will not have access to the production environment in order to prevent a developer from nefariously manipulating an entire company asset. Instead, automated integration processes, called continuous integration (CI) processes, checkout the application code, lint it, build it, test it, stage it, test it more, and then finally, if everything checks out, deploy the application to the production environment, and notify the different departments in the company of the release.

For our work, you will use and manage both your development environment (your personal computer) and your production environment (your AWS server). However, you should never consider your production environment as a place to develop, or experiment with, your application. You may shell into the production environment to configure your server or to debug a production problem, but the deployment of your application should happen using an automated CI process. For our CI process, we will use a very simple console shell script.

### Automating your deployment
The advantage of using an automated deployment process is that it is reproducible. You don't accidentally delete a file, or misconfigure something with an stray keystroke. Also, having a automated script encourages you to iterate quickly because it is so much easier to deploy your code. You can add a small feature, deploy it out to production, and get feedback within minutes from your users.

Our deployment scripts change with each new technology that we have to deploy. Initially, they just copy up a directory of HTML files, but soon they include the ability to modify the configuration of your web server, run transpiler tools, and bundle your code into a deployable package.

You run a deployment script from a console window in your development environment with a command like the following.

```
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
```
The -k parameter provides the credential file necessary to access your production environment. The -h parameter is the domain name of your production environment. The -s parameter represents the name of the application you are deploying (either simon or startup).

This will make more sense as we gradually build up our technologies but we can discuss our simon-service deployment script as an example of what they will do. You can view the entire file here, but we will explain each step below. It isn't critical that you deeply understand everything in the script, but the more you do understand the easier it will be for you to track down and fix problems when they arise.

The first part of the script simply parses the command line parameters so that we can pass in the production environment's security key (or PEM key), the hostname of your domain, and the name of the service you are deploying.

```
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"
```
Next the script copies all of the applicable source files into a distribution directory (dist) in preparation for copying that directory to your production server.

```
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist
```
The target directory on your production environment is deleted so that the new one can replace it. This is done by executing commands remotely using the secure shell program (ssh).

```
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH
```
The distribution directory is then copied to the production environment using the secure copy program (scp).

```
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service
```
We then use ssh again to execute some commands on the production environment. This installs the node packages with npm install and restarts the service daemon (PM2) that runs our web application in the production environment.

```
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH
```
Finally we clean up our development environment by deleting the distribution package.

```
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
```
Can you imagine if you had to do all of that by hand every time? You would dread deploying and would most likely make several time consuming mistakes during the process.

A deployment script exists for each of the Simon projects and you can use them, as is, for your startup application as long as you are doing similar types of deployment actions.

If you want to learn more about shell scripting you can read this tutorial. Shell scripting is a powerful tool for automating common development tasks and is well worth adding to your bucket of skills.



## Uploading files
Web applications often need to upload one or more files from the frontend application running in the browser to the backend service. We can accomplish this by using the HTML input element of type file on the frontend, and the Multer NPM package on the backend.

### Frontend Code
The following frontend code registers and event handler for when the selected file changes and only accepts files of type .png, .jpeg, or .jpg. We also create an img placeholder element that will display the uploaded image once it has been stored on the server.

```
<html lang="en">
  <body>
    <h1>Upload an image</h1>
    <input
      type="file"
      id="fileInput"
      name="file"
      accept=".png, .jpeg, .jpg"
      onchange="uploadFile(this)"
    />
    <div>
      <img style="padding: 2em 0" id="upload" />
    </div>
    <script defer src="frontend.js"></script>
  </body>
</html>
```
The frontend JavaScript handles the uploading of the file to the server and then uses the filename returned from the server to set the src attribute of the image element in the DOM. If an error happens then an alert is displayed to the user.

```
async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}
```

### Backend code
In order to build storage support into our server, we first install the Multer NPM package to our project. There are other NPM packages that we can chose from, but Multer is commonly used. From your project directory, run the following console command.

```
npm install multer
```
Multer handles reading the file from the HTTP request, enforcing the size limit of the upload, and storing the file in the uploads directory. Additionally our service code does the following:

- Handles requests for static files so that we can serve up our frontend code.
- Handles errors such as when the 64k file limit is violated.
- Provides a GET endpoint to serve up a file from the uploads directory.
```
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Where you store your files
You should take serious thought about where you store your files. Putting files on your server is not a very good production level solution for the following reasons.

1. You only have so much available space. Your server only has 8 GB by default. Once you use up all your space then your server will fail to operate correctly and you may need to rebuild your server.
2. In a production system, servers are transient and are often replaced as new versions are released, or capacity requirements change. That means you will lose any state that you store on your server.
3. The server storage is not usually backed up. If the server fails for any reason, you will lose your customer's data.
4. If you have multiple application servers then you can't assume that the server you uploaded the data to is going to be the one you request a download from.
Instead you want to use a dedicated storage service that has durability guarantees, is not tied to your compute capacity, and can be accessed by multiple application servers.



## Storage services
Web applications commonly need to store files associated with the application or the users of the application. This includes files such as images, user uploads, documents, and movies. Files usually have an ID, some metadata, and the bytes representing the file itself. These can be stored using a database service, but usually that is overkill and a simpler solution will be cheaper.

It might be tempting to store files directly on your server. This is usually a bad idea for several reasons.

1. Your server has limited drive space. If you server runs out of drive space your entire application will fail.
2. You should consider your server as being ephemeral, or temporary. It can be thrown away and replaced by a copy at any time. If you start storing files on the server, then your server has state that cannot be easily replaced.
3. You need backup copies of your application and user files. If you only have one copy of your files on your server, then they will disappear when your server disappears, and you must always assume that your server will disappear.
Instead you want to use a storage service that is specifically designed to support production storage and delivery of files.

### AWS S3
There are many such solutions out there, but one of the most popular ones is AWS S3. S3 provides the following advantages:

1. It has unlimited capacity
2. You only pay for the storage that you use
3. It is optimized for global access
4. It keeps multiple redundant copies of every file
5. You can version the files
6. It is performant
7. It supports metadata tags
8. You can make your files publicly available directly from S3
9. You can keep your files private and only accessible to your application
In this course we will not be using any storage services for the Simon project. If, however, you want to use S3 as the storage service for your Startup application, then you need to learn how to use the AWS SDK. You can find detailed information about using AWS S3 with Node.js on the AWS website. Generally, the steps you need to take include:

1. Creating a S3 bucket to store your data in.
2. Getting credentials so that your application can access the bucket.
3. Using the credentials in your application.
4. Using the SDK to write, list, read, and delete files from the bucket.
⚠ Make sure that you do not include your credentials in your code. If you check your credentials into your GitHub repository they will immediately be stolen and used by hackers to take over your AWS account. This may result in significant monetary damage to you.



## Data services
Web applications commonly need to store application and user data persistently. The data can be many things, but it is usually a representation of complex interrelated objects. This includes things like a user profile, organizational structure, game play information, usage history, billing information, peer relationship, library catalog, and so forth.

Historically, SQL databases have served as the general purpose data service solution, but starting around 2010, specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applications from major companies. These data services are often called NoSQL solutions because they do not use the general purpose relational database paradigms popularized by SQL databases. However, they all have very different underlying data structures, strengths, and weaknesses. That means that you should not simply split all of the possible data services into two narrowly defined boxes, SQL and NoSQL, when you are considering the right data service for your application.

Here is a list of some of the popular data services that are available.

```
Service	       Specialty
MySQL	         Relational queries
Redis	         Memory cached objects
ElasticSearch	 Ranked free text
MongoDB	       JSON objects
DynamoDB	     Key value pairs
Neo4J	         Graph based data
InfluxDB	     Time series data
```

### MongoDB
For the projects in this course that require data services, we will use MongoDB. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.

```
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```
Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.

The query syntax for Mongo also follow a JavaScript-inspired flavor. Consider the following queries on the houses for rent collection that was shown above.

```
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

### Using MongoDB in your application
The first step to using Mongo in your application is to install the mongodb package using NPM.

```
➜ npm install mongodb
```
With that done, you then use the MongoClient object to make a client connection to the database server. This requires a username, password, and the hostname of the database server.

```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```
With the client connection you can then get a database object and from that a collection object. The collection object allows you to insert, and query for, documents. You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the insertOne function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exist, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.

```
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```
To query for documents you use the find function on the collection object. Note that the find function is asynchronous and so we use the await keyword to wait for the promise to resolve before we write them out to the console.

```
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```
If you do not supply any parameters to the find function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.

### Output
```
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```
You can provide a query and options to the find function. In the example below we query for a property_type of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.

```
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```
The query matches the document that we previously inserted and so we get the same result as before.

There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their website.

### Managed services
Historically each application development team would have developers that managed the data service. Those developers would acquire hardware, install the database software, monitor the memory, cpu, and disk space, control the data schema, and handle migrations and upgrades. Much of this work has now moved to services that are hosted and managed by a 3rd party. This relieves the development team from much of the day-to-day maintenance. The team can instead focus more on the application and less on the infrastructure. With a managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria.

#### MongoDB Atlas
All of the major cloud providers offer multiple data services. For this class we will use the data service provided by MongoDB called Atlas. No credit card or payment is required to set up and use Atlas, as long as you stick to the shared cluster environment.

⚠ This video tutorial will step you through the process of creating your account and setting up your database. You really want to watch this video. Note that some of the Atlas website interface may be slightly different, but the basic concepts should all be there in some shape or form. The main steps you need to take are:

1. Create your account.

2. Create a database cluster.

3. Create your root database user credentials. Remember these for later use.

4. ⚠ Set network access to your database to be available from anywhere.

5. Copy the connection string and use the information in your code.

6. Save the connection and credential information in your production and development environments as instructed above.

You can always find the connection string to your Atlas cluster by pressing the Connect button from your Database > DataServices view.

### Keeping your keys out of your code
You need to protect your credentials for connecting to your Mongo database. One common mistake is to check them into your code and then post it to a public GitHub repository. Instead you can load your credentials when the application executes. One common way to do that is to have a JSON configuration file that contains the credentials that you dynamically load into the JavaScript that makes the database connection. You then use the configuration file in your development environment and deploy it to your production environment, but you never commit it to GitHub.

In order to accomplish this do the following:

1. Create a file named dbConfig.json in the same directory as the database JavaScript (e.g. database.js) that you use to make database requests.

2. Insert your Mongo DB credentials into the dbConfig.json file in JSON format using the following example:
```
{
  "hostname": "cs260.abcdefg.mongodb.net",
  "userName": "myMongoUserName",
  "password": "toomanysecrets"
}
```

3. Import the dbConfig.json content into your database.js file using a Node.js require statement and use the data that it represents to create the connection URL.
```
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
```
⚠ Make sure you include dbConfig.json in your .gitignore file so that it does not get pushed up to GitHub.

#### Testing the connection on startup
It is nice to know that your connection string is correct before your application attempts to access any data. We can do that when the application starts by making an asynchronous request to ping the database. If that fails then either the connection string is incorrect, the credentials are invalid, or the network is not working. The following is an example of testing the connection.

```
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
```
If your server is not starting, then check your logs for this exception being thrown.

### Using Mongo from your code
With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.

```
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```

To execute the above example, do the following:

1. Create a directory called mongoTest
2. Save the above content to a file named index.js
3. Create a file named dbConfig.json that contains your database credentials
4. Run npm init -y
5. Run npm install mongodb
6. Run node index.js.
This should output something like the following if everything is working correctly.

```
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
```



## Authorization services
If your application is going to remember a user's data then it will need a way to uniquely associate the data with a particular credential. That usually means that you authenticate a user by asking for information, such as an email address and password. You then remember, for some period of time, that the user has authenticated by storing an authentication token on the user's device. Often that token is stored in a cookie that is passed back to your web service on each request. The service can now associate data that the user supplies with a unique identifier that corresponds to their authorization token.

Determining what a user is authorized to do in your application is also important. For example, you might have different roles in your application such as Administrators, Editors, and Customers. Once you have the ability to authenticate a user and store information about that user, you can also store the authorization for the user. A simple application might have a single field that represents the role of the user. The service code would then use that role to allow, limit, or prevent what a service endpoint does. A complex web application will usually have very powerful authorization representation that controls the user's access to every part of the application. For example, an Editor role might have authorization only to work on content that they created or were invited to.

As you might imagine, authentication and authorization can become very complex, very quickly. It is also a primary target for a hacker. If they can bypass the authentication or escalate what they are authorized to do, then they can gain control of your application. Additionally, constantly forcing users to authenticate in a secure way causes users to not want to use an application. This creates opposing priorities: keep the system secure or make it easy to use.

In an attempt to remove the complexity of authentication and authorization from your application, many service providers and package developers have created solutions that you can use. Assuming that you are using a trusted, well-tested service this is an attractive option because it removes the cost of building, testing, and managing that critical infrastructure yourself.

Authorization services often use standard protocols for authenticating and authorizing. These include standards such as OAuth, SAML, and OIDC. Additionally, they usually support concepts like Single Sign On (SSO) and Federated Login. Single sign on allows a user to use the same credentials for multiple web applications. For example, you can log in to GitHub using your Google credentials. Federated login allows a user to log in once, and then the authentication token is reused to automatically log the user in to multiple websites. For example, logging in to Gmail allows you to also use Google Docs and YouTube without logging in again.

For this course we will implement our own authentication using a simple email/password design. Knowing how to implement a simple authentication design will help you appreciate what authentication services provide. If you want to experiment with different authorization services you might consider AWS Cognito, or Google Firebase.



## Account creation and login
The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially create an authentication credential, and a second to authenticate, or login, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a getMe endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.

### Endpoint design
Using HTTP we can map out the design of each of our endpoints.

#### Create authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.

```
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```
```
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

#### Login authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.

```
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```
```
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

#### GetMe endpoint
This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

```
GET /user/me HTTP/2
Cookie: auth=tokenHere
```
```
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}
```

### Web service
With our service endpoints designed, we can now build our web service using Express.

```
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.

1. Create a directory called authTest that we will work in.

2. Save the above content to a file named main.js. This is our starting web service.

3. Run npm init -y to initialize the project to work with node.js.

4. Run npm install express cookie-parser mongodb uuid bcrypt to install all of the packages we are going to use.

5. Run node main.js or press F5 in VS Code to start up the web service.

6. You can now open a console window and use curl to try out one of the endpoints.

```
curl -X POST localhost:8080/auth/create
```
```
{"id":"user@id.com"}
```

### Handling requests
With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of application/json, automatically into a JavaScript object. We do this by using the express.json middleware. We can then read the email and password directly out of the req.body object. We can test that this is working by temporarily including them in the response.

```
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```
```
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'
```
```
{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
```
Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.

```
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

### Using the database
We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on data services if you want to review what it is doing.

```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```
With a Mongo collection object we can implement the getUser and createUser functions.

```
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```
But, we are missing a couple of things. We need a real authentication token, and we cannot simply store a clear text password in our database.

### Generating authentication tokens
To generate a reasonable authentication token we use the uuid package. UUID stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.

```
const uuid = require('uuid');

token: uuid.v4();
```

### Securing passwords
Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.

So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

To hash our passwords we will use the bcrypt package. This creates a very secure one-way hash of the password. If you are interested in understanding how bcrypt works, it is definitely worth the time.

```
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

### Passing authentication tokens
We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The cookie-parser package provides middleware for cookies and so we will leverage that.

We import the cookieParser object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie, we want to make it as secure as possible, and so we use the httpOnly, secure, and sameSite options.

- httpOnly tells the browser to not allow JavaScript running on the browser to read the cookie.
- secure requires HTTPS to be used when sending the cookie back to the server.
- sameSite will only return the cookie to the domain that generated it.
```
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

### Login endpoint
The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using bcrypt.compare, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).

```
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

### GetMe endpoint
With everything in place to create credentials and login using the credentials, we can now implement the getMe endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).

```
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

### Final code
Here is the full example code.

```
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

### Experiment
With everything implemented, we can use curl to try it out. First start up the web service from VS Code by pressing F5 and selecting node.js as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following curl commands. You should see results similar to what is shown below. Note that the -c and -b parameters tell curl to store and use cookies with the given file.

```
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```
{"id":"639bb9d644416bf7278dde44"}
```
```
curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```
{"id":"639bb9d644416bf7278dde44"}
```
```
curl -b cookie.txt localhost:8080/user/me
```
```
{"email":"지안@id.com"}
```



## WebSocket
HTTP is based on a client-server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer-to-peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client-initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

### Creating a WebSocket conversation
JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the send function, and register a callback using the onmessage function to receive messages.

```
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```
The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.

When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.

```
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```
In a later instruction we will show you how to run and debug this example.



## Debugging WebSocket
You can debug both sides of the WebSocket communication with VS Code to debug the server, and Chrome to debug the client. When you do this you will notice that Chrome's debugger has support specifically for working with WebSocket communication.

### Debugging the server
1. Create a directory named testWebSocket and change to that directory.

2. Run npm init -y.

3. Run npm install ws.

4. Open VS Code and create a file named main.js. Paste the following code.
```
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

5. Set breakpoints on the ws.send lines so you can inspect the code executing.

6. Start debugging by pressing F5. The first time you may need to choose Node.js as the debugger.

### Debugging the client
1. Open the Chrome debugger by pressing F12.

2. Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.
```
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};
```

3. Select the Network tab and then select the HTTP message that was generated by the execution of the above client code.

4. With the HTTP message selected, you then click the Messages tab to view the WebSocket messages

5. Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
```
socket.send('I am listening');
```

6. You should see the messages in the Messages debugger window.

7. Send some more messages and observe the communication back and forth without stopping on the breakpoints.



## WebSocket chat
With the understanding of what WebSockets are, the basics of using them from Node and the browser, and the ability to debug the communication, it is time to use WebSocket to build a simple chat application.

In this example we will create an HTML page that uses WebSockets and displays the resulting chat. The server will forward the WebSocket communication from the different clients.

### Chat client
The HTML for the client provides an input for the user's name, an input for creating messages, and an element to display the messages that are sent and received.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```

The JavaScript for the application provides the interaction with the DOM for creating and displaying messages, and manages the WebSockets in order to connect, send, and receive messages.

#### DOM interaction
We do not want to be able to send messages if the user has not specified a name. So we add an event listener on the name input and disable the chat controls if the name ever is empty.
```
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```

We then create a function that will update the displayed messages by selecting the element with the chat-text ID and appending the new message to its HTML. Security-minded developers will realize that manipulating the DOM in this way will allow any chat user to execute code in the context of the application. After you get everything working, if you are interested, see if you can exploit this weakness.
```
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
```

When a user presses the enter key in the message input we want to send the message over the socket. We do this by selecting the DOM element with the new-msg ID and adding a listener that watches for the Enter keystroke.
```
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```

When Enter is pressed the sendMessage function is called. This selects the text out of the new-msg element and the name out of the my-name element and sends that over the WebSocket. The value of the message element is then cleared so that it is ready for the next message.
```
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}
```

#### WebSocket connection
Now we can set up our WebSocket. We want to be able to support both secure and non-secure WebSocket connections. To do this we look at the protocol that is currently being used as represented by the window.location.protocol variable. If it is non-secure HTTP then we set our WebSocket protocol to be non-secure WebSocket (ws). Otherwise we use secure WebSocket (wss). We use that to then connect the WebSocket to the same location that we loaded the HTML from by referencing the window.location.host variable.

We can notify the user that chat is ready to go by listening to the onopen event and appending some text to the display using the appendMsg function we created earlier.

```
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};
```

When the WebSocket receives a message from a peer it displays it using the appendMsg function.

```
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};
```

And if the WebSocket closes for any reason we also display that to the user and disable the controls.

```
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};
```

### Chat server
The chat server runs the web service, serves up the client code, manages the WebSocket connections, and forwards messages from the peers.

#### Web service
The web service is established using a simple Express application. Note that we serve up our client HTML, CSS, and JavaScript files using the static middleware.

```
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

#### WebSocket server
When we create our WebSocket we do things a little differently than we did with the simple connection example. Instead of letting the WebSocketServer control both the HTTP connection and the upgrading to WebSocket, we want to use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the noServer option when creating the WebSocketServer and then handling the upgrade notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.

```
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

#### Forwarding messages
With the WebSocket server we can use the connection, message, and close events to forward messages between peers. On connection we insert an object representing the connection into a list of all connections from the chat peers. Then when a message is received we loop through the peer connections and forward it on to everyone except the peer who initiated the request. Finally we remove a connection from the peer connection list when it is closed.

```
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```

#### Keeping connections alive
A WebSocket connection will eventually close automatically if no data is sent across it. In order to prevent that from happening the WebSocket protocol supports the ability to send a ping message to see if the peer is still there and receive pong responses to indicate the affirmative.

To make this work, we use setInterval to send out a ping every 10 seconds to each of our peer connections and clean up any connections that did not respond to our previous ping.

```
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```

In our connection handler we listen for the pong response and mark the connection as alive.

```
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```

Any connection that did not respond will remain in the not alive state and get cleaned up on the next pass.



## UI testing
Test driven development (TDD) is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness. TDD for console based applications and server based code is fairly straight forward. Web application UI code is significantly more complex to test, and using automated tests to drive your UI development is even more difficult.

The problem is that a browser is required to execute UI code. That means you have to actually test the application in the browser. Additionally, every one of the major browsers behaves slightly differently, viewport size makes a big difference, all the code executes asynchronously, network disruptions are common, and then there is the human factor. A human will interact with the browser in very unexpected ways. Clicking where they shouldn't, clicking rapidly, randomly refreshing the browser, flushing cache, not flushing cache, leaving the application up for days on end, switching between tabs, opening the application multiple times, logging in on different tabs, logging out of one tab while still using the application on another tab, or ... on and on. And we haven't even talked about running all the different browsers on all of the possible devices.

Of course the alternative to not test your code doesn't work either. That only means that you have to manually test everything every time you make any change, or you let your users test everything. That is not a good recipe for long term success.

Fortunately this is a problem that many strong players have been working on for decades now, and the solutions, while not perfect, are getting better and better. We will look at two of these solutions. One is for executing automated tests in the browser, and the other is for testing on different browsers and devices.

### Automating the browser - Playwright
No one understands the difficulty of testing applications in a browser better than the companies that build web browsers. They have to test every possible use of HTML, CSS, and JavaScript that a user could think of. There is no way that manual testing is going to work and so early on they started putting hooks into their browsers that allowed them to be driven from automated external processes. Selenium was introduced in 2004 as the first popular tool to automate the browser. However, Selenium is generally considered to be flaky and slow. Flakiness means that a test fails in unpredictable, unreproducible ways. When you need thousands of tests to pass before you can deploy a new feature, even a little flakiness becomes a big problem. If those tests take hours to run then you have an even bigger problem.

The market now has lots of alternatives when considering which automated browser framework to use. State of JS includes statistics on how popular these frameworks are. With frameworks coming and going all of the time, one telling statistic is the frameworks' ability to retain users.

For the purposes of this instruction, we could pick any of the top contenders. However, we are going to pick a newcomer, Playwright. Playwright has some major advantages. It is backed by Microsoft, it integrates really well with VS Code, and it runs as a Node.js process. It is also considered one of the least flaky of the testing frameworks.

As a demonstration of using Playwright, consider the following simplified HTML file containing a button that changes the paragraph text. The button calls a JavaScript function defined in a script element located in the HTML file.

```
<body>
  <p id="welcome" data-testid="msg">Hello world</p>
  <button onclick="changeWelcome()">change welcome</button>
  <script>
    function changeWelcome() {
      const welcomeEl = document.querySelector('#welcome');
      welcomeEl.textContent = 'I feel welcomed';
    }
  </script>
</body>
```

First, you need to install Playwright. In your project directory, use NPM to download the Playwright packages, install the browser drivers, configure your project, and create a couple example test files.

```
npm init playwright@latest
```

Next, you want to install the Playwright extension for VS Code. Go to the extensions tab in VS Code and search for, and install, Playwright Test for VSCode.

You can now write your first Playwright test. Take the following and paste it over the tests/example.spec.js file that the Playwright install created.

```
import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:5500/');

  // Get the target element and make sure it is in the correct starting state
  const hello = page.getByTestId('msg');
  await expect(hello).toHaveText('Hello world');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'change welcome' });
  await changeBtn.click();

  // Expect that the change happened correctly
  await expect(hello).toHaveText('I feel not welcomed');
});
```

This test makes sure you can successfully navigate to the desired page, that the page contains the desired elements, that you can press the button and the text changes as expected.

Before you run the test, you actually need your application running for the test to execute against. You can do this by using the VS Code Live Server extension, or if you are testing a Node.js based service then run npm run start. You can actually add configuration to your tests so that your application is started when your tests run, but for now, just start up your application before you run the test.

To run the test in VS Code, select the Test Explorer tab. You should see your test listed in the explorer. Select the example.spec.ts test and press the play button. This will start the test, launch a browser, run the test code to interact with the browser, and display the result. In this case our test fails because it is expecting the resulting text to be I feel not welcomed when it actually displays I feel welcomed.

The following image should be similar to what you see. You can see the listing of tests on the left and the JavaScript based test in the editor window on the right. When a test fails, the editor window displays a clear description of what went wrong. You can even debug the tests as they execute just like you would any other Node.js based JavaScript execution.

You can fix the test by either changing index.html or test/example.spec.js so that the text matches. Once you have done that you can run the test again and the test explorer should display a green check box.

This is just a simple example of the powerful functionality of Playwright. You are encouraged to explore its functionality and even add some tests to your projects. Once you have gained some competency with Playwright you will find that you can write your code faster and feel more confident when changing things around.

### Testing various devices - BrowserStack
With the ability to run automated UI tests, we now turn our attention to testing on the multitude of various devices. There are several services out there that help with this. One of these is BrowserStack. BrowserStack lets you pick from a long list of physical devices that you can run interactively, or use when driving automated tests with Selenium. The image below only shows a partial list of iPhone devices. BrowserStack also has devices for Android, Mac, and Windows.

When you launch a device it connects the browser interface to a physical device hosted in a data center. You can then use the device to reproduce user reported problems, or validate that your implementation works on that specific device. The following image shows the use of BrowserStack to experiment with an iPhone 14 running iOS 16.

BrowserStack offers free trials if you would like to see how your startup application works on a specific device.



## Endpoint testing
Using test driven development (TDD) for testing service endpoints is a common industry practice. Testing services is usually easier than writing UI tests because it does not require a browser. However, it does still take effort to learn how to write tests that are effective and efficient. Making this a standard part of your development process will give you a significant advantage as you progress in your professional career.

As demonstrated by the following State of JS survey, there are lots of good testing packages that work well with Express driven services. We are going to look at the current champion Jest.

To get started with Jest we need a simple web service. In a console window, create a test directory, install Express, and open up VS Code.

```
mkdir testJest
cd testJest
npm init -y
npm install express
code .
```

Now create a file named server.js and use Express to create an application with two endpoints: one to get a store (getStore), and another to update a store.

**server.js**
```
const express = require('express');
const app = express();

app.use(express.json());

// Endpoints
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/store/:storeName', (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});

module.exports = app;
```

In order to allow Jest to start up the HTTP server when running tests, we initialize the application a little bit differently than we have in the past. Normally, we would have just started listening on the Express app object after we defined our endpoints. Instead we export the Express app object from our server.js file and then import the app object in the index.js file that is used to run our service.

**index.js**
```
const app = require('./server');

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Breaking apart the definition of the service from the starting of the service allows us to start the service both when we run normally and also when using our testing framework.

You can test that the service is working properly by running the service in the VS Code debugger and pressing F5 while viewing the index.js file. Then open a browser and navigate to http://localhost:8080/store/provo. Stop the debugging session once you have demonstrated that the service is working correctly.

To launch the service using Jest we create another file that has a suffix of .test.js. Any file with that suffix is considered a testing file and will automatically be discovered by Jest and examined for tests to run.

### A simple test
Before we write tests for our endpoints we will write a simple test that demonstrates how Jest works. A test is created by calling the Jest test function. Note that you don't need to include a require statement to import Jest functions into your code. Jest will automatically import itself when it discovers a test file.

Let's make our first test by creating a file named store.test.js and pasting in the following code.

**store.test.js**
```
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
```

The test function takes a description as the first parameter. The description is meant to be human readable. In this case it reads: "test that equal values are equal". The second parameter is the function to call. Our function just calls the Jest expect function and chains it to the toBe function. You can read this as "expect false to be true", which of course is not true, but we want to see our test fail the first time we run it. We will fix this later so that we can show what happens when a test succeeds.

In order to run the test we need to install the Jest package using NPM. From the console install the package. The -D parameter tells NPM to install Jest as a development package. That keeps it from being included when we do production release builds.

```
npm install jest -D
```

Now, replace the scripts section of the package.json file with a new command that will run our tests with Jest.

```
"scripts": {
  "test": "jest"
},
```

With that in place we can run the test command and our test will execute. Notice that Jest shows exactly where the test failed and what expected values were not received.

```
➜ npm run test

 FAIL  ./store.test.js
  ✕ that unequal values are not equal (1 ms)

  ● that unequal values are not equal

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      3 |
      4 | test('that unequal values are not equal', () => {
    > 5 |   expect(false).toBe(true);
        |                 ^
      6 | });
      7 |
      8 | // describe('endpoints', () => {

      at Object.toBe (store.test.js:5:17)

Tests:       1 failed, 1 total
```

We can then fix our test by rewriting it so that the expected value matches the provided value.

**store.test.js**
```
test('that equal values are equal', () => {
  expect(true).toBe(true);
});
```

This time when we run the test it passes.

```
➜  npm run test

 PASS  ./store.test.js
  ✓ that equal values are equal (1 ms)

Tests:       1 passed, 1 total
```

Note that this example didn't actually test any of our code, but it does demonstrate how easy it is to write tests. A real test function would call code in your program. Let's do this by actually making calls to our endpoints.

### Testing endpoints
To test our endpoints we need another package so that we can make HTTP requests without having to actually send them over the network. This is done with the NPM package called supertest. Go ahead and install this now.

```
npm install supertest -D
```

We can then alter store.test.js to import our Express service and also the request function from supertest that we will use to make HTTP requests.

To make an HTTP request you pass the Express app to the supertest request function and then chain on the HTTP verb function that you want to call, along with the endpoint path. You can then chain on as many expect functions as you would like. In the following example we will expect an HTTP status code of 200 (OK), and that the body of the response contains the object that we expect the endpoint to return.

If something goes wrong, the end function will contain an error and we pass the error along to the done function. Otherwise we just call done without the error.

**store.test.js**
```
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```

When we run this test we see that it passes without error.

```
➜  npm run test

 PASS  ./store.test.js
  ✓ getStore returns the desired store (16 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.237 s, estimated 1 s
```

You can change the test to expect a status code of 500 (Server Error) if you want to see the test fail. You can also change the endpoint code to return a 201 status code (Created) and also see the test fail.

Now we can add a test for the updateStore endpoint. To do this we can copy the getStore endpoint, change the description, change the HTTP function verb to put, and send the body of the put request using the chained send function.

```
const request = require('supertest');
const app = require('./server');

test('updateStore saves the correct values', (done) => {
  request(app)
    .put('/store/provo')
    .send({ items: ['fish', 'milk'] })
    .expect(200)
    .expect({ items: ['fish', 'milk'], updated: true })
    .end((err) => (err ? done(err) : done()));
});

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```

The great thing about test driven development (TDD) is that you can actually write your tests first and then write your code based upon the design represented by the tests. When your tests pass you know your code is complete. Additionally, when you make later modifications to your code you can simply run your tests again. If they pass then you can be confident that your code is still working without having to manually test everything yourself. With systems that have hundreds of endpoints and hundreds of thousands of lines of code, TDD becomes an indispensable part of the development process.



## Security overview
The internet allows us to socially connect, conduct financial transactions, and provide access to sensitive individual, corporate, and government data. It is also accessible from every corner of the planet. This positions the internet as a tool that can make the world a much better place, but it also makes a very attractive target for those who would seek to do harm. Preventing that potential for harm needs to be in the forefront of you mind whenever you create or use a web application.

You can see bad actors at work on your very own server by using ssh to open a console to your server and reviewing the authorization log. The authorization log captures all of the attempts to create a session on your server.

```
sudo less +G /var/log/auth.log
```

The last entry in the log will be from your connection to the server.

```
Feb 23 16:26:54 sshd[319071]: pam_unix(sshd:session): session opened for user ubuntu(uid=1000) by (uid=0)
Feb 23 16:26:54 systemd-logind[480]: New session 1350 of user ubuntu.
Feb 23 16:26:54 systemd: pam_unix(systemd-user:session): session opened for user ubuntu(uid=1000) by (uid=0)
```

However, you will see lots of other attempts with specific user names associated with common exploits. These all should be failing to connect, but if your server is not configured properly then an unauthorized access is possible. The sample of attempts below show the IP addresses of the attacker, as well as the user name that they used. Using the whois utility we can see that these attacks are originating from servers at DLive.kr in Korea, and DigitalOcean.com in the USA.

```
Feb 19 02:34:28 sshd[298185]: Invalid user developer from 27.1.253.142
Feb 19 02:37:12 sshd[298193]: Invalid user minecraft1 from 27.1.253.142
Feb 23 14:26:19 sshd[318868]: Invalid user siteadmin 174.138.72.191
Feb 23 14:22:18 sshd[318845]: Invalid user tester 174.138.72.191
```

As an experiment, one of our TAs created a test server with a user named admin with password password. Within 15 minutes, an attacker had logged in, bypassed all the restrictions that were in place, and started using the server to attack other servers on the internet.

Even if you don't think your application is valuable enough to require security, you need to consider that you might be creating a security problem for your users on other systems. For example, think about a simple game application where a user is required to provides a username and password in order to play the game. If the application's data is then compromised, then an attacker could use the password, used for the game application, to gain access to other websites where the user might have used the same password. For example, their social networking sites, work account, or financial institution.

### Security terminology
Web application security, sometimes called AppSec, is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications. Web application security involves securing the frontend code running on the user's device and also the backend code running on the web server.

Here is a list of common phrases used by the security community that you should be familiar with.

- Hacking - The process of making a system do something it's not supposed to do.
- Exploit - Code or input that takes advantage of a programming or configuration flaw.
- Attack Vector - The method that a hacker employs to penetrate and exploit a system.
- Attack Surface - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
- Attack Payload - The actual code, or data, that a hacker delivers to a system in order to exploit it.
- Input sanitization - "Cleaning" any input of potentially malicious data.
- Black box testing - Testing an application without knowledge of the internals of the application.
- White box testing - Testing an application by with knowledge of the source code and internal infrastructure.
- Penetration Testing - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
- Mitigation - The action taken to remove, or reduce, a threat.

### Motivation for attackers
The following lists some common motivations at drives a system attack.

- Disruption - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
- Data exfiltration - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
- Resource consumption - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.

### Examples of security failures
Security should always be a primary objective of any application. Building a web application that looks good and performs well, is a lot less important than building an application that is secure.

Here are a few examples where companies failed to properly prevent attacks to their systems.

- $100 million dollars stolen through insider trading using SQL injection vulnerability
- Log4Shell remote code execution vulnerability, 93% of cloud vulnerable at time of discovery, dubbed "the most severe vulnerability ever"
- Russian hackers install backdoor on 18,000 government and Fortune 500 computers
- Hackers Hold Computers of 23 Texas Towns For Ransom

### Common hacking techniques
There are a few common exploitation techniques that you should be aware of. These include the following.

- Injection: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.

- Cross-Site Scripting (XSS): A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.

- Denial of Service: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.

- Credential Stuffing: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.

- Social engineering - Appealing to a human's desire to help, in order to gain unauthorized access or information.

### What can I do about it?
Taking the time to learn the techniques a hacker uses to attack a system is the first step in preventing them from exploiting your systems. From there, develop a security mindset, where you always assume any attack surface will be used against you. Make security a consistent part of your application design and feature discussions. Here is a list of common security practices you should include in your applications.

- Sanitize input data - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
- Logging - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
- Traps - Create what appears to be valuable information and then trigger alarms when the data is accessed.
- Educate - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
- Reduce attack surfaces - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
- Layered security - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
- Least required access policy - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
- Safeguard credentials - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
- Public review - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.



## OWASP
The Open Web Application Security Project (OWASP) is a non-profit research entity that manages the Top Ten list of the most important web application security risks. Understanding, and periodically reviewing, this list will help to keep your web applications secure.

The following is a discussion of each of the entries in the top ten list, along with examples, and suggested mitigations.

### A01 Broken Access Control
Broken access control occurs when the application doesn't properly enforce permissions on users. This could mean that a non-admin user can do things that only an admin should be able to do, or admin accounts are improperly secured. While browser application code can restrict access by disabling UI for navigating to sensitive functionality, the ultimate responsibility for enforcing access control rests upon the application service.

As an example of broken access control, consider an application where the UI only provides a navigation to the administrator application settings if the user is an administrator. However, the attacker can simply change the URL to point to the application settings URL and gain access. Additionally, unless the service endpoints reject requests to obtain, and update, the application settings, any restrictions that the UI provides are meaningless.

Mitigations include:

- Strict access enforcement at the service level
- Clearly defined roles and elevation paths

### A02 Cryptographic Failures
Cryptographic failures occur when sensitive data is accessible either without encryption, with weak encryption protocols, or when cryptographic protections are ignored.

Sending any unencrypted data over a public network connection allows an attacker to capture the data. Even private, internal, network connections, or data that is store without encryption, is susceptibly to exploitation once an attacker gains access to the internal system.

Examples of ineffective cryptographic methods include hashing algorithms like MD5 and SHA-1 that are trivial to crack with modern hardware and tools.

Another cryptographic failure happens when applications do not validate the provided web certificate when establishing a network connection. This is a case of falsely assuming that if the protocol is secure then the entity represented by the protocol is acceptable.

Mitigations include:

- Use strong encryption for all data. This includes external, internal, in transit, and at rest data.
- Updating encryption algorithms as older algorithms become compromised.
- Properly using cryptographic safeguards.

### A03 Injection
Injection exploits occur when an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input. For example, consider an input field that is only expected to contain a user's password. Instead the attacker supplies a SQL database command in the password input.

**Supplied password**
```
`p@ssword!'; DROP TABLE db; --`;
```

The application then uses a template SQL query to validate the user's password.

**Template query**
```
`SELECT user FROM db WHERE password='${password}' LIMIT 1`;
```

When the supplied input is injected into the template an unintended query results. Notice that this query will delete the entire database table.

**Resulting query**
```
SELECT user FROM db WHERE password='p@ssword!'; DROP TABLE db; -- ` LIMIT 1
```

Mitigations include:

- Sanitizing input
- Use database prepared statements
- Restricting execution rights
- Limit output

### A04 Insecure Design
Insecure design broadly refers to architectural flaws that are unique for individual systems, rather than implementation errors. This happens when the application team doesn't focus on security when designing a system, or doesn't continuously reevaluate the application's security.

Insecure design exploits are based upon unexpected uses of the business logic that controls the functionality of the application. For example, if the application allows for trial accounts to be easily created, then an attacker could create a denial of service attack by creating millions of accounts and utilizing the maximum allowable usage.

Mitigations include:

- Integration testing
- Strict access control
- Security education
- Security design pattern usages
- Scenario reviews

### A05 Security Misconfiguration
Security misconfiguration attacks exploit the configuration of an application. Some examples include using default passwords, not updating software, exposing configuration settings, or enabling unsecured remote configuration.

For example, some third party utilities, such as a logging system, will expose a public administration interface that has a default user name and password. Unless that configuration is changed, an attacker will be able to access all of the critical logging information for your application.

Mitigations include:

- Configuration reviews
- Setting defaults to disable all access
- Automated configuration audits
- Requiring multiple layers of access for remote configuration

### A06 Vulnerable and Outdated Components
The longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase. This is primarily due to the cost of maintaining an application and keeping it up to date in order to mitigate newly discovered exploits.

Outdated components often accumulate as third party packages are used by the application. Over time the packages are updated in order to address security concerns, or somethings the packages stop being supported. When this happens your application becomes vulnerable. Consider what happens when a request to install NPM packages displays the following warning:

```
➜  npm install

up to date, audited 1421 packages in 3s

7 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

The application developer is warned that the components are vulnerable, but when faced choice of taking the time to update packages, and potentially break the application, or meeting deliverable deadlines, the developer is tempted to ignore the warning and continue without addressing the possible problem.

Mitigations include:

- Keeping a manifest of your software stack including versions
- Reviewing security bulletins
- Regularly updating software
- Required components to be up to date
- Replacing unsupported software

### A07 Identification and Authentication Failures
Identification and authentication failures include any situation where a user's identity can be impersonated or assumed by an attacker. For example, if an attacker can repeatedly attempt to guess a user's password, then eventually they will be successful. Additionally, if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack.

Another example of an identification failure would be a weak password recovery process that doesn't properly verify the user. Common practices such as asking for well known security questions (e.g. mother's maiden name) from a user fall into this category.

Mitigations include:

- Rate limiting requests
- Properly managing credentials
- Multifactor authentication
- Authentication recovery

### A08 Software and Data Integrity Failure
Software and data integrity failures represent attacks that allow external software, processes, or data to compromise your application. Modern web applications extensively use open source and commercially produced packages to provide key functionality. Using these packages without conducting a security audit, gives them an unknown amount of control over your application. Likewise, using a third party processing workflow, or blindly accessing external data, opens you up to attacks.

Consider the use of a third party continuous delivery (CD) pipeline for deploying your application to a cloud provider. If the CD provider is penetrated by an attacker then they also gain access to your production cloud environment.

Another example is the use of an NPM package that is controlled by an attacker. Once the package has gained general acceptance, the attacker can subtly change the package to capture and deliver sensitive information.

Mitigations include:

- Only using trusted package repositories
- Using your own private vetted repository
- Audit all updates to third party packages and data sources

### A09 Security Logging and Monitoring Failures
Proper system monitoring, logging, and alerting is critical to increasing security. One of the first things an attacker will do after penetrating your application is delete or alter any logs that might reveal the attacker's presence. A secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion, and conduct post-mortem analysis.

An attacker might also try to create a smoke screen in the monitoring system in order to hide a true attack. This might consist of a barrage of periodic ineffective attacks that hide the insertion of a slightly different effective one.

Mitigations include:

- Real time log processing
- Automated alerts for metric threshold violations
- Periodic log reviews
- Visual dashboards for key indicators

### A10 Server Side Request Forgery (SSRF)
This category of attack causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services.

For example, if your service exposed an endpoint that let a user retrieve an external profile image based upon a supplied URL, an attacker could change the URL to point to a location that is normally only available to the service internally.

The following command would theoretically return the internal AWS service metadata that includes the administrative access token.

```
curl https://yourdomain.click/user/image?imgUrl=http://169.254.169.254/latest/meta-data/iam/security-credentials/Admin-Role
```

Mitigations include:

- Sanitizing returned data
- Not returning data
- Whitelisting accessible domains
- Rejecting HTTP redirects



## TypeScript
TypeScript adds static type checking to JavaScript. This provides type checking while you are writing the code to prevent mistakes like using a string when a number is expected. Consider the following simplistic JavaScript code example.

```
function increment(value) {
  return value + 1;
}

let count = 'one';
console.log(increment(count));
```

When this code executes the console will log one1 because the count variable was accidentally initialized with a string instead of a number.

With TypeScript you explicitly define the types, and as the JavaScript is transpiled (with something like Babel) an error will be generate long before the code is seen by a user. To provide type safety for our increment function, it would look like this:

```
function increment(value: number) {
  return value + 1;
}

let count: number = 'one';
console.log(increment(count));
```

With TypeScript enabled, VS Code will analyze the code and give you an error about the invalid type conversion.

In addition to defining types for function parameters, you can define the types of object properties. For example, when defining the state for a React class style component, you can specify the types of all the state and property values.

```
export class About extends React.Component {
  state: {
    imageUrl: string;
    quote: string;
    price: number;
  };

  constructor(props: { price: number }) {
    super(props);

    this.state = {
      imageUrl: '',
      quote: 'loading...',
      price: props.price,
    };
  }
}
```

You can likewise specify the type of a React function style component's properties with an inline object definition.

```
function Clicker(props: { initialCount: number }) {
  const [count, updateCount] = React.useState(props.initialCount);

  return <div onClick={() => updateCount(1 + count)}>Click count: {count}</div>;
}
```

### Interfaces
Because it is so common to define object property types, TypeScript introduced the use of the interface keyword to define a collection of parameters and types that an object must contain in order to satisfy the interface type. For example, a Book interface might look like the following.

```
interface Book {
  title: string;
  id: number;
}
```

You can then create an object and pass it to a function that requires the interface.

```
function catalog(book: Book) {
  console.log(`Cataloging ${book.title} with ID ${book.id}`);
}

const myBook = { title: 'Essentials', id: 2938 };
catalog(myBook);
```

### Beyond type checking
TypeScript also provides other benefits, such as warning you of potential uses of an uninitialized variable. Here is an example of when a function may return null, but the code fails to check for this case.

You can correct this problem with a simple if block.

```
const containerEl = document.querySelector<HTMLElement>('#picture');
if (containerEl) {
  const width = containerEl.offsetWidth;
}
```

Notice that in the above example, the return type is coerced for the querySelector call. This is required because the assumed return type for that function is the base class Element, but we know that our query will return the subclass HTMLElement and so we need to cast that to the subclass with the querySelector<HTMLElement>() syntax.

#### Unions
TypeScript introduces the ability to define the possible values for a new type. This is useful for doing things like defining an enumerable.

With plain JavaScript you might create an enumerable with a class.

```
export class AuthState {
  static Unknown = new AuthState('unknown');
  static Authenticated = new AuthState('authenticated');
  static Unauthenticated = new AuthState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}
```

With TypeScript you can define this by declaring a new type and defining what its possible values are.

```
type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';

let auth: AuthState = 'authenticated';
```

You can also use unions to specify all of the possible types that a variable can represent.

```
function square(n: number | string) {
  if (typeof n === 'string') {
    console.log(`{$n}^2`);
  } else {
    console.log(n * n);
  }
}
```

### Using TypeScript
If you would like to experiment with TypeScript you can use CodePen, or the official TypeScript playground. The TypeScript playground has the advantage of showing you inline errors and what the resulting JavaScript will be.

To use TypeScript in your web application you can create your project using vite. Vite knows how to use typescript without any additional configuration.

```
npm create vite@latest
✔ Project name: … viteDemo
✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗
```

If you want to convert an existing application, then install the NPM typescript package to your development dependencies.

```
npm install --save-dev typescript
```

This will only include typescript package when you are developing and will not distribute it with a production bundle.

Once you have TypeScript installed for your project, you then configure how you want TypeScript to interact with your code by creating a tsconfig.json file.

If your project structure is configured to have your source code in a directory named src, and you want to output to a directory named build then you would use the following TS configuration file.

```
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src/**/*"
  ]
}
```



## Performance monitoring
The performance of your application plays a huge role in determining user satisfaction. The following statistics show the impact that just one second of delay can make.

In order to prevent losing users, you want your application to load in about one second. That means you need consistently measure and improve the responsiveness of your application. The main things you want to monitor include:

1. Browser application latency
2. Network latency
3. Service endpoint latency
For the context of this discussion, latency is defined as the delay that your user experiences before a request is satisfied.

Let's look at each of these performance areas, and then we can suggest some tools for measuring and improving the results.

### Browser application latency
Browser application latency is impacted by the speed of the user's device, the amount of data that needs to be processed, and the time complexity of the processing algorithm.

When a user requests your application in a browser, the browser will request your index.html page first. This is followed by requests for any files that index.html links, such as JavaScript, CSS, video, and image files. Once your JavaScript is loaded, it will start making requests to services. This includes any endpoints that your provide as well as ones provided by third parties. Each of those requests takes time for the browser to load and render. A page with lots of large images and lots of service calls, will take longer than a page that only loads simple text from a single HTML file.

Likewise, if your JavaScript does significant processing while a page is loading, then your user will notice the resulting latency. You want to make application processing as asynchronous as possible so that it is done in the background without impacting the user experience.

You can reduces the impact of file size, and HTTP requests in general, by doing one or more of the following:

1. Use compression when transferring files over HTTP.
2. Reduce the quality of images and video to the lowest acceptable level.
3. Minify JavaScript and CSS. This removes all whitespace and creates smaller variable names.
4. Use HTTP/2 or HTTP/3 so that your HTTP headers are compressed and the communication protocol is more efficient.
You can also reduce the number of requests you make by combining the responses from multiple endpoint requests into a single request. This eliminates duplicated fields, but also decreases the overhead associated with each request.

### Network latency
You pay a latency price for every network request that you make. For this reason, you want to avoid making unnecessary or large requests.

Network latency is impacted by the amount of data that you send, the amount of data a user can receive per second (this is called bandwidth), and the distance the data has to travel.

If the user has a low bandwidth connection that can only receive data at rates lower than 1 megabit per second, then you need to be very careful to reduce the number of bytes that you send to that user. Global latency is also a problem for users. If your application is hosted in a data center located in San Francisco, and used by someone living in Nairobi, then there will be a additional latency of 100 to 400 milliseconds for each request.

You can mitigate the impact of global latency by hosting your application files in data centers that are close to the users you are trying to serve. Applications that are seeking to reach a global audience will often host their application from dozens of places around the world.

### Service endpoint latency
Service endpoint latency is impacted by the number of request that are made and the amount of time that it takes to process each request.

When a web application makes a request to a service endpoint there is usually some functionality in the application that is blocked until the endpoint returns. For example, if a user requests the scores for a game, the application will delay rendering until those scores are returned.

You want to reduce the latency of your endpoints as much as possible. Ideally you want to keep the endpoint latency to less than 10 milliseconds (ms). This may seem like a very short time, but commonly, an application will make dozens of endpoint requests to render a component. If each of those endpoints take 10 ms, then you are looking at 100 to 200 ms. When you add network latency to the time it takes for the application to process the response, and then add the time it takes for the browser to render, you can easily exceed the desired 1 second load time.

### Performance tools
#### Chrome network tab
You can see the network requests made by your application and the time necessary for each request, by using the browser's debugging tools. This will show you what files and endpoints are requested and how long they are taking. If you sort by time or size, it will be clearer what areas need your attention. Make sure you clear your cache before running tests so that you can see what the real latency is and not just the time it takes to load from the browser's cache.

#### Simulating real users
The network tools in the Chrome debugger also allows you to simulate low bandwidth connections by throttling your network. For example, you can simulate a 3G network connection that you would find on a low end mobile phone.

Throttling while testing is really useful since web developers often have high end computers and significant network bandwidth. That means you are not having the same experience as your users, and you will be surprised when they don't use your application because it is so slow.

#### Chrome Lighthouse
You can also use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

#### Chrome performance tab
When you are ready to dig into your application's frontend performance make sure you experiment with the Chrome debugger's performance tab. This breaks down the details of your application based upon discrete intervals of time so that you can isolate where things are running slow.

You start profiling the performance by pressing the record button and then interacting with your application. Chrome will record memory usage, screenshots, and timing information. You can then press the stop recording button and review the collected data. For example, the performance data represented in the image above, shows that 56% of the execution time was used in the button.press function. If you drill in on the source code for the function you will see exactly which lines of the function were consuming the processing time.

#### Global speed tests
You also want to test your application from different locations around the world. There are many online providers that will run these test for you. Here are the results for running a test using Pingdom.com.

You can see that it is correctly suggesting that we enable gz compression on our transmitted data in order to increase performance, and to add headers that will enable caching on the browser.

This tool provided by DotComTools allows you to run tests from multiple locations at once.

Here you can see we perform acceptably from the United States and Europe, but are struggling in Asia. That makes sense considering that our server is located in North Virginia. In order to correct this, we need to use a Content Delivery Network (CDN) with an additional location closer to our target users in China.



## UX design
Properly considering the user experience (UX) of your application will make all the difference in your success. Focusing first on technology, cost, or revenue tends to lead to an unsatisfying user experience. Instead you want to consider why someone is using your application, how they want to interact, how visually appealing it is, and how easy it is to get something done.

### Design as a story
It is often useful to think of user experience as a story. Consider the background plot, the user entering the stage, interacting with other actors, and getting the audience to applaud. At first this may sound a bit strange, but applications are not used in a vacuum. There is always a reason someone is using your application. If you can clearly define that background plot, then the experience will better match the user's expectation. Likewise, if you know what results in a satisfied audience, then you build the application experience around delivering that result.

Consider the tourism application for the city of Philadelphia. They know a user visits the site because they want to have an experience in Philadelphia. The application immediately provides a time relevant proposal for that experience. All the navigation options for having a successful experience (events, food, deals, and trip planning) are immediately accessible. Just looking at the initial imagery conveys the excitement of engaging in the application.

### Simplicity
Google broke all the rules for web application design when they released their homepage in 1998.

Previous to that, it was common for app designers to pile everything they could into the initial view of the application. This includes multiple advertisements, navigation options, lots of hyperlinks, and color choices. Here is an example from a competitor around the same time period.

The key point of this example is that simplicity attracts users' attention and engages them in the application experience. Building off of Google's positive reaction, other major applications immediately followed their example. Here is the initial experience when visiting facebook's application for the first time. Notice that it simply states the purpose of the application and invites the user to create an account.

Simplicity doesn't require a blank page. Simplicity can also be visually stimulating with beautiful imagery and simple navigation options.

You can also include significant amounts of content. You just need to keep things focused on a single purpose, for example, creating an account, viewing images, or beginning your travel experience. Below is the Pinterest application landing page. Even though the viewport is cluttered with images, they are all working towards the same purpose of demonstrating the value of the application.

### Consistency
There is a tension that exists with web applications between being consistent with how other applications work and being unique so that your experience stands out. What you want to avoid is being so different that a user has to think hard in order to use your application. This is usually avoided by using the standard conventions that a user expects to find on a web application. The following image describes the standard layout and navigation controls of an application.

What a standard layout is defined to be will migrate over time as new trends in application fashion seek to make things look fresh. However, if you follow current trends, your users are more likely to engage in your application.

One easy way to build an application that uses current design trends is to use a web framework that provides standard layouts, colors, and iconography. Here is an example of a template application built using a web framework with just a few minutes of work.

### Navigation
A user should never get lost while using your application. To help orient your user you want to carefully design the flow of the application and provide the proper navigational controls.

```
Navigation Controls	 Description
App controls	       User settings, payment, and help controls
Device controls	     Device specific controls such as back, next, and home
Breadcrumb	         A path of the user's walk through the application
Common actions	     Direct links to locations based on the current view
```

#### Application map
The first step in building your application should be to design an application map that has all the views that you will present to the user. This helps clarify the functional pieces of the application and their relationship to each other. For example, if you were building a music player you might start with a landing page that displays some marketing information and allows the user to create an account or log in. If the user is already logged in, then they start with a dashboard that shows recent or suggested songs. From there they can either search the music catalog, navigate to a collection of songs based on a playlist, album, or artist, or go to an individual song.

If your application map starts looking like a governmental bureaucracy then you probably want to reconsider the interrelation of functionality. A convoluted application map is a strong indicator that the user experience with be likewise convoluted.

#### Device controls
With a concise application map in place, you can design navigational controls that allow the user to successfully use the application. To begin with, you want to make sure the navigational controls provided by the device are completely supported. When your application is hosted in a browser the previous and next buttons should take the user through the stack of visited views. If your application is hosted on a mobile device then the conventions of that device should work properly. For example, on an Android device swiping left and right should navigate the application views backward or forwards.

#### Breadcrumb
You always want to indicate where the user is, where they came from, and where they can go. You can do this with a breadcrumb control that lists the path the user took to get to where they are.

```
Dashboard > Beatles > Abbey Road > Come Together
```

A breadcrumb quickly orients the user and also allows them to jump up the navigational path.

#### Common actions
You also want to anticipate where a user would commonly want to go based upon the view that they are in. For example, if they are playing a song by one artist, it is common that they will want to view related artists. Therefore you want to provide a navigational link that will take them to a search view with a prepopulated query for related artists.

Commonly accessed views should always be accessible from a standard location. For example, the user settings should always be on the top right, and the breadcrumb should always be on the top left. (Those locations get switched if using a Right-To-Left language.)

You want to partition a large application into functional areas and place links for each area in the navigation bar at the top of the application. For example, if we added the ability to create music to our music application, you would want links that switched between listening to and creating music.

### Colors
One of the first things you should consider as you design your application is the color scheme that you will employ. This usually involves picking a a primary, secondary, and focus color.

There are lots of tools out there that help you create a color scheme. These will let you chose monochromatic, adjacent, or triadic color schemes. You can then spin and adjust a color wheel until you get what you are looking for. With your scheme selected you can export the colors directly to CSS rulesets.

Some free tools you should explore include Paletton and Adobe.

With your core colors selected, you can use different shades of the colors to reduce the starkness of the limited number of colors without turning your application into a rainbow.

Just make sure you stick with your color scheme and even consider it when selecting font colors and images.

### Typography
A great font will make your application easy on your user's eyes and increase their attention span. Since fonts have been around since the Gutenberg Press, there is some serious history to them. The following shows the different attributes of a font.

You can classify fonts into the following groups.

```
Font Class	  	  Meaning
Sans Serif	      Only major strokes
Serif           	Minor strokes off the major strokes
Monospace	Font    All letters have the same size
Handwriting	Font  Cursive strokes
```

When picking fonts you usually want to restrict the number of fonts to three or less. You also want to use them consistently. For example, it is common to use a Sans Serif font for buttons, navigation links, and body text. Serif fonts are used for paragraph headings. Monospaced fonts are for coding examples or text that needs alignment.

If you are looking for royalty free fonts that you can use in your application, you should check out Google's open collection of fonts.

### Iconography
Because users will recognize standard icons, you can decrease the learning curve for your application if you use standard web icons to identify common functionality. For example, most users will immediately identify the following three icons as the menu, sharing, and close actions.

Icons not only exploit user recognition, but they also save limited display space, and provide a visually pleasing alternative to text. The important thing is that you pick a set that includes standard icons and that you use them for their intended purpose. Icons become an anti-pattern when they are used to represent something that is contrary to their common usage.

There are lots of standard icon packages that you can choose from. This includes packages such as Font Awesome, Bootstrap Icons, Material Icons, Flat Color Icons, and Ant Design Icons

### Text
You want to be consistent in the size of the text that you use as well as the number of characters displayed on a line. Commonly there are five different catagories of text sizes used by an application. These include the following.

```
Purpose	        Size
Page title	    96 px
Titles	        48-20 px
Text	          16 px
Secondary text	14 px
Input	          16 px
```

These sizes are just suggestions but they serve as a good place to start. If you are using an application framework then they will have default text sizes defined. The important thing is that you are consistent with the sizing. Titles should not be one size for a particular view and a different size on another one. Inconsistency confuses the user and makes the application feel haphazardly designed.

#### Limiting line length
Limiting the number of characters displayed on a line makes it easier to read paragraphs of text. The browser will automatically wrap text based on the viewport width, but having a line spread across a 4K monitor that is hundreds of characters long will make your application look clunky and drive the user crazy as they try and find the start of the next line in a long paragraph.

Instead you want to specify a maximum width for your paragraphs. Usually a width of 60 to 80 characters is optimal. You can set this with the max-width property set to something like 35em. The em unit is the approximately the width of the m character in the font and so about half of an 'm' is about the average character width.

The following shows the visual and cognitive impact of different line lengths.

### Internationalization
Designing a global international application requires careful consideration from the beginning. Attempting to internationalize a complex, mature application after it has a domestic presence is very difficult.

One of the most important aspects to consider is the translation of textual content and the ability of the user to select their desired language.

Successful translation also requires the text to be rendered properly. For example, several languages are read from right to left. Therefore the content, and the application itself, must be displayed in that orientation.

Likewise the format for displaying dates, times, numbers, and currency varies greatly between nationalities. This includes country specific currency symbols (¥, $, €, or ฿), the order of date fields (MM/DD/YY or DD/MM/YY), and numerical separators (1,000.50 or 1.000,50).

Iconography can also be a concern. An owl in the United States represents wisdom, but in some Asian countries it symbolizes stupidity. Icons that carry religious representations can be even more disruptive.

Proper international design requires thought across the full technology stack. If data is not properly passed, stored, and rendered at every level of the stack it will fail to properly work globally. For example, dates and times should always be stored in a format that properly represents time zones (e.g. ISO 8601) and rendered based upon the user's location. That way when users do things like global calendaring or traveling between countries their data is not corrupted.

### Space
Introducing space around your application content helps to create focus and lessen the effort a user has to exert in order to interpret the presented information.

Consider the following example, where whitespace is used to create focus on the brand, imagery, and call to action.

Here is another example where whitespace brings the user's attention to specific text that teases the user and leads them down to the explanatory text, followed by actions the user can take to learn more.

Consider the same content with all of the whitespace removed. This is of course extreme, but it demonstrates the power that whitespace has.

### Interaction
Making your application interactive is a powerful way to engage the user and increase retention. Interaction can be as simple as gathering and displaying the user's name or avatar, or as complex as letting the user completely drive the application based on the choices they make.

Here is an example of purchasing a car where the user can interactively see what their car will look like based upon their desires.

Interaction makes the application come alive and invests the user in the result of their efforts.

### Images
It is often said that a picture can save a thousand words. Including images in your application can convey deeper understanding, make it more visually appealing, and draw a user into the application. The following example helps the user know exactly what a product looks like and what it might look like when they use it. The contrast of colors in the image helps the product to pop and further suggest its value.

Avoid using images that are only used as space fillers. Display space is too limited to waste on an image that doesn't add significant value. For example, the following image dominates the display of a technical article about CORS. However, it was only chosen because it matched the color scheme of the application and the title contains the work talk in it, but two people talking trough a tin can has nothing to do with CORS. Now the user has to scroll past the distracting image to get to the content. Instead, either omit the image, or include one that serves to clarify the purpose of CORS. That way your images are visually appealing and provide information that furthers the story you are trying to tell.

### Animation
Animation can help make your application come alive, but it also helps confirm choices, demonstrate progress, and focus attention.

However, too much animation can physically make your users sick. Here is an example

### Decision fatigue
You need to consider the impact of the choices that you present to a user. Hick's Law states that the time necessary to make a decision increases logarithmically with the number of choices presented. That doesn't mean that you should not provide options to the user, but that you should limit the number of choices given at any point in time.

For example, the process of building a pizza involves many steps. First you must pick the location you want to order from, then the pizza size, cheese, meats, and veggies. Finally you need to provide payment. Each of those choices require a lot of input from the user, and so limiting the number of choices displayed at one time will help reduce decision fatigue and you will have better odds of them completing the ordering process.

### Device aware
Modern devices allow a web application to interact in many sophisticated ways. This includes abilities such as installing to the device's desktop, determining the device's geographical location, displaying notifications, detecting the acceleration of the device, using the camera, and accessing the user's contacts. The more seamlessly the application is integrated with the device the more intuitive and useful the application will be.

The following shows an application suggesting that the user add the application to the device's home screen. This makes it so a user can access the application without having to navigate to the application's URL.

### Device size and orientation
Properly reorienting and altering the functionality of the application interface based upon the size and orientation of the display is especially important on mobile devices. The following shows an application that provides a course on how to tie knots. The default view for the course shows the video on the left and an interactive transcript on the right.

When the device is rotated the application automatically orients itself and moves the interactive transcript below the video in order to maximize the available space. The user can also display the table of contents on the left or the peer chat on the right. Because the device's display is large enough to show the content, even in portrait orientation, the table of contents or chat panes can also occupy a portion of the display. This allows the instructional content to still be visible while the functionality of the other panes are utilized.

On a smaller device, such as a mobile phone, the table of contents or chat panes completely replace the content. The user can then click on the X icon to return to the instructional content. That ability to restrict the focus to a single functional purpose maximizes the use of the limited space without losing the context of the content the user is viewing.

The following website demonstrates what happens when an application fails to properly adapt to the orientation of the device. When viewed in portrait mode the application only uses a small portion of the display to show a health warning, but when rotated, the warning completely occupies the display. This creates a confusing experience where the original context of the application is obscured, and leaves the user wondering what should be done next.

### Performance
Application performance is an important aspect of your design that often gets overlooked until it is too late. Your application can be visually stunning, have intuitive navigation, and have amazing interactivity, but if it takes minutes to load or react to a user's actions, it will completely fail. Many studies have analyzed the relationship between performance and user retention. One study showed that as load times increase from one second to five seconds it causes 90% more users to bounce, or leave the application.

You need to set performance goals for your application and consistently monitor how your application is doing. Generally you want your application to load in under a second. However, with modern single page web applications it can take several seconds to do the initial load. You can mitigate the appearance of a slow application by giving the impression of progress, by partially loading some content or displaying a loading animation.

The Chrome debugging tools provide a lot of help for diagnosing your application performance. The network tab will show you the size of your application files and the amount of time it takes to transfer them.

You can use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

### Short circuit
Sometimes factors such as network latency will impact the performance of your application or make it partially unavailable. You want to consider how you can create a meaningful experience for your users even when you cannot provide full functionality. For example, your application might rely on a third party service for processing payment before they can access the application. Rather than deny the user access when the payment service is down, you could collect the payment information and attempt to process it later. In the meantime the user is allowed to continue working. If later, the payment processing fails, then you handle the problem just as if their credit card was cancelled after accepting payment.

This ability to provide an alternative path is sometimes called short circuit or fallback functionality. This removes barriers from your application that otherwise would turn away customers, and they are usually not difficult to implement. You just need to consider each functional piece of your application and provide an alternative if that functionality is not available.

### Accessibility
Your application needs to appeal to a diverse population of users. This means that you need to design for users with different accessibility needs, including users with visual, physical, and auditory impairments.

You can help users with visual impairments by considering color blindness when selecting your color scheme, providing high contrast themes, and supporting screen readers. Video and audio transcripts, along with visual animation, help users that need audio assistance. Providing keyboard shortcuts and making sure input elements are accessible in the proper order will help users with different physical abilities.

```
Ability	    Application features
Visual	    High contrast themes, color selection, screen readers
Audio	      Closed captions, textual alternatives, visual animation
Physical	  Keyboard navigation, element ordering
```

Many of the accessibility tools that users employ require that your HTML is well structured and has attributes that support WAI-ARIA standards. Make sure you understand the proper use of elements and aria when you design a production application.

### Legal
Like it or not, applications must consider applicable regulation and the possibility of legal action. For example, by violating GDPR Amazon was fined $887 million in 2021 for violating the privacy of its customers. In another case Domino's Pizza was found to be violating the Americans with Disabilities Act (ADA) because a blind man could not order a pizza by using a screen reader.

Central to the core of many legal codes is the concept of Personally Identifiable Information (PII). While the strict interpretation of what PII is differs by industry, it generally relates to any data that can be directly ascribed to an identifiable individual.

Every industry and local has different legal constraints. You should be aware of the major legislation that impacts your application. Here are some laws that impact applications within the jurisdiction of the United States of America.

#### HIPAA
The Health Insurance Portability and Accountability Act (HIPAA) stipulates the management of medical records. It includes provisions that give control to the individual with regard to access and sharing of records. Specifically it restricts how relatives, courts, and insurance companies may obtain medical records.

#### FERPA
The Family Educational Rights and Privacy Act (FERPA) defines how student data can be stored, shared, and accessed. FERPA defines the concept of an education record and then specifies who can view and contribute to that record.

#### ADA
The Americans with Disabilities Act (ADA) seeks to prohibit discrimination against individuals with diverse accessibility needs. The act was originally intended to cover physical environments, but recent case law has extended the interpretation of the law to cover electronic access.

#### GDPR
The General Data Protection Regulation (GDPR) impacts all applications that are used by members of the European Union. The main purpose of GDPR is to protect the privacy of users. Among other things, GDPR requires applications to get approval from the user before their data can be stored or shared. It also requires the application to provide the ability to delete all of the user's data and to be able to transfer their data to competing applications.

### Walls
There are many types of walls that hinder a user's experience with an application. Some walls are caused by poor design or business decisions, and others are a result of unavoidable external pressures such as governmental regulation or security concerns.

If you can learn to recognize user experience walls then there is a good chance that you can remove them or decrease their negative impact.

#### Complexity
As applications mature it is common for them to grow in complexity as more and more features are introduced.

A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.

— Niklaus Wirth

The following image is from GitHub. An important action that a developer needs to do is create a Personal Access Token in order to work with repositories. However, GitHub has buried the UI for creating the token somewhere in their setting (account, user, and repository) pages. Assuming you are able to find the right setting page, you are then confronted with dozens of setting categories. After clicking through all of these options a user will wonder why such an important activity is buried so deeply in the application.

#### Payment
Some walls, such as receiving payment, are unavoidable for the success of the application. However, consideration should be made to move the wall to the point where it is required. Before a user hits a payment wall they should have the opportunity to see the value of what they are purchasing. Even better is if the user is able to invest significant effort and content to the application before payment is required. For example, the application may allow the user to create a limited number of documents before they have to enter payment information.

Once payment is required, the process for entering payment information needs to be as effortless as possible. The best option is to have them not enter information at all, and instead use an associated credential like Apple Pay or Google Wallet to authorize payment based on the already authenticated user. Beyond that, a single text box that accepts, and authorizes, a credit card number is better than dozens of text boxes that must be completed before payment is made. You also want to remember payment information so that you don't need to repeatedly ask the user for input. This enables you to provide your application as a subscription service, or to execute single click purchases for future payments.

#### Application failure
Application failure is a reality that any good application design needs to address. An application that has a reputation of repeatedly presenting the user with a failure wall will have a hard time retaining users. The most basic solution to handling a failure is to present a message to the user apologizing for what went wrong. The user will be slightly less annoyed if you can explain what went wrong, provide a possible remedy, or explain the expected duration of the failure.

Alternative solutions for handling failure include providing fallback functionality, automatically notifying the user when the failure has been resolved, or providing a status page where the user can go to see what is being done about the problem.

Proactive solutions include designing an application that has multiple redundant regional deployments that automatically failover when one region experiences problems, or designing the application so that it can run offline with cached data.

#### Security
Security walls occur when you have to interact with the user in order to authenticate them. The security walls you present should be proportional to the value of the resource you are trying to secure. A banking application should have strong security walls that provide actual protection for the user's data. An application that gives away free kitten videos should have a minimal security wall if any.

You need to consider both the frequency and complexity of your security wall. If the user feels that the security wall is too onerous for the value that the application is providing, they will find another solution. Likewise if the user feels that there is not enough security then they will not trust you with their data.

Here is an example of an application for learning how to code. They need a user's email so that they can store course progress, but they don't even ask for a password because the email address is enough to uniquely identify the user. Authentication occurs when the user provides the security code that is emailed to the address that they provided. From then on the application remembers the email address. If the user accesses the application on a different device then the user just needs to do another once-per-device authentication.

This a much lower wall than an application that requires you to log in repeatedly every 30 minutes.

A CAPTCHA is a common way to verify that a user is a human. While this may be necessary for the success of your application, it is an example of a wall that provides no value to the user and will always lessen the application experience. This is especially true for a difficult CAPTCHA such as typing in unreadable text, or entering the number of mosquitos displayed in a jungle picture.

#### Legal
Legal walls usually only protect the application vendor and provide little or no value to the user. GDPR inspired cookie notifications are one example of this.

Another common example of a legal wall is an application that requires the acceptance of terms and conditions before you can use the application. You want to minimize the impact of legal walls as much as possible since they lessen the user's experience and encourage the user to question why a legal consent is required in the first place.



# Final Exam Study Guide
## **1. What is the default port for HTTP/HTTPS/SSH?**
  - HTTP is 80, for HTTPS is 443, and for SSH is 22

## **2. What does an HTTP status code in the range of 300/400/500 indicate?**
  - Redirection messages/content redirects or caching ( 300 – 399 )
  - Client error responses ( 400 – 499 )
  - Server error responses ( 500 – 599 )

## **3. What does the HTTP header content-type allow you to do?**
  - The HTTP Content-Type representation header is used to indicate the original media type of a resource before any content encoding is applied.
  - The Content-Type HTTP header specifies the media type (or MIME type) of the content being sent in an HTTP request or response. It allows the client (e.g., a browser or API consumer) and the server to understand how to process the content appropriately.
  - "language" is not a standard HTTP header.
  - Standard HTTP headers are a set of key-value pairs used to convey important metadata about the HTTP request or response. Here’s an overview of commonly used HTTP headers:

### Common HTTP Request Headers:
1. **Host**: Specifies the domain name of the server and optionally the port number.
   ```
   Host: www.example.com
   ```

2. **User-Agent**: Identifies the client software making the request (e.g., web browser, mobile app).
   ```
   User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
   ```

3. **Accept**: Indicates the media types that are acceptable for the response.
   ```
   Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
   ```

4. **Accept-Language**: Specifies the preferred languages for the response.
   ```
   Accept-Language: en-US,en;q=0.5
   ```

5. **Accept-Encoding**: Specifies the content encodings (e.g., gzip) the client can handle.
   ```
   Accept-Encoding: gzip, deflate, br
   ```

6. **Connection**: Indicates whether the connection should remain open or close after the transaction.
   ```
   Connection: keep-alive
   ```

7. **Authorization**: Provides credentials for authenticating the client with the server.
   ```
   Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
   ```

8. **Cookie**: Sends stored cookies to the server.
   ```
   Cookie: sessionid=abc123; userid=456
   ```

### Common HTTP Response Headers:
1. **Content-Type**: Specifies the media type of the response body (e.g., HTML, JSON, image).
   ```
   Content-Type: text/html; charset=UTF-8
   ```

2. **Content-Length**: Specifies the size of the response body in bytes.
   ```
   Content-Length: 1234
   ```

3. **Server**: Provides information about the server software (e.g., Apache, Nginx).
   ```
   Server: Apache/2.4.41 (Unix)
   ```

4. **Location**: Used for URL redirection, specifies the URL to redirect the client to.
   ```
   Location: https://www.example.com/newpage
   ```

5. **Cache-Control**: Directs caching mechanisms about how to cache the response.
   ```
   Cache-Control: no-cache, no-store, must-revalidate
   ```

6. **Set-Cookie**: Sends cookies from the server to the client.
   ```
   Set-Cookie: sessionid=abc123; Path=/; HttpOnly
   ```

7. **WWW-Authenticate**: Indicates that authentication is required and provides the authentication method.
   ```
   WWW-Authenticate: Basic realm="Example"
   ```

8. **Date**: Represents the date and time when the message was sent.
   ```
   Date: Tue, 18 Dec 2024 12:00:00 GMT
   ```

9. **Content-Encoding**: Specifies the encoding used to compress the response body.
   ```
   Content-Encoding: gzip
   ```

10. **Strict-Transport-Security (HSTS)**: Informs browsers to always use HTTPS for future requests to the site.
    ```
    Strict-Transport-Security: max-age=31536000; includeSubDomains
    ```

11. **Access-Control-Allow-Origin**: Part of CORS (Cross-Origin Resource Sharing), this header allows resources to be shared across different origins.
    ```
    Access-Control-Allow-Origin: *
    ```

12. **X-Content-Type-Options**: Prevents browsers from interpreting files as a different MIME type.
    ```
    X-Content-Type-Options: nosniff
    ```

13. **Transfer-Encoding**: Specifies the encoding mechanism used to transfer the message body.
    ```
    Transfer-Encoding: chunked
    ```

14. **Age**: Specifies the time in seconds since the response was generated.
    ```
    Age: 120
    ```

These headers help facilitate various aspects of HTTP communication, such as caching, security, content negotiation, and more. The exact set of headers used will depend on the needs of the application and the type of interaction between the client and server.

## **4. What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?**
  - Cookies allow a server to store data on the client.
  - Secure cookie
    - Protect cookie data during transmission.
    - Definition: A cookie marked with the Secure attribute can only be sent over HTTPS connections. It ensures that the cookie data is encrypted in transit, protecting it from being intercepted by attackers via network sniffing.
    - Purpose: Enhances security by ensuring the cookie is not sent over an unencrypted HTTP connection.
  - Http-only cookie
    - Prevent client-side access to sensitive cookies.
    - Definition: A cookie marked with the HttpOnly attribute is inaccessible to client-side scripts (like JavaScript). It can only be accessed by the server.
    - Purpose: Protects cookies from being stolen via Cross-Site Scripting (XSS) attacks, where malicious scripts attempt to read sensitive cookies.
  - Same-site cookie
    - Mitigate cross-origin attacks like CSRF.
    - Definition: The SameSite attribute restricts how cookies are sent with requests originating from external sites. It helps prevent Cross-Site Request Forgery (CSRF) attacks.
    - Values:
      - Strict: Cookies are sent only for requests originating from the same site as the one that set the cookie. They are not sent for cross-site requests (e.g., embedded links or forms).
      - Lax: Cookies are sent with top-level navigations and safe HTTP methods (e.g., GET requests), but not with cross-origin embedded resources (e.g., images or iframes).
      - None: Cookies are sent with all requests, including cross-origin requests. Requires the Secure attribute to be set.

## **5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?**
  - Middleware goes from top to bottom, only using `use` and the command type. `/*` is a wildcard and applies to any route.
  - Assumed Middleware Code
  ```
  const express = require('express');
  const app = express();

  // Middleware 1
  app.use((req, res, next) => {
    console.log('Middleware 1');
    next(); // Passes control to the next middleware
  });

  // Middleware 2
  app.use('/api', (req, res, next) => {
    console.log('Middleware 2');
    next(); // Passes control to the next middleware
  });

  // Route Handler
  app.get('/api/document', (req, res) => {
    console.log('Route Handler');
    res.send('Document retrieved');
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  ```

  - Expected Console Output
  When a GET request is made to /api/document, the following will be logged to the console:

  ```
  Middleware 1
  Middleware 2
  Route Handler
  ```

  - Explanation
    - Middleware 1: This runs for every request to the server because it has no specific path restriction.
    - Middleware 2: This runs only for routes that start with /api, so it matches the requested path /api/document.
    - Route Handler: This is the endpoint-specific handler for the exact path /api/document.
  Each middleware passes control to the next one using next(), and the final handler responds to the client.

  - <img alt="URL Problem" src="public/URL Problem.jpg">
    - Answer: `B`

## **6. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?**
  - Which Express middleware will match this fetch request?
  <img alt="fetch request" src="public/what express middleware matches this fetch request.png">
  - Answer: `app.delete(/fav\/(.*)/,() => {})`

  - You can use fetch in front-end and back-end code: True

  - Express Service Code
  ```
  const express = require('express');
  const app = express();

  app.use(express.json());

  // Route to handle a POST request
  app.post('/api/data', (req, res) => {
    console.log(req.body); // Logs the incoming JSON body
    res.json({
      message: 'Data received successfully',
      receivedData: req.body,
    });
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  ```
  - Front-End JavaScript Fetch
  ```
  fetch('http://localhost:3000/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Alice', age: 25 }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```
  - What Happens:
    1. The Express service listens on localhost:3000 for POST requests to /api/data.
    2. The front-end fetch sends a POST request with JSON data: { name: 'Alice', age: 25 }.
    3. The server logs the incoming request body:
      ```
      { name: 'Alice', age: 25 }
      ```
    4. The server responds with a JSON object:
      ```
      {
        "message": "Data received successfully",
        "receivedData": {
          "name": "Alice",
          "age": 25
        }
      }
      ```
    5. The front-end logs the response in the console.
  - Front-End Console Output
    ```
    {
      "message": "Data received successfully",
      "receivedData": {
        "name": "Alice",
        "age": 25
      }
    }
    ```
    The front-end fetch receives the JSON response from the server and logs it to the console. This behavior assumes no network or server errors occur.

## **7. Given the following MongoDB query, select all of the matching documents {name:Mark}**
- MongoDB provides several search operators and functions that allow you to filter and manipulate data in queries, particularly in **full-text search** with **MongoDB Atlas Search** (powered by the **Lucene** search engine) or through regular queries. Below is a list of the key **search parameter functions** in MongoDB, divided into two categories: **Atlas Search** features and **regular MongoDB query operators**.

### MongoDB Atlas Search Operators:
MongoDB Atlas Search provides advanced full-text search capabilities. These operators are used in the `$search` stage of an aggregation pipeline.

1. **`text`**: Performs a text search for a specific term or phrase.
   ```
   json
   { $search: { "text": { "query": "apple", "path": "name" } } }
   ```

2. **`wildcard`**: Allows the use of wildcard patterns for matching terms.
   ```
   json
   { $search: { "wildcard": { "query": "foo*", "path": "name" } } }
   ```

3. **`regex`**: Performs regular expression matching on a string field.
   ```
   json
   { $search: { "regex": { "query": "^foo", "path": "name" } } }
   ```

4. **`phrase`**: Matches documents containing a phrase in a specified field.
   ```
   json
   { $search: { "phrase": { "query": ["apple", "pie"], "path": "description" } } }
   ```

5. **`autocomplete`**: Performs an autocomplete search.
   ```
   json
   { $search: { "autocomplete": { "query": "app", "path": "name" } } }
   ```

6. **`range`**: Performs a range query on numerical or date values.
   ```
   json
   { $search: { "range": { "gte": 10, "lte": 20, "path": "price" } } }
   ```

7. **`geoNear`**: Performs a geospatial search to find documents near a point.
   ```
   json
   { $search: { "geoNear": { "near": { "type": "Point", "coordinates": [ -73.97, 40.77 ] }, "distanceField": "distance", "path": "location" } } }
   ```

8. **`textScore`**: Returns the text score of the matching document.
   ```
   json
   { $search: { "text": { "query": "apple", "path": "name" } }, "returnStoredSource": true }
   ```

9. **`compound`**: Combines multiple queries with logical operators (e.g., `must`, `mustNot`, `should`).
   ```
   json
   { $search: { "compound": { "must": [{ "text": { "query": "apple", "path": "name" } }] } } }
   ```

10. **`score`**: Controls how the relevance score is calculated in the query.
    ```
    json
    { $search: { "text": { "query": "apple", "path": "name", "score": { "boost": { "value": 2 } } } } }
    ```

11. **`highlight`**: Highlights the matched terms in the document.
    ```
    json
    { $search: { "text": { "query": "apple", "path": "description", "highlight": { "path": "description" } } } }
    ```

12. **`lookup`**: Used to join search results with documents from other collections.
    ```
    json
    { $search: { "lookup": { "from": "products", "localField": "product_id", "foreignField": "_id", "as": "product_details" } } }
    ```

13. **`textIndexVersion`**: Specifies the version of the text index to use for text search.
    ```
    json
    { $search: { "text": { "query": "apple", "path": "name", "textIndexVersion": 3 } } }
    ```

---

### MongoDB Query Operators (for regular queries):
In addition to the search-specific operators above, MongoDB provides a rich set of query operators used for filtering and searching documents in a collection. These operators are used in standard queries, not in the `$search` stage.

1. **`$eq`**: Matches values that are equal to the specified value.
   ```
   json
   { "price": { "$eq": 10 } }
   ```

2. **`$ne`**: Matches values that are not equal to the specified value.
   ```
   json
   { "price": { "$ne": 10 } }
   ```

3. **`$gt`**: Matches values greater than the specified value.
   ```
   json
   { "price": { "$gt": 10 } }
   ```

4. **`$gte`**: Matches values greater than or equal to the specified value.
   ```
   json
   { "price": { "$gte": 10 } }
   ```

5. **`$lt`**: Matches values less than the specified value.
   ```
   json
   { "price": { "$lt": 10 } }
   ```

6. **`$lte`**: Matches values less than or equal to the specified value.
   ```
   json
   { "price": { "$lte": 10 } }
   ```

7. **`$in`**: Matches values that are in the specified array.
   ```
   json
   { "category": { "$in": ["electronics", "books"] } }
   ```

8. **`$nin`**: Matches values that are not in the specified array.
   ```
   json
   { "category": { "$nin": ["electronics", "books"] } }
   ```

9. **`$exists`**: Matches documents where a field exists or does not exist.
   ```
   json
   { "price": { "$exists": true } }
   ```

10. **`$regex`**: Matches documents where the field matches a regular expression.
    ```
    json
    { "name": { "$regex": "^apple", "$options": "i" } }
    ```

11. **`$text`**: Performs a text search on a string field indexed with a text index.
    ```
    json
    { "$text": { "$search": "apple pie" } }
    ```

12. **`$and`**: Joins multiple query conditions with a logical AND.
    ```
    json
    { "$and": [{ "category": "electronics" }, { "price": { "$gte": 10 } }] }
    ```

13. **`$or`**: Joins multiple query conditions with a logical OR.
    ```
    json
    { "$or": [{ "category": "electronics" }, { "category": "books" }] }
    ```

14. **`$not`**: Negates a query expression.
    ```
    json
    { "price": { "$not": { "$lt": 10 } } }
    ```

15. **`$nor`**: Joins multiple query conditions with a logical NOR (not OR).
    ```
    json
    { "$nor": [{ "category": "electronics" }, { "price": { "$gte": 10 } }] }
    ```

---

### Geospatial Search Operators:
These operators allow querying based on geospatial data.

1. **`$geoWithin`**: Matches documents with geospatial data within a specified shape (circle, polygon).
   ```
   json
   { "location": { "$geoWithin": { "$centerSphere": [[-73.97, 40.77], 1] } } }
   ```

2. **`$geoIntersects`**: Matches documents where the geospatial field intersects a specified geometry.
   ```
   json
   { "location": { "$geoIntersects": { "$geometry": { "type": "Point", "coordinates": [-73.97, 40.77] } } } }
   ```

3. **`$near`**: Matches documents based on proximity to a specific geospatial point.
   ```
   json
   { "location": { "$near": { "$geometry": { "type": "Point", "coordinates": [-73.97, 40.77] }, "$maxDistance": 1000 } } }
   ```

---

These are some of the key functions and operators available for search and querying in MongoDB. For more advanced search capabilities, the **MongoDB Atlas Search** functionality provides a rich and flexible set of tools.

- MongoDB Query Code Using Node.js and the MongoDB Driver
  ```
  const { MongoClient } = require('mongodb');

  async function findDocuments() {
    const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI if different
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const database = client.db('testDB'); // Replace 'testDB' with your database name
      const collection = database.collection('users'); // Replace 'users' with your collection name

      // Query to find all documents where name is "Mark"
      const query = { name: 'Mark' };

      // Find the matching documents
      const results = await collection.find(query).toArray();

      console.log('Matching Documents:', results);
    } finally {
      await client.close();
    }
  }

  findDocuments().catch(console.error);
  ```
  - Explanation
    1. Connection:
      - MongoClient is used to connect to the MongoDB server running on localhost:27017.
    2. Database and Collection:
      - The database is named testDB.
      - The collection is named users.
    3. Query:
      - The query object { name: 'Mark' } specifies the condition for finding documents where the field name has the value "Mark".
    4. Retrieve Documents:
      - collection.find(query).toArray() retrieves all matching documents as an array.

  - Matching Documents
    
    Assume the collection contains the following documents:

      ```
      [
        { "_id": 1, "name": "Mark", "age": 30 },
        { "_id": 2, "name": "Mark", "age": 25 },
        { "_id": 3, "name": "John", "age": 40 }
      ]
      ```
    The query { name: 'Mark' } will return:
      ```
      [
        { "_id": 1, "name": "Mark", "age": 30 },
        { "_id": 2, "name": "Mark", "age": 25 }
      ]
      ```
  - Output in Console
    ```
    Matching Documents: [
      { _id: 1, name: 'Mark', age: 30 },
      { _id: 2, name: 'Mark', age: 25 }
    ]
    ```

## **8. How should user passwords be stored?**
  - Hash and salt each password individually.

## **9. Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?**
- Given the following code what will console.log print?
  - <img alt="WebSocket Code" src="public/Websocket Final.jpg">
  - Answer: `Client:Server:Hello`
- To answer this question fully, I'll provide **sample Node.js WebSocket backend code** and **corresponding front-end WebSocket code**, along with an explanation of what the front-end logs to the console.

---

### **Backend: Node.js WebSocket Code**
Using the `ws` library for WebSocket communication:

```
javascript
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected');

  // Respond to messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    if (message === 'Hello, server!') {
      ws.send('Hello, client!');
    } else {
      ws.send(`You said: ${message}`);
    }
  });

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');
});
```

---

### **Frontend: JavaScript WebSocket Code**
```
javascript
const ws = new WebSocket('ws://localhost:8080');

// Log messages received from the server
ws.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

// Send a message when the WebSocket is open
ws.onopen = () => {
  console.log('WebSocket connection established');
  ws.send('Hello, server!');
};

// Log errors if any occur
ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

// Log when the WebSocket is closed
ws.onclose = () => {
  console.log('WebSocket connection closed');
};
```

---

### **What Happens:**

1. **Backend Behavior:**
   - When a client connects, the backend logs:  
     ```
     Client connected
     ```
   - It sends a welcome message:  
     `"Welcome to the WebSocket server!"`
   - If the client sends `"Hello, server!"`, the backend replies with:  
     `"Hello, client!"`

2. **Frontend Behavior:**
   - On opening the WebSocket connection, the client logs:  
     ```
     WebSocket connection established
     ```
   - The client sends `"Hello, server!"`.
   - The backend responds with two messages:
     - `"Welcome to the WebSocket server!"` (initial message)
     - `"Hello, client!"` (response to the sent message)
   - These messages are logged on the front end as:
     ```
     Message from server: Welcome to the WebSocket server!
     Message from server: Hello, client!
     ```

---

### **Frontend Console Output**
```
WebSocket connection established
Message from server: Welcome to the WebSocket server!
Message from server: Hello, client!
```

---

### **Explanation**
- The WebSocket connection establishes successfully, triggering the `onopen` event.
- The backend sends an initial message (`Welcome to the WebSocket server!`) and responds to the client's message (`Hello, server!`).
- Each response from the server is logged in the front-end console.

## **10. What is the websocket protocol intended to provide?**
- What value does WebSocket add to HTTP?
  - it is peer to peer instead of client to server
- The WebSocket protocol is intended to provide a full-duplex communication channel over a single TCP connection, enabling real-time, bidirectional data exchange between a client (e.g., a web browser) and a server. It is designed to overcome the limitations of traditional HTTP-based communication, making it suitable for applications requiring low latency and continuous interaction.
- The WebSocket Protocol is designed to supersede existing bidirectional communication technologies that use HTTP as a transport layer to benefit from existing infrastructure (proxies, filtering, authentication). Such technologies were implemented as trade-offs between efficiency and reliability because HTTP was not initially meant to be used for bidirectional communication (see [RFC6202] for further discussion). The WebSocket Protocol attempts to address the goals of existing bidirectional HTTP technologies in the context of the existing HTTP infrastructure; as such, it is designed to work over HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries, even if this implies some complexity specific to the current environment. However, the design does not limit WebSocket to HTTP, and future implementations could use a simpler handshake over a dedicated port without reinventing the entire protocol. This last point is important because the traffic patterns of interactive messaging do not closely match standard HTTP traffic and can induce unusual loads on some components.

## **11. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM**
Here’s what each acronym stands for:

---

### **JSX**: **JavaScript XML**
- **What it is**: A syntax extension for JavaScript commonly used in React to describe the structure of UI components. It looks similar to HTML but allows embedding JavaScript expressions directly.
- Does not combine CSS, HTML, and JavaScript
- **Example**:
  ```jsx
  const element = <h1>Hello, World!</h1>;
  ```

---

### **JS**: **JavaScript**
- **What it is**: A high-level, interpreted programming language primarily used to create interactive effects and functionalities in web applications.
- **Uses**: Web development, server-side programming (e.g., Node.js), mobile apps, and more.

---

### **AWS**: **Amazon Web Services**
- **What it is**: A cloud computing platform by Amazon that offers a wide range of services such as computing power, storage, databases, and machine learning.
- **Examples of Services**:
  - EC2 (Elastic Compute Cloud)
  - S3 (Simple Storage Service)
  - Lambda (Serverless Computing)

---

### **NPM**: **Node Package Manager**
- **What it is**: A package manager for JavaScript that helps developers share and manage libraries, dependencies, and tools for Node.js projects.
- The code `npm install ws` does not add template code for websockets to your JavaScript
- **Key Commands**:
  - `npm install <package>`: Installs a package.
  - `npm start`: Runs the start script defined in `package.json`.

---

### **NVM**: **Node Version Manager**
- **What it is**: A tool for managing multiple versions of Node.js on a single machine. It allows developers to switch between Node.js versions easily.
- **Key Commands**:
  - `nvm install <version>`: Installs a specific Node.js version.
  - `nvm use <version>`: Switches to a specific Node.js version. 

--- 

### Summary Table:
| **Acronym** | **Full Form**              | **Primary Usage**                           |
|-------------|----------------------------|---------------------------------------------|
| JSX         | JavaScript XML             | UI syntax for React                         |
| JS          | JavaScript                 | Web and app development                     |
| AWS         | Amazon Web Services        | Cloud computing                             |
| NPM         | Node Package Manager       | Dependency management for JavaScript/Node   |
| NVM         | Node Version Manager       | Node.js version management                  |

## **12. Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.**
- <img alt="React Code" src="public/react.jpg">
  - Answer: `tacofish`

---

### **React Component Code**
```
jsx
import React from 'react';
import ReactDOM from 'react-dom';

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Render the React component into the body of the HTML document
ReactDOM.render(
  <Greeting name="Alice" age={25} />,
  document.body
);
```

---

### **What Happens?**
1. **Component Behavior**:
   - The `Greeting` component is a functional React component that takes two props: `name` and `age`.
   - It dynamically inserts the values of these props into the rendered content using JSX:
     - `{name}` will be replaced by `"Alice"`.
     - `{age}` will be replaced by `25`.

2. **ReactDOM Rendering**:
   - The `ReactDOM.render()` method renders the `Greeting` component into the `body` element of the HTML document.
   - The final DOM structure replaces the content of the `<body>` tag.

---

### **Generated HTML Output**
The following HTML will be rendered in the document:

```html
<div>
  <h1>Hello, Alice!</h1>
  <p>You are 25 years old.</p>
</div>
```

---

### **Final Text Content**
The text content of the rendered HTML will be:

```
Hello, Alice! You are 25 years old.
```

---

### **Key Notes**
- Props allow React components to be reusable and dynamic by passing different values for `name` and `age`.
- The text content is the raw text after rendering, without any HTML tags. This can be verified using `document.body.textContent`.

## **13. Given a set of React components that include each other, what will be generated**

  - When React components include (or "nest") each other, the **output will be a rendered hierarchy of the components' returned JSX, forming a composite UI structure.** The exact output depends on how the components are nested and what each one renders.

---

### **Example: Nested React Components**

Here’s an example of a set of React components that include each other:

#### **Code**
```
jsx
import React from 'react';
import ReactDOM from 'react-dom';

// Define a Parent component
function Parent() {
  return (
    <div>
      <h1>I am the Parent component</h1>
      <Child />
    </div>
  );
}

// Define a Child component
function Child() {
  return (
    <div>
      <h2>I am the Child component</h2>
      <Grandchild />
    </div>
  );
}

// Define a Grandchild component
function Grandchild() {
  return (
    <p>I am the Grandchild component</p>
  );
}

// Render the Parent component into the root element
ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
```

---

### **What Happens?**
1. **Parent Component**:
   - The `Parent` component is rendered first.
   - It includes an `<h1>` element and the `Child` component.

2. **Child Component**:
   - The `Child` component is rendered inside the `Parent`.
   - It includes an `<h2>` element and the `Grandchild` component.

3. **Grandchild Component**:
   - The `Grandchild` component is rendered inside the `Child`.
   - It includes a `<p>` element.

---

### **Generated DOM Structure**
The React component hierarchy generates the following DOM:

```html
<div id="root">
  <div>
    <h1>I am the Parent component</h1>
    <div>
      <h2>I am the Child component</h2>
      <p>I am the Grandchild component</p>
    </div>
  </div>
</div>
```

---

### **Rendered Text Content**
The text content of the rendered components will be:

```
I am the Parent component
I am the Child component
I am the Grandchild component
```

---

### **Key Takeaways**
- **Component Inclusion**: React components can include each other by rendering child components in their `return` statements.
- **Composite UI**: The output is a nested structure, mirroring the logical hierarchy defined by the components.
- **Text Content**: If you only care about text (e.g., `document.getElementById('root').textContent`), HTML tags are ignored, leaving the plain text generated by the components.

By nesting components, React allows for a modular and reusable approach to building complex UIs.

## **14. What does a React component with React.useState do?**
  - The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
  - A React component that uses `React.useState` implements **state management** to enable the component to track and respond to changes in data over time. It provides a way to create and manage state variables in a **functional React component**.

---

### **What `useState` Does**
1. **Defines State**:  
   `useState` allows you to declare a piece of state (a variable) that React will keep track of across renders.
   
2. **Updates State**:  
   It provides a function to update the state, which triggers a re-render of the component so the UI reflects the updated state.

---

### **Syntax**
```javascript
const [stateVariable, setStateFunction] = React.useState(initialValue);
```
- **`stateVariable`**: The current state value.
- **`setStateFunction`**: A function used to update the state value.
- **`initialValue`**: The initial value for the state variable.

---

### **Example**

```
jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      {/* Update state using setCount */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

---

### **What Happens**
1. **Initial Render**:
   - `useState(0)` initializes the `count` variable with `0`.
   - The initial UI shows:
     ```
     Current count: 0
     [Increment Button] [Decrement Button]
     ```

2. **User Interaction**:
   - Clicking the **"Increment"** button calls `setCount(count + 1)`, updating `count`.
   - React re-renders the component with the updated `count` value.
   - Similarly, clicking **"Decrement"** reduces the `count`.

---

### **Key Notes**
- **State is Persistent**: The `count` value persists across renders of the component.
- **Reactivity**: Updating state with `setCount` causes the component to re-render automatically.
- **Initial Value**: The `initialValue` (e.g., `0`) is used only during the first render. Subsequent renders use the updated state.

---

### **What Problems `useState` Solves**
1. **Dynamic Behavior**: Allows components to change their content based on user interaction or other events.
2. **Simplifies State Management**: No need to write class components or manage lifecycle methods (`this.state` or `setState`).
3. **Modular Logic**: Each `useState` call creates an independent piece of state, making it easier to manage complex components.

`React.useState` is a fundamental building block for creating interactive, functional React components.

## **15. What are React Hooks used for?**

  - React Hooks are functions that let you "hook into" React state and lifecycle features from within function components. They were introduced in React 16.8 as a way to add state and other React features to functional components without having to convert them to class components.
  - React Hooks are special functions introduced in **React 16.8** that allow functional components to use features previously only available in class components, such as state management and lifecycle methods. Hooks simplify React development by enabling developers to write cleaner, more reusable, and modular code.

---

### **What Hooks Are Used For**
1. **Adding State to Functional Components**:  
   - Hooks like `useState` allow functional components to manage state, making them more powerful and eliminating the need for class components in many cases.

2. **Using Lifecycle Methods**:  
   - Hooks like `useEffect` provide lifecycle functionality (e.g., running side effects, handling subscriptions, or fetching data) in functional components.

3. **Code Reusability**:  
   - Hooks enable reusable stateful logic by creating **custom hooks**, which can encapsulate logic shared across multiple components.

4. **Simplifying Complex Components**:  
   - Hooks allow for separating concerns by logically grouping related state and side effects, reducing the complexity of components.

---

### **Common Built-in React Hooks**
| **Hook**        | **Purpose**                                                                                     |
|------------------|-----------------------------------------------------------------------------------------------|
| `useState`       | Adds state to functional components.                                                         |
| `useEffect`      | Handles side effects like fetching data, subscriptions, or DOM manipulation.                  |
| `useContext`     | Accesses context values in functional components.                                             |
| `useReducer`     | Manages more complex state logic, similar to `redux` reducers.                                |
| `useRef`         | Creates a reference to a DOM element or mutable value that persists across renders.           |
| `useMemo`        | Optimizes performance by memoizing expensive calculations.                                    |
| `useCallback`    | Memoizes functions to prevent unnecessary re-creations during renders.                        |
| `useLayoutEffect`| Similar to `useEffect`, but fires synchronously after all DOM mutations.                      |
| `useDebugValue`  | Displays custom information in React DevTools for debugging custom hooks.                     |

---

### **Why Use Hooks?**

1. **Stateful Functional Components**:  
   Hooks eliminate the need for class components to manage state or lifecycle, making functional components the primary way to build React apps.

2. **Better Code Organization**:  
   Hooks let you logically group related functionality, improving readability and maintainability.

3. **Reusability with Custom Hooks**:  
   Developers can encapsulate stateful logic in **custom hooks** for reuse across components.

4. **Avoiding Boilerplate**:  
   Hooks reduce the boilerplate associated with class components (e.g., constructor methods, binding `this`).

---

### **Summary**
React Hooks are used to:
1. Add state, lifecycle, and other React features to functional components.
2. Simplify logic and improve code reusability.
3. Make React development more declarative and modular.

Hooks empower developers to write React apps with fewer lines of code and a cleaner, more functional programming paradigm.

## **16. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?**

  - State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index. To add state to a component, use one of these Hooks:
    - useState declares a state variable that you can update directly.
    - useReducer declares a state variable with the update logic inside a reducer function.
  - Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
    - useContext reads and subscribes to a context.
  - Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.
    - useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
    - useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.
  - Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
    - useEffect connects a component to an external system.

  Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect. There are two rarely used variations of useEffect with differences in timing:
    - useLayoutEffect fires before the browser repaints the screen. You can measure layout here.
    - useInsertionEffect fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.
  - A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render. To skip calculations and unnecessary re-rendering, use one of these Hooks:
    - useMemo lets you cache the result of an expensive calculation.
    - useCallback lets you cache a function definition before passing it down to an optimized component.

  Sometimes, you can’t skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart). To prioritize rendering, use one of these Hooks:
    - useTransition lets you mark a state transition as non-blocking and allow other updates to interrupt it.
    - useDeferredValue lets you defer updating a non-critical part of the UI and let other parts update first.

  - Here’s a breakdown of the **State Hook**, **Context Hook**, **Ref Hook**, **Effect Hook**, and **Performance Hooks** in React, along with their purposes:

---

### **1. State Hook (`useState`)**
- **Purpose**: Adds state to functional components.
- **What it does**: 
  - Declares a state variable and provides a way to update its value.
  - React automatically re-renders the component whenever the state is updated.

- **Example**:
  ```
  jsx
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0); // Declare state variable "count"
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

- **Use Case**: Keeping track of dynamic data, like form inputs, toggles, or counters.

---

### **2. Context Hook (`useContext`)**
- **Purpose**: Allows components to consume values from a React Context.
- **What it does**:
  - Provides access to global data (e.g., themes, authentication state) without manually passing props through every component.

- **Example**:
  ```
  jsx
  import React, { useContext, createContext } from 'react';

  const ThemeContext = createContext('light');

  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  function Toolbar() {
    const theme = useContext(ThemeContext); // Access context value
    return <div>Current Theme: {theme}</div>;
  }
  ```

- **Use Case**: Sharing data (like themes, user preferences, or language settings) across multiple components without prop drilling.

---

### **3. Ref Hook (`useRef`)**
- **Purpose**: Provides a way to persist values across renders and access DOM elements directly.
- **What it does**:
  - Stores a mutable value that doesn't cause re-renders when updated.
  - Creates references to DOM elements for direct manipulation.

- **Example**:
  ```
  jsx
  import React, { useRef } from 'react';

  function FocusInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus(); // Access the DOM node
    };

    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }
  ```

- **Use Case**: 
  - Managing focus, text selection, or animations.
  - Storing values (e.g., timers, previous state) without causing re-renders.

---

### **4. Effect Hook (`useEffect`)**
- **Purpose**: Handles side effects in functional components.
- **What it does**:
  - Runs after the component renders or updates.
  - Useful for data fetching, subscriptions, or manually updating the DOM.

- **Example**:
  ```
  jsx
  import React, { useState, useEffect } from 'react';

  function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => setSeconds(s => s + 1), 1000);
      return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Empty dependency array ensures it runs once on mount

    return <div>Seconds: {seconds}</div>;
  }
  ```

- **Use Case**:
  - Fetching data from APIs.
  - Managing subscriptions (e.g., WebSocket connections).
  - Cleaning up resources (e.g., timers, event listeners).

---

### **5. Performance Hooks**
React provides several hooks to optimize performance:

#### **`useMemo`**
- **Purpose**: Memoizes the result of a computation to avoid recalculating expensive operations.
- **What it does**:
  - Only recomputes the value if the dependencies change.

- **Example**:
  ```
  jsx
  import React, { useMemo } from 'react';

  function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
      console.log('Calculating...');
      return num ** 2; // Expensive computation
    }, [num]);

    return <div>Result: {result}</div>;
  }
  ```

- **Use Case**: Avoid recalculating derived values unnecessarily.

#### **`useCallback`**
- **Purpose**: Memoizes a function reference to avoid creating new instances on every render.
- **What it does**:
  - Returns the same function reference unless dependencies change.

- **Example**:
  ```
  jsx
  import React, { useCallback } from 'react';

  function Button({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
  }

  function App() {
    const handleClick = useCallback(() => {
      console.log('Button clicked!');
    }, []);

    return <Button onClick={handleClick} />;
  }
  ```

- **Use Case**: Prevent unnecessary re-renders of child components by avoiding new function references.

---

### **Summary Table**
| **Hook**        | **Purpose**                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `useState`       | Manages state in functional components.                                    |
| `useContext`     | Accesses shared global data without prop drilling.                        |
| `useRef`         | Maintains mutable values and accesses DOM nodes.                          |
| `useEffect`      | Handles side effects and manages lifecycle events (e.g., fetching data).   |
| `useMemo`        | Optimizes performance by memoizing expensive calculations.                |
| `useCallback`    | Optimizes function references to avoid unnecessary re-creation.           |

By combining these hooks effectively, React developers can create highly efficient, clean, and maintainable applications.

## **17. Given React Router code, select statements that are true.**
- Here’s an example question involving **React Router** code and accompanying statements. The task is to write a snippet of React Router code and define which statements about it are true or false.

---

#### **React Router Code**
```
jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

#### **Question: Select the Statements That Are True**
1. The `<Link>` component is used to navigate between routes without a full page reload.  
   - **True**: The `<Link>` component is part of React Router and replaces traditional anchor (`<a>`) tags for client-side navigation.

2. The `<Route path="*">` renders the `NotFound` component for any unmatched routes.  
   - **True**: The `"*"` wildcard matches all paths not explicitly defined, making it useful for 404 pages.

3. `<BrowserRouter>` is necessary to enable routing and must wrap the `<Routes>` component.  
   - **True**: `<BrowserRouter>` (aliased here as `<Router>`) is required to enable routing functionality in the app.

4. Navigating to `/about` will render the `NotFound` component.  
   - **False**: Navigating to `/about` renders the `About` component because a matching `<Route>` is defined.

5. Changing `<Route path="/" element={<Home />} />` to `<Route path="/home" element={<Home />} />` will break navigation to the home page.  
   - **True**: Changing the path requires updating `<Link to="/">` to `<Link to="/home">`. Otherwise, clicking the "Home" link will not navigate correctly.

6. React Router automatically prefetches all components used in `<Routes>`.  
   - **False**: Components are loaded when their corresponding route is matched, unless additional techniques like code splitting (e.g., `React.lazy`) are used.

---

#### **Key Concepts Addressed**
- How `<Routes>`, `<Route>`, `<Link>`, and `<BrowserRouter>` work.
- The behavior of wildcard routes (`path="*"`).
- The distinction between static and dynamic route matching.
- Routing issues caused by mismatches between paths and navigation links.

This type of test ensures a clear understanding of React Router’s functionality.

## **18. What does the package.json file do?**
- Your package. json holds important information about the project. It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.
- The `package.json` file is a key configuration file in Node.js projects and JavaScript applications. It provides essential information about the project and manages its dependencies, scripts, and other metadata. Here's an overview of what it does:

---

### **Key Purposes of `package.json`**
1. **Project Metadata**:
   - Stores basic information about the project, such as its name, version, description, and author.
   - This metadata is often used when publishing the package to a registry like **npm**.

   Example:
   ```json
   {
     "name": "my-app",
     "version": "1.0.0",
     "description": "A sample Node.js application",
     "author": "Your Name"
   }
   ```

2. **Dependency Management**:
   - Lists all the **dependencies** and **devDependencies** required for the project to run.
   - Allows you to install all dependencies with a single command: `npm install`.

   Example:
   ```json
   {
     "dependencies": {
       "express": "^4.18.2",
       "react": "^18.2.0"
     },
     "devDependencies": {
       "eslint": "^8.32.0",
       "jest": "^29.6.0"
     }
   }
   ```
   - `dependencies`: Required for production.
   - `devDependencies`: Needed only during development (e.g., testing or build tools).

3. **Scripts**:
   - Defines custom commands that can be run using `npm run <script-name>`.
   - Commonly used for starting the server, running tests, or building the app.

   Example:
   ```json
   {
     "scripts": {
       "start": "node server.js",
       "test": "jest",
       "build": "webpack"
     }
   }
   ```

   Command:
   ```bash
   npm run start
   ```

4. **Specifies Node and Package Versions**:
   - Ensures compatibility by specifying the versions of Node.js and npm the project depends on.

   Example:
   ```json
   {
     "engines": {
       "node": ">=16.0.0",
       "npm": ">=8.0.0"
     }
   }
   ```

5. **Configuration for Publishing**:
   - Used when publishing a package to npm or another registry.
   - Specifies details like the license and entry point.

   Example:
   ```json
   {
     "main": "index.js", // Entry point
     "license": "MIT",
     "keywords": ["node", "express", "example"]
   }
   ```

6. **Package Management**:
   - Tracks the project’s version and dependencies, making it easier to share or replicate the environment across different systems.
   - Developers can install/update packages while maintaining version consistency.

---

### **Key Fields in `package.json`**
| **Field**           | **Purpose**                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| `name`              | The package's name (unique for npm).                                                        |
| `version`           | The version of the package, typically following semantic versioning (`MAJOR.MINOR.PATCH`).   |
| `dependencies`      | Lists packages required for the app to run in production.                                    |
| `devDependencies`   | Lists packages used during development, testing, or building.                                |
| `scripts`           | Defines custom commands for running tasks (e.g., `npm start`, `npm test`).                  |
| `main`              | Specifies the entry point file for the application.                                         |
| `engines`           | Specifies required versions of Node.js and npm.                                             |
| `license`           | Indicates the type of license for the package (e.g., `MIT`, `ISC`).                         |
| `keywords`          | Keywords for searching the package on npm.                                                  |
| `author`            | Specifies the author's name and email.                                                      |

---

### **Summary**
The `package.json` file is critical for managing a Node.js project. It:
- Tracks dependencies.
- Defines project metadata and scripts.
- Simplifies sharing, installing, and maintaining your application.

## **19. What does the fetch function do?**
- Here’s an example of a test question involving the `fetch` function, complete with sample code and an explanation of what `fetch` does.

---

### **Test Question: What does the `fetch` function do?**

#### **Sample Code**
```
javascript
// Example 1: Basic fetch to retrieve data
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log('Fetched data:', data); // Log the fetched data
  })
  .catch(error => {
    console.error('Fetch error:', error); // Handle errors
  });

// Example 2: POST request with fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json' // Specify content type
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the content of the new post.',
    userId: 1
  }) // Send JSON data in the request body
})
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    console.log('Post created:', data); // Log the response data
  })
  .catch(error => {
    console.error('Fetch error:', error); // Handle errors
  });
```

---

### **Correct Answer Explanation**
1. **What the `fetch` Function Does**:
   - The `fetch` function is a JavaScript API used to make network requests.
   - It returns a **Promise** that resolves to the `Response` object representing the result of the HTTP request.

2. **Key Features**:
   - Allows you to perform GET, POST, PUT, DELETE, and other HTTP methods.
   - Can be used to fetch resources like JSON, text, or binary data.
   - Works asynchronously, enabling non-blocking operations.

3. **Steps in the Fetch Process**:
   - The first `.then()` handles the `Response` object.
   - You can call methods like `response.json()` or `response.text()` to parse the response data.
   - A `.catch()` block handles network errors or failed requests.

---

### **Additional Explanation of Key Concepts**

1. **GET Request**:
   - By default, `fetch` performs a GET request to the specified URL.

2. **POST Request**:
   - To send data to a server, specify the `method` and include the `body` of the request.
   - Use the `headers` option to set appropriate headers like `Content-Type`.

3. **Handling Errors**:
   - Always check `response.ok` or the `response.status` code to handle HTTP errors, as `fetch` does not reject for HTTP errors like 404 or 500.

---

### **True Statements About the Code**

- The `fetch` function is asynchronous and returns a Promise.
- If the network request succeeds but the server returns an error status (e.g., 404), you need to handle this explicitly using `response.ok`.
- You can use `fetch` to send JSON data by specifying the `Content-Type` header and a stringified body.

This question ensures a clear understanding of how to use `fetch` in practical applications.

## **20. What does node.js do?**
  - Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.
  - **Node.js** is a **JavaScript runtime environment** that allows you to run JavaScript code outside the web browser, enabling the development of server-side and command-line applications. It's built on the **V8 JavaScript engine** (the same engine used by Google Chrome) and offers non-blocking, event-driven architecture, making it highly efficient for building scalable network applications.

Here's a breakdown of **what Node.js does**:

### **1. Executes JavaScript Outside the Browser**
- Traditionally, JavaScript was used only in the browser to create interactive web pages. With Node.js, JavaScript can now be run on the server, allowing developers to write both the client-side and server-side code in the same language (JavaScript).
  
  **Example**: You can create a web server using Node.js, where you handle HTTP requests and responses.

### **2. Asynchronous and Event-Driven**
- Node.js operates on a **single-threaded, non-blocking** event loop. This means it can handle many connections at once without waiting for any one to finish before moving to the next. It doesn't block the program while waiting for I/O operations like file reads or network requests to complete.
  
  **Advantage**: It makes Node.js very efficient for I/O-bound tasks (like reading/writing files, accessing databases, etc.), especially for real-time applications.

### **3. Built-In Modules and Package Management**
- Node.js comes with a set of built-in modules that allow you to work with files, make HTTP requests, manage streams, and handle other common tasks like working with file systems, buffers, and networking.
- **npm** (Node Package Manager) is included with Node.js and allows you to easily install third-party libraries and tools, helping to manage dependencies in your project.

  **Example**: You can use npm to install libraries like `express` (a popular web server framework) or `mongoose` (a MongoDB ODM).

### **4. Great for Real-Time Applications**
- Node.js is commonly used for building **real-time web applications** such as chat applications, live notifications, and online gaming platforms, thanks to its event-driven architecture.
  
  **Example**: Using **WebSockets**, Node.js can maintain a persistent connection between the server and client, allowing for instant two-way communication.

### **5. Cross-Platform**
- Node.js is cross-platform, which means you can run the same JavaScript code on different operating systems (Windows, macOS, Linux). This makes it a good choice for creating applications that need to be deployed in diverse environments.

### **6. Scalable and High-Performance**
- Node.js is designed to handle high concurrency. Its non-blocking architecture allows it to handle thousands of simultaneous connections efficiently.
  
  **Use Case**: Ideal for applications that need to handle a lot of concurrent requests, such as chat applications or APIs with high traffic.

### **Common Use Cases for Node.js**:
- **Web Servers and APIs**: Build RESTful APIs or full-fledged web servers.
- **Real-Time Applications**: Chat apps, live notifications, collaboration tools.
- **Data Streaming**: Video/audio streaming services or real-time analytics platforms.
- **Command-Line Tools**: Build scripts or tools that can be run directly in the terminal.
- **Microservices**: Use Node.js to create lightweight, modular services that can communicate with each other over HTTP or other protocols.

### **Example: Simple Web Server in Node.js**
```
javascript
const http = require('http');

// Create a basic web server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
```
This basic example demonstrates how to create an HTTP server that responds with "Hello, World!" to every request.

### **Summary**
- **Node.js** allows you to run JavaScript on the server-side, enabling full-stack development in JavaScript.
- It uses a **non-blocking, event-driven model** that is efficient for I/O-heavy applications.
- Node.js is ideal for building **real-time applications**, **APIs**, and **microservices**.
- **npm** provides access to a vast ecosystem of libraries and tools to enhance your applications.

In essence, Node.js makes it possible to write scalable and high-performance server-side applications using JavaScript.

## **21. What does pm2 do?**
  - PM2 is an open-source process manager for Node.js applications that helps with: 
    - Managing: PM2 helps manage multiple processes and ensures applications run continuously. 
    - Monitoring: PM2 monitors resources and oversees logs. You can use the pm2ls command to see a table with information about your applications, including their status, mode, PID, and restart count. 
    - Deploying: PM2 simplifies deploying Node.js applications. 
    - Scaling: PM2 can scale up applications across available CPUs. 
    - Restarting: PM2 can automatically restart applications based on memory usage. 
    - Load balancing: PM2 has a built-in load balancer. 
    - Downtime: PM2 can suppress downtimes on updates and reload applications without downtime. 
  - **PM2** is a **production process manager** for **Node.js applications**. It is commonly used to run and manage applications in a production environment. PM2 helps ensure that applications are always running, can be easily restarted on failure, and are easily monitored. It provides various features to help manage processes efficiently.

### **Key Features of PM2:**

1. **Process Management**:
   - PM2 allows you to **start**, **stop**, **restart**, and **monitor** Node.js applications.
   - It provides a way to keep your applications running continuously, even if they crash.
   
   **Example**:
   ```bash
   pm2 start app.js  # Starts the app
   pm2 stop app.js   # Stops the app
   pm2 restart app.js  # Restarts the app
   ```

2. **Automatic Restart on Failure**:
   - If your Node.js application crashes (due to an error or unhandled exception), PM2 will automatically restart it.
   - This helps ensure your application is always available in production without manual intervention.

3. **Cluster Mode**:
   - PM2 supports **cluster mode**, which allows you to run multiple instances of your application to take advantage of multi-core systems.
   - It can automatically load-balance traffic between the different instances to optimize performance and scalability.

   **Example**:
   ```bash
   pm2 start app.js -i max  # Starts one instance per CPU core
   ```

4. **Logging**:
   - PM2 provides **automatic logging** for both standard output (`stdout`) and error output (`stderr`).
   - Logs can be accessed using PM2 commands, and it’s easy to see application output and errors in real-time.

   **Example**:
   ```bash
   pm2 logs app.js  # View logs for a specific app
   pm2 logs          # View logs for all apps
   ```

5. **Monitoring**:
   - PM2 provides real-time monitoring of your applications' health, memory usage, CPU usage, and other vital metrics.
   - You can monitor applications both through the **command line** or **web interface**.

   **Example**:
   ```bash
   pm2 monit  # Starts a real-time monitoring dashboard
   ```

6. **Startup Script**:
   - PM2 can generate startup scripts to ensure that applications start automatically when the server reboots.
   - This is useful for ensuring that your Node.js applications are restarted without needing manual intervention after a server restart.

   **Example**:
   ```bash
   pm2 startup  # Generates startup script for your OS
   pm2 save     # Save the current process list
   ```

7. **Environment Variables**:
   - PM2 allows you to set environment variables for different environments, like development or production.
   - You can define these variables directly within the `pm2` commands or through configuration files.

   **Example**:
   ```bash
   pm2 start app.js --env production
   ```

8. **Graceful Restart**:
   - PM2 provides the ability to perform a **graceful restart** of an application without dropping any connections, which is important for zero-downtime deployments.

   **Example**:
   ```bash
   pm2 reload app.js  # Gracefully reload the app without downtime
   ```

9. **Deployment Workflow**:
   - PM2 also offers deployment workflows, allowing you to automate the process of deploying your application to different environments, like staging or production.

   **Example**:
   ```bash
   pm2 deploy ecosystem.config.js production setup
   ```

10. **Ecosystem File**:
   - PM2 can use an **ecosystem configuration file** to define multiple applications and environments in a single JSON or JavaScript file.
   - This file can be used to store application settings, including instances, environment variables, and other process configurations.

   **Example `ecosystem.config.js`**:
   ```
   javascript
   module.exports = {
     apps: [
       {
         name: 'app1',
         script: 'app.js',
         instances: 2,
         exec_mode: 'cluster'
       },
       {
         name: 'app2',
         script: 'server.js',
         instances: 1
       }
     ]
   };
   ```

---

### **Summary:**

**PM2** is a powerful tool for managing Node.js applications in a production environment, providing features like:

- **Process management** (start, stop, restart apps).
- **Automatic restart** of apps on failure.
- **Cluster mode** for scaling applications across multiple CPU cores.
- **Logging and monitoring** of applications.
- **Graceful restart** and zero-downtime deployments.
- **Startup scripts** for auto-restarting apps after a server reboot.
- **Environment variable management**.

It simplifies deploying, managing, and monitoring Node.js applications, making it ideal for production use cases.

## **22. What does Vite do?**
  - Vite is a frontend tool that is used for building fast and optimized web applications. It uses a modern build system and a fast development server to provide a streamlined and efficient development experience.
  - **Vite** is a **next-generation build tool** and **development server** for modern web applications. It is designed to improve the speed and efficiency of the development process, particularly for JavaScript-based frameworks like **Vue.js**, **React**, and **Svelte**. Vite stands out for its **fast hot module replacement (HMR)**, **instant server start**, and **optimized build process**.

Here’s a breakdown of **what Vite does**:

### 1. **Fast Development Server with Hot Module Replacement (HMR)**
   - Vite leverages modern browser features like **ES Modules (ESM)** to serve files directly during development, enabling fast page reloads.
   - It starts the development server almost **instantly**, no matter the size of your codebase, because it doesn’t need to bundle everything up front.
   - When a file is updated, Vite only reloads that specific module (or only a small part of the app) instead of reloading the entire page. This is called **Hot Module Replacement (HMR)**.
   - HMR allows for real-time updates without refreshing the entire page, improving the developer experience and reducing downtime.

   **Example**:  
   - If you make a change to a React component or a CSS file, Vite updates the page in real-time without needing to reload everything.

### 2. **Build Optimizations for Production**
   - For production builds, Vite uses **Rollup**, a highly efficient bundler, to create optimized JavaScript, CSS, and other assets.
   - It ensures that the final build is **minified**, **tree-shaken**, and **split into smaller chunks** for better performance.
   - Vite allows features like **code splitting**, **lazy loading**, and **preloading** out of the box.

   **Example**:
   - When you build your application for production (`vite build`), Vite generates optimized and minified assets that are ready for deployment.

### 3. **Instantly Serves ESM-Based Code (Native ES Modules)**
   - Vite serves JavaScript code as **native ES Modules (ESM)** in development. This means there is no need to bundle the code before serving it.
   - The browser can request and execute individual modules directly, which improves startup time and enables better code splitting.

   **Example**:  
   - In development, Vite serves each file as a separate module, and the browser requests only the modules that are needed for the current page. This leads to faster load times.

### 4. **Pre-Bundling Dependencies**
   - Vite automatically **pre-bundles dependencies** like libraries (e.g., React, Vue, lodash) using **esbuild** — a fast, Go-based bundler — during development.
   - This speeds up page reloads since dependencies are compiled ahead of time, avoiding the need to re-bundle them on every page request.

   **Example**:  
   - If you use `react` or `vue` in your project, Vite will pre-bundle them so that these libraries are served instantly on the first page load.

### 5. **Support for Modern JavaScript Features**
   - Vite comes with built-in support for modern JavaScript and TypeScript features such as **dynamic imports**, **async/await**, and **top-level await**.
   - You can use **CSS preprocessors** (like SCSS or LESS) and **PostCSS** configurations without additional setup.

   **Example**:
   - Vite supports **TypeScript** by default, so you can import `.ts` files and get type-checking and transpiling without additional configuration.

### 6. **Flexible Configuration and Plugin System**
   - Vite offers a rich plugin system and a **configurable setup**. It can be extended with official and third-party plugins for various features such as:
     - **PWA support** (progressive web apps).
     - **Vue, React, or Svelte support**.
     - **Code linting** or **formatting**.
   - Configuration is simple and uses a single `vite.config.js` file.

   **Example**:
   - You can add support for a PWA in a Vite project by installing a plugin:
   ```
   bash
   npm install @vite/plugin-pwa
   ```

   - Then, modify the `vite.config.js` to add the plugin:
   ```
   javascript
   import { defineConfig } from 'vite';
   import vue from '@vitejs/plugin-vue';
   import pwa from '@vite/plugin-pwa';

   export default defineConfig({
     plugins: [vue(), pwa()]
   });
   ```

### 7. **Framework-Specific Features**
   - Vite provides special optimizations and features for popular frameworks like **Vue.js**, **React**, **Svelte**, and others.
   - For **Vue** projects, Vite includes a special **Vue 3 plugin** that optimizes the build process for Vue-specific features (e.g., `.vue` files).
   - For **React**, Vite supports **fast refresh** for React components.

### 8. **Zero Config Setup**
   - Vite is designed to require **minimal configuration** to get started. You can create a project and run a development server with very few steps:
   
   **Example**:
   ```bash
   # Create a Vite project
   npm create vite@latest my-vite-app
   cd my-vite-app
   npm install
   npm run dev
   ```

### **Vite vs. Traditional Bundlers**
- Traditional bundlers like **Webpack** bundle the entire project upfront and rebuild everything on every change, leading to slower startup times and longer hot module replacement times, especially for large projects.
- **Vite**, on the other hand, only transforms and serves the code as needed, making it much faster during development. For production, it uses **Rollup** for optimized builds.

### **Summary of What Vite Does**:
1. **Fast development server**: Instant server start with lightning-fast HMR.
2. **Optimized production builds**: Bundles your app using Rollup for production, with support for code splitting and tree shaking.
3. **Native ES Module support**: Leverages native browser ES Modules for faster development.
4. **Pre-bundles dependencies**: Speeds up development by pre-bundling dependencies with esbuild.
5. **Framework support**: Out-of-the-box optimizations for Vue, React, and other frameworks.
6. **Zero-config setup**: Easy setup with minimal configuration.

**Vite** aims to **optimize** the **developer experience** by providing fast development and build tools while delivering efficient production builds for modern web applications.

## **23. Misc**
  - Which of the following is not true about a Linux daemon?
    - Cannot fork other processes

  - A **Linux daemon** is a background process that runs continuously on a Linux (or Unix-like) operating system, typically without direct interaction from the user. Daemons perform various system tasks such as handling network connections, running scheduled tasks, managing hardware devices, and providing services.

### Key Characteristics of a Linux Daemon:
1. **Background Process**: A daemon runs in the background, detached from the terminal or user interaction. It starts when the system boots up or when requested by a system manager like `systemd` or `init`.

2. **No User Interface**: Daemons generally do not have a user interface and are designed to run silently in the background.

3. **System Services**: Daemons typically handle system services such as file sharing, printing, web hosting, network management, or security tasks. Common examples include:
   - `httpd` (Apache HTTP Server) for web serving.
   - `sshd` for handling SSH connections.
   - `cron` for scheduling tasks.
   - `ntpd` for synchronizing time.

4. **Starts Automatically**: Daemons often start automatically on system boot and may run indefinitely or for as long as they are needed to fulfill a particular task.

5. **Process Naming Convention**: Daemons typically have names that end in the letter "d," which stands for "daemon." For example:
   - `sshd` (Secure Shell Daemon)
   - `httpd` (HTTP Daemon)
   - `named` (DNS Daemon)

### How Daemons Work:
- **Startup**: Daemons are usually started by a system initializer like `init` or `systemd` during the boot process.
- **Daemonization**: The process of turning a regular program into a daemon is known as "daemonization." This process involves detaching the process from the terminal and the controlling shell, ensuring it runs independently in the background.
- **Termination**: Daemons continue to run until they are explicitly stopped (often by system administrators or through system shutdown) or until a certain condition or error occurs.

### Examples of Common Daemons:
- **`sshd`**: Provides SSH (Secure Shell) access to the system.
- **`cron`**: Executes scheduled tasks or scripts at specific intervals.
- **`systemd`**: A modern system and service manager in Linux that handles starting, stopping, and managing daemons and services.

In summary, a **Linux daemon** is a specialized background process designed to perform specific system or application-level tasks automatically and continuously, typically without direct user intervention.