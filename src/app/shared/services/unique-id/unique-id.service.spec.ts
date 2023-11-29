import { UniqueIdService } from './unique-id.service';

//como artefato ou arquivo UniqueIdService
describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  //estrutura para descrever o It --- blablabla should blablabla when blablabla
  //--------------------------------- alguma coisa deve fazer algo quando determinadas condiçoes estiverem presentes

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app-');

    // expect(id).toContain('app-');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate ids when called mutiple times`, () => {
    // const firstId = service.generateUniqueIdWithPrefix('app-');
    // const secondId = service.generateUniqueIdWithPrefix('app-');
    // expect(firstId).not.toBe(secondId);

    const ids = new Set();
    // nao aceita elementos duplicados

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app-'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfgeneratedUniqueIds.name}
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app-');
    service.generateUniqueIdWithPrefix('app-');

    expect(service.getNumberOfgeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0','1'];

    emptyValues.forEach((emptyValues) => {
      //quando testar um metodo e quer testar um excessao tem que ser chamado como uma funcao ()
      expect(() => service.generateUniqueIdWithPrefix(emptyValues))
      // quando trabalhar com laco de repeticao usar o withContext para dar um contexto na execao
      .withContext(`Empty value: ${emptyValues}`)
      .toThrow();
    });
  });



});
