function devcommands(ws, msgData, writer, randomparseInt, entities, ws_new) {

    var dataS = String(msgData);
    var initial = dataS.split(":");
    if (ws.isdeveloper == true) {
     
        if (msgData == 'ecl ') {
            var count = 0
            for (let da in entities) {
                if (entities[da].isloaded) {
                    count++
                }
            }
            console.log(count)
            ws.send(writer.chat(ws.player.id, count + " "))
        }
        if (msgData == 'ec ') {
            var count = 0
            for (let da in entities) {
                console.log(entities[da])
                count++
            }

            ws.send(writer.chat(ws.player.id, count + " "))
        }

        if (msgData == 'up ') { ws.player.xp = 0 }
        if (msgData == 'invis:off ') { ws.player.isinvisible = false }
        if (msgData == 'invis:on ') { ws.player.isinvisible = true }
        if (msgData == 'stop ') { process.exit(1); }
        if (msgData == 'godmode:on ') {
            ws.player.godmode = true
        }
        if (msgData == 'godmode:off ') {
            ws.player.godmode = false
        }
     
        switch (initial[0]) {

            case "tpall":

                for (let da in entities) {

                    if (entities[da].type == 2) {
                        var string = initial[1]

                        if (entities[da].name.includes(string)) {

                            entities[da].pos.x = ws.player.pos.x
                            entities[da].pos.y = ws.player.pos.y
                        }

                    }

                }
                break;
            case "c":

                for (let da in entities) {
                    if (entities[da].type == 2) {
                        if (entities[da].id != ws.player.id) {
                            var string = initial[1]
                            for (let bart in ws_new) {
                                if (ws_new[bart].toupdate.includes(ws.player)) {
                                    ws_new[bart].send(writer.chat(entities[da].id, string))
                                }
                            }
                        }
                    }

                }
                break
            case "cp":

                for (let da in entities) {
                    if (entities[da].type == 2) {
                        if (entities[da].id != ws.player.id) {
                            if (entities[da].name == initial[1] + " ") {
                                var string = initial[2]
                                for (let bart in ws_new) {
                                    if (ws_new[bart].toupdate.includes(ws.player)) {
                                        ws_new[bart].send(writer.chat(entities[da].id, string))
                                    }
                                }
                            }
                        }
                    }

                }
                break
            case "size":
                let m = parseInt(initial[1])
                if (m > 50) m = 500
                ws.player.moreradius = m
                break
            case "changeall":

                for (let da in entities) {

                    if (entities[da].type == 2) {
                        var string = initial[1]


                        if (entities[da].name.includes(string)) {
                            entities[da].secondaryType = parseInt(initial[2])
                            entities[da].species = parseInt(initial[3])
                            entities[da].radius = parseInt(initial[4])

                        }

                    }

                }
                break;

            case "zoom":
                ws.player.playcamera = parseInt(initial[1])
                break;
            case "tp":
                ws.player.pos.x = parseInt(initial[1])
                ws.player.pos.y = parseInt(initial[2])
                console.log('Teleported to ' + 'x:' + initial[1] + 'y:' + initial[2])
                break;

            case "color":
                ws.player.colorname = parseInt(initial[1])


                break;


            case "x":
                ws.player.xp = + parseInt(initial[1])

                break;
            case "createobj":

                var randomid = randomparseInt(200000000, 250000000)

                objtype = parseInt(initial[1])
                objrad = parseInt(initial[2])

                break;
            case "species":
                ws.player.species = parseInt(initial[1])






                break;
            case "change":

                ws.player.secondaryType = parseInt(initial[1])
                ws.player.species = parseInt(initial[2])
                ws.player.radius = parseInt(initial[3])
                break
            case "a":

                ws.player.secondaryType = parseInt(initial[1])





                break;
        }

    }
}
devcommands.prototype = {


}
module.exports = devcommands;
