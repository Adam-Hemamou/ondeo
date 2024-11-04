export function scrollToSectionCal(): void {
  const screenWidth: number = window.innerWidth;
  const targetElement: HTMLElement | null =
    document.getElementById('calendly-section');
  const footerElement: HTMLElement | null =
    document.getElementById('footer-section'); // Récupère l'élément footer

  if (screenWidth < 1200 && targetElement) {
    // Ancrage vers le Calendly en cas de petite taille d'écran
    targetElement.scrollIntoView({ behavior: 'smooth' });
  } else if (screenWidth >= 1200 && footerElement) {
    // Ancrage vers le footer avec un décalage de 150 pixels pour les grands écrans
    const footerRect = footerElement.getBoundingClientRect();
    const footerTop = footerRect.top + window.scrollY; // Position de l'élément footer par rapport au document

    window.scrollTo({
      top: footerTop - 100, // Défilement 150 pixels au-dessus du footer
      behavior: 'smooth', // Défilement doux
    });
  }
}
