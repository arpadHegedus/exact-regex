module.exports = (val, regex) => {
    if(typeof val !== 'string') { return false; }
    val = val.trim();
    let matches = val.match(regex);
    if(!matches) { return false; }
    if(matches.indexOf(val) === -1) { return false; }
    return true;
}