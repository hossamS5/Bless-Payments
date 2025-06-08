import type { Pet } from "../types/pet";

export const pets: Pet[] = [
  {
    id: 1,
    category: { id: 1, name: "Dogs" },
    name: "Max",
    photoUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    ],
    tags: [
      { id: 1, name: "Friendly" },
      { id: 2, name: "Playful" },
    ],
    status: "available",
  },
  {
    id: 2,
    category: { id: 2, name: "Cats" },
    name: "Luna",
    photoUrls: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
    ],
    tags: [
      { id: 3, name: "Calm" },
      { id: 4, name: "Independent" },
    ],
    status: "available",
  },
  {
    id: 3,
    category: { id: 1, name: "Dogs" },
    name: "Buddy",
    photoUrls: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      "https://images.unsplash.com/photo-1583512603806-077998240c7a",
    ],
    tags: [
      { id: 1, name: "Friendly" },
      { id: 5, name: "Energetic" },
    ],
    status: "pending",
  },
];
