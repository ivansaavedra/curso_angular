export class ExchangeRate{
    base: string;
    date: Date;
    time_last_updated: number;
    rates: Map<"rate","value">;
}