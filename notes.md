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
