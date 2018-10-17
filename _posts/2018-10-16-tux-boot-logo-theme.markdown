---
layout: post
title:  "TUX Boot Logo Theme"
date:   2018-10-16 13:00:00 +0200
categories: "#boot"
image:  2018-10-16-tux-boot-logo-theme.png
comments: true
---
Linux bravely gone where no OS went before, time for TUX to get the credit he deserves. Windows has it’s Windows-logo and Mac OS has it’s Apple as Boot Logo. Time for Ubuntu to get TUX.

## Use the Installer
Use the Tux4Ubuntu-installer by highlighting and copying (__Ctrl + C__) and open the terminal (__Ctrl + Alt + T__) and paste (__Ctrl + Shift + V__) the following line of code and press Enter:

~~~~~
sudo apt install curl && bash <(curl -Ls https://github.com/Tux4Ubuntu/tux-install/raw/master/install.sh)
~~~~~

## Got Stuck? Other Linux Distribution? Keep on reading
If something goes wrong, you’re running another flavour of Linux than Ubuntu, or if you’re not on the latest Ubuntu LTS (Long Term Support) release these manual instructions might help in setting this up on your own:

__1)__ Open a Terminal window by pressing Ctrl + Alt + T or by pressing the Ubuntu Launcher button and search for “Terminal” and press Enter.

__2)__ Copy and paste the following script to the Terminal to initiate the download the package using wget:

~~~~
wget -O tux-plymouth-theme.tar.gz https://github.com/Tux4Ubuntu/tux-plymouth-theme/archive/master.tar.gz
~~~~

__3)__ Extract the tar file

~~~~
tar -xzf tux-plymouth-theme.tar.gz
~~~~

__4)__ Rename and copy tux-plymouth-theme-master/src to /usr/share/plymouth/themes/tux-plymouth-theme by copying and pasting this command:

~~~~
/share/plymouth/themes/tux-plymouth-theme
~~~~

__5)__ Delete the file you downloaded and the folder that got extracted (if you'd like)

~~~~
rm -r tux-plymouth-theme-master && rm tux-plymouth-theme.tar.gz
~~~~

__6)__ Now add the theme as a Plymouth Boot Logo alternative

~~~~
sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/tux-plymouth-theme/tux-plymouth-theme.plymouth 100;
~~~~

__7)__ Run the following command and select tux-plymouth-theme as the new theme. NOTE, this is where you can select the ubuntu-logo back or any other Plymouth-theme.

~~~~~
sudo update-alternatives --config default.plymouth;
~~~~~

__8)__ Final step of the process is to update the initramfs for the changes to take effect. This may take some minutes.

~~~~
sudo update-initramfs -u;
~~~~