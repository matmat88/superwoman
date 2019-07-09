/*1données/variables(types): 
-scalaires: nombres, chaines(texte),booléennes
-complexes: Ittérateurs( set(ensembles), tableaux, map, générateurs), Objets(classes(propriétés, méthodes))

2Instructions:
-opérateurs (arithmétiques,5+6....)
-structures de contrôle (conditions, boucles)
-fonctions 
*/

'use strict';   // Mode strict du JavaScript

/*guillement ''/ ""/`` */
/* On utilise des guillemets doubles pour certaines chaînes de caractères car elles contiennent un
 * ou plusieurs caractères de guillemets simples.*/
let k = `jfnlfj ${f}`;
let k ="kffjj" + " " + k;

/*donnée/variable:scalaire:chaîne de texte et nombre*/
const FIRST_CONSTANT = 'Ceci est une constante !';
let firstVariable;
firstVariable = 'Bonjour tout le monde !';
var firstName;
let x = 255;
/*donnée/variable:scalaire:chaîne de texte*/
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";/*the backslash character ("\") at the end of each line to indicate that the string will continue on the next line*/

/*donnée/variable:complexe:Ittérateurs:tableaux*/
weekDays = new Array();
let weekDays = [];
let weekDays = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
weekDays[0] = 'Lundi';
weekDays[1] = 'Mardi';
weekDays[2] = 'Mercredi';
weekDays[3] = 'Jeudi';
weekDays[4] = 'Vendredi';
weekDays[5] = 'Samedi';
weekDays[6] = 'Dimanche';

/*donnée/variable:complexe:Objet:classe*/
myCar = new Object(); // syntaxe longue.=>affectation d'un objet vide à la variable.
myCar = {};// syntaxe courte.
weekDays = new Array();
today = new Date();// Création d'une instance de la classe Date.

/*donnée/variable:complexe:Objet:classe:propriété*/
myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;//syntaxe longue.
myCar = {
    brand      : 'Alfa Roméo',
    buyDate    : new Date('2013-06-20'),
    passengers : [ 'Nicolas', 'Charlotte' ],
    year       : 2012
};//syntaxe courte.
Math.E;
Math.PI;

/*donnée/variable:complexe:Objet:classe:méthodes*/
/*getDay()/getMonth()/getFullYear()/....*/
let dayNames = [];
let monthNames = [];
let today;
today.getDay();
today.getMonth();
/*La méthode getDay() renvoie un nombre servant d'indice dans le tableau dayNames.
* La méthode getMonth() renvoie un nombre servant d'indice dans le tableau monthNames.*/
myCar.buyDate.toDateString();
/*Utilisation de la méthode toDateString() des objets de la classe Date afin d'obtenir une chaîne de caractères avec une date lisible.*/
Math.abs(x);/*Returns the absolute value of a number.*/
indexOf();
substring();
charAt();'cat'.charAt(1); // returns "a"
'cat'[1]; // returns "a"


/*instruction:opérateurs arithmetique*/
montantHT++;// Identique à montantHT = montantHT + 1;
montantHT--;// Identique à montantHT = montantHT - 1;
/*instruction:opérateurs de comparaison*/
age == 30;//l'âge est égal à 30 ans ?
age >= 18;//l'âge est de 18 ans ou plus ?
age != 100;// Est-ce que l'âge est différent de 100 ans ?

/*instruction:structures de contrôle:conditions*/
// Structure de contrôle conditionnelle if simple.
if(age > 18)
{
    document.write('<p>Vous êtes majeur.</p>');
}
// Structure de contrôle conditionnelle if / else.
if(firstName == 'Elsa')
{   
    document.write("<p>Vous vous appelez Elsa.</p>");
}
else if(firstName == 'Charlotte')
{
    document.write("<p>Vous vous appelez Charlotte.</p>");
}
else
{
    document.write("<p>Vous ne vous appelez ni Elsa ni Charlotte.</p>");
}
// Structure de contrôle conditionnelle if simple avec deux comparaisons.
if((firstName == 'Tom') && (age != 40))
{
    document.write("<p>Vous vous appelez Tom et vous n'êtes pas quadra.</p>");
}
// Structure de contrôle conditionnelle avec if(isNaN()).
if(isNaN(result) == true)
{
    document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
    result = undefined;
}
// Structure de contrôle conditionnelle avec switch.
switch(operation)
{
    case '+':
    case 'addition':
    result = number1 + number2;
    break;

    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;

    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;
    
    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;
}

/*instruction:fonctions*/

/*document.write()/consol.log()*/
firstName = window.prompt('Comment vous appelez-vous ?');
document.write(FIRST_CONSTANT);
// Affichage du contenu de la variable dans un paragraphe HTML.
document.write('<p>');
document.write(firstName);
document.write('</p>');
document.write("<p>J'ai " + age + '</p>');

/*window.prompt()*/
number2 = window.prompt('Veuillez saisir un deuxième nombre :');
/*window.prompt() a renvoyé une chaîne de caractère (type String) même si on a saisi un nombre.*/

/*parseInt() et parseFloat()*/
/*Les fonctions parseInt() et parseFloat() convertissent une variable de type String en une
 * variable de type Number*/
number1 = parseInt(number1);
number1 = parseFloat(number1);

/*isNaN()*/
isNaN(result) == true;


/*Ajax*/
// cUrl()=>php et commande système(terminal)
// curl https;//3wa.fr =>récupére le code de la page
// curl_init();
// curl_setopt();
// curl_exec();
// curl_close();

/*curl() php => */fetch('https;//3wa.fr')/* javascript*/
let response = fetch('https;//3wa.fr')
.then(function(response)
{
    return response.text();
}
).then(function(content){
    console.log(content)
    let b =document.querySelector('body')
    b.innerhtml = content;
}
)