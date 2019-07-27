import { AdminpModule } from './adminp.module';

describe('AdminpModule', () => {
  let adminpModule: AdminpModule;

  beforeEach(() => {
    adminpModule = new AdminpModule();
  });

  it('should create an instance', () => {
    expect(adminpModule).toBeTruthy();
  });
});
