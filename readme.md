##comand

pwd -visar aktiv mapp
ls- listar alla filer i mappen
ll- visar även dolda mappar
cd -byt mapp


#node

för att initiera ett nytt node projekt kör jag "nmp init -y" i en mapp
detta skapar en package.json fil.

bash
mkdir serverprojekt
cd serverprojekt
nmp init -y

för node instalerar vi express och nodemon
för att avsluta en fil som körs med nodemon tryck "contl + c"


vi skapar även en gitignore fil med komandor "echo node_modules > .gitignore"
för att ignorera node_moules mappennär vi pushar till github


EXPRESS


Skapade en express server med lite start kod .
-----------
-----------
import express from "express"

const app = express()
app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello World')
    console.log(res)
})
app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})
------------
------------
För att skicka statiska filer så andvänder en mapp som hetter public. i mappen lägger vi filer som vi vill skicka.
test.html och länkade en css


## Nunjucks
------------
------------
idex.njk andvänder jag som html

i packag.json så måste man lägga till vilka typer nodemon kan läsa annars funkar de inte att länka till andra njk

en index njk som har en simpel sida skriven i html som andvänder en layout. sen länka jag index till om njk som jga skapat med en länk.

kopierar inehållet så att layouten funkar på om filen

för att de ska funka att länka och rendera om filen måste jag göra en ny 

app.get('/om', (req, res) => {
    res.render("om.njk", {
        message: "det är om!", 
        title: "om",
    })
})
för att den ska visas
---------
---------
##