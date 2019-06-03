export class Quote {
  public showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public author: string,
    public date: Date,
    public upvotes: number,
    public downvotes: number
    ) {
      this.showDescription = false;

  }
}
