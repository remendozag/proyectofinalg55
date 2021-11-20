products = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  export interface IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
  }

  export class exampleComponent {
    // Se inicializa la variable en true, para que el elemento se muestre por defecto
  mostrar = true;
  frase: any = {
        mensaje: "Un gran poder requiere una gran responsabilidad",
        autor: "Ben Parker"
  };
}