export class FreekassaException extends Error {
    public body: any;

    constructor(message: string, body?: any) {
        super(message);
        this.name = 'FreekassaException';
        this.body = body;
    }
}
