document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des animations et éléments
    createLightRays();
    createChloroplasts();

    // Ajout des écouteurs d'événements pour les boutons
    document.getElementById('phase1-btn').addEventListener('click', phase1Animation);
    document.getElementById('phase2-btn').addEventListener('click', phase2Animation);
    document.getElementById('phase3-btn').addEventListener('click', phase3Animation);
    document.getElementById('all-phases-btn').addEventListener('click', fullAnimation);

    // Lancer l'animation complète par défaut
    fullAnimation();
});

// Création des rayons de lumière partant du soleil
function createLightRays() {
    const container = document.getElementById('animation-container');
    const sun = document.querySelector('.sun');
    const sunRect = sun.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        // Positionner le rayon au centre du soleil
        ray.style.left = (sunRect.left - containerRect.left + 40) + 'px';
        ray.style.top = (sunRect.top - containerRect.top + 40) + 'px';
        ray.style.transform = `rotate(${i * 15}deg)`;
        ray.style.transformOrigin = '0 0';
        ray.style.animationDelay = `${i * 0.2}s`;
        container.appendChild(ray);
    }
}

// Création des chloroplastes sur les feuilles
function createChloroplasts() {
    const container = document.getElementById('animation-container');
    const leaves = document.querySelectorAll('.leaf');

    leaves.forEach(leaf => {
        const leafRect = leaf.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        for (let i = 0; i < 5; i++) {
            const chloroplast = document.createElement('div');
            chloroplast.className = 'chloroplast';
            chloroplast.style.left = (leafRect.left - containerRect.left + Math.random() * 60 + 10) + 'px';
            chloroplast.style.top = (leafRect.top - containerRect.top + Math.random() * 20 + 10) + 'px';
            container.appendChild(chloroplast);
        }
    });
}

// Réinitialisation de l'animation : désactivation des animations en cours
function resetAnimation() {
    const sun = document.querySelector('.sun');
    sun.style.animation = "none";
    setTimeout(() => { sun.style.animation = ""; }, 10);

    const elements = document.querySelectorAll('.light-ray, .molecule, .chloroplast');
    elements.forEach(element => {
        element.style.display = 'none';
        element.style.animation = "none";
        element.style.opacity = "0";
    });
}

// Mise à jour du panneau d'information
function updateInfoPanel(text) {
    document.getElementById('info-panel').textContent = text;
}

// Mise à jour du titre de la phase
function updatePhaseTitle(text) {
    document.getElementById('phase-title').textContent = text;
}

// Animation de la phase 1 : Absorption de la lumière
function phase1Animation() {
    resetAnimation();
    updateInfoPanel("Phase 1 : Les feuilles absorbent la lumière grâce à la chlorophylle.");
    updatePhaseTitle("Phase 1 : Absorption de la lumière");

    const sun = document.querySelector('.sun');
    sun.style.animation = "sunshine 2s infinite alternate";

    const lightRays = document.querySelectorAll('.light-ray');
    lightRays.forEach(ray => {
        ray.style.display = 'block';
        ray.style.animation = "lightMovement 2s infinite";
    });

    const chloroplasts = document.querySelectorAll('.chloroplast');
    chloroplasts.forEach(chloroplast => {
        chloroplast.style.opacity = "1";
        chloroplast.style.animation = "blink 1s infinite alternate";
    });
}

// Animation de la phase 2 : Phase claire (réactions photochimiques)
function phase2Animation() {
    resetAnimation();
    updateInfoPanel("Phase 2 : L'énergie lumineuse est convertie en énergie chimique. L'eau (H₂O) est décomposée, libérant de l'oxygène (O₂).");
    updatePhaseTitle("Phase 2 : Phase claire (Réactions photochimiques)");

    const sun = document.querySelector('.sun');
    sun.style.animation = "sunshine 2s infinite alternate";

    const lightRays = document.querySelectorAll('.light-ray');
    lightRays.forEach(ray => {
        ray.style.display = 'block';
        ray.style.animation = "lightMovement 2s infinite";
    });

    const chloroplasts = document.querySelectorAll('.chloroplast');
    chloroplasts.forEach(chloroplast => {
        chloroplast.style.opacity = "1";
    });

    const waterMolecules = document.querySelectorAll('.water');
    waterMolecules.forEach(water => {
        water.style.display = 'block';
        water.style.animation = "waterMovement 8s infinite";
    });

    const oxygenMolecules = document.querySelectorAll('.oxygen');
    oxygenMolecules.forEach(oxygen => {
        oxygen.style.display = 'block';
        oxygen.style.animation = "oxygenMovement 8s infinite";
    });
}

// Animation de la phase 3 : Cycle de Calvin (phase sombre)
function phase3Animation() {
    resetAnimation();
    updateInfoPanel("Phase 3 : Le CO₂ est fixé et transformé en glucose (sucre) grâce à l'énergie stockée.");
    updatePhaseTitle("Phase 3 : Cycle de Calvin (Phase sombre)");

    const chloroplasts = document.querySelectorAll('.chloroplast');
    chloroplasts.forEach(chloroplast => {
        chloroplast.style.opacity = "1";
    });

    const co2Molecules = document.querySelectorAll('.co2');
    co2Molecules.forEach(co2 => {
        co2.style.display = 'block';
        co2.style.animation = "co2Movement 8s infinite";
    });

    const glucoseMolecules = document.querySelectorAll('.glucose');
    glucoseMolecules.forEach(glucose => {
        glucose.style.display = 'block';
        glucose.style.animation = "glucoseMovement 8s infinite";
    });
}

// Animation complète : toutes les phases de la photosynthèse
function fullAnimation() {
    resetAnimation();
    updateInfoPanel("La photosynthèse complète : Les plantes captent la lumière du soleil, absorbent l'eau et le CO₂, puis produisent de l'oxygène et du glucose.");
    updatePhaseTitle("Toutes les phases");

    const sun = document.querySelector('.sun');
    sun.style.animation = "sunshine 2s infinite alternate";

    const lightRays = document.querySelectorAll('.light-ray');
    lightRays.forEach(ray => {
        ray.style.display = 'block';
        ray.style.animation = "lightMovement 2s infinite";
    });

    const chloroplasts = document.querySelectorAll('.chloroplast');
    chloroplasts.forEach(chloroplast => {
        chloroplast.style.opacity = "1";
        chloroplast.style.animation = "blink 1s infinite alternate";
    });

    const waterMolecules = document.querySelectorAll('.water');
    waterMolecules.forEach(water => {
        water.style.display = 'block';
        water.style.animation = "waterMovement 8s infinite";
    });

    const oxygenMolecules = document.querySelectorAll('.oxygen');
    oxygenMolecules.forEach(oxygen => {
        oxygen.style.display = 'block';
        oxygen.style.animation = "oxygenMovement 8s infinite";
    });

    const co2Molecules = document.querySelectorAll('.co2');
    co2Molecules.forEach(co2 => {
        co2.style.display = 'block';
        co2.style.animation = "co2Movement 8s infinite";
    });

    const glucoseMolecules = document.querySelectorAll('.glucose');
    glucoseMolecules.forEach(glucose => {
        glucose.style.display = 'block';
        glucose.style.animation = "glucoseMovement 8s infinite";
    });
}
