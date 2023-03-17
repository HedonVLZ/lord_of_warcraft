import BTNDivineIntervention from './pictures/BTNDivineIntervention.webp';
import BTNStun from './pictures/BTNStun.webp';
import BTNSkeletonWarrior from './pictures/BTNSkeletonWarrior.webp';
import BTNSkeletonMage from './pictures/BTNSkeletonMage.webp';
import BTNSacrifice from './pictures/BTNSacrifice.webp';
import SkeletonKing from './pictures/Skeleton_King.gif';
import ReincarnationImg from './pictures/Reincarnation.gif';
import BTNOrbOfCorruption from './pictures/BTNOrbOfCorruption.webp';
import BTNAntiMagicShell from './pictures/BTNAntiMagicShell.webp';
import BTNUnholyFrenzy from './pictures/BTNUnholyFrenzy.webp';
import BTNHeal from './pictures/BTNHeal.webp';
import BTNDeathCoil from './pictures/BTNDeathCoil.webp';
import BTNCorpseExplode from './pictures/BTNCorpseExplode.webp';
import BTNInnerFire from './pictures/BTNInnerFire.webp';
import BTNResurrection from './pictures/BTNResurrection.webp';
import Purifying_Flames from './pictures/Purifying_Flames.jpg';
import BTNFire from './pictures/BTNFire.webp';
import BTNSearingArrowsOff from './pictures/BTNSearingArrowsOff.webp';
import BTNWallOfFire from './pictures/BTNWallOfFire.webp';
import BTNFireBolt from './pictures/BTNFireBolt.webp';
import BTNMarkOfFire from './pictures/BTNMarkOfFire.webp';
import fenixImg from './pictures/fenix.jpg';
import errorSound from './sounds/error.mp3';
import {defaultBoneFletcher, defaultSkeletonWarrior, defaultSkeletonKing, defaultFenix} from './unitCards'
export let raiseSkeleton = {
    name: "raiseSkeleton",
    img: BTNSkeletonWarrior,
    type: "buff",
    target: ["ally"],
    manacost: 23,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.player !== numberOfPlayer || target.cl.hp > 0) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...defaultSkeletonWarrior,
                cl: {
                    ...defaultSkeletonWarrior,
                    hp: defaultSkeletonWarrior.hp + Intelligence - 3,
                    hpMax: defaultSkeletonWarrior.hpMax + Intelligence - 3
                }
            }
        }
    }

}

export let raiseBoneFletcher = {
    name: "raiseBoneFletcher",
    img: BTNSkeletonMage,
    type: "buff",
    target: ["ally"],
    manacost: 72,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.player !== numberOfPlayer || target.cl.hp > 0) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...defaultBoneFletcher,
                cl: {
                    ...defaultBoneFletcher,
                    attack: defaultBoneFletcher.attack + Intelligence - 3
                }
            }
        }
    }
}
export let raiseSkeletonKing = {
    name: "raiseSkeletonKing",
    img: SkeletonKing,
    type: "buff",
    target: ["ally"],
    manacost: 131,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.player !== numberOfPlayer || target.cl.hp > 0) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...defaultSkeletonKing,
                cl: {
                    ...defaultSkeletonKing.cl,
                    hp: defaultSkeletonKing.hp + 2 * Intelligence - 6,
                    hpMax: defaultSkeletonKing.hpMax + 2 * Intelligence - 6,
                    attack: defaultSkeletonKing.attack + 2 * Intelligence - 6,
                }
            }
        }
    }
}
export let deathCoil = {
    name: "deathCoil",
    img: BTNDeathCoil,
    type: ["buff", "damage"],
    target: ["ally", "enemy"],
    manacost: 20,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("undead") > -1) {
            let result = 0
            if (target.cl.hp + 3 + Intelligence * 2 > target.cl.hpMax) {
                result = target.cl.hpMax
            } else {
                result = target.cl.hp + 3 + Intelligence * 2
            }
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: result
                }
            }
        }
        if (target.cl.ability.indexOf("undead") === -1) {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hp - 3 - Intelligence
                }
            }
        }
    }
}
export let sacrifice = {
    name: "Sacrifice",
    img: BTNSacrifice,
    type: "buff",
    target: ["ally"],
    manacost: 30,
    bonusXP: 1,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.player !== numberOfPlayer || target.cl.hp <= 0) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: -999
                }
            }
        }
    }
}

