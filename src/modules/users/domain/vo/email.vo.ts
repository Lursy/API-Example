class Email {
    private  regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    private email;

    get value(){
        return this.email;
    }

    public create(email: string){
        this.email = this.regex.test(email);
    }
}