const imgBot = document.getElementById('imgBot')
const imgPlayer = document.getElementById('img-player')
const atkDesc = document.getElementById('atk-desc')
if (window.innerWidth > 981) {
  console.log('changing width')
  imgBot.style.height = '50vh'
  imgPlayer.style.height = '54vh'
  atkDesc.style.width = '40%'
}
// Bot
const sprite =
  'https://lh3.googleusercontent.com/pw/AM-JKLWDpOhPuiV7rA7j4JAmQMe4EzrqGiausseNY2fZJcxaJz-dhDUyBK-NJigEfM8uUinFySYaKVZe6C25m0ZNMZl0IlYU9gqSJ6PQClaQgtUArR4Kjg8WOHDDxZQt-vBnnOVm0wAp9L9Rta2ZFmsiUqan=s657-no?authuser=0'
const sprite1 =
  'https://lh3.googleusercontent.com/pw/AM-JKLWmiXIZz8r01gHyVdJBOLPMVGXUTLiXSo79i4W14zlRsiG0xXTguUdOqdf49qBLKm_K3ouyZcbkidywFMPtxn1Sd6-bpRkMp2RyHAd0Bbnz_EObvDd64rn-1pcWlwjOMSmTpMSxlcE418MgnOCPpQt0=s657-no?authuser=0'
const sprite2 =
  'https://lh3.googleusercontent.com/pw/AM-JKLUcwK8Zsb9PH1_wZjGL6PCvPEF4Bmvzzy5gtknfolM1mSyPO823mRdVbqS4ZoMIcVkYPMPMJr0f0n1i5amAaboXIAw8nxkialgGnaVJBp7yrtGI1k8TBzRfKKJZ3vByveKYkax-4aMyzAJNyR4B2r7U=s657-no?authuser=0'
const sprite3 =
  'https://lh3.googleusercontent.com/pw/AM-JKLUSoTHll9ReLPxCioudyOnrtz90dIU3zlDhuWnMESdFwC4o_72quyeAp3DOLzHks67kVDh7hHo5chKlQ121wy0WIUuAh9kagYdp2JGmhiMgDyzNXhrvf-RbmJHmx9DaDSl94sgQJcKkiBLP1MYdcmXt=s657-no?authuser=0'

const tackle = document.getElementById('tackle-atk')
const mind = document.getElementById('mind-atk')
const distortion = document.getElementById('distortion-atk')

