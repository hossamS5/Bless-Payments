interface IRoute {
  path: string;
  component: React.ComponentType;
  name: string;
  isPublic: boolean;
}

export type { IRoute };
