let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

    const name = localStorage.getItem('name') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('icon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.nasa.gov/'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (window.localStorage.getItem('v4Particles') === 'true') {
    const scr = document.createElement('script')
    scr.src = '/assets/scripts/particles.js'
    document.body.appendChild(scr)
  }
})

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<iframe src="/a/hvtrs8%2F-gmoelg.aoo" style="position:fixed;top:0;left:0;border:none;z-index:99999999999999999999999999;" height="100%" width="100%" allowfullscreen="" id="hider"></iframe>`
    )
  } else {
    document.querySelector('#hider')?.remove()
  }
})

document.onkeydown = function (evt) {
  evt = evt || window.event
  if (evt.keyCode == 27) {
    document.getElementById('is').blur()
  }
}

let splashtext = [
  'Over 7 Million Users in 2024!(holy shit im better)',
  'Fastest growing proxy server!',
  'Made by ODMSTAG!',
  'Thanks for using the site',
  'Check out the settings page',
  'do donate (im hella poor)',
    'we also have other services like game piracy! email for details',
  'V5 doesn't look much different from V4 to be honest',
  'Check out the apps and games section!',
  'Why are you here? Go study.',
  'Right-Click to access more features',
  'Fun Fact: You can set a custom background by going to settings.',
  'We have spent and earned zero dollars from Stealth Unblocker.',
  'Tip: Tab Cloaking is highly recommended!',
  'Did you know: A snail breathes through its foot',
  'Fun Fact: 40% of Stealth Unblocker was coded with ChatGPT',
  'Join our Discord if you have any suggestions!',
  'Tip: Enable authentication in settings.',
  'Chromebooks are honestlys L',
  'Fun Fact: Snakes can predict earthquakes',
  'You can customize Stealth Unblocker by going to Settings > Themes',
  'If the particles in the background are lagging the site, you can disable it in Settings.',
  'daniel is number one gay and pedo',
  'henry looks like an egg',
  'bodie more like bootie',
  'ali: midget powers activate!',
  'demore plays genshin',
  'vaylin watchs furry corn',
  'shane strokes big black things',
  
]

document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)]
