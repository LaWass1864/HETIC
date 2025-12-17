// ===================================
// COURS JAVASCRIPT POUR DÉBUTANTS
// Fichier d'exercices interactifs
// ===================================

// Chapitre 1 : Introduction
function exercice1() {
    console.log("Hello, World!");
    alert("Bienvenue dans le cours JavaScript ! 🚀");
    console.log("Félicitations ! Tu as exécuté ton premier programme JavaScript.");
}

// Chapitre 2 : Variables et Types
function exercice2() {
    let prenom = "Alice";
    let age = 25;
    const PI = 3.14159;

    console.log("=== Exercice 2 : Variables ===");
    console.log("Prénom :", prenom);
    console.log("Age :", age);
    console.log("PI :", PI);

    prenom = "Bob";
    age = 30;

    console.log("Après modification :");
    console.log("Prénom :", prenom);
    console.log("Age :", age);

    // Types de données
    console.log("\nTypes de données :");
    console.log("typeof 'texte' :", typeof "texte");
    console.log("typeof 42 :", typeof 42);
    console.log("typeof true :", typeof true);
    console.log("typeof undefined :", typeof undefined);
    console.log("typeof null :", typeof null);

    alert("Vérifie la console (F12) pour voir les résultats !");
}

// Chapitre 3 : Opérateurs
function exercice3() {
    console.log("=== Exercice 3 : Opérateurs ===");

    let a = 10;
    let b = 5;

    console.log("a =", a, ", b =", b);
    console.log("\nOpérateurs arithmétiques :");
    console.log("a + b =", a + b);
    console.log("a - b =", a - b);
    console.log("a * b =", a * b);
    console.log("a / b =", a / b);
    console.log("a % b =", a % b);
    console.log("a ** b =", a ** b);

    console.log("\nOpérateurs de comparaison :");
    console.log("a == b :", a == b);
    console.log("a === b :", a === b);
    console.log("a != b :", a != b);
    console.log("a > b :", a > b);
    console.log("a < b :", a < b);

    console.log("\nOpérateurs logiques :");
    let estMajeur = true;
    let aPermis = false;
    console.log("estMajeur && aPermis :", estMajeur && aPermis);
    console.log("estMajeur || aPermis :", estMajeur || aPermis);
    console.log("!estMajeur :", !estMajeur);

    alert("Résultats affichés dans la console !");
}

// Chapitre 4 : Conditions
function exercice4() {
    console.log("=== Exercice 4 : Conditions ===");

    let age = prompt("Quel est ton âge ?");
    age = parseInt(age);

    if (age >= 18) {
        console.log("Tu es majeur !");
        alert("Tu es majeur ! ✅");
    } else {
        console.log("Tu es mineur !");
        alert("Tu es mineur ! 👶");
    }

    // Test avec des notes
    let note = Math.floor(Math.random() * 20) + 1;
    console.log("\nNote aléatoire :", note);

    let mention;
    if (note >= 16) {
        mention = "Très bien !";
    } else if (note >= 14) {
        mention = "Bien !";
    } else if (note >= 10) {
        mention = "Passable";
    } else {
        mention = "Insuffisant";
    }

    console.log("Mention :", mention);
    alert(`Note : ${note}/20 - ${mention}`);
}

// Chapitre 5 : Boucles
function exercice5() {
    console.log("=== Exercice 5 : Boucles ===");

    console.log("\nBoucle for (1 à 5) :");
    for (let i = 1; i <= 5; i++) {
        console.log("Nombre :", i);
    }

    console.log("\nBoucle while (compte à rebours) :");
    let compteur = 5;
    while (compteur > 0) {
        console.log("Compte à rebours :", compteur);
        compteur--;
    }
    console.log("Décollage ! 🚀");

    console.log("\nTable de multiplication de 5 :");
    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }

    alert("Boucles exécutées ! Regarde la console.");
}

