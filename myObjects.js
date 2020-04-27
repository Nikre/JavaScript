// declaring person object
let person = {
    // Attributes
    name : null,
    age: null,
    // Methods
    setName: function(name){
        this.name = name;
    },

    getName: function(){
        return this.name;
    }
};

person.setName("Nico");
console.log(person.getName());
getText()
