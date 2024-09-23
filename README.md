# Micro Front Ends

Example of Micro Front End architecture

## Shell
This is the host app. It contains all the libs and global routing. Micro front ends
can be part of a page (such as navbar) or define a path (such as support)

## Navbar
This very small navbar app, only shows the navigation for the user. It hooks the current route
back to the shell component. And requests the current location from the shell to determine the
active route. 

## Support
This micro front end is responsible for loading the release notes and offering easy support capabilities. 
It has routes defined, which are loaded into the shell. 
