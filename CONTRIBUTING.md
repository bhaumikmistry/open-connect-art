# Contributing to Open Connect ART

There are two way you can contribute to this project, adding your tiles to the pixel and making the html css js code better.

## Setup Local Project

1. Create a fork of this project
2. Clone the project:
``` 
git clone https://github.com/<YOUR_GITHUB_USERNAME>/open-connect-art.git
```
3. cd open-connect-art
4. open index.html in chrome browser

## Contributing a tile

- Some entries in index.html page looks like ```<img src="src/empty_cell.png" style="width:100%"  title="UNCLAIMED_0_0_">```, Where ```_0_0``` in the name suggests the location of the image in the grid 
- To contribute add you user name as title of the tile, add your image you want to use as tile from the ```src/``` folder and replace ```"src/empty_cell.png"``` with your image.

## Branch and commit 
- Once you are happy with the changes, create a branch so we can commit the changes.
```
git checkout -b add-my-tile
git add index.html
git commit -m "add my tile at _X_Y"
```
- Replace _X_Y with the x-coordinate and y-coordinate of your changed tile, e.g. (4, 27). This will create a new commit with the message add my tile at _4_27. The commit message is following the Conventional Commits Standard.

## Push and Pull Request
- First [Sync](https://help.github.com/en/articles/syncing-a-fork)
- Push
```
git push origin add-my-tile
```
- Use this [Steps](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)  to create a pull request
