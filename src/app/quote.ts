export class Quote {
  public showDescription: boolean;
  vote: number;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public author: string,
    public upvotes: number,
    public downvotes: number,
    public date: Date,
    ) {
      this.showDescription = false;

  }
}
