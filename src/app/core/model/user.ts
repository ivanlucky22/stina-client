import {AuthorUser} from "@app/core/model/authorUser";

export class User extends AuthorUser{
  email: string | null;
  phoneNumber: string | null;
  providerId: string;
  uid: string;
}
