---
layout: post
title:  "TUX Developer Tools"
date:   2018-10-10 13:00:00 +0200
categories: "#devtools"
image:  2018-10-12-tux-devtools.png
comments: true
---

Ubuntu can be a great power ~~horse~~ penguin with the right set of tools. To help you get started (or if you just reinstalled Ubuntu) here's TUX's suggestions and an installer for all of them.

## Use the Installer
Use the Tux4Ubuntu-installer by highlighting and copying (__Ctrl + C__) and open the terminal (__Ctrl + Alt + T__) and paste (__Ctrl + Shift + V__) the following line of code and press Enter:

~~~~~
sudo apt -y install curl && bash <(curl -Ls https://github.com/Tux4Ubuntu/tux-install/raw/master/install.sh)
~~~~~

## Got Stuck? Other Linux Distribution? Keep on reading
This installation process is only gonna cover the “sudo apt install packagename” process. If you’re distribution doesn’t support it we link to each of the softwares installation guides. But we’re all thankfull if you comment how you solved it.

### Visual Studio Code

__1)__ Add their package key (if you trust Microsoft that is, but I say it's fine :P /TUX):

~~~~
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /tmp/microsoft.gpg
sudo mv /tmp/microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
~~~~

__2)__ Add Microsofts repo to yours so it will keep on being updated 
~~~~
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
~~~~    

__3)__ Update and install code

~~~~
sudo apt-get update && sudo apt-get install code
~~~~


For more information and further install instructions: [https://code.visualstudio.com/](https://code.visualstudio.com/)

### GIMP

__1)__ Add GIMP Edge repository (so you always have the latest version, since it can be quite a big difference in GIMP's case)

~~~~
sudo add-apt-repository ppa:otto-kesselgulasch/gimp-edge
~~~~

__2)__ Update and install

~~~~
sudo apt-get update && sudo apt-get install gimp gimp-gmic
~~~~


### GIT and SSH keys

__1)__ First, install git:

~~~~
sudo apt install git
~~~~

__2)__ Add your username and email (I don't use my own so I don't get spammed /TUX)

~~~~
git config --global user.name "YOUR USERNAME"
git config --global user.email "nottoday@gmail.com"
~~~~

__3)__ Now, if you haven't set up your SSH Keys already it's time for that now. Run this command and just follow the instructions.

~~~~
ssh-keygen
~~~~

__4)__ If you went with the default name "id_rsa" then add them by using this command (if you used another name, just replace [id_rsa] with what you chose)

~~~~
ssh-add ~/.ssh/id_rsa
~~~~

__5)__ Then to add Github to your allowed hosts, you can run this command:

~~~~
ssh -T git@github.com
~~~~

__6)__ Now if you want you can run this command to copy your public key to your clipboard.

~~~~
sudo apt install xclip && xclip -sel clip < ~/.ssh/id_rsa.pub
~~~~

__7)__ Then paste your newly copied public key to Github under "SSH and GPG Keys" under settings

For more information:
[GitHub's guide](https://help.github.com/enterprise/2.14/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

### Tilda
 
__1)__ Install it from the command line:

~~~~
sudo apt-get install tilda
~~~~

__2)__ Optional: Make it boot by open "Startup Applications" and press Add. Tilda is located at: /usr/bin/tilda


For more information and further install instructions: [https://code.visualstudio.com/](https://code.visualstudio.com/)
