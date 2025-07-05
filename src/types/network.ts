export interface NetworkNode {
  id: string;
  name: string;
  role: string;
  description: string;
  type: 'person' | 'organization' | 'institute' | 'party' | 'company';
  profileImage?: string;
  logo?: string;
  logoColor?: string;
  x?: number; // Feste X-Position für Layout
  y?: number; // Feste Y-Position für Layout
  position?: 'center'; // Spezielle Positionierung - 'center' für Mitte des Netzwerks
}

export interface NetworkConnection {
  from: string;
  to: string;
  label: string;
  type: 'finanziert' | 'mitglied' | 'unterstützt' | 'verbreitet' | 'zitiert' | 'vorstand' | 'lobbyverband' | 'eigentümer' | '';
}

export interface NetworkData {
  id: number;
  title: string;
  nodes: NetworkNode[];
  connections: NetworkConnection[];
}