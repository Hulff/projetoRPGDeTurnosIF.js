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
    atkDesc: ' disparo com a pistola explosivo',
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
    atkDesc: ' disparo com a pistola explosivo',
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
}
function resetSelectAtkState() {
  player.atk1.state = 'nothing'
  player.atk2.state = 'nothing'
  player.atk3.state = 'nothing'
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
function showAtkBot(atk) {
  playerHud.style.display = 'none'
  showAtkText(atk, 1, 'bot')
  setTimeout(() => {
    showAtkText(atk, 2, 'bot')
    showAtkSection()
  }, 2000)
}

function botAttack(atkName) {
  let damage
  let mana
  let atkUsed
  if (atkName == 1) {
    damage = bot.atk1.damage
    mana = bot.atk1.manaCost
    atkUsed = bot.atk1.atkName
  } else if (atkName == 2) {
    damage = bot.atk2.damage
    mana = bot.atk2.manaCost
    atkUsed = bot.atk2.atkName
  } else if (atkName == 3) {
    damage = bot.atk3.damage
    mana = bot.atk3.manaCost
    atkUsed = bot.atk3.atkName
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
    showAtkBot(atkUsed, 1)
    setTimeout(() => {
      botStatsUpdate(hpbot, manaBot)
      playerStatsUpdate(hpPlayer, manaPlayer)
    }, 1000)
  } else {
    console.log('no mana')
    botAttack(4)
  }
}
function atkSelect(atkType, atkDiv, playerAtk, atkName) {
  atkDescription.innerText = atkType

  resetSelectAtk()

  atkDiv.style.border = 'solid'
  atkDiv.style.borderColor = 'wheat'

  if (playerAtk.state == 'nothing') {
    console.log('selecting')
    resetSelectAtkState()
    playerAtk.state = 'selected'
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
  turnAtualize()
  hideHud(1)
  setTimeout(() => {
    botSelectAttack()
    hideHud(2)
  }, 1500)
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
