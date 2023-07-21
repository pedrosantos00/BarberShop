import { Appointment } from "./Appointment";

export class Barber {
  id!: number;
  name!: string;
  password!: string;
  Appointments!: Appointment[];


  role!: string;
  token!: string;
  refreshToken!: string;
  refreshTokenExpiryTime!: Date;
}
