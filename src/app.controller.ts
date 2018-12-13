import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    const serviceAccount = require("seek-83298-firebase-adminsdk-0pogf-639525d314.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://seek-83298.firebaseio.com"
    });
  }

  @Get()
  root(): string {
    const db = admin.database();
    const user = {
      name: 'Angie',
      lastname: 'Zapata',
      email: 'juangonzqq@gmail.com'
    }
    db.ref("coordinates").push(user)

    return this.appService.root();
  }
}