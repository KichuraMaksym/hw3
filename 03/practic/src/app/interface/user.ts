export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
