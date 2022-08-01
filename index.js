function introduction(name = 'Sylvia') {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name = 'Ndili', language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}