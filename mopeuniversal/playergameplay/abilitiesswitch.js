const game1 = require("../game");

const game = new game1()
function abilitiesswitcher(ability) {

    var button = {


        abil_currentclick: 0,
        abil_Type: 0,
        abil_usable: false,
        abil_recharging: false,
        abil_possible: false,
        abil_active: false,
        abil_time: 0,
        abil_timestamp: Date.now(),
        abil_noflags: [],
        abil_bardivideusable: 1,

    }
    switch (ability) {

        case 100://dive
            button = {

                abil_currentclick: 0,
                abil_Type: 100,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 3,

                abil_timestamp: Date.now(),
                abil_noflags: [20, 9, 11, 12, 19],
            }
            break
        case 81://bigfoot spear
            button = {
                abil_currentclick: 0,
                abil_Type: 81,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 7,//7
                abil_firesectime: 30,//30
                abil_lastsecfireuse: 0,//last used fire
                abil_timestamptouch: Date.now(),
                abil_timestamp: Date.now(),
                abil_noflags: [20, 9, 11, 12],
                abil_bardivideusable: 1,
            }
            break
        case 253://fly high
            button = {

                abil_currentclick: 0,
                abil_Type: 253,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 0,
                abil_timestamp: Date.now(),
                abil_noflags: [],
                abil_bardivideusable: 1,
            }
            break
        case 80://pterodactyl grab
            button = {

                abil_currentclick: 0,
                abil_Type: 80,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 10,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 9, 11, 12],
                abil_bardivideusable: 2.5,
            }
            break
        case 30://fire
            button = {

                abil_currentclick: 0,
                abil_Type: 30,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }

            break
        case 19://fire
            button = {

                abil_currentclick: 0,
                abil_Type: 19,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }

            break
        case 77://dino charge
            button = {

                abil_currentclick: 0,
                abil_Type: 77,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 10,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 63:// sea spec
            button = {

                abil_currentclick: 0,
                abil_Type: 63,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 8,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 0, 2, 3, 19],
                abil_bardivideusable: 1,
            }
            break
        case 66://sink hole
            button = {

                abil_currentclick: 0,
                abil_Type: 66,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 7,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 4,
            }
            break
        case 5://kraken spec
            button = {

                abil_currentclick: 0,
                abil_Type: 5,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 7,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 51://crab smash
            button = {

                abil_timestamplet: 0,
                abil_currentclick: 0,
                abil_Type: 51,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 9, 19],
                abil_bardivideusable: 1,
            }
            break
        case 32://blue whale abil
            button = {

                abil_currentclick: 0,
                abil_Type: 32,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 17://elephant abil
            button = {

                abil_currentclick: 0,
                abil_Type: 17,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 31://elephant abil
            button = {

                abil_currentclick: 0,
                abil_Type: 31,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 11://yeti freeze
            button = {

                abil_currentclick: 0,
                abil_Type: 11,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 10,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 9, 19],
                abil_bardivideusable: 1,
            }
            break
        case 57://falcon attack
            button = {

                abil_currentclick: 0,
                abil_Type: 57,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 15,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 35://spider web
            button = {

                abil_currentclick: 0,
                abil_Type: 35,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 10,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 79://scorpion sting
            button = {

                abil_currentclick: 0,
                abil_Type: 79,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 7,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 19],
                abil_bardivideusable: 1,
            }
            break
        case 78:// thunderbird attack
            button = {

                abil_currentclick: 0,
                abil_Type: 78,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 10,
                abil_timestamp: Date.now(),
                abil_noflags: [20],
                abil_bardivideusable: 1,
            }
            break
        case 61:// fire tornado
            button = {

                abil_currentclick: 0,
                abil_Type: 61,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 13,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 11, 1],
                abil_bardivideusable: 4,
            }
            break
        case 76://icemonster abil
            button = {

                abil_currentclick: 0,
                abil_Type: 76,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 12, 25, 9, 19],
                abil_bardivideusable: 1,
            }
            break
        case 37://trex bite
            button = {

                abil_currentclick: 0,
                abil_Type: 37,
                abil_usable: true,
                abil_recharging: false,
                abil_possible: true,
                abil_active: false,
                abil_time: 1,
                abil_timestamp: Date.now(),
                abil_noflags: [20, 9, 19],
                abil_bardivideusable: 1,
            }

            break
    }
    if (game.load(9) == true) button.abil_time = 0.1
    return button
}
abilitiesswitcher.prototype = {}
module.exports = abilitiesswitcher
