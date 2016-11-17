export class Product {

    id: string;
    c_title: string;
    c_detail: string;
    c_date: string;
    c_view: string;
    c_color: string;
    c_pic: string;

    constructor(id: string, c_title: string, c_detail: string, c_date: string, c_view: string, c_color: string, c_pic: string) {
        this.id = id;
        this.c_title = c_title;
        this.c_detail = c_detail;
        this.c_date = c_date;
        this.c_view = c_view;
        this.c_color = c_color;
        this.c_pic = c_pic;
    }
}
