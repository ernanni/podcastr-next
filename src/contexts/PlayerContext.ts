import { createContext } from 'react';

interface IEpisode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

interface IPlayerContext {
  episodeList: IEpisode[];
  currentEpisodeIndex: number;
  play: (episode: IEpisode) => void;
}

export const PlayerContext = createContext({} as IPlayerContext);
