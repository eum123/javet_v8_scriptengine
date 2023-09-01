function main(name, cnt) {

    _SET_GLOBAL("nodename:main:input", "cnt", cnt);
    _SET_GLOBAL("nodename:main:input", "name", name);

    for(var i = 0; i < cnt ;i ++) {
        NEW_ENGINE_BY_NAME("sub1", "sub1", i);
        //sub1(i);
    }

    _SET_GLOBAL("nodename:main-1:input", "cnt", cnt);
    //...nodes...
    _SET_GLOBAL("nodename:main-1:output", result);


    var result = {};
    result.cnt = cnt;

    _SET_GLOBAL("nodename:main:output", result);

    return result;
}

function sub1(index) {
    _SET_GLOBAL("nodename:sub1:input", "index", index);

    var result = {};

    result.n = NEW_ENGINE_BY_NAME("sub2", "sub2");
    //result.n = sub2();

    _SET_GLOBAL("nodename:sub1:output", result);
}

function sub2() {
    return 'gil';
}