# Site Web Synagogue V2

Mise à jour majeure du site de la synagogue Menuchat Shalom.

## Nouveautés
- **Multilingue Entier** : Support complet pour l'Hébreu (par défaut), Français et Anglais.
- **Support RTL** : L'interface s'adapte automatiquement de la droite vers la gauche (RTL) pour l'hébreu.
- **Date Hébraïque Authentique** : Affichage des dates avec lettres hébraïques (Gematria) comme demandé (ex: כ"א טבת תשפ"ו).
- **Design Adapté** : Intégration du logo et palette de couleurs ajustée (Or & Gris Foncé sur fond clair/prestigieux).
- **Contenu Modulable** : Les textes sont gérés via un système de traduction simple en Javascript.

## Structure
- `index.html` : Structure principale avec marqueurs `data-i18n` pour la traduction.
- `style.css` : Styles modernes avec support RTL et variables de couleurs.
- `script.js` : Logique de date Gematria et gestionnaire de langues.

## Pour tester
1. Ouvrez `index.html`.
2. Le site se charge en Hébreu.
3. Cliquez sur "FR" en haut à droite pour passer en Français.
4. Observez le changement de direction (LTR) et la traduction des textes.
