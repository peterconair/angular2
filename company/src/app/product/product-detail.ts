export class ProductDetail {

    ch_id: string;
    course_id: string;
    ch_title: string;
    ch_dateadd: string;
    ch_timetotal: string;
    ch_view: string;
    ch_url: string;

    constructor(ch_id: string, course_id: string, ch_title: string, ch_dateadd: string, ch_timetotal: string, ch_view: string, ch_url: string) {
        this.ch_id = ch_id;
        this.course_id = course_id;
        this.ch_title = ch_title;
        this.ch_dateadd = ch_dateadd;
        this.ch_timetotal = ch_timetotal;
        this.ch_view = ch_view;
        this.ch_url = ch_url;
    }
}
