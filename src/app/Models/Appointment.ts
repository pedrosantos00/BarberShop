import { Barber } from "./Barber";
import { Client } from "./Client";

export class Appointment {
  id!: number;
  barberId!: number;
  clientId!: number;
  appointmentDate!: Date;
  service!: string;
  cost!: number;
  expectedTime!: number;
  barber : Barber = new Barber();
  client : Client = new Client();
}
