---
layout: post
title:  "TUX Boot Logo Theme"
date:   2018-10-10 13:00:00 +0200
categories: ubuntu
image:  2018-10-10-tux-boot-loader-theme.png
comments: true
---

Want TUX even when you’re choosing which OS you want to boot? No problem! For all you dual-/tripple-/…-booters out there, here’s a TUX rEFInd theme ready to be installed. Don’t forget to leave a comment if you want to ask, suggest or just tell the rest of us something.

## First, Install rEFInd
Ubuntu comes with GRUB2 which is a great Boot Loader, although not as graphical. If you’re dual booting and looking for a nice boot sequence rEFInd is the way to go.

Here’s how you get started in Ubuntu 18.04 (and other Ubuntu versions as well).

__1)__ Highlight the text below and press Ctrl + C on your keyboard:

~~~~
echo -ne '\n' | sudo apt-add-repository ppa:rodsmith/refind && sudo apt-get update && sudo apt-get install refind
~~~~

__2)__ Open a Terminal window by pressing __Ctrl + Alt + T__ or by clicking the “Show Applications”-button, type “Terminal” and press Enter.

![The "Show Applications"-button](/images/2018-10-10-show-applications.png)
> The "Show Applications"-button found in the bottom-left corner

__3)__ While inside the Terminal press __Ctrl + Shift + V__ on your keyboard and press Enter. Remember the Shift since that is not common operation for pasting from the clipboard in other applications.

__4)__ Follow the instructions. You will need to enter your user’s password for safety reasons and rEFInd will ask if it automatically can install to your ESP as seen below. The ESP is short for EFI System Partition) where the boot loaders are. You will need to choose yes here for rEFInd to work.

![The rEFInd installation console](/images/2018-10-10-refind-installation-console.png)
> The rEFInd installation console

__5)__ That’s it. Reboot and rEFInd should now present you with a graphical user interface where you can select which OS that’s gonna boot.
Need help read Rod's excellent guides here: https://www.rodsbooks.com/refind


## Then, Install TUX rEFInd Theme
The simpliest way to get started is to copy (__Ctrl + C__) the line of code below, open a terminal (__Ctrl + Alt + T__), paste it (__Ctrl + Shift + V__) and press Enter:

~~~~
sudo apt install curl && bash <(curl -Ls https://github.com/Tux4Ubuntu/tux-install/raw/master/install.sh)
~~~~

## Got Stuck? Other Linux Distribution? Keep on reading

__1)__ Open a Terminal window by pressing __Ctrl + Alt + T__ or by pressing the Ubuntu Launcher button and search for “Terminal” and press Enter.

__2)__ Copy and paste the following script to the Terminal to initiate the download the package using wget

~~~~
wget -O tux-refind-theme.tar.gz https://github.com/Tux4Ubuntu/tux-refind-theme/archive/master.tar.gz
~~~~

__3)__ Extract the tar file

~~~~
tar -xzf tux-refind-theme.tar.gz
~~~~

__4)__ Rename and copy tux-refind-theme-master/src to /usr/share/plymouth/themes/tux-plymouth-theme by copying and executing this command

~~~~
sudo cp -rf src /boot/efi/EFI/refind/themes/tux-refind-theme
~~~~

__5)__ Final step add a line of code to refind.conf. Open it with sudo rights running this script:

~~~~
sudo gedit /boot/efi/EFI/refind/refind.conf # This will open the file in gedit with sudo rights
~~~~~

__6)__ Then copy and paste this line of code at the end of the config file:

~~~~
include themes/tux-refind-theme/theme.conf
~~~~

__7)__ That should be it. Let us know if it worked or not.