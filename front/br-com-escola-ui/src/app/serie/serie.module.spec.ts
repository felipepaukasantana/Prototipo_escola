import { SerieModule } from './serie.module';

describe('SerieModule', () => {
  let serieModule: SerieModule;

  beforeEach(() => {
    serieModule = new SerieModule();
  });

  it('should create an instance', () => {
    expect(serieModule).toBeTruthy();
  });
});
