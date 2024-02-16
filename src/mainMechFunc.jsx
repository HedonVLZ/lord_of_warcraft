import React from 'react';
import footmanImg from './pictures/BTNFootman.webp';
import Reflect from './pictures/BTNDefend.png';
import BTNPeasant from './pictures/BTNPeasant.webp';
import BTNHeroPaladin from './pictures/BTNHeroPaladin.webp';
import BTNGryphonRider from './pictures/BTNGryphonRider.webp';
import BTNMilitia from './pictures/BTNMilitia.webp';
import BTNDivineIntervention from './pictures/BTNDivineIntervention.webp';
import BTNGuardTower from './pictures/BTNGuardTower.webp';
import BTNGatherGold from './pictures/BTNGatherGold.webp';
import BTNBacktoWork from './pictures/BTNBacktoWork.webp';
import BTNArcaniteArchitecture from './pictures/BTNArcaniteArchitecture.webp';
import BTNDevotion from './pictures/BTNDevotion.webp';
import PASBTNBash from './pictures/PASBTNBash.webp';
import BTNAlbatross from './pictures/BTNAlbatross.webp';
import BTNGhoul from './pictures/BTNGhoul.webp';
import BTNSkeletalLongevity from './pictures/BTNSkeletalLongevity.webp';
import BTNCannibalize from './pictures/BTNCannibalize.webp';
import BTNAcolyte from './pictures/BTNAcolyte.webp';
import BTNCallToArms from './pictures/BTNCallToArms.webp';
import BTNDalaranMutant from './pictures/BTNDalaranMutant.webp';
import BTNBansheeRanger from './pictures/BTNBansheeRanger.webp';
import BTNMarksmanship from './pictures/BTNMarksmanship.webp';
import BTNAbomination from './pictures/BTNAbomination.webp';
import PASBTNPlagueCloud from './pictures/PASBTNPlagueCloud.webp';
import BTNFrostWyrm from './pictures/BTNFrostWyrm.webp';
import BTNBreathOfFrost from './pictures/BTNBreathOfFrost.webp';
import BTNHeroDreadLord from './pictures/BTNHeroDreadLord.webp';
import BTNVampiricAura from './pictures/BTNVampiricAura.webp';
import PASBTNMagicalSentry from './pictures/PASBTNMagicalSentry.webp';
import BTNGreenDragonRoost from './pictures/BTNGreenDragonRoost.webp';
import NightHunter from './pictures/bala-skill-4.png';
import BTNCryptFiend from './pictures/BTNCryptFiend.webp';
import BTNWebOff from './pictures/BTNWebOff.webp';
import BTNCryptFiendUnBurrow from './pictures/BTNCryptFiendUnBurrow.webp';
import anubarak from './pictures/anubarak.jpg';
import Wc3PASBTNThornShield from './pictures/Wc3PASBTNThornShield.png';
import BTNUnholyAura from './pictures/BTNUnholyAura.webp';
import BTNHeroDeathKnight from './pictures/BTNHeroDeathKnight.webp';
import BTNAnimateDead from './pictures/BTNAnimateDead.webp';
import BTNMagicImmunity from './pictures/BTNMagicImmunity.webp';
import BTNBloodElfPeasant from './pictures/BTNBloodElfPeasant.webp';
import BTNDragonHawk from './pictures/BTNDragonHawk.webp';
import BTNHighElvenArcher from './pictures/BTNHighElvenArcher.webp';
import BTNSpellBreaker from './pictures/BTNSpellBreaker.webp';
import BTNPriest from './pictures/BTNPriest.webp';
import Legion_Commander from './pictures/Legion_Commander.jpg';
import Moment_of_Courage from './pictures/Moment_of_Courage.jpg';
import BTNSlowOff from './pictures/BTNSlowOff.webp';
import BTNHealOff from './pictures/BTNHealOff.webp';
import BTNSorceress from './pictures/BTNSorceress.webp';
import BTNSheep from './pictures/BTNSheep.webp';
import Feedback from './pictures/Feedback.png';
import windRunner from './pictures/winda.png';
import ShackleShot from './pictures/vinda_1.jpg';
import PowerShot from './pictures/vinda_2.jpg';
import BTNPeon from './pictures/BTNPeon.webp';
import PASBTNPillage from './pictures/PASBTNPillage.webp';
import BTNRaider from './pictures/BTNRaider.webp';
import BTNEnsnare from './pictures/BTNEnsnare.webp';
import BTNWyvernRider from './pictures/BTNWyvernRider.webp';
import BTNEnvenomedSpear from './pictures/BTNEnvenomedSpear.webp';
import BTNGrunt from './pictures/BTNGrunt.webp';
import BTNKotoBeast from './pictures/BTNKotoBeast.webp';
import PASBTNDrum from './pictures/PASBTNDrum.webp';
import BTNDevour from './pictures/BTNDevour.webp';
import NaturalOrder from './pictures/Natural_Order.jpg';
import BTNHeroTaurenChieftain from './pictures/BTNHeroTaurenChieftain.webp';
import BTNCriticalStrike from './pictures/BTNCriticalStrike.webp';
import BTNHeroBlademaster from './pictures/BTNHeroBlademaster.webp';
import BTNSkeletonWarrior from './pictures/BTNSkeletonWarrior.webp';
import BTNSkeletonMage from './pictures/BTNSkeletonMage.webp';
import SkeletonKing from './pictures/Skeleton_King.gif';
import CriticalStrike from './pictures/Critical_Strike.jpg';
import fenixImg from './pictures/fenix.jpg';
import { set } from 'lodash';



