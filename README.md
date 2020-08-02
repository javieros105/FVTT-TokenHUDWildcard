# Token HUD Wildcard for Foundry VTT
This is a really simple mondule for Foundry VTT that adds a button to the Token HUD if the corresponding token has Randomized Wildcard Images activated and more than 1 detected image.

When this HUD button is pressed, a small panel will be displayed on the right side of the token HUD with a list of buttons for each detected image from the Wildcard Images functionality. Pressing any of these will allow to easily change the image of the Token without opening the token configuration panel.

I made this module because having to open the Token Configuration to change the image or making a macro for each token I needed to be able to rotate images was too much of a bother.

Hopefully this module can help others!

<p style="text-align: center;">
<img src="https://raw.githubusercontent.com/javieros105/FVTT-TokenHUDWildcard/master/images/prototype-config.png" alt="Prototype Config" width="500"/>
<img src="https://raw.githubusercontent.com/javieros105/FVTT-TokenHUDWildcard/master/images/settings.png" alt="HUD Button" height="150"/>
<img src="https://raw.githubusercontent.com/javieros105/FVTT-TokenHUDWildcard/master/images/hud-options1.png" alt="HUD Options" height="280"/>
<img src="https://raw.githubusercontent.com/javieros105/FVTT-TokenHUDWildcard/master/images/hud-options2.png" alt="HUD Options" height="280"/>
</p>

_The token images were done by the amazing Ross McConnell at [2-Minute Tabletop](https://2minutetabletop.com/) and are part of the Hero Tokens 3 Pack._

## Usage

To use this module you can choose in settings if you want to display the available token images as a list of file names or as a list of thumbnails.

Configuring your Token is done via the Wildcard Images method, open the prototype token configuration and in the "Token Image Path" field choose a path with a * that represents a wild card, any image that follow the pattern of that path will be considered in the possible images of the token.

Check the box "Randomize Wildcard Images", this will activate the wildcard and any time you drop a token in the canvas a random image will be chosen according to the path pattern.

When you have the token in the canvas, opening it's HUD will show a new button if the Token has more than one image to choose from, and depending on the setting it will show the options as a file name or image (default setting is as images), pressing any of these will change the token image.

If you don't want the image on drop to be chosen randomly, you can use the field in the "wildcard drop default" box in the prototype token configuration window. Picking a file here will make it the default image when dropping a new token, if you want it to be random leave it empty.

If you're gonna use the default image field, I recommend you use an image file that follows the wildcard pattern. but it's not required and you can have a different default image. If you choose an image that doesn't follow the pattern you just won't be able to pick it again after changing it in the images panel.

## Installation
To install the module, follow any of these methods:

### Method 1
- Start up Foundry and in the "Add-on Modules" tab click "Install Module".
- In the "Manifest URL" field, paste the link: `https://raw.githubusercontent.com/javieros105/FVTT-TokenHUDWildcard/master/token-hud-wildcard/module.json`
- Click "Install" and wait for it to finish.
- It should be installed and available in your games.

### Method 2
- Download the [.zip file](https://github.com/javieros105/FVTT-TokenHUDWildcard/raw/master/token-hud-wildcard.zip).
- Extract the contents of the zip in your modules folder.
- Restart Foundry and it should be available for your games.

## Planned Features
Nothing that I can think of just yet.

## Acknowledgements
Thanks to Atropos for making this amazing platform for roleplaying games. I've enjoyed it a ton and the possibility of expanding functionalities and adding your own is just awesome.

Also thanks to all the module developers that have allowed me to enjoy this software even more and that were the basis for making my own little module.

## License
The source code is licensed under GPL-3.0.