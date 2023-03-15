
export default function Context() {
    this.context = {};
}
Context.prototype.set = function(name,value) {
    if(!this.context[name]) {
        this.context[name] = value;
    }else {
        return "error";
    }
}
Context.prototype.get = function(name) {
    return this.context[name];
}