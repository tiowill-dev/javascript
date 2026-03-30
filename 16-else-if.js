/* CONTROLE DE FLUXO -CONDICIONAIS IF/ELSE

if = SE
else = SE NAO
else if = MAS SE... 

*/

const temperatura = 33

if(temperatura >=36 && temperatura <=37){console.log("esta saudavel")}

else if(temperatura >=38){console.log('esta com febre')} //if else adiciona mais alternativa ao codigo
else if(temperatura >=35){console.log('esta com baixa temperatura')}
else { console.log('hipotermia procure um medico') }