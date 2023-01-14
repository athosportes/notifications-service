import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  
  @IsNotEmpty({message: "Não pode ser nulo seu cagão"})
  @IsUUID()
  recipientId: string;
  
  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  
  @IsNotEmpty()
  category: string;
}