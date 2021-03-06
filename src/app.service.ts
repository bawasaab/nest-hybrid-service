import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('event pattern received in handleUserCreated hybrid service');
    console.log(
      'an user_created event emitted from api-gateway to analytics in handleUserCreated hybrid app',
      data,
    );
    this.analytics.push({
      emai: data.email,
      timestamp: new Date(),
    });
    console.log('analytics', this.analytics);
  }

  getAnalytics() {
    return this.analytics;
  }
}
