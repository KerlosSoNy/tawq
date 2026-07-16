
export interface link {
    name: string;
    path: string;
    children?: link[];
}

export interface ProfileCard {
  name: string;
  role: string;
  description: string;
  image: string;
  id:string
}