// Chapitre 6 : Fonctions
function exercice6() {
    console.log("=== Exercice 6 : Fonctions ===");

    // Fonction simple
    function direBonjour() {
        return "Bonjour !";
    }

    // Fonction avec paramètres
    function direNom(nom) {
        return `Bonjour ${nom} !`;
    }

    // Fonction avec calcul
    function additionner(a, b) {
        return a + b;
    }

    // Fonction fléchée
    const multiplier = (a, b) => a * b;

    console.log(direBonjour());
    console.log(direNom("Alice"));
    console.log("5 + 3 =", additionner(5, 3));
    console.log("4 x 5 =", multiplier(4, 5));

    // Calculatrice interactive
    let num1 = parseFloat(prompt("Premier nombre :"));
    let num2 = parseFloat(prompt("Deuxième nombre :"));
    let operation = prompt("Opération (+, -, *, /) :");

    let resultat;
    switch(operation) {
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;
        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            resultat = num1 / num2;
            break;
        default:
            resultat = "Opération invalide";
    }

    console.log(`Résultat : ${num1} ${operation} ${num2} = ${resultat}`);
    alert(`Résultat : ${resultat}`);
}

// Chapitre 7 : Tableaux
function exercice7() {
    console.log("=== Exercice 7 : Tableaux ===");

    let fruits = ["Pomme", "Banane", "Orange", "Fraise", "Kiwi"];

    console.log("Tableau initial :", fruits);
    console.log("Nombre d'éléments :", fruits.length);
    console.log("Premier fruit :", fruits[0]);
    console.log("Dernier fruit :", fruits[fruits.length - 1]);

    // Ajouter des éléments
    fruits.push("Mangue");
    console.log("\nAprès push('Mangue') :", fruits);

    fruits.unshift("Cerise");
    console.log("Après unshift('Cerise') :", fruits);

    // Retirer des éléments
    fruits.pop();
    console.log("Après pop() :", fruits);

    fruits.shift();
    console.log("Après shift() :", fruits);

    // Parcourir le tableau
    console.log("\nParcours avec forEach :");
    fruits.forEach((fruit, index) => {
        console.log(`${index + 1}. ${fruit}`);
    });

    // Méthodes avancées
    console.log("\nFruits contenant 'an' :");
    let fruitsAvecAn = fruits.filter(fruit => fruit.toLowerCase().includes('an'));
    console.log(fruitsAvecAn);

    console.log("\nFruits en majuscules :");
    let fruitsMajuscules = fruits.map(fruit => fruit.toUpperCase());
    console.log(fruitsMajuscules);

    alert("Exercice terminé ! Regarde la console pour les détails.");
}

// Chapitre 8 : Objets
function exercice8() {
    console.log("=== Exercice 8 : Objets ===");

    let personne = {
        nom: "Dupont",
        prenom: "Jean",
        age: 30,
        ville: "Paris",
        profession: "Développeur",
        sePresenter: function() {
            return `Je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans et je suis ${this.profession}.`;
        },
        anniversaire: function() {
            this.age++;
            return `Joyeux anniversaire ! J'ai maintenant ${this.age} ans.`;
        }
    };

    console.log("Objet personne :", personne);
    console.log("\nPrésentation :");
    console.log(personne.sePresenter());

    console.log("\nAnniversaire :");
    console.log(personne.anniversaire());

    // Créer une voiture
    let voiture = {
        marque: "Renault",
        modele: "Clio",
        annee: 2020,
        couleur: "rouge",
        demarrer: function() {
            return `La ${this.marque} ${this.modele} démarre... Vroum ! 🚗`;
        }
    };

    console.log("\nObjet voiture :", voiture);
    console.log(voiture.demarrer());

    // Modifier et ajouter des propriétés
    voiture.kilometrage = 15000;
    voiture.couleur = "bleu";
    console.log("\nVoiture modifiée :", voiture);

    alert("Objets créés et manipulés ! Vérifie la console.");
}

