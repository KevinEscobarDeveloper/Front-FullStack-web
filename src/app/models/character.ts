export class Character {
    id: number;
    name: string;
    images: string[];
    jutsu: string[];
  
    constructor(data: {
      id: number;
      name: string;
      images: string[];
      jutsu: string[];
    }) {
      this.id = data.id;
      this.name = data.name;
      this.images = data.images || [];
      this.jutsu = data.jutsu || [];
    }
  }
  