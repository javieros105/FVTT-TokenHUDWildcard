Hooks.on("renderTokenHUD", async (hud, html, token) => {
	let actor = game.actors.get(token.actorId);
	let images = await actor.getTokenImages();

	if (images.length < 2) {
		return
	}

	let openButton = document.createElement("div");

	openButton.classList.add("control-icon");
	openButton.classList.add("image-selector");

	openButton.innerHTML = `<i class="fas fa-chevron-right"></i>`
	openButton.title = `${game.i18n.localize("THWildcard.Title")}`

	$(openButton).click((event) => {
		console.log('Pressed Button')
		const buttonFind = html.find('.control-icon.image-selector')
		const active = buttonFind[0].classList.contains('active')
		if (!active) {
			let imNames = `
				<div class="image-swapper-selector-wrap">
					${
						images.map((im, index) => {
							const split = im.split('/')
							const image = split[split.length - 1]
							return `
								<button class="image-swapper-button-select" name="${im}">${image}</button>
							`
						}).join('')
					}
				</div>
			`

			buttonFind[0].classList.add('active')
			buttonFind.after(imNames)

			const buttons = html.find(".image-swapper-button-select")
			buttons.map((button) => {
				buttons[button].addEventListener('click', function (event) {
					event.preventDefault()
					event.stopPropagation()
					console.log(token)
					console.log(event.target.name)
					const controlled = canvas.tokens.controlled
					const index = controlled.findIndex(x => x.data._id === token._id)
					const tokenToChange = controlled[index]
					tokenToChange.update({ img: event.target.name })
				})
			})
		} else {
			buttonFind[0].classList.remove('active')
			html.find('.image-swapper-selector-wrap')[0].remove()
		}
	})

	html.find("div.right").append(openButton);
})
