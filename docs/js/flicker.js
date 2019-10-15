// Event handler
// Sets the background color of the Flicker button
// Sets the foreground color also for sufficient contrast
// Calls setTileBackgrounds
function makeItFlicker(event) {
	// Set the background color of the button to yellow
	let row = document.querySelector(".row-parent")
	if (nightModeEnabled(row)) {
		// This only works in light mode
		row.classList.toggle("night-mode")
	}
	let button = event.target
	let bgColor = button.style.backgroundColor
	let textColor = button.style.color
	button.style.backgroundColor = "yellow"
	button.style.color = "#1c1b1b"
	button.classList.add("enabled")
	setTileBackgrounds()
}

function nightModeEnabled(rowParent) {
	return rowParent.classList.value.match(/.*night-mode.*/)
}

function setTileBackgrounds() {
	// Select a random color palette
	const palette = selectRandomPalette()
	// Select all of the columns
	let columns = document.getElementsByClassName("column")
	// For each column, change the background color of all img tiles
	for (let column of columns) {
		let tiles = Array.from(column.childNodes)
		// Ignore the first empty column
		if (tiles.length > 1) {
			for (let tile of tiles) {
				// Set the color of the img cells
				if (tile.nodeType === 1) {
					let index = Math.floor(Math.random() * palette.length)
					tile.style.backgroundColor = palette[index]
				}
			}
		}
	}
}

// Selects a random palette
// Palettes come from https://www.color-hex.com/color-palettes/
function selectRandomPalette() {
	const palettes = {
		marcelSport: ["#ed5565", "#f8ac59", "#c1e5ef", "#1799c6", "#08597d"],
		amethystLayers: ["#5b3a59", "#b88bc2", "#a2b4a8", "#fabab1", "#b1a79d"],
		stuntedDream: ["#726edb", "#db6e6e", "#db6ecb", "#6edb91", "#cfdb6e"],
		unicornPop: ["#ff88e8", "#9cc5fd", "#af66d8", "#e6ec88", "#89ec80"],
		midlinerRefresh: ["#ef7bb4", "#ee5a38", "#f6f778", "#64d4cf", "#7389e7"],
		sportMarcel: ["#f1511b", "#fabc09", "#ace2ff", "#245f88", "#489f48"],
		musicalColors: ["#85ff00", "#bd0000", "#1300ff", "#00f9ff", "#ff8400"],
		halfRainbow: ["#e60000", "#ffa500", "#ffff33", "#009a00", "#1a1aff"]
	}

	const paletteChoices = Object.keys(palettes)
	const randomIndex = paletteChoices[Math.floor(Math.random() * paletteChoices.length)]
	return palettes[randomIndex]
}

// Add the event listener on the button
document.getElementById("flicker").addEventListener("click", makeItFlicker)
