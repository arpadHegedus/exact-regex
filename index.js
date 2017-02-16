module.exports = (val, regex) => {
    if(typeof val !== 'string') { return false; }
    val = val.trim();
    let matches = val.match(regex);
    if(!matches) { return false; }
    if(matches[0] !== val) { return false; }
    return true;
}