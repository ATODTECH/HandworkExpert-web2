export const extractError = (error) => {


    let data = error.data || error

    let message = '';

    if (typeof data !== 'object') return ''

    for (let item in data) {

        console.log( typeof data[item])
        if (typeof data[item] === 'string') message += `${data[item]} \n`
        else {
            data[item]?.map(list => {
                message += `${list} \n`
            })
        }

    }

    return message
}