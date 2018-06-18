export class FacebookUser {
    private userId: string;
    private email: string;
    private name: string;
    private profilePicture: string;

    constructor(userId: string, email: string, name: string, profilePicture: string) {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.profilePicture = profilePicture;
    }
}