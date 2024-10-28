


export default class Employee{
    constructor(firstname, name, birthdate, startdate, street, city, state, ZIP, department){
        this._id = Date.now()
        this._firstname = firstname
        this._name = name
        this._birthdate = birthdate
        this._startdate = startdate
        this._street = street
        this._city = city
        this._state = state
        this._ZIP = ZIP
        this._department = department
    }

    get firstname(){
        return this._firstname
    }

    get name(){
        return this._name
    }

    get birthdate(){
        return this._birthdate
    }

    get startdate(){
        return this._startdate
    }

    get street(){
        return this._street
    }

    get city(){
        return this._city
    }

    get state(){
        return this._state
    }

    get ZIP(){
        return this._ZIP
    }

    get department(){
        return this._department
    }

    toSerializableObject() {
        return {
            firstname: this._firstname,
            name: this._name,
            birthdate: this._birthdate,
            startdate: this._startdate,
            street: this._street,
            city: this._city,
            state: this._state,
            ZIP: this._ZIP,
            department: this._department,
            id: this.id
        };
    }

}