const hpBar = document.getElementById('hpBarP')
const manaBar = document.getElementById('manaBarP')
const hpBarBot = document.getElementById('hpBarBot')
const manaBarBot = document.getElementById('manaBarBot')
const turnText = document.getElementById('turnText')
const atk1 = document.getElementById('atk1')
const atk2 = document.getElementById('atk2')
const atk3 = document.getElementById('atk3')
const manaCharge = document.getElementById('mana-charge')
const atkDescription = document.getElementById('pDesc')
const atkDescDiv = document.getElementById('atkDesc')
const playerHud = document.getElementById('atk-section')
const atkHud = document.getElementById('atk-text-section')
const atkHudText = document.getElementById('div-atk-text-p')
const winScene = document.getElementById('win')
const winText = document.getElementById('win-textW')
const LoseText = document.getElementById('win-textL')
let turno = 0
player = {
  manaRegen: {
    name: 'mana regen',
    value: 50,
    desc: 'regeneracao de mana',
    state: 'nothing'
  },
  atk1: {
    atkName: 'tiro rapido',
    atkDesc: 'rapido disparo com a pistola',
    state: 'nothing',
    damage: 10,
    manaCost: 0
  },
  atk2: {
    atkName: 'tiro lento',
    atkDesc: 'rapido disparo com a pistola , mas com chance de crítico',
    state: 'nothing',
    damage: 30,
    manaCost: 20
  },
  atk3: {
    atkName: 'tiro explosivo',
    atkDesc: ' disparo com a pistola explosivo ',
    state: 'nothing',
    damage: 40,
    manaCost: 40
  },
  name: 'soldier',
  stats: {
    hp: 100,
    mana: 50
  }
}
bot = {
  manaRegen: {
    name: 'mana regen',
    value: 15,
    desc: 'regeneracao de mana',
    state: 'nothing'
  },
  atk1: {
    atkName: 'lança sombria',
    atkDesc:
      'O agratti junta dois de seus tentáculos a uma forma solida de trevas que ele produz para formar uma lança e atacar com ela',
    state: 'nothing',
    damage: 5,
    manaCost: 0,
    soundSfx: tackle
  },
  atk2: {
    atkName: 'Destruição mental',
    atkDesc: '  O agratti olha nos olhos de seu inimigo ',
    state: 'nothing',
    damage: 12,
    manaCost: 20,
    soundSfx: mind
  },
  atk3: {
    atkName: ' Abalo dimensional',
    atkDesc: ' disparo com a pistola explosivo',
    state: 'nothing',
    damage: 25,
    manaCost: 30,
    soundSfx: distortion
  },
  name: 'Agratti',
  stats: {
    hp: 50,
    mana: 70
  }
}
function win() {
  winText.style.visibility = 'visible'
  winScene.style.display = 'flex'
}
function lose() {
  LoseText.style.visibility = 'visible'
  winScene.style.display = 'flex'
}
function defineMaxValues(hp, mana, hp2, mana2) {
  hpBar.max = hp
  manaBar.max = mana
  hpBarBot.max = hp2
  manaBarBot.max = mana2
}
function rollDice(max) {
  number = Math.floor(Math.random() * max) + 1
  return number
}
function playerStatsUpdate(hp, mana) {
  if (hp < 0) {
    lose()
  } else {
    hpBar.value = hp
    manaBar.value = mana
  }
}
function botStatsUpdate(hp, mana) {
  if (hp < 0) {
    win()
  } else {
    hpBarBot.value = hp
    manaBarBot.value = mana
  }
}
function atksUpdate(atk01, atk02, atk03) {
  atk1.innerText = atk01
  atk2.innerText = atk02
  atk3.innerText = atk03
}
function resetSelectAtk() {
  atk1.style.border = 'none'
  atk2.style.border = 'none'
  atk3.style.border = 'none'
  manaCharge.style.border = 'none'
}
function resetSelectAtkState() {
  player.atk1.state = 'nothing'
  player.atk2.state = 'nothing'
  player.atk3.state = 'nothing'
  player.manaRegen.state = 'nothing'
  resetSelectAtk()
}
function noMana() {
  playerHud.style.display = 'none'
  showAtkText('com mana insuficiente', 1, 'player')
  setTimeout(() => {
    showAtkText('com mana insuficiente', 2, 'player')
    showAtkSection()
  }, 1000)
}
function attack(atkName) {
  let damage
  let mana
  let atkUsed
  if (atkName == 'atk1') {
    damage = player.atk1.damage
    mana = player.atk1.manaCost
    atkUsed = player.atk1.atkName
  } else if (atkName == 'atk2') {
    damage = player.atk2.damage
    mana = player.atk2.manaCost
    atkUsed = player.atk2.atkName
  } else if (atkName == 'atk3') {
    damage = player.atk3.damage
    mana = player.atk3.manaCost
    atkUsed = player.atk3.atkName
  } else if (atkName == 'mana') {
    damage = 0
    mana = -player.manaRegen.value
    atkUsed = player.manaRegen.name
  }
  let hpbot = hpBarBot.value
  let manaBot = manaBarBot.value
  let hpPlayer = hpBar.value
  let manaPlayer = manaBar.value

  if (mana < manaPlayer) {
    hpbot = hpbot - damage
    manaPlayer = manaPlayer - mana
    showAtk(atkUsed)
    setTimeout(() => {
      botStatsUpdate(hpbot, manaBot)
      playerStatsUpdate(hpPlayer, manaPlayer)
    }, 1000)
  } else {
    noMana()
    console.log('no mana')
  }
}
function showAtkSection() {
  playerHud.style.display = 'initial'
}
function showAtkText(atk, number, user) {
  let name
  if (user == 'bot') {
    name = 'inimigo'
  } else if (user == 'player') {
    name = 'Voce'
  }
  if (atk != 'com mana insuficiente') {
    atkHudText.innerText = `${name} usou ${atk}`
  } else {
    atkHudText.innerText = `${name} esta ${atk} pra usar essa habilidade`
  }
  if (number == 1) {
    atkHud.style.display = 'initial'
  } else if (number == 2) {
    atkHud.style.display = 'none'
  }
}
function showAtk(atk) {
  playerHud.style.display = 'none'
  showAtkText(atk, 1, 'player')
  setTimeout(() => {
    showAtkText(atk, 2, 'player')
    botTurn()
  }, 2000)
}
function showAtkBot(atkText, a, atk) {
  playerHud.style.display = 'none'
  showAtkText(atkText, 1, 'bot')
  changeSpriteBot(1, a)
  playSfx(atk)
  setTimeout(() => {
    showAtkText(atkText, 2, 'bot')
    changeSpriteBot(2)
    stopSfx(atk)
    turnAtualize()
    showAtkSection()
  }, 2400)
}

