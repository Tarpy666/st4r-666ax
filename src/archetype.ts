export class ResourceTick {
  constructor(private r = { food: 50, wood: 50 }, private rate = { food: 1, wood: 1 }) {}
  tick(n = 1): void { for (let i = 0; i < n; i++) { this.r.food += this.rate.food; this.r.wood += this.rate.wood; } }
  resources(): { food: number; wood: number } { return { ...this.r }; }
}
export class BuildQueue {
  private q: string[] = [];
  enqueue(b: string): void { this.q.push(b); }
  buildFirst(cost: number, funds: number): string | null {
    if (funds < cost || this.q.length === 0) return null;
    return this.q.shift() ?? null;
  }
}