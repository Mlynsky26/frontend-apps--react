const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}                   // tablica z obiektami 

fs.readFile('generator/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    const colors = [
        'blue',
        'brown',
        'green',
        'gray',
        'yellow'
    ]

    let content = "export const data = [\n";
    for (let i = 0; i < count; i++) {
        //losowanie imienia z bilioteki imion
        let obj = '{\n\t'
        obj += `id: "${i + 1}",\n\t`;
        obj += `name: "${names[~~((Math.random() * names.length) / 1)]}",\n\t`;
        obj += `eyeColor: "${colors[~~((Math.random() * colors.length) / 1)]}",\n\t`;
        obj += `birthDate: "${randomDate(new Date(1970, 0, 1), new Date(2005, 11, 31)).toLocaleDateString("en-GB")}"\n`;
        obj += '},\n'

        content += obj
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('src/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});