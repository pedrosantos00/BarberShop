import { Barber } from "./Barber";
import { Client } from "./Client";

export class Appointment {
  id?: number;
  barberId?: string;
  clientId?: string;
  appointmentDate?: Date;
  barber? : Barber;
  client? : Client;
}
