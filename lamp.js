
Function.prototype.myBind = function(context) {

    return (...arg) => {
        this.apply(context, arg);
    };

};


