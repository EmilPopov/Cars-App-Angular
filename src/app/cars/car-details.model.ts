export class CarDetailsModel {
    constructor(
        public id?: number,
        public make?: string,
        public model?: string,
        public year?: number,
        public engine?: string,
        public price?: number,
        public image?: string,
        public mileage?: number,
        public likes?: number
    ) { }

}