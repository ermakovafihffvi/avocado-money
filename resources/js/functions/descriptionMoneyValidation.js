export function validateDescriptionMoney(input){
    const regexp = new RegExp("^([A-Za-z0-9а-яА-ЯёЁ]{1,1})([A-Za-z0-9а-яА-ЯёЁ-\\s\.\,]{0,39})$", "gm");
    return regexp.test(input);
}