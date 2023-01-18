function formatInstrutions(instructions, service) {
    let instructionLengthStop = 7;

    if (service === 'SENTRICON') {
        instructionLengthStop = 3
    }

    //slice up the instructions for multiline text
    let instructionList = {}
    for (let i = 1; i <= instructionLengthStop; i++) {
        const len = instructions.length;
        let row = 54;


        if (service == 'SENTRICON') {
            row = 120;
        }

        let max = i * row;
        let min = (i - 1) * row;
        let prop = `instructions_${i}`
        let lineEnd = ''

        if (len >= min) {
            let statement = instructions.slice(min, max)

            //only add a hyphen if the line keeps going and is part of a word
            if (len > max && instructions[max] != ' ') {
                lineEnd = '-'
            }

            //don't allow a line to start with space
            if (statement[0] == ' ') {
                statement = statement.slice(1, statement.length)
            }

            instructionList[prop] = statement + lineEnd + ' ';
        } 
    }

    return instructionList;
}

export default formatInstrutions;