export function findTargetCoordinates(cells, i , j) {
    let targetsCoordinates = []
    if (cells[i][j].player === 1) {
        targetsCoordinates = [2, 3]
    } else {
        targetsCoordinates = [1, 0]
    }
    targetsCoordinates.forEach((item, index) => {
        if (!cells(item, j)) {
            targetsCoordinates.splice(index, 1)
        } else {
            if (cells(item, j).cl.visible === false) {
                targetsCoordinates.splice(index, 1)
            } else {
                if (cells(item, j).cl.flying === false && cells(i, j).cl.rangeOfAttack !== "range") {
                    targetsCoordinates.splice(index, 1)
                }
            }
        }
    })
    return targetsCoordinates
}







// // export function makeFlyingAbility(cells, i , j, player1, player2) {
// //     if (attacker.cl.rangeOfAttack === "melee") {
// //         let newTargets = attacker.cl.targets
// //         newTargets.splice(0, 1)
// //         setCurrentAttacker({
// //              ...currentAttacker.cl,
// //              targets: newTargets,
// //         })
// //     }
// // }

// export function makeWorkerAbility(cells, i , j, player1, player2) {
//     const [currentPlayer1, setCurrentPlayer1] = React.useState(player1)
//     const [currentPlayer2, setCurrentPlayer2] = React.useState(player2)
//     if (cells[i, j].player === 1) {
//         setCurrentPlayer1({
//             ...currentPlayer1,
//             gold: gold + 3,
//         })
//     } else {
//         setCurrentPlayer2({
//             ...currentPlayer2,
//             gold: gold + 3,
//         })
//     }
// }

// export function makeReflectAbility(cells, i , j, player1, player2) {
//     const [currentAttacker, setCurrentAttacker] = React.useState(attacker)
//     if (attacker.cl.rangeOfAttack === "range") {
//         if (Math.round(Math.random()) === 1) {
//             alert("defender have reflected damage!")
//             setCurrentAttacker({
//                 ...currentAttacker,
//                 attackAbility: false,
//             })
//         }
//     }
// }

// export function makeBashedEffect(cells, i , j, player1, player2) {
//     const [currentUnit, setCurrentUnit] = React.useState(cells[i, j])
//     setCurrentUnit({
//         ...currentUnit.cl,
//         attackAbility: false,
//     })
// }

// export function makeMilitiaAbility(cells, i , j, player1, player2) {
//     const [currentUnit, setCurrentUnit] = React.useState(cells[i, j])
//     if (attacker) {
//         setCurrentUnit({
//             ...currentUnit.cl,
//             img: BTNMilitia,
//             name: "Militia",
//             attack: currentUnit.cl.attack + 1,
//             armor: currentUnit.cl.armor + 1,
//             abilityImg: currentUnit.cl.abilityImg.filter(a => a !== BTNCallToArms).filter(a => a !== BTNGatherGold).concat(BTNBacktoWork),
//             ability: currentUnit.cl.ability.filter(a => a !== "militia").filter(a => a !== "worker").concat("backToWork"),
//         })
//     }
// }

