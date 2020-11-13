export type postsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type photosType = {
  small: string;
  large: string;
};

export type contactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: contactsType;
  photos: photosType;
};

export type usersType = {
  id: number;
  name: string;
  status: null | string;
  photos: photosType;
  followed: boolean;
};