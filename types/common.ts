export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Library = 'Web3' | 'AI';

export type LibraryTag = {
  id: Library;
  name: Library;
};

export type Tag = {
  id: string;
  name: string;
};
