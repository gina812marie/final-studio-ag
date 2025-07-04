// Hilfsfunktionen für Asset-Management

/**
 * Erstellt den korrekten Pfad für Profilbilder
 */
export const getProfileImagePath = (filename: string): string => {
  return `/images/profiles/${filename}`;
};

/**
 * Erstellt den korrekten Pfad für Claim-Bilder
 */
export const getClaimImagePath = (filename: string): string => {
  return `/images/claims/${filename}`;
};

/**
 * Erstellt den korrekten Pfad für Logos
 */
export const getLogoPath = (filename: string): string => {
  return `/images/logos/${filename}`;
};

/**
 * Fallback-Bild wenn ein Bild nicht gefunden wird
 */
export const getPlaceholderImage = (type: 'person' | 'organization' | 'claim'): string => {
  const placeholders = {
    person: '/images/placeholder-person.jpg',
    organization: '/images/placeholder-org.jpg',
    claim: '/images/placeholder-claim.jpg'
  };
  return placeholders[type];
};

/**
 * Prüft ob ein Bild existiert (für Entwicklung)
 */
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Lädt ein Bild mit Fallback
 */
export const loadImageWithFallback = (
  primaryPath: string, 
  fallbackPath: string
): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(primaryPath);
    img.onerror = () => resolve(fallbackPath);
    img.src = primaryPath;
  });
};