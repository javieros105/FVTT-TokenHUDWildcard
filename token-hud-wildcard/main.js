Hooks.on("renderTokenHUD", async (hud, html, token) => {
	let actor = game.actors.get(token.actorId);
	let images = await actor.getTokenImages();

	if (images.length < 2) {
		return
	}

	html.find("div.right")
		.append(`
			<div class="control-icon thwildcard-selector" >
				<img src="modules/token-hud-wildcard/img/token-icon.svg" width="36" height="36" title="${game.i18n.localize("THWildcard.Title")}" />
				<div class="thwildcard-selector-wrap">
					${
						images.map((im, index) => {
							const split = im.split('/')
							const image = split[split.length - 1]
							return `
								<button class="thwildcard-button-select control-icon" name="${im}">${image}</button>
							`
						}).join('')
					}
				</div>
			</div>
		`)
		.click((event) => {
			const buttonFind = html.find('.control-icon.thwildcard-selector')
			const cList = event.target.parentElement.classList
			const correctButton = cList.contains('thwildcard-selector') 
			const active = cList.contains('active')

			if (correctButton && !active) {
				buttonFind[0].classList.add('active')
				html.find('.thwildcard-selector-wrap')[0].classList.add('active')

				html.find('.control-icon.effects')[0].classList.remove('active')
				html.find('.status-effects')[0].classList.remove('active')
			} else {
				buttonFind[0].classList.remove('active')
				html.find('.thwildcard-selector-wrap')[0].classList.remove('active')
			}
		});

	const buttons = html.find(".thwildcard-button-select")
	buttons.map((button) => {
		buttons[button].addEventListener('click', function (event) {
			event.preventDefault()
			event.stopPropagation()
			const controlled = canvas.tokens.controlled
			const index = controlled.findIndex(x => x.data._id === token._id)
			const tokenToChange = controlled[index]
			tokenToChange.update({ img: event.target.name })
		})
	})
})
