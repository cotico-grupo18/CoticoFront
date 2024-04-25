interface Person {
    id?: number;
    first_name: string;
    last_name1: string;
    last_name2: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    residence_places: ResidencePlace[];
    customer?: Customer;
}
