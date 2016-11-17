export class Member {

    fullName: string;
    userId: string;
    email: string;
    password: string;
    sex: string;
    education: string;
    isSubscribed?: boolean;

    constructor(fullName: string, email: string, userId: string, password: string, sex: string, education: string, isSubscribed: boolean) {
        this.fullName = fullName;
        this.email = email;
        this.userId = userId;
        this.password = password;
        this.sex = sex;
        this.education = education;
        this.isSubscribed = isSubscribed;
    }
}
