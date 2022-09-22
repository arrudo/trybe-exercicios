const wakeUp = () => {
    return ('Acordando!')
}
const coffe = () => {
    return ('Bora tomar café!!')
}
const sleep = () => {
    return ('Partiu dormir!!')
}
const doingThings = (action) => console.log(action)
doingThings(wakeUp())
doingThings(coffe())
doingThings(sleep())