// Chapitre 9 : Manipulation du DOM
function exercice9() {
    let texte = document.getElementById("demo-texte");

    const couleurs = ["red", "blue", "green", "purple", "orange", "pink"];
    const messages = [
        "JavaScript c'est génial ! 🎉",
        "Tu apprends vite ! 🚀",
        "Continue comme ça ! 💪",
        "Le DOM est ton ami ! 🌟",
        "Bravo champion ! 🏆"
    ];

    // Couleur aléatoire
    let couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    let messageAleatoire = messages[Math.floor(Math.random() * messages.length)];

    texte.textContent = messageAleatoire;
    texte.style.color = couleurAleatoire;
    texte.style.fontSize = "24px";
    texte.style.fontWeight = "bold";
    texte.style.transition = "all 0.3s";

    console.log("=== Exercice 9 : DOM ===");
    console.log("Texte modifié :", messageAleatoire);
    console.log("Couleur appliquée :", couleurAleatoire);
}

// Chapitre 10 : Événements
function exercice10() {
    let bouton = document.getElementById("demo-event");
    let compteurElement = document.getElementById("compteur-clics");
    let clics = 0;

    console.log("=== Exercice 10 : Événements ===");
    console.log("Gestionnaire d'événements ajouté au bouton !");

    // Retirer l'ancien gestionnaire si existe
    let nouveauBouton = bouton.cloneNode(true);
    bouton.parentNode.replaceChild(nouveauBouton, bouton);
    bouton = nouveauBouton;

    // Ajouter le nouveau gestionnaire
    bouton.addEventListener("click", function(event) {
        clics++;
        compteurElement.textContent = `Nombre de clics : ${clics}`;

        console.log(`Clic n°${clics} détecté !`);
        console.log("Élément cliqué :", event.target);
        console.log("Type d'événement :", event.type);

        // Effet visuel
        bouton.style.transform = "scale(0.95)";
        setTimeout(() => {
            bouton.style.transform = "scale(1)";
        }, 100);

        // Messages spéciaux
        if (clics === 5) {
            alert("🎉 Wow ! 5 clics ! Tu maîtrises les événements !");
        } else if (clics === 10) {
            alert("🏆 10 clics ! Expert des événements !");
            compteurElement.style.color = "gold";
            compteurElement.style.fontSize = "24px";
        }
    });

    alert("Clique plusieurs fois sur le bouton bleu !");
}

// ===================================
// PROJET FINAL : CALCULATRICE
// ===================================

let calcAffichage = "";
let calcPremierNombre = null;
let calcOperation = null;

function ajouterChiffre(chiffre) {
    calcAffichage += chiffre;
    document.getElementById("calc-display").value = calcAffichage;
}

function definirOperation(op) {
    if (calcAffichage === "") return;

    if (calcPremierNombre !== null) {
        calculer();
    }

    calcPremierNombre = parseFloat(calcAffichage);
    calcOperation = op;
    calcAffichage = "";
}

function calculer() {
    if (calcPremierNombre === null || calcAffichage === "") return;

    let deuxiemeNombre = parseFloat(calcAffichage);
    let resultat;

    switch(calcOperation) {
        case "+":
            resultat = calcPremierNombre + deuxiemeNombre;
            break;
        case "-":
            resultat = calcPremierNombre - deuxiemeNombre;
            break;
        case "*":
            resultat = calcPremierNombre * deuxiemeNombre;
            break;
        case "/":
            if (deuxiemeNombre === 0) {
                alert("Division par zéro impossible !");
                effacer();
                return;
            }
            resultat = calcPremierNombre / deuxiemeNombre;
            break;
    }

    calcAffichage = resultat.toString();
    document.getElementById("calc-display").value = calcAffichage;
    calcPremierNombre = null;
    calcOperation = null;
}

function effacer() {
    calcAffichage = "";
    calcPremierNombre = null;
    calcOperation = null;
    document.getElementById("calc-display").value = "";
}

// ===================================
// INITIALISATION
// ===================================

document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 Cours JavaScript chargé avec succès !");
    console.log("Clique sur les boutons 'Tester' pour exécuter les exercices.");
    console.log("N'oublie pas d'ouvrir la console (F12) pour voir les résultats !");

    // Smooth scroll pour la navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
