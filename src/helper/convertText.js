export const convertText = (text) => {
    let temp = ""
    console.log(text)
    for (let i = 0; i < 10; i++)
    {
        temp += text[i];
    }

    return temp
}