function botAttack(atkName) {
  let damage
  let mana
  let atkUsed
  let atkSprite
  let botAtk
  if (atkName == 1) {
    damage = bot.atk1.damage
    mana = bot.atk1.manaCost
    atkUsed = bot.atk1.atkName
    atkSprite = 'atk1'
    botAtk = bot.atk1.soundSfx
  } else if (atkName == 2) {
    damage = bot.atk2.damage
    mana = bot.atk2.manaCost
    atkUsed = bot.atk2.atkName
    atkSprite = 'atk2'
    botAtk = bot.atk2.soundSfx
  } else if (atkName == 3) {
    damage = bot.atk3.damage
    mana = bot.atk3.manaCost
    atkUsed = bot.atk3.atkName
    atkSprite = 'atk3'
    botAtk = bot.atk3.soundSfx
  } else if (atkName == 4) {
    damage = 0
    mana = -player.manaRegen.value
    atkUsed = player.manaRegen.name
  }

  let hpbot = hpBarBot.value
  let manaBot = manaBarBot.value
  let hpPlayer = hpBar.value
  let manaPlayer = manaBar.value

  if (mana < manaBot) {
    hpPlayer = hpPlayer - damage
    manaBot = manaBot - mana
    showAtkBot(atkUsed, atkSprite, botAtk)
    setTimeout(() => {
      botStatsUpdate(hpbot, manaBot)
      playerStatsUpdate(hpPlayer, manaPlayer)
    }, 500)
  } else {
    console.log('no mana')
    botAttack(4)
  }
}
function atkSelect(atkType, atkDiv, playerAtk, atkName) {
  if (atkName != 'mana') {
    atkDescription.innerHTML =
      playerAtk.atkDesc +
      '<br>' +
      ' dano: ' +
      playerAtk.damage +
      '<br>' +
      ' custo de mana: ' +
      playerAtk.manaCost
  } else {
    atkDescription.innerHTML =
      atkType + '<br>' + ' quantidade regenerada: ' + playerAtk.value
  }

  if (playerAtk.state == 'nothing') {
    console.log('selecting')
    resetSelectAtkState()
    playerAtk.state = 'selected'
    atkDiv.style.border = 'solid'
    atkDiv.style.borderColor = 'wheat'
  } else {
    console.log('attacking')
    attack(atkName)
  }
}
function turnAtualize() {
  turno++
  turnText.innerText = turno + ' Round'
  return turno
}
function botSelectAttack() {
  let atk = rollDice(3)
  botAttack(atk)
}
function hideHud(param) {
  if (param == 1) {
    playerHud.style.visibility = 'hidden'
  } else if (param == 2) {
    playerHud.style.visibility = 'visible'
  }
}
function botTurn() {
  hideHud(1)
  setTimeout(() => {
    botSelectAttack()
    hideHud(2)
  }, 1500)
}
function changeSpriteBot(state, atk) {
  if (state == 1) {
    console.log('change sprite')
    if (atk == 'atk1') {
      imgBot.src = sprite1
    } else if (atk == 'atk2') {
      imgBot.src = sprite2
    } else if (atk == 'atk3') {
      imgBot.src = sprite3
    }
  } else {
    console.log('change to normal')
    imgBot.src = sprite
  }
}
function playSfx(useratk) {
  useratk.play()
}
function stopSfx(useratk) {
  useratk.pause()
}

atksUpdate(player.atk1.atkName, player.atk2.atkName, player.atk3.atkName)
playerStatsUpdate(player.stats.hp, player.stats.mana)
botStatsUpdate(bot.stats.hp, bot.stats.mana)
atkSelect(player.atk1.atkDesc, atk1, player.atk1, 'atk1')
defineMaxValues(
  player.stats.hp,
  player.stats.mana,
  bot.stats.hp,
  bot.stats.mana
)
turnAtualize()
