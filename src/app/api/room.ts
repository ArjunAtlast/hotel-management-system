export class Room {
  Room_no: number;
  Rate: number;
  Type: string;
}

export class Booking {
  Room_no: number;
  Guest_id: number;
  Check_in_date: Date;
  Check_out_date: Date;
}
