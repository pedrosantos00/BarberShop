import { Appointment } from "./Appointment";

export class Client {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: string;
  observation!: string;
  appointments! : Appointment[];
}
