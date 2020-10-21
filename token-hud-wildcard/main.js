const tokenHUDWildcard = {
    registerSettings: () => {
        game.settings.register('token-hud-wildcard', 'imageDisplay', {
            name: game.i18n.format('THWildcard.DisplaySettingName'),
            hint: game.i18n.format('THWildcard.DisplaySettingHint'),
            scope: 'world',
            config: true,
            type: Boolean,
            default: true
        })
        game.settings.register("token-hud-wildcard", "imageOpacity", {
            name: game.i18n.format('THWildcard.OpacitySettingName'),
            hint: game.i18n.format('THWildcard.OpacitySettingHint'),
            scope: "world",
            config: true,
            range: { min: 0, max: 100, step: 1 },
            type: Number,
            default: 50
        })
    }
}

Hooks.on('init', () => {
    tokenHUDWildcard.registerSettings()
})

Hooks.on('ready', () => {
    const renderTokenConfig = 'renderTokenConfig'
    Hooks.on(renderTokenConfig, WildcardDefault.render)
    WildcardDefault._hookPreTokenCreate()
})

const WildcardDefault = {
    getDefaultImg: async (token) => {
        const flag = token.getFlag('token-hud-wildcard', 'default') || ''
        return flag
    },
    _hookPreTokenCreate () {
        Hooks.on('preCreateToken', (scene, data, options, userId) => {
            const actor = game.actors.get(data.actorId)

            const defaultValue = data.flags['token-hud-wildcard'] ? data.flags['token-hud-wildcard'].default : ''
            if (defaultValue !== '' && actor.data.token.randomImg) {
                setProperty(data, 'img', defaultValue)
            }
        })
    },
    render: async (config, html) => {
        const defaultImg = await WildcardDefault.getDefaultImg(config.token)
        if (config.token.data._id) {
            return
        }
        const imageDataTab = html.find('.tab[data-tab="image"]')
        const checkBoxWildcard = imageDataTab.find('input[name="randomImg"]')
        const configField = await renderTemplate('/modules/token-hud-wildcard/templates/configField.html', { defaultImg, available: checkBoxWildcard[0].checked })

        imageDataTab.append(configField)
        const defaultConfig = imageDataTab.find('.thwildcard-default')

        defaultConfig.find('button').click(event => {
            event.preventDefault()
            const input = defaultConfig.find('input')[0]

            const fp = new FilePicker({ current: input.value, field: input })
            fp.browse(defaultImg)
        })

        checkBoxWildcard.click(event => {
            if (event.target.checked) {
                defaultConfig[0].classList.add('active')
            } else {
                defaultConfig[0].classList.remove('active')
            }
        })
    }
}

Hooks.on('renderTokenHUD', async (hud, html, token) => {
    const actor = game.actors.get(token.actorId)
    const images = await actor.getTokenImages()

    if (images.length < 2) {
        return
    }

    const imageDisplay = game.settings.get('token-hud-wildcard', 'imageDisplay')
    const imageOpacity = game.settings.get('token-hud-wildcard', 'imageOpacity')/100
    const imagesParsed = images.map(im => {
        const split = im.split('/')
        return { route: im, name: split[split.length - 1], used: im === token.img }
    })

    const wildcardDisplay = await renderTemplate('/modules/token-hud-wildcard/templates/hud.html', { imagesParsed, imageDisplay, imageOpacity })

    html.find('div.right')
        .append(wildcardDisplay)
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
        })

    const buttons = html.find('.thwildcard-button-select')

    buttons.map((button) => {
        buttons[button].addEventListener('click', function (event) {
            event.preventDefault()
            event.stopPropagation()
            const controlled = canvas.tokens.controlled
            const index = controlled.findIndex(x => x.data._id === token._id)
            const tokenToChange = controlled[index]
            tokenToChange.update({ img: event.target.dataset.name })
        })
    })
})
