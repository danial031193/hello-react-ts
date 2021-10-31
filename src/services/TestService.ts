export class TestService {
  private data: string | undefined;

  static myInstance: TestService | null = null;

  /**
   * Get instance
   *
   * @return {TestService}
   */
  static getInstance() {
    if (this.myInstance === null) {
      this.myInstance = new TestService();
    }

    return this.myInstance;
  }

  create(data: any[]) {
    const keys = data.map((el) => el.username);

    this.data = keys.join(', ');
  }

  get() {
    return this.data;
  }
}
