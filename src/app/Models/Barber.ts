import { Appointment } from "./Appointment";

export class Barber {
  id!: number;
  name!: string;
  password!: string;
  Appointments!: Appointment[];
}
