import errorSound from './sounds/error.mp3'
import readyFootman from './sounds/ready/FootmanReady.wav'
import readyGryphonRiderReady from './sounds/ready/GryphonRiderReady.wav'
import readyDragonHawkReady from './sounds/ready/DragonHawkReady.wav'
import readySpellbreaker from './sounds/ready/SpellbreakerReady.wav'
import readyHeroPaladin from './sounds/ready/HeroPaladinReady.wav'
import readyKnight from './sounds/ready/KnightReady.wav'
import readyPeasant from './sounds/ready/PeasantReady.wav'
import pickFootman from './sounds/pick/FootmanWhat1.wav'
import pickGryphonRiderReady from './sounds/pick/GryphonRiderWhat1.wav'
import pickDragonHawkReady from './sounds/pick/DragonHawkWhat1.wav'
import pickSpellbreaker from './sounds/pick/SpellbreakerWhat1.wav'
import pickHeroPaladin from './sounds/pick/HeroPaladinWhat1.wav'
import pickKnight from './sounds/pick/KnightWhat1.wav'
import pickPeasant from './sounds/pick/PeasantWhat1.wav'
import pickAbomination from './sounds/pick/AbominationWhat1.wav'
import readyAbomination from './sounds/ready/AbominationReady.wav'
import readyAcolyte from './sounds/ready/AcolyteReady.wav'
import pickAcolyte from './sounds/pick/AcolyteWhat1.wav'
import pickCryptFiend from './sounds/pick/CryptFiendWhat1.wav'
import readyCryptFiend from './sounds/ready/CryptFiendReady.wav'
import readyArthas from './sounds/ready/EvilArthasYesAttack1.wav'
import pickArthas from './sounds/pick/EvilArthasWhat1.wav'
import readyWR from './sounds/ready/EvilSylvanasReady1.wav'
import pickWR from './sounds/pick/EvilSylvanasWhat1.wav'
import readyFrostwyrm from './sounds/ready/FrostwyrmReady1.wav'
import pickFrostwyrm from './sounds/pick/FrostwyrmWhat1.wav'
import readyGhoul from './sounds/ready/GhoulReady1.wav'
import pickGhoul from './sounds/pick/GhoulWhat1.wav'
import readyNerubianCryptLord from './sounds/ready/NerubianCryptLordReady1.wav'
import pickNerubianCryptLord from './sounds/pick/NerubianCryptLordWhat1.wav'
import readySorceress from './sounds/ready/SorceressReady1.wav'
import pickSorceress from './sounds/pick/SorceressWhat1.wav'
import readyPriest from './sounds/ready/PriestReady1.wav'
import pickPriest from './sounds/pick/PriestWhat1.wav'
import readyArcher from './sounds/ready/ArcherReady1.wav'
import pickArcher from './sounds/pick/ArcherWhat1.wav'
import readySylvanasWindrunner from './sounds/ready/SylvanasWindrunnerReady.wav'
import pickSylvanasWindrunner from './sounds/pick/SylvanasWindrunnerWhat1.wav'
import readyPeon from './sounds/ready/PeonReady1.wav'
import pickPeon from './sounds/pick/PeonWhat1.wav'
import readyWolfrider from './sounds/ready/WolfriderReady1.wav'
import pickWolfrider from './sounds/pick/WolfriderWhat1.wav'
import readyWyvernRider from './sounds/ready/WyvernRiderReady1.wav'
import pickWyvernRider from './sounds/pick/WyvernRiderWhat1.wav'
import readyGrunt from './sounds/ready/GruntReady1.wav'
import pickGrunt from './sounds/pick/GruntWhat1.wav'
import readyKotoBeast from './sounds/ready/KotoBeastReady1.wav'
import pickKotoBeast from './sounds/pick/KotoBeastWhat1.wav'
import readyHeroTaurenChieftain from './sounds/ready/HeroTaurenChieftainReady1.wav'
import pickHeroTaurenChieftain from './sounds/pick/HeroTaurenChieftainWhat1.wav'
import readyHeroBlademaster from './sounds/ready/HeroBlademasterReady1.wav'
import pickHeroBlademaster from './sounds/pick/HeroBlademasterWhat1.wav'
import deathPeasant from './sounds/death/PeasantDeath.wav'
import deathFootman from './sounds/death/FootmanDeath.wav'
import deathGryphonRider from './sounds/death/GryphonRiderDeath1.wav'
import deathKnight from './sounds/death/KnightDeath.wav'
import deathAbomination from './sounds/death/AbominationAlternateDeath1.wav'
import deathAcolyte from './sounds/death/AcolyteDeath1.wav'
import deathCryptFiend from './sounds/death/PitFiendDeath1.wav'
import deathGhoul from './sounds/death/GhoulDeath.wav'
import deathNerubianCryptLord from './sounds/death/CryptLordDeath1.wav'
import deathSorceress from './sounds/death/SorceressDeath.wav'
import deathPeon from './sounds/death/PeonDeath.wav'
import deathWolfrider from './sounds/death/RaiderDeath.wav'
import deathWyvernRider from './sounds/death/WyvernRiderDeath.wav'
import deathGrunt from './sounds/death/GruntDeath.wav'
import deathKotoBeast from './sounds/death/KodoBeastDeath.wav'
import deathHeroTaurenChieftain from './sounds/death/HeroTaurenChieftainDeath.wav'
import deathHeroBlademaster from './sounds/death/HeroBladeMasterDeath.wav'

