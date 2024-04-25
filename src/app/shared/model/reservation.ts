interface Reservation {
    id?: number;
    cost: number;
    check_in_date: string;
    check_out_date: string;
    description: string;
    payment_method: string;
    customer_id?: number; // Este campo es opcional en TypeScript
    accommodation_id?: string; // Este campo es opcional en TypeScript
    room_id?: number; 
}