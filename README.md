# Token HUD Wildcard for Foundry VTT
This is a really simple module for Foundry VTT that adds a button to the Token HUD if the corresponding token has Randomized Wildcard Images activated and more than 1 detected image.

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

You can also use the image filename to set the dimensions of the token using the following example format:

- wildcard images use this pattern `name*`
- `name_height<number>_width<number>_scale<number>_.extension`, it's important that each parameter s preceded and followed by an underscore, so if you want to set up height, there has to be a `_height<number>_` somewhere in the name
- you can choose to change `<number>` for a positive integer or floating number and which one to fill. If there are any parameter missing then the module will use the prototype token parameters to fill the ones missing, so you can use images with no parameter setting at all or just set one or two of the parameters.
- these are valid filenames that will be picked up by the module `name.extension`, `name-different.extension`, `name-other_height2_scale1.5_.extension`

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

## Condensed Changelog
- #### Features:
    - Token image previews in HUD.
    - Default token on drop. Allows the user to pick a token that will always be chosen when dropping actor on canvas instead of random chosen by the wildcard setting.
    - Global setting to choose between filename and image previews in HUD.
    - Global opacity setting in module settings for token previews in HUD.
- #### Fixes:
    - Allows for image and video previews, non supported formats are not shown in the HUD anymore.
    - Fixed for Pathfinder 1 game system.
- #### Localization:
    - Improved localization of all displayable text.
    - Languages:
        - English
        - Spanish

## Acknowledgements
Thanks to Atropos for making this amazing platform for roleplaying games. I've enjoyed it a ton and the possibility of expanding functionalities and adding your own is just awesome.

Also thanks to all the module developers that have allowed me to enjoy this software even more and that were the basis for making my own little module.

## Contributors
- [@arbron](https://github.com/arbron): Making the update for compatibility with 0.8.x of Foundry and fixing errors.

## License
The source code is licensed under GPL-3.0.