// export function makeBackToWorkAbility(cells, i , j, player1, player2) {
//     const [currentUnit, setCurrentUnit] = React.useState(unit)
//     if (!attacker) {
//         setCurrentUnit({
//             ...currentUnit.cl,
//             img: BTNPeasant,
//             name: "Peasant",
//             attack: currentUnit.cl.attack - 1,
//             armor: currentUnit.cl.armor - 1,
//             abilityImg: currentUnit.cl.abilityImg.filter(a => a !== BTNBacktoWork).concat(BTNGatherGold, BTNCallToArms),
//             ability: currentUnit.cl.ability.filter(a => a !== "backToWork").concat("worker", "militia"),
//         })
//     }
// }

// export function makeBashAbility(cells, i , j, player1, player2) {
//     const [currentTarget, setCurrentTarget] = React.useState(target)
//     if (currentTarget.cl.kind !== "building") {
//         if (Math.round(Math.random() * 0.625 + 0.375) === 0) {
//             alert(unit.cl.name + " have bashed " + target.cl.name + "!")
//             setCurrentTarget({
//                 ...currentTarget.cl,
//                 abilityImg: currentTarget.cl.abilityImg.concat(BTNStun),
//                 ability: currentTarget.cl.ability.concat(makeMilitiaAbility(unit, attacker, defender, target, player1, player2))
//             })
//         }
//     }
// }

// export function makeTrueSeenEffect(cells, i , j, player1, player2) {
//     const [currentCells, setCurrentCells] = React.useState(cells)
//     let newCells = cells
//     newCells.forEach(currentUnit => {if (unit.player === 1) {
//         if (currentUnit.player === 2) {currentUnit.visible = true}
//     } else {
//         if (currentUnit.player === 1) {currentUnit.visible = true}
//     }})
//     setCurrentCells({
//         ...newCells,
//     })
// }

export function reduceAbilityTime(cells) {
    let newCells = cells
    newCells.forEach(row => {
        row.forEach(unit => {
            if (unit) {
                unit.cl.abilityTime.forEach((time, index) => {
                    if (typeof(time) === "number") {
                        if (time > 0) {
                            unit.cl.abilityTime[index] = unit.cl.abilityTime[index] - 1
                        } else {
                            unit.cl.abilityTime.splice(index, 1)
                            unit.cl.ability.splice(index, 1)
                            unit.cl.abilityImg.splice(index, 1)
                        }
                    }
                })
            }
        })
    })
    return newCells
}

// function cleanCurrentEffect(unit) {
//     let currentUnit = unit
//     if (currentUnit) {
//         if (currentUnit.cl.ability.indexOf("bashed") > -1) {
//             currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "bashed")
//         }
//         if (currentUnit.cl.ability.indexOf("bashedForTheNextTurn") > -1) {
//             currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNStun)
//             currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "bashedForTheNextTurn").concat("bashed")
//         }
//         if (currentUnit.cl.ability.indexOf("cooling") > -1) {
//             currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNFrost)
//             currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "cooling")
//         }
//         if (currentUnit.cl.ability.indexOf("MomentOfCourageActive") > -1) {
//             currentUnit.cl.attackSpeed = currentUnit.cl.attackSpeed - 1
//             currentUnit.cl.ability = currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "MomentOfCourageActive")
//         }
//         if (currentUnit.cl.ability.indexOf("MomentOfCourageActivatedForNextTurn") > -1) {
//             currentUnit.cl.attackSpeed = currentUnit.cl.attackSpeed + 1
//             currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "MomentOfCourageActivatedForNextTurn").concat("MomentOfCourageActive")
//         }
//         if (currentUnit.cl.ability.indexOf("marksmanActive") > -1) {
//             currentUnit.cl.attack = currentUnit.cl.attack - 1
//             currentUnit.cl.attackSpeed = currentUnit.cl.attackSpeed - 1
//             currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "marksmanActive").concat("marksman")
//         }
//         if (currentUnit.cl.ability.indexOf("burrow") > -1 && currentUnit.cl.hp >= currentUnit.cl.hpMax) {
//             currentUnit.cl.attackSpeed = 1
//             currentUnit.cl.attack = 4
//             currentUnit.cl.ability = unit.cl.ability.filter(a => a !== ["burrow", "invisible"]).concat("UnBurrow")
//             currentUnit.cl.abilityImg = unit.cl.abilityImg.filter(a => a !== BTNCryptFiendBurrow).concat(BTNCryptFiendUnBurrow)
//         }
//         if (currentUnit.cl.ability.indexOf("BorrowedTimeActive") > -1 && currentUnit.cl.hp > 3) {
//             currentUnit.cl.ability = unit.cl.ability.filter(a => a !== "BorrowedTimeActive").concat("BorrowedTime")
//         }
//     }
//     unit = currentUnit
//     return unit
// }