export let reincarnation = {
    name: "Reincarnation",
    img: ReincarnationImg,
    type: "buff",
    target: ["ally"],
    manacost: 40,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("undead") === -1 || target.player !== numberOfPlayer || target.cl.hp > 0 || target.cl.cost >= Intelligence * 15) {
            alert("incorrect target")
            if (target.cl.cost >= Intelligence * 15) {
                alert("Intelligence is not enough")
            }
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hpMax
                }
            }
        }
    }
}
export let suddenDeath = {
    name: "SuddenDeath",
    img: BTNCorpseExplode,
    type: "damage",
    target: ["enemy"],
    manacost: 50,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.hp <= 0 || target.cl.ability.indexOf("undead") > -1 || target.cl.ability.indexOf("building") > -1 || target.cl.cost >= Intelligence * 10) {
            alert("incorrect target")
            if (target.cl.cost >= Intelligence * 10) {
                alert("Intelligence is not enough")
            }
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: -999
                }
            }
        }
    }
}
export let orbOfCorroption = {
    name: "orbOfCorroption",
    img: BTNOrbOfCorruption,
    type: "buff",
    target: ["ally"],
    manacost: 30,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    attack: target.cl.attack + Intelligence - 1,
                    ability: target.cl.ability.concat("corruptAttack"),
                    abilityImg: target.cl.abilityImg.concat(BTNOrbOfCorruption)
                }
            }
        }
    }
}
export let antiMagicShell = {
    name: "AntiMagicShell",
    img: BTNAntiMagicShell,
    type: "buff",
    target: ["ally"],
    manacost: 40,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.cl.cost >= Intelligence * 20) {
            alert("incorrect target")
            if (target.cl.cost >= Intelligence * 20) {
                alert("Intelligence is not enough")
            }
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    ability: target.cl.ability.concat("MagicImmunity"),
                    abilityImg: target.cl.ability.concat(BTNAntiMagicShell)
                }
            }
        }
    }
}
export let unholyFrenzy = {
    name: "UnholyFrenzy",
    img: BTNUnholyFrenzy,
    type: "buff",
    target: ["ally"],
    manacost: 50,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.cl.cost >= Intelligence * 20) {
            alert("incorrect target")
            if (target.cl.cost >= Intelligence * 20) {
                alert("Intelligence is not enough")
            }
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    armor: target.cl.armor - 5,
                    AS: target.cl.AS + Intelligence - 2,
                    ability: target.cl.ability.concat("UnholyFrenzy"),
                    abilityImg: target.cl.abilityImg.concat(BTNUnholyFrenzy)
                }
            }
        }
    }
}
export let heal = {
    name: "heal",
    img: BTNHeal,
    type: "buff",
    target: ["ally"],
    manacost: 15,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.player !== numberOfPlayer || target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            let result = 0
            if (target.cl.hp + 3 + Intelligence * 2 > target.cl.hpMax) {
                result = target.cl.hpMax
            } else {
                result = target.cl.hp + 3 + Intelligence * 2
            }
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: result
                }
            }
        }
    }
}
export let holyAttackMagic = {
    name: "holyAttack",
    img: BTNDivineIntervention,
    type: "buff",
    target: ["ally"],
    manacost: 30,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    attack: target.cl.attack + Intelligence - 1,
                    ability: target.cl.ability.concat("holyAttack"),
                    abilityImg: target.cl.abilityImg.concat(BTNDivineIntervention)
                }
            }
        }
    }
}
export let innerFire = {
    name: "innerFire",
    img: BTNInnerFire,
    type: "buff",
    target: ["ally"],
    manacost: 70,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    armor: target.cl.armor + Intelligence - 1,
                    ability: target.cl.ability.concat("innerFireEffect"),
                    abilityImg: target.cl.abilityImg.concat(BTNInnerFire)
                }
            }
        }
    }
}
export let resurrection = {
    name: "Reincarnation",
    img: BTNResurrection,
    type: "buff",
    target: ["ally"],
    manacost: 60,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.hp > 0 || target.player !== numberOfPlayer || target.cl.ability.indexOf("undead") === 0 || target.cl.cost >= Intelligence * 15) {
            alert("incorrect target")
            if (target.cl.cost >= Intelligence * 15) {
                alert("Intelligence is not enough")
            }
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hpMax
                }
            }
        }
    }
}
export let purifyingFlames = {
    name: "purifyingFlames",
    img: Purifying_Flames,
    type: ["buff", "damage"],
    target: ["any"],
    manacost: 40,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hp - 3 - Intelligence * 2,
                    ability: target.cl.ability.concat("purifyingFlamesEffect"),
                    abilityImg: target.cl.abilityImg.concat(Purifying_Flames)
                }
            }
        }
    }
}
export let fireBolt = {
    name: "fireBolt",
    img: BTNFire,
    type: ["damage"],
    target: ["enemy"],
    manacost: 20,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hp - 4 - Intelligence
                }
            }
        }
    }
}
export let fireArrows = {
    name: "fireArrows",
    img: BTNSearingArrowsOff,
    type: ["buff"],
    target: ["ally"],
    manacost: 20,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1 || target.cl.ability.indexOf("fireArrows") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    attack: target.cl.attack + Intelligence,
                    ability: target.cl.ability.concat("fireArrows"),
                    abilityImg: target.cl.abilityImg.concat(BTNSearingArrowsOff)
                }
            }
        }
    }
}
export let wallOfFire = {
    name: "WallOfFire",
    img: BTNWallOfFire,
    type: ["damage"],
    target: ["enemy"],
    manacost: 35,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("flying") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hp - 8 - 2 * Intelligence,
                }
            }
        }
    }
}
export let fireBall = {
    name: "fireBall",
    img: BTNFireBolt,
    type: ["damage"],
    target: ["enemy"],
    manacost: 40,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target === null) {
            alert("incorrect target")
            return target
        }
        if (target.cl.ability.indexOf("building") > -1) {
            alert("incorrect target")
            return target
        } else {
            return {
                ...target,
                cl: {
                    ...target.cl,
                    hp: target.cl.hp - 4 - 2 * Intelligence,
                    ability: target.cl.ability.concat("bashed"),
                    abilityImg: target.cl.abilityImg.concat(BTNStun)
                }
            }
        }
    }
}
export let fenix = {
    name: "fenix",
    img: BTNMarkOfFire,
    type: ["summon"],
    target: ["freePlace"],
    manacost: 80,
    bonusXP: 0,
    effect: function (target, numberOfPlayer, Intelligence) {
        if (target !== null) {
            alert("incorrect target")
            return target
        } else {
            return {
                defaultFenix,
                cl: {
                    ...defaultFenix.cl,
                    hp: defaultFenix.hp + 2 * Intelligence - 6,
                    hpMax: defaultFenix.hpMax + 2 * Intelligence - 6,
                    attack: defaultFenix.attack + 2 * Intelligence - 6,
                }
            }
        }
    }
}