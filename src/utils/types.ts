export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type KeyContext = {
    keys: string[];
    addKey: (key: string) => void;
    removeKey: (key: string) => void;
    clearKeys: () => void;
}