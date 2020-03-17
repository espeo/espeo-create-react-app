class LocalStorageService {
  private readonly PREFIX: string = 'create-espeo-app';

  public get(_: string) {
    return undefined;
  }

  public set(key: string, value: string) {
    localStorage.setItem(`${this.PREFIX}-${key}`, value);
  }

  public remove(key: string) {
    localStorage.removeItem(`${this.PREFIX}-${key}`);
  }
}

export default new LocalStorageService();
