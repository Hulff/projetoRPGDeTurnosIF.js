const imgBot = document.getElementById('imgBot')
const imgPlayer = document.getElementById('img-player')
const atkDesc = document.getElementById('atk-desc')

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
let atk1Pos
let atk2Pos
let atk3Pos
let manaChargePos

if (window.innerHeight < 800) {
  console.log('changing width1')
  imgBot.style.height = '50vh'
  imgPlayer.style.height = '54vh'
  atkDesc.style.width = '40%'
  hpBarBot.style.width = '30vh'
  hpBar.style.width = '30vh'
}

function getHeight() {
  setTimeout(() => {
    atk1Pos = atk1.getBoundingClientRect().y
    atk2Pos = atk2.getBoundingClientRect().y
    manaChargePos = manaCharge.getBoundingClientRect().y
    atk3Pos = atk3.getBoundingClientRect().y

    console.log(atk1Pos)
    console.log(atk2Pos)
    console.log(atk3Pos)

    return atk1Pos, atk2Pos, atk3Pos, manaChargePos
  }, 10)
}
getHeight()

// Bot
const sprite =
  'https://lh3.googleusercontent.com/pw/AM-JKLWYGADNiuvQbELnReegKLhksDAXI33PDmnuS7c-fr-qmQbC9Z0NtmHHviMU9hnJdu_SprmnmLmqLZxkwf7yZBCcK1JYdkLlFe336BAC_ojpZK0BBcMX3qDeutHjrrefK06V6Za8HHMZUeR02lh25fii=s625-no?authuser=0'
const sprite1 =
  'https://lh3.googleusercontent.com/pw/AM-JKLVM6KjuGUAuFA_71WBxHJHsajGy2WpmwtuCIVfywbfUzED6-YTHcUoxJ3WX-G5UE26KWAxK21RPHgexiThCAHeWH7gVKcGVXjCrTjjqIVc1O3WgL1rGOqeLhXKeViUsE5vzlHv_CZJC1SVoIIpcOH4p=s625-no?authuser=0'
const sprite2 =
  'https://lh3.googleusercontent.com/pw/AM-JKLVAY9dmohWMP5pjuDIVxnS12YSgaWbC5Vs75POZ9MV1DVTqPq9llFMCarZ0cGh0LAZ-VnRs0fceHoCH3a8NjDbfaE1FsjEChe9DevxZd86t8JN78VmLqE-v6QBF4WnuyydqkgnnjvF2B2VAPxzw7dED=s625-no?authuser=0'
const sprite3 =
  'https://lh3.googleusercontent.com/pw/AM-JKLVgHCg6x0gr9OO9VlyT_Jij5EvJNuD1m7KyFsgDb2yLhxau7zsbV0dFrvOzyFwBXRYRjn4-yV7vk8Xjg5AnCcRF-aezLTyfOZR_rSQVXIv-FZTTaKhR8VaTOnMP78daaeJaZhZdrL0N_kFVrUX3hp65=s625-no?authuser=0'
const sprite4 =
  'https://lh3.googleusercontent.com/pw/AM-JKLXVbuucJKl2VG6QvCgn395ATv61zGAkTQlryIYnT0hr-z35qzki6FYB4Iacx_8bIf1e-6360hE_Z0NziLpuo72AsZiJrV16L7oY7w0o5Ehfm_Th-_bIJhuVGCw_XvY2_5_z9_UKjMisI7fXRxo8XQEh=s625-no?authuser=0'
const sprite5 =
  'https://lh3.googleusercontent.com/pw/AM-JKLUVvrxBqF2W_Z7riwnQxpYJ2TMp77N2kzpGv7NvDL9kOfaPktS36bJGa_PUT8Wio9wqOhofuNBAkQTrHBrr82RSpWNCP1kn6CreTe9ZoF3COij1lt2mmlfGxieuDjKwLhucLzF60IBrvkKQO-4-DnYX=s625-no?authuser=0'

const tackle = document.getElementById('tackle-atk')
const mind = document.getElementById('mind-atk')
const distortion = document.getElementById('distortion-atk')

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
    atkDesc: 'rapido disparo com a pistola , mas com chance de cr??tico',
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
    atkName: 'lan??a sombria',
    atkDesc:
      'O agratti junta dois de seus tent??culos a uma forma solida de trevas que ele produz para formar uma lan??a e atacar com ela',
    state: 'nothing',
    damage: 5,
    manaCost: 0,
    soundSfx: tackle
  },
  atk2: {
    atkName: 'Destrui????o mental',
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
  atkSelect(player.atk1.atkDesc, atk1, player.atk1, 'atk1')
  setTimeout(() => {
    moveDown()
  }, 100)
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
  moveUp()
  resetSelectAtkState()
  setTimeout(() => {
    playerHud.style.display = 'none'
    showAtkText(atk, 1, 'player')
    if (atk != 'mana regen') {
      changeSpriteBot(1, 'takeDamage')
    }
    setTimeout(() => {
      showAtkText(atk, 2, 'player')
      changeSpriteBot(2)
      botTurn()
    }, 2000)
  }, 1000)
}
function showAtkBot(atkText, a, atk) {
  playerHud.style.display = 'none'
  showAtkText(atkText, 1, 'bot')
  changeSpriteBot(1, a)
  if (atk == 'mana') {
  } else {
    playSfx(atk)
  }
  setTimeout(() => {
    showAtkText(atkText, 2, 'bot')
    changeSpriteBot(2)
    if (atk == 'mana') {
    } else {
      stopSfx(atk)
    }
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
    atkSprite = 'mana'
    botAtk = 'mana'
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
    } else if (atk == 'mana') {
      imgBot.src = sprite4
    } else if (atk == 'takeDamage') {
      imgBot.src = sprite5
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
function moveUp() {
  let pos1 = atk2Pos - atk1Pos
  let pos2 = atk3Pos - atk1Pos
  let pos3 = manaChargePos - atk1Pos
  atk2.style.top = `-${pos1}px`
  atk3.style.top = `-${pos2}px`
  manaCharge.style.top = `-${pos3}px`
  atkDesc.style.left = '900px'
}
function moveDown() {
  atk2.style.top = '0px'
  atk3.style.top = '0px'
  atkDesc.style.left = '0px'
  manaCharge.style.top = '0px'
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
