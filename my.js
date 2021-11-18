var car = function() {
    this.speed = 0;
    this.maxSpeed = 100;
    this.ammo = 200;
    this.phrases = ['This is no.1',
                'This is no.2',
                'This is no.3',
                'This is no.4',
                'This is no.5',];
}
car.prototype.talk= function(){
    //returns a string
    let phrase = this.phrases[ Math.floor(Math.random() * this.phrases.length) ] ;
    console.log("car says", phrase);
    return phrase;
};
car.prototype.fireGun= function(){
    //returns a number from 0 - 9
    if( this.ammo >= 100){
        console.log("trrrrrr. 100 shots fired.");
        this.ammo -= 100;
    }else if( this.ammo == 0){
        console.log("No ammo left.");
    }else{
        let num = this.ammo;
        console.log("trrrrrrr", num, "shots fired.");
        this.ammo -= num;
    }
    return this.ammo;
};

Number.prototype.ban= function() {
    this.num = 3;
    return this.num;
}
String.prototype.sad= function() {
    this.String = 'dan';
    return this.String;
}

let C = new car();
//model.talk();

module.exports = C;
