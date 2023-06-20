export function validateSumMoney(input){
    const regexp = new RegExp("^([0-9]{1,1})([0-9\.]{0,10})$", "gm");
    return regexp.test(input);
}