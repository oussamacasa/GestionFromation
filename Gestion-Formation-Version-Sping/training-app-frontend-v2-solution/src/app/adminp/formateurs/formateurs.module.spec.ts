import { FormateursModule } from './formateurs.module';

describe('FormateursModule', () => {
  let formateursModule: FormateursModule;

  beforeEach(() => {
    formateursModule = new FormateursModule();
  });

  it('should create an instance', () => {
    expect(formateursModule).toBeTruthy();
  });
});
