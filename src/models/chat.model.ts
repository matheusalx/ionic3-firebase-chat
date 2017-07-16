export class Chat {

    public $key: string;

    constructor(
        public lastMessage: string,
        public timeStamp: any,
        public title: string,
        public photo: string

    ){}
}