export let readySounds = {
    null: null,
    "footman": readyFootman,
    "gryphonRider": readyGryphonRiderReady,
    "dragonHawk": readyDragonHawkReady,
    "spellbreaker": readySpellbreaker,
    "heroPaladin": readyHeroPaladin,
    "knight": readyKnight,
    "peasant": readyPeasant,
    "abomination": readyAbomination,
    "acolyte": readyAcolyte,
    "cryptFiend": readyCryptFiend,
    "arthas": readyArthas,
    "WR": readyWR,
    "frostWyrm": readyFrostwyrm,
    "ghoul": readyGhoul,
    "nerubianCryptLord": readyNerubianCryptLord,
    "sorceress": readySorceress,
    "priest": readyPriest,
    "archer": readyArcher,
    "sylvanasWindrunner": readySylvanasWindrunner,
    "peon": readyPeon,
    "rider": readyWolfrider,
    "wyvernRider": readyWyvernRider,
    "grunt": readyGrunt,
    "koto": readyKotoBeast,
    "tauren": readyHeroTaurenChieftain,
    "blademaster": readyHeroBlademaster,
}

export let pickSounds = {
    null: null,
    "footman": pickFootman,
    "gryphonRider": pickGryphonRiderReady,
    "dragonHawk": pickDragonHawkReady,
    "spellbreaker": pickSpellbreaker,
    "heroPaladin": pickHeroPaladin,
    "knight": pickKnight,
    "peasant": pickPeasant,
    "abomination": pickAbomination,
    "acolyte": pickAcolyte,
    "cryptFiend": pickCryptFiend,
    "arthas": pickArthas,
    "WR": pickWR,
    "frostWyrm": pickFrostwyrm,
    "ghoul": pickGhoul,
    "nerubianCryptLord": pickNerubianCryptLord,
    "sorceress": pickSorceress,
    "priest": pickPriest,
    "archer": pickArcher,
    "sylvanasWindrunner": pickSylvanasWindrunner,
    "peon": pickPeon,
    "rider": pickWolfrider,
    "wyvernRider": pickWyvernRider,
    "grunt": pickGrunt,
    "koto": pickKotoBeast,
    "tauren": pickHeroTaurenChieftain,
    "blademaster": pickHeroBlademaster,
}

export let deathSounds = {
    null: null,
    "peasant": deathPeasant,
    "footman": deathFootman,
    "gryphonRider": deathGryphonRider,
    "knight": deathKnight,
    "abomination": deathAbomination,
    "acolyte": deathAcolyte,
    "cryptFiend": deathCryptFiend,
    "ghoul": deathGhoul,
    "nerubianCryptLord": deathNerubianCryptLord,
    "sorceress": deathSorceress,
    "peon": deathPeon,
    "rider": deathWolfrider,
    "wyvernRider": deathWyvernRider,
    "grunt": deathGrunt,
    "koto": deathKotoBeast,
    "tauren": deathHeroTaurenChieftain,
    "blademaster": deathHeroBlademaster,
}


export function playErrorSound() {
    new Audio(errorSound).play()
}

export function playReadySound (unit) {
    if (unit.cl.sounds.ready) {
        new Audio(unit.cl.sounds.ready).play()
    }
}

export function playPickSound (unit) {
    if (unit.cl.sounds.pick) {
        new Audio(unit.cl.sounds.pick).play()
    }
}

export function playConvertSound (unit) {
    if (unit.cl.sounds.convert) {
        new Audio(unit.cl.sounds.convert).play()
    }
}

export function playDeathSound (unit) {
    if (unit.cl.sounds.death) {
        new Audio(unit.cl.sounds.death).play()
    }
}