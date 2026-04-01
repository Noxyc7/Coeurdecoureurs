document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ANIMATION FADE
    // =========================
    const fades = document.querySelectorAll('.fade');

    const checkFade = () => {
        const windowHeight = window.innerHeight;
        fades.forEach(fade => {
            const top = fade.getBoundingClientRect().top;
            if (top < windowHeight - 50) {
                fade.classList.add('show');
            }
        });
    };

    checkFade();
    window.addEventListener('scroll', checkFade);


    // =========================
    // TRADUCTION
    // =========================
    const btn = document.getElementById('toggle-lang');
    let isSpanish = false;

    const translations = {
        "Accueil": "Inicio",
        "Projet": "Proyecto",
        "Équipe": "Equipo",
        "Événements": "Eventos",
        "Témoignages": "Testimonios",
        "Le sport pour tous, courir pour quelqu'un d'autre": "El deporte para todos, correr por alguien más",
        "Nos publications Instagram": "Nuestras publicaciones de Instagram",
        "Présentation de l'association": "Presentación de la asociación",
        "Objectifs de l'association": "Objetivos de la asociación",
        "Enrichis de notre expérience aux championnats du monde de Joëlette 2024 et 2025, nous avons décidé de poursuivre cette aventure en 2026.":
        "Tras nuestra experiencia en los campeonatos del mundo de Joëlette 2024 y 2025, decidimos continuar esta aventura en 2026.",
        "Nous sommes un groupe d'adolescents et de jeunes adultes, formés pour la plupart au club Lavaur Athlétisme, et avons créé l'association CŒUR DE COUREURS afin de développer des projets sportifs solidaires et inclusifs.":
        "Somos un grupo de adolescentes y jóvenes adultos, formados en su mayoría en el club Lavaur Athlétisme, y hemos creado la asociación CŒUR DE COUREURS para desarrollar proyectos deportivos solidarios e inclusivos.",
        "Notre objectif : permettre à des personnes en situation de handicap de vivre des expériences sportives qui leur sont souvent inaccessibles.":
        "Nuestro objetivo: permitir a las personas con discapacidad vivir experiencias deportivas que a menudo son inaccesibles para ellas.",
        "Promouvoir l'inclusion et le dépassement de soi": "Promover la inclusión y la superación personal",
        "Créer une expérience sportive et solidaire": "Crear una experiencia deportiva y solidaria",
        "Sensibiliser le public aux enjeux du handicap": "Sensibilizar al público sobre la discapacidad",
        "Favoriser les rencontres entre valides et personnes handicapées": "Fomentar el encuentro entre personas con y sin discapacidad",
        "Présentation du projet": "Presentación del proyecto",
        "Historique": "Historia",
        "Objectifs du projet": "Objetivos del proyecto",
        "Sportifs": "Deportivos",
        "Humains": "Humanos",
        "La Joëlette est un fauteuil mono-roue tout-terrain permettant à une personne en situation de handicap de participer à une course à pied, portée et guidée par plusieurs coureurs.":
        "La Joëlette es una silla todoterreno de una sola rueda que permite a una persona con discapacidad participar en una carrera, guiada por varios corredores.",
        "Chaque équipe est composée de plusieurs athlètes qui se relaient pour pousser, tirer et stabiliser la joëlette.":
        "Cada equipo está compuesto por varios atletas que se turnan para empujar, tirar y estabilizar la joëlette.",
        "Valeurs incarnées : solidarité, esprit d'équipe, respect de la différence, dépassement de soi, engagement collectif.":
        "Valores: solidaridad, espíritu de equipo, respeto por la diferencia, superación personal, compromiso colectivo.",
        "Participer au championnat du monde de Joëlette 2026": "Participar en el campeonato mundial de Joëlette 2026",
        "Former une équipe soudée et engagée": "Formar un equipo unido y comprometido",
        "Représenter le sport amateur et la jeunesse": "Representar el deporte amateur y la juventud",
        "Les participants valides": "Participantes sin discapacidad",
        "Participants en situation de handicap": "Participantes con discapacidad",
        "Les coureurs en situation de handicap seront désignés par l'organisation du championnat.":
        "Los corredores con discapacidad serán designados por la organización del campeonato.",
        "Événements 2026": "Eventos 2026",
        "Notre prochaine participation : Championnat du monde de Joëlette le 16 mai 2026 à Châtelaillon-Plage (Charente-Maritime).":
        "Nuestra próxima participación: Campeonato mundial de Joëlette el 16 de mayo de 2026 en Châtelaillon-Plage (Charente-Maritime).",
        "Nous participons également à des courses solidaires et des actions sport et handicap tout au long de l'année.":
        "También participamos en carreras solidarias y acciones deportivas inclusivas durante todo el año.",
        "Grâce à la joëlette, j'ai pu participer à ma première course et partager un moment unique.":
        "Gracias a la joëlette, pude participar en mi primera carrera y vivir un momento único.",
        "Une aventure humaine et sportive exceptionnelle qui a rapproché toutes les équipes.":
        "Una aventura humana y deportiva excepcional que unió a todos los equipos.",
        "Participer à la course en joëlette m’a permis de mieux comprendre l’importance de l’inclusion.":
        "Participar en la carrera en joëlette me permitió comprender mejor la importancia de la inclusión.",
        "Première participation au Championnat du monde de Joëlette":
        "Primera participación en el Campeonato Mundial de Joëlette",
        "Deuxième participation, groupe élargi":
        "Segunda participación, grupo ampliado",
        "Création officielle de l'association Cœur de Coureurs et participation prévue au championnat":
        "Creación oficial de la asociación Corazón de Corredores y participación prevista en el campeonato",
        "Grâce à la joëlette, j'ai pu participer à ma première course et partager un moment unique.":
        "Gracias a la joëlette, pude participar en mi primera carrera y compartir un momento único.",
        "Participer à la course en joëlette m’a permis de mieux comprendre l’importance de l’inclusion.":
        "Participar en la carrera en joëlette me permitió comprender mejor la importancia de la inclusión.",
        "- Participant 2024":
        "- Participante 2024",
        "- Participant 2025":
        "- Participante 2025",
        "- Participant (coureur) 2025":
        "- Participante (corredor) 2025",
        "Grâce à la joëlette, j’ai retrouvé des sensations que je pensais perdues. Sentir le vent, entendre les encouragements… c’est une liberté incroyable.":
        "Gracias a la joëlette, he recuperado sensaciones que creía perdidas. Sentir el viento, escuchar los ánimos… es una libertad increíble.",
        "Ce n’est pas seulement une course, c’est une aventure humaine. Je ne me sens pas porté, je me sens inclus.":
        "No es solo una carrera, es una aventura humana. No me siento llevado, me siento incluido.",
        "L'affiche représentative du sport":
        "El cartel representativo del deporte"

    };

    // =========================
    // SAUVEGARDE TEXTE FR
    // =========================
    const elements = document.querySelectorAll('h1, h2, h3, p, li, nav a, footer, blockquote p, blockquote footer');

    elements.forEach(el => {
        el.setAttribute('data-fr', el.textContent.trim());
    });

  // =========================
    // IMAGE AFFICHE
    // =========================
    const poster = document.getElementById('poster');
    const imgFR = 'affiche_fr.png'; // image française
    const imgES = 'affiche_es.png'; // image espagnole

    // =========================
    // AUDIO
    // =========================
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const audioFR = 'audio_fr.mp3';
    const audioES = 'audio_es.mp3';

   // =========================
    // CHARGER LANGUE ET IMAGE/AUDIO SAUVEGARDÉES
    // =========================
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "es") {
        isSpanish = true;
        btn.textContent = "Français";

        elements.forEach(el => {
            const text = el.getAttribute('data-fr');
            if (translations[text]) el.textContent = translations[text];
        });

        if (poster) poster.src = imgES;
        if (audioSource) {
            audioSource.src = audioES;
            audioPlayer.load();
        }
    } else {
        if (poster) poster.src = imgFR;
        if (audioSource) {
            audioSource.src = audioFR;
            audioPlayer.load();
        }
    }

    // =========================
    // BOUTON LANGUE + IMAGE + AUDIO
    // =========================
    btn.addEventListener('click', () => {
        isSpanish = !isSpanish;

        // Sauvegarde
        localStorage.setItem("lang", isSpanish ? "es" : "fr");

        // Texte du bouton
        btn.textContent = isSpanish ? "Français" : "Español";

        // Traduction texte
        elements.forEach(el => {
            if (isSpanish) {
                const text = el.getAttribute('data-fr');
                if (translations[text]) el.textContent = translations[text];
            } else {
                const original = el.getAttribute('data-fr');
                if (original) el.textContent = original;
            }
        });

        // Changer image
        if (poster) poster.src = isSpanish ? imgES : imgFR;

        // Changer audio
        if (audioSource) {
            audioSource.src = isSpanish ? audioES : audioFR;
            audioPlayer.load();
            // audioPlayer.play(); // facultatif : lance automatiquement
        }
    });

});