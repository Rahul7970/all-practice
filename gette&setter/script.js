// class base par consturctor ke sath
class user{
    constructor(email, password){
        this.email =email;
        this.password = password;
    
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
       this._email=value

    }
    get password(){
        return `${this._password}rahul`//naya property 
        // return this._password.toUpperCase()
    }
    set password(value){
        this._password= value.toUpperCase()

    }
    
}
const rahul = new user('rahul@gmail.com','Rahul@123');
console.log(rahul.email);


// property ke sath

function User(email, password) {
    this._email =email;
    this._password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email =value
        }
    })
    

Object.defineProperty(this,'pasword',{
    get:function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password =value
    }
})

}
const getData = new User("rahul@gmail.com","abc")
console.log(getData.email)