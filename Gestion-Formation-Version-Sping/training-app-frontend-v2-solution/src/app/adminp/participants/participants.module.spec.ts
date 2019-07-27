import { ParticipantsModule } from './participants.module';

describe('ParticipantsModule', () => {
  let participantsModule: ParticipantsModule;

  beforeEach(() => {
    participantsModule = new ParticipantsModule();
  });

  it('should create an instance', () => {
    expect(participantsModule).toBeTruthy();
  });
});
